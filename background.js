// 监听复制事件
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
        chrome.tabs.sendMessage(tabId, { action: "checkForCopy" });
    }
});
  
// 接收来自 content script 的复制文本并保存到历史记录中
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "saveToHistory") {
        chrome.storage.local.get({ history: [] }, function(result) {
            const history = result.history;
            history.push(request.text);
            chrome.storage.local.set({ history: history });
        });
    }
});