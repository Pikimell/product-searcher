import { getCellValue, readWorkBook, getFileData } from './excel';
import { v4 as generateID } from 'uuid';

const START = 5;
const COLUMNS = {
  B: 'product_name',
  C: 'source',
  E: 'orders',
  F: 'popularity',
  G: 'youtube_media',
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

export async function loadDataFromFile(file) {
  const fileData = await getFileData(file);
  const workBook = readWorkBook(fileData);
  let counter = 0;
  const data = [];
  while (counter < 50) {
    const product = {};

    for (const [key, value] of Object.entries(COLUMNS)) {
      const COL = key;
      const ROW = counter * 3 + START;
      const cell = COL + ROW;
      product[value] = getCellValue(workBook, cell);
    }

    for (let index = 0; index < 3; index++) {
      product[`link_${index + 1}`] = getCellValue(
        workBook,
        `D${counter * 3 + START + index}`
      );
    }
    product.id = generateID();
    console.log(product);
    if (!product.product_name) break;
    data.push(product);
    counter++;
  }

  return data;
}
