import{l as b,s as y}from"./assets/helpers-0f358616.js";import{r as g,w as C,F,v as L}from"./assets/vendor-848d50a8.js";function w(e,s){const t=parseInt(e.orders)>500,n=parseInt(e.popularity)>=40,r=e.youtube_media;return`
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
        <td class="desc">${e.comments||""}</td>
        <td class="number">${x(e)||""}</td>

        <td class="table-border"></td>

        <td> <button class="btn" data-type="edit" data-id="${e.id}">Edit</button> </td>
        <td> <button class="btn" data-type="delete" data-id="${e.id}">Delete</button> </td>

      </tr>
    `}function x({orders:e,popularity:s,reviews:t,youtube_media:n,supplier_price:r,sale_price:a}){console.log(n);const o=+(e>=300&&e<=1e4),i=+(s>=50),c=+(t>=4),u=+(n==="Checked"),m=+(a-r>=30);return o+i+c+u+m}function _(e){return e.map(w).join("")}const k={tableBody:document.querySelector("tbody")};let d=b("user-data")||[];function E(){const e=_(d);k.tableBody.innerHTML=e}E();k.tableBody.addEventListener("click",N);function N(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?T(e):D(e)}function D(e){const s=e.target.dataset.id;y("editId",s);const t=document.createElement("a");t.href="./new-product.html",t.click()}function T(e){const s=e.target.dataset.id;d=d.filter(t=>t.id!==s),y("user-data",d),e.target.parentNode.parentNode.remove()}function v(e){return g(e,{type:"array"})}function f(e,s,t,n){const r=e.Sheets[e.SheetNames[0]],a=s+t;return r[a]?r[a].v=n:O(r,a,n),e}function I(e){const s=C(e,{bookType:"xlsx",type:"array"}),t=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});F.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function S(e){return new Promise((s,t)=>{const n=new FileReader;n.onload=function(r){const a=new Uint8Array(r.target.result);try{s(a)}catch(o){t(o)}},n.readAsArrayBuffer(e)})}function O(e,s,t){let n;typeof t=="number"?n={t:"n",v:t,w:`${t}`}:n={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[s]=n}function p(e,s){var n;return(n=e.Sheets[e.SheetNames[0]][s])==null?void 0:n.v}const $=5,M={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function j(e){const s=await S(e),t=v(s);let n=0;const r=[];for(;n<50;){const a={};for(const[o,i]of Object.entries(M)){const c=o,u=n*3+$,m=c+u;a[i]=p(t,m)}for(let o=0;o<3;o++)a[`link_${o+1}`]=p(t,`D${n*3+$+o}`);for(let o=0;o<3;o++)a[`supplier_link_${o+1}`]=p(t,`I${n*3+$+o}`);if(a.id=L(),console.log(a),!a.product_name)break;r.push(a),n++}return r}const l=5;async function A(e,s){const t=await S(e);let n=v(t);s.reduce((r,a,o)=>{r=f(r,"A",o*3+l,o+1);for(const[i,c]of Object.entries(h))r=f(r,i,o*3+l,a[c]);for(let i=0;i<3;i++)r=f(r,"D",o*3+l+i,a[`link_${i+1}`]);return r},n),I(n)}function R(e){let s=e.reduce((t,n,r)=>{n.youtube_media=n.youtube_media?"Checked":"Unchecked";for(const[a,o]of Object.entries(h))n[o]&&(t+=`Range("${a}${r*3+l}").Value = "${n[o]}"
`);for(let a=0;a<3;a++)t+=`Range("D${r*3+l+a}").Value = "${n[`link_${a+1}`]}"
`;for(let a=0;a<3;a++)if(n[`supplier_link_${a+1}`]){const o=`I${r*3+l+a}`;t+=`Range("${o}").Value = "${n[`supplier_link_${a+1}`]}"
`}return t},"");return s=s.split(`
`).filter(t=>!t.includes("undefined")).join(`
`),s}const h={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"aliexpress",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},B={tableBody:document.querySelector("tbody")},P=document.querySelector(".js-save-form");P.addEventListener("submit",V);async function V(e){e.preventDefault();const t=e.target.elements[0].files[0],n=b("user-data")||[];t?A(t,n):console.error("Файл не выбран")}const q=document.querySelector(".js-load-form");q.addEventListener("submit",U);async function U(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const n=await j(t);y("user-data",n);const r=_(n);B.tableBody.innerHTML=r}else console.error("Файл не выбран")}localStorage.removeItem("editId");const H=document.querySelector(".js-macros-form");H.addEventListener("submit",W);async function W(e){e.preventDefault();const s=e.target.elements[0],t=b("user-data")||[],n=R(t);s.value=n}
//# sourceMappingURL=commonHelpers.js.map
