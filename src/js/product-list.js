import { productsTemplate } from './render';
import { saveToLS, loadFromLS } from './helpers';
const refs = {
  tableBody: document.querySelector('tbody'),
};
const tableData = loadFromLS('user-data') || [];

function init() {
  const markup = productsTemplate(tableData);
  refs.tableBody.innerHTML = markup;
}

init();
