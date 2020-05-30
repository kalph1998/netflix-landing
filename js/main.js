const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

const removeBorder = () => {
  tabItems.forEach((item) => item.classList.remove("border-bottom"));
};
const removeShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
};

function selectItem(e) {
  removeBorder();
  removeShow();
  //add border
  this.classList.add("border-bottom");
  //grab content item from dom

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add class

  tabContentItem.classList.add("show");
}

// listen for click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
