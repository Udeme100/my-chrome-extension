# Tab Manager Chrome Extension

## Overview
The Tab Manager Extension is a Chrome extension that helps you manage your browser tabs efficiently. It allows you to save, close, and restore tabs easily. It includes features like selective saving and closing of tabs, searching saved tabs, and auto-saving tabs to make tab management intuitive. With additional features like selective saving/closing of tabs, searching saved tabs, and auto-saving tabs, this extension aims to make tab management easy and intuitive.

## Features
1. Save All Tabs: Save the URLs of all currently open tabs for future use.
2. Select Tabs to Save: Choose specific tabs to save instead of saving all tabs.
3. Close All Tabs: Close all open tabs in the browser with a single click.
4. Select Tabs to Close: Select specific tabs to close from the current session.
5. Restore Saved Tabs: Reopen previously saved tabs.
6. Search Saved Tabs: Search through saved tabs to find specific ones quickly.
7. Auto-Save Tabs: Automatically save tabs when Chrome is closed, preventing accidental tab loss.
8. Keyboard Shortcut: Use `Ctrl+Shift+S` to auto-save tabs quickly.
9. Notifications: Receive notifications when tabs are auto-saved or other actions are performed.

## Folder Structure
The project contains the following files:
1. manifest.json: Defines permissions, background scripts, and general settings for the extension.
2. popup.html: User interface for the extension's popup, featuring buttons to interact with tabs.
3. popup.js: Manages the logic for saving, closing, searching, and restoring tabs.
4. styles.css: Provides styling for the extension's user interface, including buttons and search results.
5. icon.png: Icon used for the extension in the Chrome toolbar.
6. background.js: Handles background events such as auto-saving tabs when the browser closes.

## Installation
1. Clone or download the project files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode in the top right corner.
4. Click on 'Load unpacked' and select the project folder.
5. The extension will now appear in your browser toolbar.

## Usage
1. Click on the extension icon in the Chrome toolbar to open the extension popup.
2. Use the available buttons to manage your tabs:
   - Save All Tabs: Save all currently open tabs.
   - Select Tabs to Save: Choose specific tabs to save.
   - Close All Tabs: Close all tabs in the browser.
   - Select Tabs to Close: Choose specific tabs to close.
   - Restore Saved Tabs: Restore previously saved tabs.
   - Search Saved Tabs: Enter a keyword to search for saved tabs.
3. Auto-Save: Press `Ctrl+Shift+S` to automatically save all open tabs.
4. Notifications: Notifications will appear when tabs are saved or restored.

## Technical Details
1. manifest.json: Configures permissions like `tabs`, `storage`, and `notifications`. Defines the extension’s UI popup and background service worker (`background.js`).
2. popup.js: Manages tab operations such as saving, closing, restoring, and searching tabs. Uses Chrome's `tabs` and `storage` APIs and includes logic for selectively managing tabs.
3. background.js: Automatically saves all open tabs when the browser starts or closes. Uses Chrome notifications to inform the user about saved tabs.

## Technologies Used
1. HTML: For building the user interface of the popup.
2. CSS: For styling the user interface components.
3. JavaScript: For handling tab management logic.
4. Chrome Extensions API: To interact with browser tabs and trigger background scripts.

## Notes
- The extension requires access to the `tabs` and `storage` APIs, which are defined in the `manifest.json` file.
- Save important tabs before using the Close All Tabs feature, as they will be permanently closed.
- The Select Tabs to Save and Select Tabs to Close features provide a confirmation prompt for each tab to ensure correct tabs are managed.

## Future Improvements
1. Grouping Tabs: Automatically group similar tabs for better organization.
2. Custom Tags: Allow users to tag and categorize saved tabs.
3. Tab Statistics: Display usage statistics for tabs, such as how long each tab has been open.

Feel free to contribute to the project by adding new features or improving existing functionalities!

