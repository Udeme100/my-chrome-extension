document.getElementById('saveTabs').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  const tabUrls = tabs.map(tab => tab.url);
  await chrome.storage.local.set({ savedTabs: tabUrls });
  alert('Tabs saved!');
});

document.getElementById('closeTabs').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({});
  for (const tab of tabs) {
    await chrome.tabs.remove(tab.id);
  }
  alert('All tabs closed!');
});

document.getElementById('restoreTabs').addEventListener('click', async () => {
  const result = await chrome.storage.local.get('savedTabs');
  const savedTabs = result.savedTabs || [];
  for (const url of savedTabs) {
    await chrome.tabs.create({ url });
  }
  alert('Tabs restored!');
});
