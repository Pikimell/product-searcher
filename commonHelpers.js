import{l as f,s as _}from"./assets/helpers-f1a21cc8.js";import{r as h,w as S,F as v,v as k}from"./assets/vendor-848d50a8.js";function F(e,s){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>50,a=e.youtube_media;return`
      <tr class=${t&&n&&a?"valid":"invalid"}>
        <td>${s+1||""}</td>
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

        <td> <button class="btn" data-type="edit">Edit</button> </td>
        <td> <button class="btn" data-type="delete">Delete</button> </td>

      </tr>
    `}function x(e){return e.map(F).join("")}const w={tableBody:document.querySelector("tbody")},L=f("user-data")||[];function D(){const e=x(L);w.tableBody.innerHTML=e}D();function m(e){return h(e,{type:"array"})}function c(e,s,t,n){const a=e.Sheets[e.SheetNames[0]],r=s+t;return a[r]?a[r].v=n:C(a,r,n),e}function g(e){const s=S(e,{bookType:"xlsx",type:"array"}),t=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});v.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function y(e){return new Promise((s,t)=>{const n=new FileReader;n.onload=function(a){const r=new Uint8Array(a.target.result);try{s(r)}catch(o){t(o)}},n.readAsArrayBuffer(e)})}function C(e,s,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[s]=n}function p(e,s){var n;return(n=e.Sheets[e.SheetNames[0]][s])==null?void 0:n.v}const u=5,E={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function T(e){const s=await y(e),t=m(s);let n=0;const a=[];for(;n<50;){const r={};for(const[o,i]of Object.entries(E)){const l=o,$=n*3+u,b=l+$;r[i]=p(t,b)}for(let o=0;o<3;o++)r[`link_${o+1}`]=p(t,`D${n*3+u+o}`);if(r.id=k(),console.log(r),!r.product_name)break;a.push(r),n++}return a}const d=5;async function A(e,s){const t=await y(e);let n=m(t);s.reduce((a,r,o)=>{a=c(a,"A",o*3+d,o+1);for(const[i,l]of Object.entries(I))a=c(a,i,o*3+d,r[l]);for(let i=0;i<3;i++)a=c(a,"D",o*3+d+i,r[`link_${i+1}`]);return a},n),g(n)}const I={B:"product_name",C:"source",E:"aliexpress",F:"orders",G:"popularity",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},O=document.querySelector(".js-save-form");O.addEventListener("submit",j);async function j(e){e.preventDefault();const t=e.target.elements[0].files[0],n=f("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const M=document.querySelector(".js-load-form");M.addEventListener("submit",N);async function N(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await T(t);_("user-data",n)}else console.error("Файл не выбран")}
//# sourceMappingURL=commonHelpers.js.map
