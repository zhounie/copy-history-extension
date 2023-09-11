// 从存储中获取历史记录并显示在弹出窗口中
chrome.storage.local.get({ history: [] }, function(result) {
    const history = result.history;
    const historyList = document.getElementById("historyList");
  
    for (let i = history.length - 1; i >= 0; i--) {
      const listItem = document.createElement("li");
      listItem.textContent = history[i];
      historyList.appendChild(listItem);
    }
  });