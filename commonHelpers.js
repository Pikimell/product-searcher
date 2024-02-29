import{l as f,s as _}from"./assets/helpers-aea5b757.js";import{r as h,w as S,F as k,v}from"./assets/vendor-848d50a8.js";function F(e,r){return parseInt(e.orders)>500,parseInt(e.orders)>500,parseInt(e.orders)>500,`
      <tr>
        <td>${r+1||""}</td>
        <td>${e.product_name||""}</td>
        <td>${e.source||""}</td>
        <td><a href="${e.source_link||""}">Source Link</a></td>
        <td>
        <a href="${e.link_1||""}">Store-1</a>
        <a href="${e.link_2||""}">Store-2</a>
        <a href="${e.link_3||""}">Store-3</a>
        </td>
        <td><a href="${e.aliexpress||""}">ALIEXPRESS</a></td>
        <td class="table-border"></td>
        <td>${e.orders||""}</td>
        <td>${e.popularity||""}</td>
        <td>${e.reviews||""}</td>
        <td><input type="checkbox" ${e.youtube_media?"checked":""}></td>
        <td class="table-border"></td>
        <td><a href="${e.supplier_link||""}">Supplier Link</a></td>
        <td>${e.supplier_price||""}</td>
        <td>${e.sale_price||""}</td>
        <td>${e.competitor_price||""}</td>
        <td>${e.comments||""}</td>
        <td>${e.margin||""}</td>
        <td>${e.niche||""}</td>
        <td>${e.points||""}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `}function L(e){return e.map(F).join("")}const w={tableBody:document.querySelector("tbody")},x=f("user-data")||[];function D(){const e=L(x);w.tableBody.innerHTML=e}D();function m(e){return h(e,{type:"array"})}function c(e,r,t,n){const s=e.Sheets[e.SheetNames[0]],a=r+t;return s[a]?s[a].v=n:E(s,a,n),e}function g(e){const r=S(e,{bookType:"xlsx",type:"array"}),t=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});k.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function y(e){return new Promise((r,t)=>{const n=new FileReader;n.onload=function(s){const a=new Uint8Array(s.target.result);try{r(a)}catch(o){t(o)}},n.readAsArrayBuffer(e)})}function E(e,r,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[r]=n}function p(e,r){var n;return(n=e.Sheets[e.SheetNames[0]][r])==null?void 0:n.v}const u=5,I={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function T(e){const r=await y(e),t=m(r);let n=0;const s=[];for(;n<50;){const a={};for(const[o,i]of Object.entries(I)){const l=o,$=n*3+u,b=l+$;a[i]=p(t,b)}for(let o=0;o<3;o++)a[`link_${o+1}`]=p(t,`D${n*3+u+o}`);if(a.id=v(),console.log(a),!a.product_name)break;s.push(a),n++}return s}const d=5;async function A(e,r){const t=await y(e);let n=m(t);r.reduce((s,a,o)=>{s=c(s,"A",o*3+d,o+1);for(const[i,l]of Object.entries(C))s=c(s,i,o*3+d,a[l]);for(let i=0;i<3;i++)s=c(s,"D",o*3+d+i,a[`link_${i+1}`]);return s},n),g(n)}const C={B:"product_name",C:"source",E:"aliexpress",F:"orders",G:"popularity",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},O=document.querySelector(".js-save-form");O.addEventListener("submit",j);async function j(e){e.preventDefault();const t=e.target.elements[0].files[0],n=f("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const N=document.querySelector(".js-load-form");N.addEventListener("submit",M);async function M(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await T(t);_("user-data",n)}else console.error("Файл не выбран")}
//# sourceMappingURL=commonHelpers.js.map
