export default class InitDrag{
  constructor(val) {
    this.drapDom = document.querySelector(val);
    this.copyItem = null;
  }

  init() {
    this.drapDom.ondragstart = (e) => {
      e.dataTransfer.effectAllowed = e.target.dataset.effect;
      this.copyItem = e.target;
    };

    this.drapDom.ondragover = (e) => {
      e.preventDefault();
    };

    this.drapDom.ondragenter = (e) => {
      removeDropClass();
      if(e.target.dataset.drop == 'true') {
        e.target.classList.add("droped-td");
      }
    };

    this.drapDom.ondrop = (e) => {
      e.target.append(this.copyItem);
    };

    function removeDropClass() {
      let itemDoms = document.querySelectorAll(".droped-td");
      for (const item of itemDoms) {
        item.classList.remove("droped-td");
      }
    }
  }
}

