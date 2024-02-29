import{l as d}from"./assets/helpers-f95e5f0d.js";function a(t,e){return`
      <tr>
        <td>${e+1}</td>
        <td>${t.product_name}</td>
        <td>${t.source}</td>
        <td><a href="${t.source_link}">Source Link</a></td>
        <td>
        <a href="${t.link_1}">Store-1</a>
        <a href="${t.link_2}">Store-2</a>
        <a href="${t.link_3}">Store-3</a>
        </td>
        <td><a href="${t.aliexpress}">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${t.orders}</td>
        <td>${t.popularity}</td>
        <td>${t.reviews}</td>
        <td><input type="checkbox" ${t.youtube_media?"checked":""}></td>
        <td class="table-border"></td>
        <td><a href="${t.supplier_link}">Supplier Link</a></td>
        <td>${t.supplier_price}</td>
        <td>${t.sale_price}</td>
        <td>${t.competitor_price}</td>
        <td>${t.comments}</td>
        <td>${t.margin}</td>
        <td>${t.niche}</td>
        <td>${t.points}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `}function n(t){return t.map(a).join("")}const i={tableBody:document.querySelector("tbody")},r=d("user-data")||[];function l(){const t=n(r);i.tableBody.innerHTML=t}l();
//# sourceMappingURL=commonHelpers.js.map
