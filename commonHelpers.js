import{l as b,s as y}from"./assets/helpers-0f358616.js";import{r as N,w as C,F as E,v as w}from"./assets/vendor-848d50a8.js";function D(e,n){return parseInt(e.orders)>500,parseInt(e.popularity)>=40,e.youtube_media,`
      <tr class=invalid>
        <td>${n+1||""}</td>
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
    `}function x(e){const{orders:n,popularity:t,reviews:s,youtube_media:o,supplier_price:a,sale_price:r}=e,i=+(n>=300&&n<=1e4),c=+(t>=50),u=+(s>=4),m=+(o==="Checked"),F=+(r-a>=30);return e.points=i+c+u+m+F,e.points}function _(e){console.log(e);const n=e.map(D).join("");return localStorage.setItem("user-data",JSON.stringify(e)),n}const S={tableBody:document.querySelector("tbody")};let d=b("user-data")||[];function T(){const e=_(d);S.tableBody.innerHTML=e}T();S.tableBody.addEventListener("click",I);function I(e){if(e.target.nodeName!=="BUTTON")return;e.target.dataset.type==="delete"?j(e):B(e)}function B(e){const n=e.target.dataset.id;y("editId",n);const t=document.createElement("a");t.href="./new-product.html",t.click()}function j(e){const n=e.target.dataset.id;d=d.filter(t=>t.id!==n),y("user-data",d),e.target.parentNode.parentNode.remove()}const k={sortNicheBtn:document.querySelector(".js-sort-niche"),sortPointBtn:document.querySelector(".js-sort-point")};k.sortNicheBtn.addEventListener("click",e=>{let n=loadFromLS("user-data")||[];n.sort((t,s)=>t.niche.localeCompare(s.niche)),h(n)});k.sortPointBtn.addEventListener("click",e=>{let n=loadFromLS("user-data")||[];n.sort((t,s)=>t.points-s.points),h(n)});function h(e){const n=_(e);k.tableBody.innerHTML=n}function v(e){return N(e,{type:"array"})}function f(e,n,t,s){const o=e.Sheets[e.SheetNames[0]],a=n+t;return o[a]?o[a].v=s:M(o,a,s),e}function O(e){const n=C(e,{bookType:"xlsx",type:"array"}),t=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});E.saveAs(t,"updated.xlsx"),console.log("Файл Excel успешно сохранен!")}function g(e){return new Promise((n,t)=>{const s=new FileReader;s.onload=function(o){const a=new Uint8Array(o.target.result);try{n(a)}catch(r){t(r)}},s.readAsArrayBuffer(e)})}function M(e,n,t){let s;typeof t=="number"?s={t:"n",v:t,w:`${t}`}:s={h:`${t}`,r:`<t>${t}</t>`,t:"s",v:`${t}`,w:`${t}`},e[n]=s}function p(e,n){var s;return(s=e.Sheets[e.SheetNames[0]][n])==null?void 0:s.v}const $=5,A={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"};async function R(e){const n=await g(e),t=v(n);let s=0;const o=[];for(;s<50;){const a={};for(const[r,i]of Object.entries(A)){const c=r,u=s*3+$,m=c+u;a[i]=p(t,m)}for(let r=0;r<3;r++)a[`link_${r+1}`]=p(t,`D${s*3+$+r}`);for(let r=0;r<3;r++)a[`supplier_link_${r+1}`]=p(t,`I${s*3+$+r}`);if(a.id=w(),console.log(a),!a.product_name)break;o.push(a),s++}return o}const l=5;async function q(e,n){const t=await g(e);let s=v(t);n.reduce((o,a,r)=>{o=f(o,"A",r*3+l,r+1);for(const[i,c]of Object.entries(L))o=f(o,i,r*3+l,a[c]);for(let i=0;i<3;i++)o=f(o,"D",r*3+l+i,a[`link_${i+1}`]);return o},s),O(s)}function P(e){let n=e.reduce((t,s,o)=>{s.youtube_media=s.youtube_media?"Checked":"Unchecked";for(const[a,r]of Object.entries(L))s[r]&&(t+=`Range("${a}${o*3+l}").Value = "${s[r]}"
`);for(let a=0;a<3;a++)t+=`Range("D${o*3+l+a}").Value = "${s[`link_${a+1}`]}"
`;for(let a=0;a<3;a++)if(s[`supplier_link_${a+1}`]){const r=`I${o*3+l+a}`;t+=`Range("${r}").Value = "${s[`supplier_link_${a+1}`]}"
`}return t},"");return n=n.split(`
`).filter(t=>!t.includes("undefined")).join(`
`),n}const L={B:"product_name",C:"source",E:"orders",F:"popularity",G:"youtube_media",H:"reviews",I:"aliexpress",J:"supplier_price",K:"sale_price",L:"competitor_price",M:"comments",N:"margin",O:"niche",P:"points"},H={tableBody:document.querySelector("tbody")},U=document.querySelector(".js-save-form");U.addEventListener("submit",V);async function V(e){e.preventDefault();const t=e.target.elements[0].files[0],s=b("user-data")||[];t?q(t,s):console.error("Файл не выбран")}const W=document.querySelector(".js-load-form");W.addEventListener("submit",J);async function J(e){e.preventDefault();const t=e.target.elements[0].files[0];if(t){const s=await R(t);y("user-data",s);const o=_(s);H.tableBody.innerHTML=o}else console.error("Файл не выбран")}localStorage.removeItem("editId");const G=document.querySelector(".js-macros-form");G.addEventListener("submit",K);async function K(e){e.preventDefault();const n=e.target.elements[0],t=b("user-data")||[],s=P(t);n.value=s}
//# sourceMappingURL=commonHelpers.js.map
