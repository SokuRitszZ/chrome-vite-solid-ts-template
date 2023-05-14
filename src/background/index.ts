const action = chrome.action || chrome.browserAction;
const runtime = chrome.runtime;
const tabs = chrome.tabs;

runtime.onInstalled.addListener(() => {
  tabs.create({});
});
