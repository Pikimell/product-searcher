import{l as c}from"./assets/helpers-f95e5f0d.js";import{r as p,w as m,F as u}from"./assets/vendor-848d50a8.js";function b(e,r){return`
      <tr>
        <td>${r+1}</td>
        <td>${e.product_name}</td>
        <td>${e.source}</td>
        <td><a href="${e.source_link}">Source Link</a></td>
        <td>
        <a href="${e.link_1}">Store-1</a>
        <a href="${e.link_2}">Store-2</a>
        <a href="${e.link_3}">Store-3</a>
        </td>
        <td><a href="${e.aliexpress}">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${e.orders}</td>
        <td>${e.popularity}</td>
        <td>${e.reviews}</td>
        <td><input type="checkbox" ${e.youtube_media?"checked":""}></td>
        <td class="table-border"></td>
        <td><a href="${e.supplier_link}">Supplier Link</a></td>
        <td>${e.supplier_price}</td>
        <td>${e.sale_price}</td>
        <td>${e.competitor_price}</td>
        <td>${e.comments}</td>
        <td>${e.margin}</td>
        <td>${e.niche}</td>
        <td>${e.points}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `}function y(e){return e.map(b).join("")}const $={tableBody:document.querySelector("tbody")},S=c("user-data")||[];function h(){const e=y(S);$.tableBody.innerHTML=e}h();function _(e){return p(e,{type:"array"})}function d(e,r,t,n){const a=e.Sheets[e.SheetNames[0]],s=r+t;return a[s]?a[s].v=n:F(a,s,n),e}function x(e){const r=m(e,{bookType:"xlsx",type:"array"}),t=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});u.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function k(e){return new Promise((r,t)=>{const n=new FileReader;n.onload=function(a){const s=new Uint8Array(a.target.result);try{r(s)}catch(o){t(o)}},n.readAsArrayBuffer(e)})}function F(e,r,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[r]=n}const l=5;async function v(e,r){const t=await k(e);let n=_(t);r.reduce((a,s,o)=>{a=d(a,"A",o*3+l,o+1);for(const[i,f]of Object.entries(A))a=d(a,i,o*3+l,s[f]);for(let i=0;i<3;i++)a=d(a,"D",o*3+l+i,s[`link_${i+1}`]);return a},n),x(n)}const A={B:"product_name",C:"source",E:"aliexpress",F:"orders",G:"popularity",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},E=document.querySelector(".js-save-form");E.addEventListener("submit",L);async function L(e){e.preventDefault();const t=e.target.elements[0].files[0],n=c("user-data")||[];t?v(t,n):console.error("Файл не выбран")}
//# sourceMappingURL=commonHelpers.js.map
