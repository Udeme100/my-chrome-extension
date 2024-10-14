document.getElementById('saveTabs').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const tabUrls = tabs.map(tab => tab.url);
  await chrome.storage.local.set({ savedTabs: tabUrls });
  document.getElementById('statusDisplay').innerText = `Saved ${tabUrls.length} tabs.`;
  alert('Tabs saved!');
});

document.getElementById('selectSaveTabs').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const selectedTabs = tabs.filter(tab => confirm(`Save tab: ${tab.title}?`));
  const selectedUrls = selectedTabs.map(tab => tab.url);
  await chrome.storage.local.set({ savedTabs: selectedUrls });
  document.getElementById('statusDisplay').innerText = `Saved ${selectedUrls.length} tabs.`;
  alert('Selected tabs saved!');
});

document.getElementById('selectCloseTabs').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const selectedTabs = tabs.filter(tab => confirm(`Close tab: ${tab.title}?`));
  for (const tab of selectedTabs) {
    await chrome.tabs.remove(tab.id);
  }
  alert('Selected tabs closed!');
});

document.getElementById('closeTabs').addEventListener('click', async () => {
  if (confirm('Are you sure you want to close all tabs?')) {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
      await chrome.tabs.remove(tab.id);
    }
    alert('All tabs closed!');
  }
});

document.getElementById('restoreTabs').addEventListener('click', async () => {
  const result = await chrome.storage.local.get('savedTabs');
  const savedTabs = result.savedTabs || [];
  for (const url of savedTabs) {
    await chrome.tabs.create({ url });
  }
  alert('Tabs restored!');
});

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchTabs').value.toLowerCase();
  const result = await chrome.storage.local.get('savedTabs');
  const savedTabs = result.savedTabs || [];
  const filteredTabs = savedTabs.filter(url => url.toLowerCase().includes(query));

  const searchResultsDiv = document.getElementById('searchResults');
  searchResultsDiv.innerHTML = '';
  filteredTabs.forEach(url => {
    const div = document.createElement('div');
    div.className = 'search-result-item';
    div.textContent = url;
    div.addEventListener('click', () => {
      chrome.tabs.create({ url });
    });
    searchResultsDiv.appendChild(div);
  });

  if (filteredTabs.length === 0) {
    alert('No matching tabs found.');
  }
});

// Group similar tabs
async function groupSimilarTabs() {
  const tabs = await chrome.tabs.query({});
  const groups = {};

  tabs.forEach(tab => {
    const url = new URL(tab.url);
    const domain = url.hostname;

    if (!groups[domain]) {
      groups[domain] = [];
    }
    groups[domain].push(tab.id);
  });

  for (const domain in groups) {
    chrome.tabs.group({ tabIds: groups[domain] });
  }
}

document.getElementById('groupTabsButton').addEventListener('click', groupSimilarTabs);

// Save tabs with tags
document.getElementById('saveTabsWithTagsButton').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const savedTabs = {};

  for (const tab of tabs) {
    const tag = prompt(`Enter a tag for the tab: ${tab.title}`);
    savedTabs[tab.url] = { title: tab.title, tag: tag };
  }

  await chrome.storage.local.set({ savedTabs });
  alert('Tabs with tags saved!');
});

// View tab statistics
const tabStats = {};

chrome.tabs.onActivated.addListener(activeInfo => {
  const tabId = activeInfo.tabId;
  if (!tabStats[tabId]) {
    tabStats[tabId] = { openedAt: Date.now() };
  }
});

chrome.tabs.onRemoved.addListener(tabId => {
  if (tabStats[tabId]) {
    const openTime = Date.now() - tabStats[tabId].openedAt;
    console.log(`Tab ${tabId} was open for ${openTime / 1000} seconds.`);
    delete tabStats[tabId];
  }
});

document.getElementById('viewStatisticsButton').addEventListener('click', () => {
  let statsMessage = 'Tab Statistics:\n';
  for (const tabId in tabStats) {
    const openTime = (Date.now() - tabStats[tabId].openedAt) / 1000;
    statsMessage += `Tab ID ${tabId}: Open for ${openTime.toFixed(2)} seconds\n`;
  }
  alert(statsMessage);
});
