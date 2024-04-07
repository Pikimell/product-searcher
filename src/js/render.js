function productTemplate(product, i) {
  const validOrders = parseInt(product.orders) > 500;
  const validPopularity = parseInt(product.popularity) >= 40;
  const validMedia = product.youtube_media;
  const isValid = validOrders && validPopularity && validMedia;
  const myClass = isValid ? 'valid' : 'invalid';
  return `
      <tr class=${myClass}>
        <td>${i + 1 || ''}</td>
        <td class="product-name">${product.product_name || ''}</td>
        <td>${product.source || ''}</td>

        <td>
        ${product.link_1 ? `<a href="${product.link_1}">Store-1</a>` : ''}
        ${product.link_2 ? `<a href="${product.link_2}">Store-2</a>` : ''}
        ${product.link_3 ? `<a href="${product.link_3}">Store-3</a>` : ''}
        </td>
        
        <td>${
          product.supplier_link_1
            ? `<a href="${product.supplier_link_1}">ALIEXPRESS</a>`
            : ''
        }</td>
        
        <td class="table-border"></td>
        <td class="number">${product.orders || ''}</td>
        <td class="number">${product.popularity || ''}</td>
        <td class="number">${product.reviews || ''}</td>
        <td><input type="checkbox" ${product.youtube_media
          .toString()
          .toLowerCase()}></td>
        <td class="table-border"></td>


        <td>
        ${
          product.supplier_link_1
            ? `<a href="${product.supplier_link_1}">Store-1</a>`
            : ''
        }
        ${
          product.supplier_link_2
            ? `<a href="${product.supplier_link_2}">Store-2</a>`
            : ''
        }
        ${
          product.supplier_link_3
            ? `<a href="${product.supplier_link_3}">Store-3</a>`
            : ''
        }
        </td>
        
        <td class="number">${product.supplier_price || ''}</td>
        <td class="number">${product.sale_price || ''}</td>
        <td class="number">${product.competitor_price || ''}</td>
        <td class="number">${product.margin || ''}</td>
        <td>${product.niche || ''}</td>
        <td class="desc">${product.comments || ''}</td>
        <td class="number">${getPoints(product) || ''}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit" data-id="${
          product.id
        }">Edit</button> </td>
        <td> <button class="btn" data-type="delete" data-id="${
          product.id
        }">Delete</button> </td>

      </tr>
    `;
}

function getPoints({
  orders,
  popularity,
  reviews,
  youtube_media,
  supplier_price,
  sale_price,
}) {
  console.log(youtube_media);
  const point1 = Number(orders >= 300 && orders <= 10000);
  const point2 = Number(popularity >= 50);
  const point3 = Number(reviews >= 4);
  const point4 = Number(youtube_media === 'Checked');
  const point5 = Number(sale_price - supplier_price >= 30);

  return point1 + point2 + point3 + point4 + point5;
}

export function productsTemplate(products) {
  return products.map(productTemplate).join('');
}
