import './js/product-list';
import { saveDataToExcelFile } from './js/saveFile';
import { loadFromLS } from './js/helpers';

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
