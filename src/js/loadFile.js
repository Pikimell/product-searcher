import { getCellValue, readWorkBook, getFileData } from './excel';
import { v4 as generateID } from 'uuid';

const START = 4;
const COLUMNS = {
  B: 'product_name',
  C: 'source',
  E: 'link_1',
  F: 'aliexpress',
  H: 'orders',
  I: 'popularity',
  J: 'youtube_media',
  K: 'reviews',
  L: 'supplier_link',
  M: 'supplier_price',
  N: 'sale_price',
  O: 'competitor_price',
  P: 'comments',
  Q: 'margin',
  R: 'niche',
  S: 'points',
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
      const ROW = counter + START;
      const cell = COL + ROW;
      product[value] = getCellValue(workBook, cell);
    }

    product.id = generateID();
    if (!product.product_name) break;
    data.push(product);
    counter++;
  }

  return data;
}
