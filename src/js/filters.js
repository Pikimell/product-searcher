import { productsTemplate } from './render';
import { loadFromLS } from './helpers';

const refs = {
  sortNicheBtn: document.querySelector('.js-sort-niche'),
  sortPointBtn: document.querySelector('.js-sort-point'),
  tableBody: document.querySelector('tbody'),
};

refs.sortNicheBtn.addEventListener('click', e => {
  let tableData = loadFromLS('user-data') || [];
  tableData.sort((a, b) => {
    return a.niche.localeCompare(b.niche);
  });
  rerender(tableData);
});

refs.sortPointBtn.addEventListener('click', e => {
  let tableData = loadFromLS('user-data') || [];
  tableData.sort((b, a) => {
    return a.points - b.points;
  });
  rerender(tableData);
});

function rerender(tableData) {
  const markup = productsTemplate(tableData);
  refs.tableBody.innerHTML = markup;
}
