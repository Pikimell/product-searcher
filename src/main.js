import './js/product-list';
import { loadDataFromFile } from './js/loadFile';
import { saveDataToExcelFile, saveDataToMacros } from './js/saveFile';
import { loadFromLS, saveToLS } from './js/helpers';
import { productsTemplate } from './js/render';
const refs = {
  tableBody: document.querySelector('tbody'),
};

const saveForm = document.querySelector('.js-save-form');

saveForm.addEventListener('submit', onSaveFile);

async function onSaveFile(e) {
  e.preventDefault();
  const fileInput = e.target.elements[0];
  const file = fileInput.files[0];
  const data = loadFromLS('user-data') || [];

  if (file) {
    saveDataToExcelFile(file, data);
  } else {
    console.error('Файл не выбран');
  }
}

const loadForm = document.querySelector('.js-load-form');
loadForm.addEventListener('submit', onLoadFile);
async function onLoadFile(e) {
  e.preventDefault();
  const fileInput = e.target.elements[0];
  const file = fileInput.files[0];

  if (file) {
    const data = await loadDataFromFile(file);
    saveToLS('user-data', data);
    const markup = productsTemplate(data);
    refs.tableBody.innerHTML = markup;
  } else {
    console.error('Файл не выбран');
  }
}

localStorage.removeItem('editId');

const macrosForm = document.querySelector('.js-macros-form');
macrosForm.addEventListener('submit', onMacrosSave);

async function onMacrosSave(e) {
  e.preventDefault();
  const resultElem = e.target.elements[0];
  const data = loadFromLS('user-data') || [];
  const macros = saveDataToMacros(data);
  resultElem.value = macros;
}
