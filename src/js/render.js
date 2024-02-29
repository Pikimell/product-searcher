function productTemplate(product, i) {
  return `
      <tr>
        <td>${i + 1}</td>
        <td>${product.product_name}</td>
        <td>${product.source}</td>
        <td><a href="${product.source_link}">Source Link</a></td>
        <td>
        <a href="${product.link_1}">Store-1</a>
        <a href="${product.link_2}">Store-2</a>
        <a href="${product.link_3}">Store-3</a>
        </td>
        <td><a href="${product.aliexpress}">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${product.orders}</td>
        <td>${product.popularity}</td>
        <td>${product.reviews}</td>
        <td><input type="checkbox" ${
          product.youtube_media ? 'checked' : ''
        }></td>
        <td class="table-border"></td>
        <td><a href="${product.supplier_link}">Supplier Link</a></td>
        <td>${product.supplier_price}</td>
        <td>${product.sale_price}</td>
        <td>${product.competitor_price}</td>
        <td>${product.comments}</td>
        <td>${product.margin}</td>
        <td>${product.niche}</td>
        <td>${product.points}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `;
}

export function productsTemplate(products) {
  return products.map(productTemplate).join('');
}
