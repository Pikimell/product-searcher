import{l as y,s as f}from"./assets/helpers-f1a21cc8.js";import{r as k,w as S,F as g,v as F}from"./assets/vendor-848d50a8.js";function w(e,a){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>50,s=e.youtube_media;return`
      <tr class=${t&&n&&s?"valid":"invalid"}>
        <td>${a+1||""}</td>
        <td>${e.product_name||""}</td>
        <td>${e.source||""}</td>

        <td>
        ${e.link_1?`<a href="${e.link_1}">Store-1</a>`:""}
        ${e.link_2?`<a href="${e.link_2}">Store-2</a>`:""}
        ${e.link_3?`<a href="${e.link_3}">Store-3</a>`:""}
        </td>
        
        <td>${e.aliexpress?`<a href="${e.aliexpress}">ALIEXPRESS</a>`:""}</td>
        
        <td class="table-border"></td>
        <td>${e.orders||""}</td>
        <td>${e.popularity||""}</td>
        <td>${e.reviews||""}</td>
        <td><input type="checkbox" ${e.youtube_media?"checked":""}></td>
        <td class="table-border"></td>

        <td>${e.supplier_link?`<a href="${e.supplier_link}">Supplier Link</a>`:""}</td>
        <td>${e.supplier_price||""}</td>
        <td>${e.sale_price||""}</td>
        <td>${e.competitor_price||""}</td>
        <td>${e.comments||""}</td>
        <td>${e.margin||""}</td>
        <td>${e.niche||""}</td>
        <td>${e.points||""}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit" data-id="${e.id}">Edit</button> </td>
        <td> <button class="btn" data-type="delete" data-id="${e.id}">Delete</button> </td>

      </tr>
    `}function x(e){return e.map(w).join("")}const $={tableBody:document.querySelector("tbody")};let l=y("user-data")||[];function L(){const e=x(l);$.tableBody.innerHTML=e}L();$.tableBody.addEventListener("click",C);function C(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?I(e):E(e)}function E(e){const a=e.target.dataset.id;f("editId",a);const t=document.createElement("a");t.href="./new-product.html",t.click()}function I(e){const a=e.target.dataset.id;l=l.filter(t=>t.id!==a),f("user-data",l),e.target.parentNode.parentNode.remove()}function b(e){return k(e,{type:"array"})}function c(e,a,t,n){const s=e.Sheets[e.SheetNames[0]],i=a+t;return s[i]?s[i].v=n:D(s,i,n),e}function T(e){const a=S(e,{bookType:"xlsx",type:"array"}),t=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});g.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function _(e){return new Promise((a,t)=>{const n=new FileReader;n.onload=function(s){const i=new Uint8Array(s.target.result);try{a(i)}catch(r){t(r)}},n.readAsArrayBuffer(e)})}function D(e,a,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[a]=n}function u(e,a){var n;return(n=e.Sheets[e.SheetNames[0]][a])==null?void 0:n.v}const m=5,N={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function O(e){const a=await _(e),t=b(a);let n=0;const s=[];for(;n<50;){const i={};for(const[r,o]of Object.entries(N)){const d=r,v=n*3+m,h=d+v;i[o]=u(t,h)}for(let r=0;r<3;r++)i[`link_${r+1}`]=u(t,`D${n*3+m+r}`);if(i.id=F(),console.log(i),!i.product_name)break;s.push(i),n++}return s}const p=5;async function A(e,a){const t=await _(e);let n=b(t);a.reduce((s,i,r)=>{s=c(s,"A",r*3+p,r+1);for(const[o,d]of Object.entries(j))s=c(s,o,r*3+p,i[d]);for(let o=0;o<3;o++)s=c(s,"D",r*3+p+o,i[`link_${o+1}`]);return s},n),T(n)}const j={B:"product_name",C:"source",E:"aliexpress",F:"orders",G:"popularity",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},B=document.querySelector(".js-save-form");B.addEventListener("submit",M);async function M(e){e.preventDefault();const t=e.target.elements[0].files[0],n=y("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const R=document.querySelector(".js-load-form");R.addEventListener("submit",P);async function P(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await O(t);f("user-data",n)}else console.error("Файл не выбран")}localStorage.removeItem("editId");
//# sourceMappingURL=commonHelpers.js.map
