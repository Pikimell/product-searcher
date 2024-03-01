import{l as p,s as $}from"./assets/helpers-bd911960.js";import{r as g,w as F,F as L,v as w}from"./assets/vendor-848d50a8.js";function x(e,s){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>=40,r=e.youtube_media;return`
      <tr class=${t&&n&&r?"valid":"invalid"}>
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
        <td><input type="checkbox" ${e.youtube_media.toString().toLowerCase()}></td>
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
    `}function y(e){return e.map(x).join("")}const _={tableBody:document.querySelector("tbody")};let c=p("user-data")||[];function C(){const e=y(c);_.tableBody.innerHTML=e}C();_.tableBody.addEventListener("click",E);function E(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?T(e):D(e)}function D(e){const s=e.target.dataset.id;$("editId",s);const t=document.createElement("a");t.href="./new-product.html",t.click()}function T(e){const s=e.target.dataset.id;c=c.filter(t=>t.id!==s),$("user-data",c),e.target.parentNode.parentNode.remove()}function b(e){return g(e,{type:"array"})}function u(e,s,t,n){const r=e.Sheets[e.SheetNames[0]],a=s+t;return r[a]?r[a].v=n:O(r,a,n),e}function I(e){const s=F(e,{bookType:"xlsx",type:"array"}),t=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});L.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function k(e){return new Promise((s,t)=>{const n=new FileReader;n.onload=function(r){const a=new Uint8Array(r.target.result);try{s(a)}catch(i){t(i)}},n.readAsArrayBuffer(e)})}function O(e,s,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[s]=n}function m(e,s){var n;return(n=e.Sheets[e.SheetNames[0]][s])==null?void 0:n.v}const f=5,M={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function N(e){const s=await k(e),t=b(s);let n=0;const r=[];for(;n<50;){const a={};for(const[i,o]of Object.entries(M)){const d=i,S=n*3+f,h=d+S;a[o]=m(t,h)}for(let i=0;i<3;i++)a[`link_${i+1}`]=m(t,`D${n*3+f+i}`);for(let i=0;i<3;i++)a[`supplier_link_${i+1}`]=m(t,`I${n*3+f+i}`);if(a.id=w(),console.log(a),!a.product_name)break;r.push(a),n++}return r}const l=5;async function j(e,s){const t=await k(e);let n=b(t);s.reduce((r,a,i)=>{r=u(r,"A",i*3+l,i+1);for(const[o,d]of Object.entries(v))r=u(r,o,i*3+l,a[d]);for(let o=0;o<3;o++)r=u(r,"D",i*3+l+o,a[`link_${o+1}`]);return r},n),I(n)}function A(e){let s=e.reduce((t,n,r)=>{n.youtube_media=n.youtube_media?"Checked":"Unchecked";for(const[a,i]of Object.entries(v))n[i]&&(t+=`Range("${a}${r*3+l}").Value = "${n[i]}"
`);for(let a=0;a<3;a++)t+=`Range("D${r*3+l+a}").Value = "${n[`link_${a+1}`]}"
`;for(let a=0;a<3;a++)if(n[`supplier_link_${a+1}`]){const i=`I${r*3+l+a}`;t+=`Range("${i}").Value = "${n[`supplier_link_${a+1}`]}"
`}return t},"");return s=s.split(`
`).filter(t=>!t.includes("undefined")).join(`
`),s}const v={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"aliexpress",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},R={tableBody:document.querySelector("tbody")},B=document.querySelector(".js-save-form");B.addEventListener("submit",V);async function V(e){e.preventDefault();const t=e.target.elements[0].files[0],n=p("user-data")||[];t?j(t,n):console.error("Файл не выбран")}const q=document.querySelector(".js-load-form");q.addEventListener("submit",P);async function P(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await N(t);$("user-data",n);const r=y(n);R.tableBody.innerHTML=r}else console.error("Файл не выбран")}localStorage.removeItem("editId");const U=document.querySelector(".js-macros-form");U.addEventListener("submit",H);async function H(e){e.preventDefault();const s=e.target.elements[0],t=p("user-data")||[],n=A(t);s.value=n}
//# sourceMappingURL=commonHelpers.js.map
