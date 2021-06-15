import '../scss/style.scss';
// слайдеры
import {
  brandsSlider,
  repairsSlider,
  pricesSlider
} from '../js/swiper';

// sidebar
import {
  openModal,
  sidebar,
  closeModal,
  openSidebarBtn,
  closeSidebarBtn
} from '../js/sidebar';

// popUP (открываются и закрываются openModal и closeModal, импортированны из sidebar)
import {
  openFeedbackMainBtn,
  openFeedbackSidebarBtn,
  closeFeedbackBtn,
  feedbackModal,
  callbackMainBtn,
  callbacSidebarBtn,
  closeCallbackBtn,
  callbacModal

} from '../js/popup';

// showAll (разворачивае / сворчавает блоки)
import {
  showBlock,
  hideBlock,
  brands,
  showBrandsBtn,
  showBrandsImg,
  repairs,
  showRepairsBtn,
  showRepairsImg

} from '../js/showAll';

// открыть sidebar по клику на бургер
openSidebarBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(sidebar, 'sidebar__show');
});
// закрыть sidebar по клику на бургер
closeSidebarBtn.addEventListener('click', function () {
  closeModal(sidebar, 'sidebar__show');
});
// закрыть sidebar по клику вне его
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target)) {
    closeModal(sidebar, 'sidebar__show');
  }
});


// открыть окно "обратной связи" по клику на кнопку в sidebar
openFeedbackSidebarBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(feedbackModal, 'popup__show');
});
// открыть окно "обратной связи" по клику на кнопку в main
openFeedbackMainBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(feedbackModal, 'popup__show');
});

// закрыть окно "обратной связи" 
closeFeedbackBtn.addEventListener('click', function () {
  closeModal(feedbackModal, 'popup__show');
});


// открыть окно "заказать звонок" по клику на кнопку в sidebar
callbackMainBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(callbacModal, 'popup__show');
});
// открыть окно "заказать звонок" по клику на кнопку в main
callbacSidebarBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  openModal(callbacModal, 'popup__show');
});

// закрыть окно "заказать звонок" 
closeCallbackBtn.addEventListener('click', function () {
  closeModal(callbacModal, 'popup__show');
});


// меняем высоту блока brands по click
showBrandsBtn.addEventListener('click', function () {
  if (brands.style.height !== '100%') {
    showBlock(brands, showBrandsImg, showBrandsBtn);
  } else {
    hideBlock(brands, showBrandsImg, showBrandsBtn);
  }
});
// меняем высоту блока repairs по click
showRepairsBtn.addEventListener('click', function () {
  if (repairs.style.height !== '100%') {
    showBlock(repairs, showRepairsImg, showRepairsBtn);
  } else {
    hideBlock(repairs, showRepairsImg, showRepairsBtn);
  }
});
