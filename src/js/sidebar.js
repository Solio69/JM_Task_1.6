// открывает модальные окана и сайдбар 
function openModal(modal, className) {
  modal.classList.add(className);
}
// закрывает модальные окана и сайдбар 
function closeModal(modal, className) {
  modal.classList.remove(className);
}

// кнопка меню бургер
const openSidebarBtn = document.getElementById('openSidebar');
// кнопка закрыть sidebar
const closeSidebarBtn = document.getElementById('closeSidebar');
// блок sidebar
const sidebar = document.querySelector('.sidebar');



export  {
  openModal,
  sidebar,
  closeModal,
  openSidebarBtn,
  closeSidebarBtn
};
