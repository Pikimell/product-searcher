function productTemplate(product, i) {
  return `
      <tr>
        <td>${i + 1}</td>
        <td>${product.product_name}</td>
        <td>${product.source}</td>
        <td><a href="${product.source_link}" target="_blank">${
    product.source_link
  }</a></td>
        <td><a href="${product.link_1}" target="_blank">${
    product.link_1
  }</a></td>
        <td><a href="${product.aliexpress}" target="_blank">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${product.orders}</td>
        <td>${product.popularity}</td>
        <td>${product.reviews}</td>
        <td>${product.youtube_media ? 'Yes' : 'No'}</td>
        <td class="table-border"></td>
        <td>${product.supplier_link}</td>
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
