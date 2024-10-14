# Tab Manager Chrome Extension

## Overview
The Tab Manager Extension is a Chrome extension that helps users manage their browser tabs efficiently. With this extension, you can save, close, restore, group, tag, and view statistics of your open tabs, providing a better browsing experience.

## Features
1. 1: Save the current session's tabs for later use.
2. Select Tabs to Save: Allows users to select specific tabs to save, rather than saving all open tabs.
3. Close All Tabs: Close all currently open tabs in a single click.
4. Select Tabs to Close: Close specific tabs selected by the user.
5. Restore Saved Tabs: Reopen previously saved tabs easily.
6. Group Similar Tabs: Automatically group tabs with similar URLs/domains for better organization.
7. Save Tabs with Tags: Users can assign custom tags to tabs for better categorization and easy retrieval.
8. Search Saved Tabs: Search through saved tabs using keywords.
9. View Tab Statistics: Display usage statistics for tabs, such as how long each tab has been open.

## Installation
1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode in the top right corner.
4. Click Load unpacked and select the project folder (`my-chrome-extension`).
5. The extension will appear in your browser toolbar.

## Usage
1. Save, Close, and Restore Tabs:
   - Click on the extension icon in the Chrome toolbar to open the popup.
   - Use the Save All Tabs, Select Tabs to Save, Close All Tabs, or Select Tabs to Close buttons to manage your tabs.
   - To restore saved tabs, click Restore Saved Tabs.

2. Group Similar Tabs:
   - Click on Group Similar Tabs to automatically organize tabs based on their domain.

3. Save Tabs with Tags:
   - Click on Save Tabs with Tags to add custom tags to tabs for better organization.

4. Search Saved Tabs:
   - Use the search bar to find specific tabs from your saved sessions.

5. View Tab Statistics:
   - Click on View Tab Statistics to see how long each tab has been open.

## Folder Structure
The project folder structure is as follows:
```
my-chrome-extension/
 ├── manifest.json          // Configuration file for the Chrome extension
 ├── popup.html             // User Interface for the extension
 ├── popup.js               // JavaScript file containing the logic for tab management
 ├── styles.css             // CSS file for styling the extension's UI
 ├── icon.png               // Icon for the extension
 └── background.js          // Handles background events like auto-save
```

## Technical Details
- manifest.json:
  - Contains the configuration for the extension, including permissions (`tabs`, `storage`, `notifications`, `tabGroups`) and the service worker (`background.js`).
- popup.js:
  - Handles button click events for saving, closing, restoring, grouping, tagging, and displaying tab statistics.
  - Uses Chrome's `tabs` and `storage` APIs to interact with browser tabs and store URLs and metadata.
- background.js:
  - Runs in the background to handle actions like auto-saving tabs.
- popup.html and styles.css:
  - Provides a user-friendly interface for managing tabs.
  - The UI includes buttons for all actions, and the CSS ensures a clean, visually appealing look.

## Improvements
The following features were added in the recent update:
1. Grouping Tabs: Automatically group similar tabs based on their domain to improve organization.
2. Custom Tags: Users can add custom tags to categorize saved tabs, making it easier to search and organize.
3. Tab Statistics: Track and display the time each tab has been open to help users understand their browsing habits.

## Permissions
The following permissions are used:
- tabsTo interact with the user's browser tabs (saving, closing, grouping, etc.).
- storage: To store saved tabs, tags, and statistics data locally.
- notifications: To provide notifications for events like auto-saving tabs.
- tabGroups: To create and manage tab groups for better organization.

## Technologies Used
- HTML: For the extension's user interface.
- CSS: To style the popup window.
- JavaScript: To handle tab management functionality.
- Chrome Extensions API: To interact with the browser tabs and storage.

## Notes
- The extension requires permission to access and modify browser tabs, which is specified in the `manifest.json` file.
- Be cautious when using the **Close All Tabs** feature, as tabs will be closed permanently unless saved.

## Contribution
Feel free to fork the repository and submit pull requests to add new features or fix issues. Collaboration is always welcome!
