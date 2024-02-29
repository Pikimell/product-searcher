function productTemplate(product, i) {
  const validOrders = parseInt(product.orders) > 500;
  const validPopularity = parseInt(product.popularity) > 50;
  const validMedia = product.youtube_media;
  const isValid = validOrders && validPopularity && validMedia;

  const myClass = isValid ? 'valid' : 'invalid';

  return `
      <tr class=${myClass}>
        <td>${i + 1 || ''}</td>
        <td>${product.product_name || ''}</td>
        <td>${product.source || ''}</td>

        <td>
        ${product.link_1 ? `<a href="${product.link_1}">Store-1</a>` : ''}
        ${product.link_2 ? `<a href="${product.link_2}">Store-2</a>` : ''}
        ${product.link_3 ? `<a href="${product.link_3}">Store-3</a>` : ''}
        </td>
        
        <td>${
          product.aliexpress
            ? `<a href="${product.aliexpress}">ALIEXPRESS</a>`
            : ''
        }</td>
        
        <td class="table-border"></td>
        <td>${product.orders || ''}</td>
        <td>${product.popularity || ''}</td>
        <td>${product.reviews || ''}</td>
        <td><input type="checkbox" ${
          product.youtube_media ? 'checked' : ''
        }></td>
        <td class="table-border"></td>

        <td>${
          product.supplier_link
            ? `<a href="${product.supplier_link}">Supplier Link</a>`
            : ''
        }</td>
        <td>${product.supplier_price || ''}</td>
        <td>${product.sale_price || ''}</td>
        <td>${product.competitor_price || ''}</td>
        <td>${product.comments || ''}</td>
        <td>${product.margin || ''}</td>
        <td>${product.niche || ''}</td>
        <td>${product.points || ''}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `;
}

export function productsTemplate(products) {
  return products.map(productTemplate).join('');
}
