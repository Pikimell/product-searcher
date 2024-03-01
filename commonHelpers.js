import{l as f,s as m}from"./assets/helpers-f1a21cc8.js";import{r as S,w as g,F,v as E}from"./assets/vendor-848d50a8.js";function w(e,a){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>50,i=e.youtube_media;return`
      <tr class=${t&&n&&i?"valid":"invalid"}>
        <td>${a+1||""}</td>
        <td>${e.product_name||""}</td>
        <td>${e.source||""}</td>

        <td>
        ${e.link_1?`<a href="${e.link_1}">Store-1</a>`:""}
        ${e.link_2?`<a href="${e.link_2}">Store-2</a>`:""}
        ${e.link_3?`<a href="${e.link_3}">Store-3</a>`:""}
        </td>
        
        <td>${e.supplier_link_1?`<a href="${e.supplier_link_1}">ALIEXPRESS</a>`:""}</td>
        
        <td class="table-border"></td>
        <td>${e.orders||""}</td>
        <td>${e.popularity||""}</td>
        <td>${e.reviews||""}</td>
        <td><input type="checkbox" ${e.youtube_media?"checked":""}></td>
        <td class="table-border"></td>


        <td>
        ${e.supplier_link_1?`<a href="${e.supplier_link_1}">Store-1</a>`:""}
        ${e.supplier_link_2?`<a href="${e.supplier_link_2}">Store-2</a>`:""}
        ${e.supplier_link_3?`<a href="${e.supplier_link_3}">Store-3</a>`:""}
        </td>
        
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
    `}function x(e){return e.map(w).join("")}const _={tableBody:document.querySelector("tbody")};let d=f("user-data")||[];function C(){const e=x(d);_.tableBody.innerHTML=e}C();_.tableBody.addEventListener("click",D);function D(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?I(e):L(e)}function L(e){const a=e.target.dataset.id;m("editId",a);const t=document.createElement("a");t.href="./new-product.html",t.click()}function I(e){const a=e.target.dataset.id;d=d.filter(t=>t.id!==a),m("user-data",d),e.target.parentNode.parentNode.remove()}function y(e){return S(e,{type:"array"})}function u(e,a,t,n){const i=e.Sheets[e.SheetNames[0]],s=a+t;return i[s]?i[s].v=n:O(i,s,n),e}function T(e){const a=g(e,{bookType:"xlsx",type:"array"}),t=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});F.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function b(e){return new Promise((a,t)=>{const n=new FileReader;n.onload=function(i){const s=new Uint8Array(i.target.result);try{a(s)}catch(r){t(r)}},n.readAsArrayBuffer(e)})}function O(e,a,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[a]=n}function p(e,a){var n;return(n=e.Sheets[e.SheetNames[0]][a])==null?void 0:n.v}const $=5,N={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"supplier_link",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function j(e){const a=await b(e),t=y(a);let n=0;const i=[];for(;n<50;){const s={};for(const[r,o]of Object.entries(N)){const c=r,v=n*3+$,h=c+v;s[o]=p(t,h)}for(let r=0;r<3;r++)s[`link_${r+1}`]=p(t,`D${n*3+$+r}`);if(s.id=E(),console.log(s),!s.product_name)break;i.push(s),n++}return i}const l=5;async function A(e,a){const t=await b(e);let n=y(t);a.reduce((i,s,r)=>{i=u(i,"A",r*3+l,r+1);for(const[o,c]of Object.entries(k))i=u(i,o,r*3+l,s[c]);for(let o=0;o<3;o++)i=u(i,"D",r*3+l+o,s[`link_${o+1}`]);return i},n),T(n)}function M(e){let a=e.reduce((t,n,i)=>{n.youtube_media=n.youtube_media?"Checked":"Unchecked";for(const[s,r]of Object.entries(k))n[r]&&(t+=`Range("${s}${i*3+l}").Value = "${n[r]}"
`);for(let s=0;s<3;s++)t+=`Range("D${i*3+l+s}").Value = "${n[`link_${s+1}`]}"
`;for(let s=0;s<3;s++)if(n[`supplier_link_${s+1}`]){const r=`I${i*3+l+s}`;t+=`Range("${r}").Value = "${n[`supplier_link_${s+1}`]}"
`}return t},"");return a=a.split(`
`).filter(t=>!t.includes("undefined")).join(`
`),a}const k={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"aliexpress",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},R=document.querySelector(".js-save-form");R.addEventListener("submit",B);async function B(e){e.preventDefault();const t=e.target.elements[0].files[0],n=f("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const V=document.querySelector(".js-load-form");V.addEventListener("submit",P);async function P(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await j(t);m("user-data",n)}else console.error("Файл не выбран")}localStorage.removeItem("editId");const U=document.querySelector(".js-macros-form");U.addEventListener("submit",q);async function q(e){e.preventDefault();const a=e.target.elements[0],t=f("user-data")||[],n=M(t);a.value=n}
//# sourceMappingURL=commonHelpers.js.map
