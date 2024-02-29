import { v4 as generateID } from 'uuid';
import { saveToLS, loadFromLS } from './helpers';
const userData = loadFromLS('user-data') || [];
const id = loadFromLS('editId');

const refs = {
  form: document.querySelector('.js-product-form'),
};

function init() {
  if (!id) {
    refs.form.addEventListener('submit', onFormSubmit);
    return;
  }

  const product = userData.find(el => el.id === id);

  if (!product) return;
  for (const [key, value] of Object.entries(product)) {
    if (refs.form.elements[key]) refs.form.elements[key].value = value;
  }

  console.log(refs.form.elements.source);

  refs.form.elements.btn.textContent = 'Save Changes';

  refs.form.addEventListener('submit', onFormSave);
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    id: generateID(),
  };

  formData.forEach((value, key) => {
    data[key] = value;
  });

  data.youtube_media = data.youtube_media ? true : false;
  userData.push(data);
  saveToLS('user-data', userData);
  e.target.reset();
}

function onFormSave(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const productIndex = userData.findIndex(el => el.id === id);
  const product = { ...userData[productIndex] };

  formData.forEach((value, key) => {
    product[key] = value;
  });

  product.youtube_media = product.youtube_media ? true : false;

  userData.splice(productIndex, 1, product);
  saveToLS('user-data', userData);

  localStorage.removeItem('editId');
  const a = document.createElement('a');
  a.href = './index.html';
  a.click();
}

init();
