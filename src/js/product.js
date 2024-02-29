import { v4 as generateID } from 'uuid';
import { saveToLS, loadFromLS } from './helpers';
const userData = loadFromLS('user_data') || [];

const refs = {
  form: document.querySelector('.js-product-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

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
