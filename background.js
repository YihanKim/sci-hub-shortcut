chrome.browserAction.onClicked.addListener(function(activeTab) {
  var url = activeTab.url;
  var newUrl = "https://sci-hub.se/" + url;
  chrome.tabs.update(activeTab.id, { url: newUrl });
});
