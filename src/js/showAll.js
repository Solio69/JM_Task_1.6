// блок brands
let brands = document.querySelector('.brands');
// кнопака "Показать все" в блоке brands
let showBrandsBtn = document.getElementById('showBrands').querySelector('button');
// Картинака из кнопки "Показать все" в блоке brands
let showBrandsImg = document.getElementById('showBrands').querySelector('img');

// блок repairs
let repairs = document.querySelector('.repairs');
// кнопака "Показать все" в блоке repairs
let showRepairsBtn = document.getElementById('showRepairs').querySelector('button');
// Картинака из кнопки "Показать все" в блоке repairs
let showRepairsImg = document.getElementById('showRepairs').querySelector('img');

function showBlock(block, btnImg, btnText) {
  block.style.height = '100%';
  btnImg.src = './img/down-arrow.svg';
  btnText.textContent = 'Скрыть';
}

function hideBlock(block, btnImg, btnText) {
  block.style.height = '160px';
  btnImg.src = './img/up-arrow.svg';
  btnText.textContent = 'Показать все';
}

export {
  showBlock,
  hideBlock,
  brands,
  showBrandsBtn,
  showBrandsImg,
  repairs,
  showRepairsBtn,
  showRepairsImg
};
