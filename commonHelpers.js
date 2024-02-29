import{l as a}from"./assets/helpers-19b93edd.js";function d(t,e){return`
      <tr>
        <td>${e+1}</td>
        <td>${t.product_name}</td>
        <td>${t.source}</td>
        <td><a href="${t.source_link}" target="_blank">${t.source_link}</a></td>
        <td><a href="${t.link_1}" target="_blank">${t.link_1}</a></td>
        <td><a href="${t.aliexpress}" target="_blank">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${t.orders}</td>
        <td>${t.popularity}</td>
        <td>${t.reviews}</td>
        <td>${t.youtube_media?"Yes":"No"}</td>
        <td class="table-border"></td>
        <td>${t.supplier_link}</td>
        <td>${t.supplier_price}</td>
        <td>${t.sale_price}</td>
        <td>${t.competitor_price}</td>
        <td>${t.comments}</td>
        <td>${t.margin}</td>
        <td>${t.niche}</td>
        <td>${t.points}</td>
      </tr>
    `}function n(t){return t.map(d).join("")}const i={tableBody:document.querySelector("tbody")},l=a("user-data")||[];function r(){const t=n(l);i.tableBody.innerHTML=t}r();
//# sourceMappingURL=commonHelpers.js.map
