// кнопка обратная связь в main
const openFeedbackMainBtn = document.getElementById('feedbackMain');
// кнопка обратная связь в sidebar
const openFeedbackSidebarBtn = document.getElementById('feedbackSidebar');
// кнопка закрыть окно "обратной связи"
const closeFeedbackBtn = document.getElementById('closeFeedback');
// окно "обратной связи"
const feedbackModal = document.querySelector('.popup__feedback');


// кнопка "заказать звонок" связь в main
const callbackMainBtn = document.getElementById('callbackMain');
// кнопка "заказать звонок" в sidebar
const callbacSidebarBtn = document.getElementById('callbackSidebar');
// кнопка закрыть окно ""заказать звонок""
const closeCallbackBtn = document.getElementById('closeCallback');
// окно "обратной связи"
const callbacModal = document.querySelector('.popup__callback');

export  {
    openFeedbackMainBtn,
    openFeedbackSidebarBtn,
    closeFeedbackBtn,
    feedbackModal,
    callbackMainBtn,
    callbacSidebarBtn,
    closeCallbackBtn,
    callbacModal
};