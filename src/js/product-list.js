import { productsTemplate } from './render';
import { saveToLS, loadFromLS } from './helpers';
const refs = {
  tableBody: document.querySelector('tbody'),
};
let tableData = loadFromLS('user-data') || [];

function init() {
  const markup = productsTemplate(tableData);
  refs.tableBody.innerHTML = markup;
}

init();

refs.tableBody.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const type = e.target.dataset.type;
  if (type === 'delete') {
    onRemoveClick(e);
  } else {
    onEditClick(e);
  }
}

function onEditClick(e) {
  const id = e.target.dataset.id;
  saveToLS('editId', id);
  const a = document.createElement('a');
  a.href = './new-product.html';
  a.click();
}
function onRemoveClick(e) {
  const id = e.target.dataset.id;
  tableData = tableData.filter(el => el.id !== id);
  saveToLS('user-data', tableData);
  e.target.parentNode.parentNode.remove();
}
