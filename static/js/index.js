const tabs = document.getElementsByClassName('tab_menu-item');

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}

function tabSwitch(){
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');

  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab_panel-box')[index].classList.add('is-show');
};