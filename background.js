chrome.runtime.onStartup.addListener(async () => {
    const tabs = await chrome.tabs.query({});
    const tabUrls = tabs.map(tab => tab.url);
    await chrome.storage.local.set({ savedTabs: tabUrls });
  });
  
  chrome.runtime.onSuspend.addListener(async () => {
    const tabs = await chrome.tabs.query({});
    const tabUrls = tabs.map(tab => tab.url);
    await chrome.storage.local.set({ savedTabs: tabUrls });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Auto-Save on Close',
      message: `Auto-saved ${tabUrls.length} tabs before closing.`
    });
  });