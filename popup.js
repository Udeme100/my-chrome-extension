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
  alert(`Found ${filteredTabs.length} matching tabs.`);
});

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'auto_save_tabs') {
    const tabs = await chrome.tabs.query({});
    const tabUrls = tabs.map(tab => tab.url);
    await chrome.storage.local.set({ savedTabs: tabUrls });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Auto-Save Tabs',
      message: `Auto-saved ${tabUrls.length} tabs.`
    });
  }
});