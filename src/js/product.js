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
  console.log(product, id);
  if (!product) return;
  for (const [key, value] of Object.entries(product)) {
    if (refs.form.elements[key]) refs.form.elements[key].value = value;
  }
  refs.form.elements.youtube_media.checked =
    product.youtube_media === 'Checked';

  setActiveOption(refs.form.elements.source, product.source);
  setActiveOption(refs.form.elements.niche, product.niche || '');

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

  formData.forEach((value, key) => {
    product[key] = value;
  });

  product.youtube_media = product.youtube_media ? 'Checked' : 'Unchecked';

  userData.splice(productIndex, 1, product);
  saveToLS('user-data', userData);

  localStorage.removeItem('editId');
  const a = document.createElement('a');
  a.href = './index.html';
  a.click();
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
