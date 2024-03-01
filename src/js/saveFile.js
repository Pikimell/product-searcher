import { readWorkBook, getFileData, saveWorkbook, updateCell } from './excel';

const START = 5;

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

export function saveDataToMacros(data) {
  let resultMacros = data.reduce((result, product, i) => {
    product.youtube_media = product.youtube_media ? 'Checked' : 'Unchecked';

    for (const [key, value] of Object.entries(COLUMNS)) {
      if (product[value])
        result += `Range("${key}${i * 3 + START}").Value = "${
          product[value]
        }"\n`;
    }

    for (let index = 0; index < 3; index++) {
      result += `Range("D${i * 3 + START + index}").Value = "${
        product[`link_${index + 1}`]
      }"\n`;
    }

    for (let index = 0; index < 3; index++) {
      if (product[`supplier_link_${index + 1}`]) {
        const cell = `I${i * 3 + START + index}`;
        result += `Range("${cell}").Value = "${
          product[`supplier_link_${index + 1}`]
        }"\n`;
      }
    }

    return result;
  }, '');

  resultMacros = resultMacros
    .split('\n')
    .filter(el => !el.includes('undefined'))
    .join('\n');

  return resultMacros;
}

const COLUMNS = {
  B: 'product_name',
  C: 'source',
  E: 'orders',
  F: 'popularity',
  G: 'youtube_media',
  H: 'reviews',
  I: 'aliexpress',
  J: 'supplier_price',
  K: 'sale_price',
  L: 'competitor_price',
  M: 'comments',
  N: 'margin',
  O: 'niche',
  P: 'points',
};
