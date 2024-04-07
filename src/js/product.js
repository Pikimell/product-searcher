import { v4 as generateID } from 'uuid';
import { saveToLS, loadFromLS } from './helpers';
const userData = loadFromLS('user-data') || [];
const id = loadFromLS('editId');
let productIndex = null;

const refs = {
  form: document.querySelector('.js-product-form'),
};

function init() {
  window.addEventListener('keydown', onChangeItem);
  if (!id) {
    refs.form.addEventListener('submit', onFormSubmit);
    return;
  }
  productIndex = userData.findIndex(el => el.id === id);
  loadProductData(id);
  refs.form.elements.btn.textContent = 'Save Changes';
  refs.form.addEventListener('submit', onFormSave);
}

function loadProductData(id) {
  refs.form.reset();
  const product = userData.find(el => el.id === id);
  if (!product) return;
  for (const [key, value] of Object.entries(product)) {
    if (refs.form.elements[key]) refs.form.elements[key].value = value;
  }
  refs.form.elements.youtube_media.checked =
    product.youtube_media === 'Checked';

  setActiveOption(refs.form.elements.source, product.source);
  setActiveOption(refs.form.elements.niche, product.niche || '');
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

  data.youtube_media = data.youtube_media ? 'Checked' : 'Unchecked';
  userData.push(data);
  saveToLS('user-data', userData);
  e.target.reset();
}

function onFormSave(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const productIndex = userData.findIndex(el => el.id === id);
  const product = { ...userData[productIndex] };
  delete product.youtube_media;

  formData.forEach((value, key) => {
    product[key] = value;
  });

  product.youtube_media = product.youtube_media ? 'Checked' : 'Unchecked';
  console.log(product.youtube_media);

  userData.splice(productIndex, 1, product);
  saveToLS('user-data', userData);

  e.target.reset();

  // localStorage.removeItem('editId');
  // const a = document.createElement('a');
  // a.href = './index.html';
  // a.click();
}

init();

function setActiveOption(selectElement, optionValue) {
  var options = selectElement.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].value.toLowerCase() === optionValue.toLowerCase()) {
      options[i].selected = true;
      break;
    }
  }
}

function onChangeItem(e) {
  if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
    const change = e.code === 'ArrowRight' ? 1 : -1;
    productIndex += change;
    if (productIndex < 0 || productIndex > userData.length) {
      productIndex = 0;
      return;
    }
    const id = userData[productIndex].id;
    loadProductData(id);
  }
}
