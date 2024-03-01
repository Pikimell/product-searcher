import{l as p,s as $}from"./assets/helpers-bd911960.js";import{r as S,w as g,F,v as w}from"./assets/vendor-848d50a8.js";function x(e,s){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>=40,i=e.youtube_media;return`
      <tr class=${t&&n&&i?"valid":"invalid"}>
        <td>${s+1||""}</td>
        <td class="product-name">${e.product_name||""}</td>
        <td>${e.source||""}</td>

        <td>
        ${e.link_1?`<a href="${e.link_1}">Store-1</a>`:""}
        ${e.link_2?`<a href="${e.link_2}">Store-2</a>`:""}
        ${e.link_3?`<a href="${e.link_3}">Store-3</a>`:""}
        </td>
        
        <td>${e.supplier_link_1?`<a href="${e.supplier_link_1}">ALIEXPRESS</a>`:""}</td>
        
        <td class="table-border"></td>
        <td class="number">${e.orders||""}</td>
        <td class="number">${e.popularity||""}</td>
        <td class="number">${e.reviews||""}</td>
        <td><input type="checkbox" ${e.youtube_media.toLowerCase()}></td>
        <td class="table-border"></td>


        <td>
        ${e.supplier_link_1?`<a href="${e.supplier_link_1}">Store-1</a>`:""}
        ${e.supplier_link_2?`<a href="${e.supplier_link_2}">Store-2</a>`:""}
        ${e.supplier_link_3?`<a href="${e.supplier_link_3}">Store-3</a>`:""}
        </td>
        
        <td class="number">${e.supplier_price||""}</td>
        <td class="number">${e.sale_price||""}</td>
        <td class="number">${e.competitor_price||""}</td>
        <td class="number">${e.margin||""}</td>
        <td>${e.niche||""}</td>
        <td>${e.comments||""}</td>
        <td class="number">${e.points||""}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit" data-id="${e.id}">Edit</button> </td>
        <td> <button class="btn" data-type="delete" data-id="${e.id}">Delete</button> </td>

      </tr>
    `}function C(e){return e.map(x).join("")}const _={tableBody:document.querySelector("tbody")};let c=p("user-data")||[];function E(){const e=C(c);_.tableBody.innerHTML=e}E();_.tableBody.addEventListener("click",L);function L(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?I(e):D(e)}function D(e){const s=e.target.dataset.id;$("editId",s);const t=document.createElement("a");t.href="./new-product.html",t.click()}function I(e){const s=e.target.dataset.id;c=c.filter(t=>t.id!==s),$("user-data",c),e.target.parentNode.parentNode.remove()}function y(e){return S(e,{type:"array"})}function u(e,s,t,n){const i=e.Sheets[e.SheetNames[0]],a=s+t;return i[a]?i[a].v=n:O(i,a,n),e}function T(e){const s=g(e,{bookType:"xlsx",type:"array"}),t=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});F.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function b(e){return new Promise((s,t)=>{const n=new FileReader;n.onload=function(i){const a=new Uint8Array(i.target.result);try{s(a)}catch(r){t(r)}},n.readAsArrayBuffer(e)})}function O(e,s,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[s]=n}function m(e,s){var n;return(n=e.Sheets[e.SheetNames[0]][s])==null?void 0:n.v}const f=5,N={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function j(e){const s=await b(e),t=y(s);let n=0;const i=[];for(;n<50;){const a={};for(const[r,o]of Object.entries(N)){const d=r,v=n*3+f,h=d+v;a[o]=m(t,h)}for(let r=0;r<3;r++)a[`link_${r+1}`]=m(t,`D${n*3+f+r}`);for(let r=0;r<3;r++)a[`supplier_link_${r+1}`]=m(t,`I${n*3+f+r}`);if(a.id=w(),console.log(a),!a.product_name)break;i.push(a),n++}return i}const l=5;async function A(e,s){const t=await b(e);let n=y(t);s.reduce((i,a,r)=>{i=u(i,"A",r*3+l,r+1);for(const[o,d]of Object.entries(k))i=u(i,o,r*3+l,a[d]);for(let o=0;o<3;o++)i=u(i,"D",r*3+l+o,a[`link_${o+1}`]);return i},n),T(n)}function M(e){let s=e.reduce((t,n,i)=>{n.youtube_media=n.youtube_media?"Checked":"Unchecked";for(const[a,r]of Object.entries(k))n[r]&&(t+=`Range("${a}${i*3+l}").Value = "${n[r]}"
`);for(let a=0;a<3;a++)t+=`Range("D${i*3+l+a}").Value = "${n[`link_${a+1}`]}"
`;for(let a=0;a<3;a++)if(n[`supplier_link_${a+1}`]){const r=`I${i*3+l+a}`;t+=`Range("${r}").Value = "${n[`supplier_link_${a+1}`]}"
`}return t},"");return s=s.split(`
`).filter(t=>!t.includes("undefined")).join(`
`),s}const k={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"aliexpress",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},R=document.querySelector(".js-save-form");R.addEventListener("submit",B);async function B(e){e.preventDefault();const t=e.target.elements[0].files[0],n=p("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const V=document.querySelector(".js-load-form");V.addEventListener("submit",P);async function P(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await j(t);$("user-data",n)}else console.error("Файл не выбран")}localStorage.removeItem("editId");const U=document.querySelector(".js-macros-form");U.addEventListener("submit",q);async function q(e){e.preventDefault();const s=e.target.elements[0],t=p("user-data")||[],n=M(t);s.value=n}
//# sourceMappingURL=commonHelpers.js.map
