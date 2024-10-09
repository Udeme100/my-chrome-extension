# Tab Manager Extension (Chrome)

## Overview
The Tab Manager Extension is a simple Chrome extension designed to help you manage your browser tabs effortlessly. With this extension, you can save all open tabs, close them with a single click, and easily restore them whenever needed.

## Features
- Save All Tabs: Save the current session's tabs for later use.
- Close All Tabs: Close all open tabs in one click.
- Restore Saved Tabs: Reopen previously saved tabs with a single button.

## Folder Structure
The project consists of the following files:

- manifest.json: Configuration file for the Chrome extension.
- popup.html: The UI of the extension.
- popup.js: JavaScript file to manage tab operations.
- styles.css: Styling for the extension's popup.

## Installation
1. Clone the repository or download the files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode in the top right corner.
4. Click Load unpacked and select the project folder.
5. The extension will appear in your browser toolbar.

## Usage
1. Click on the extension icon in the Chrome toolbar to open the extension popup.
2. Use the available buttons to manage your tabs:
   - Save All Tabs: Saves the URLs of all currently open tabs.
   - Close All Tabs: Closes all open tabs in the browser.
   - Restore Saved Tabs: Opens all the saved tabs from your previous session.

## Technical Details
- manifest.json:
  - Defines the permissions (`tabs`, `storage`) required for tab management.
  - Specifies the extension's name, version, and UI popup file.
- popup.js:
  - Uses Chrome's `tabs` and `storage` APIs to interact with browser tabs and store URLs.
  - Handles button click events for saving, closing, and restoring tabs.
- popup.html and styles.css:
  - Provide a simple and user-friendly interface for interacting with the extension.

## Technologies Used
- HTML: For the extension's user interface.
- CSS: To style the popup window.
- JavaScript: To handle tab management functionality.
- Chrome Extensions API: To interact with the browser tabs and storage.

## Notes
- The extension requires permission to access and modify browser tabs, which is specified in the `manifest.json` file.
- Be sure to save any important tabs before using the **Close All Tabs** feature, as they will be closed permanently.
i need ideas on more functionalities though, feel free to clone and increase the functionalities
