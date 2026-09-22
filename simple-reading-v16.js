/* 给现有结果页增加简明/完整视图切换，不改动起卦和保存流程。 */
(() => {
  function mount() {
    const stage = document.querySelector(".result-stage");
    if (!stage || stage.querySelector(".simple-view-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "simple-view-toggle";
    button.textContent = "查看卦辞与详细分析 ↓";
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
      const expanded = stage.classList.toggle("simple-expanded");
      button.textContent = expanded ? "收起详细分析 ↑" : "查看卦辞与详细分析 ↓";
      button.setAttribute("aria-expanded", String(expanded));
    });
    stage.appendChild(button);
  }
  const observer = new MutationObserver(mount);
  observer.observe(document.body, { childList: true, subtree: true });
  mount();
})();
