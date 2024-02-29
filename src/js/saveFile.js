import { readWorkBook, getFileData, saveWorkbook, updateCell } from './excel';

const START = 5;
// const COLUMNS = 'ABCDEFGHIJKLMNOP';
export async function saveDataToExcelFile(file, data) {
  const fileData = await getFileData(file);
  let workBook = readWorkBook(fileData);

  data.reduce((workBook, product, i) => {
    workBook = updateCell(workBook, 'A', i * 3 + START, i + 1);

    for (const [key, value] of Object.entries(COLUMNS)) {
      workBook = updateCell(workBook, key, i * 3 + START, product[value]);
    }

    for (let index = 0; index < 3; index++) {
      workBook = updateCell(
        workBook,
        'D',
        i * 3 + START + index,
        product[`link_${index + 1}`]
      );
    }

    return workBook;
  }, workBook);

  saveWorkbook(workBook);
}

const COLUMNS = {
  B: 'product_name',
  C: 'source',
  E: 'aliexpress',
  F: 'orders',
  G: 'popularity',
  H: 'reviews',
  I: 'supplier_link',
  J: 'supplier_price',
  K: 'sale_price',
  L: 'competitor_price',
  M: 'comments',
  N: 'margin',
  O: 'niche',
  P: 'points',
};
