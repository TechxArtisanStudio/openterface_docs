# 應用常見問題

歡迎來到我們應用的常見問題頁面。如果您找不到需要的答案，請**發郵件至 [info@openterface.com](mailto:info@openterface.com)** 或**加入我們的社區** [Discord](/discord) 或 [Reddit](/reddit) 與我們的開發團隊和其他用户聯繫。

⚠️ *常見問題可能會過時——如果您發現任何需要更新的內容，請告訴我們！*

### :material-clipboard-list: 問題列表

- [在哪裏可以下載主機應用程序？](#host-app-download)
- [為什麼不同主機應用的功能有所不同？](#host-app-differences)
- [目前哪個主機應用提供最佳體驗？](#best-host-app)
- [是否有支持ChromeOS的主機應用？](#host-app-chromeos)
- [是否有支持Apple移動設備的主機應用？](#host-app-ios)
- [如果F11在macOS應用中不起作用怎麼辦？](#f11-macos-issue)

#### :material-chat-question:{ .faq } 在哪裏可以下載主機應用程序？ {: #host-app-download }

訪問我們的[安裝主機應用程序頁面](/quick-start/#install-host-application)獲取支持**MacOS、Windows、Linux和Android**的官方下載。

??? warning "隱私與安全：使用第三方主機應用時請謹慎"
    由於我們的項目是開源的，您可能會發現其他人開發的與我們Mini-KVM兼容的主機應用程序的替代版本。雖然這些可以提供額外功能，但請確保您審查其安全和隱私實踐。**Openterface團隊無法保證或對第三方應用程序的安全性負責**。

#### :material-chat-question:{ .faq } 為什麼不同主機應用的功能有所不同？ {: #host-app-differences }

我們的開發團隊積極維護macOS、Linux、Windows和Android的主機應用程序，但由於平台特定的挑戰和有限的資源，開發進度各不相同。這意味着某些功能可能首先出現在一個平台上，而在其他平台上需要更長時間才能到達。

我們正在盡最大努力在所有平台上同步功能開發，但這仍在進行中。

您的反饋在塑造我們的開發路線圖方面發揮着重要作用——無論是通過我們的[社區](/community/)還是[GitHub倉庫](/app/)。每個建議都幫助我們優先考慮對您最重要的事情！

如果您是開發者，您的貢獻非常有價值——我們很樂意您的幫助來加速這個過程！

#### :material-chat-question:{ .faq } 目前哪個主機應用提供最佳體驗？ {: #best-host-app }

截至2025年3月，基於Qt的Windows和Linux主機應用提供最全面的功能集。macOS版本因其最流暢和最精緻的用户體驗而脱穎而出，這得益於更深的系統集成和UI增強。Android應用在移動中是一個方便的選擇，更多功能正在穩步趕上。

#### :material-chat-question:{ .faq } 是否有我可以在Chrome或其他平台上使用的網絡應用？ {: #host-app-chromeos }

是的！我們的一位出色的社區成員[Kashall](https://github.com/kashalls/openterface-viewer/)構建了**一個輕量級的開源網絡應用**，您可以直接在瀏覽器中使用：[openterface-viewer.pages.dev](https://openterface-viewer.pages.dev)。它還不是我們官方文檔的一部分，但我們的開發團隊試用了一下，發現它穩定、易用且超級方便——特別是在Chrome上或當您想要快速且基於瀏覽器的解決方案時。試試看！

#### :material-chat-question:{ .faq } 是否有支持Apple移動設備的主機應用？ {: #host-app-ios }

我們目前正在探索與Apple移動系統（如iOS和iPadOS）的兼容性。由於Apple的嚴格控制，這些平台可能不支持與第三方設備的有線連接。但是，情況可能會改變，或者可能有潛在的解決方案。如果您有任何見解或建議，我們歡迎您加入我們的社區與我們討論。我們致力於通過支持儘可能多的系統來增強我們設備的便利性。如果您熱衷於幫助我們的開發，請來社區與我們交流或給我們發郵件！

#### :material-chat-question:{ .faq } 如果F11在macOS應用中不起作用怎麼辦？ {: #f11-macos-issue }

在macOS上，按F11會顯示macOS桌面，而不是將F11鍵傳遞給應用程序和目標計算機。要修復此問題，您可以從"顯示桌面"功能中解綁F11。

???+ info "修復macOS上的F11鍵問題"
    1. 轉到**系統設置**。
    2. 選擇**桌面與程序塢**。
    3. 向下滾動並點擊**"快捷鍵…"**按鈕。
    4. 找到**"顯示桌面"**並將其設置為下拉列表底部的連字符**(-)**。
    5. 此更改將允許F11鍵傳遞到目標計算機上的應用程序。
