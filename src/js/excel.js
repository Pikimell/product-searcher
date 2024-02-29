import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export function readWorkBook(fileData) {
  const workbook = XLSX.read(fileData, { type: 'array' });
  return workbook;
}

export function updateCell(workbook, columnName, cellNumber, value) {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const cellAddress = columnName + cellNumber;

  if (worksheet[cellAddress]) {
    worksheet[cellAddress].v = value;
  } else {
    createCell(worksheet, cellAddress, value);
  }

  return workbook;
}

export function saveWorkbook(workbook) {
  const updatedWorkbook = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });

  const updatedFile = new Blob([updatedWorkbook], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  saveAs(updatedFile, 'updated.xlsx');
  console.log('Файл Excel успешно сохранен!');
}

export function getFileData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const data = new Uint8Array(event.target.result);
      try {
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

function createCell(worksheet, cellAddress, value) {
  let obj;
  if (typeof value === 'number') {
    obj = {
      t: 'n',
      v: value,
      w: `${value}`,
    };
  } else {
    obj = {
      h: `${value}`,
      r: `<t>${value}</t>`,
      t: `s`,
      v: `${value}`,
      w: `${value}`,
    };
  }

  worksheet[cellAddress] = obj;
}

export function getCellValue(workbook, cellAddress) {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  return worksheet[cellAddress]?.v;
}
