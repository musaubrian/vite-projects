var m=Object.defineProperty;var p=(s,e,n)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var r=(s,e,n)=>(p(s,typeof e!="symbol"?e+"":e,n),n);const f=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};f();class h{constructor(e,n,i){r(this,"client");r(this,"details");r(this,"amount");this.client=e,this.details=n,this.amount=i}format(){return`
        ${this.client} owes $${this.amount} for ${this.details}
        `}}class y{constructor(e,n,i){r(this,"recipient");r(this,"details");r(this,"amount");this.recipient=e,this.details=n,this.amount=i}format(){return`${this.recipient} is owed $${this.amount} for ${this.details}`}}class v{constructor(e){this.container=e}render(e,n,i){const t=document.createElement("li"),o=document.createElement("h4");o.innerText=n,t.append(o);const l=document.createElement("p");l.innerText=e.format(),t.append(l),i==="start"?this.container.prepend(t):this.container.append(t)}}const b=`

  <div class="wrapper">
    <h1>Finance Logger</h1>


    <a class="waves-effect waves-dark btn modal-trigger" href="#modal">
      <span class="material-icons">
          add
      </span>
    </a>

    <ul class="item-list">
    
    </ul>
  
  </div>
  

  <div class="modal" id="modal">
    <form class="new-item-form">
      <div class="input-field">
        <select id="type" class="inputs select">
          <option value="" disabled selected>Choose your option</option>
          <option value="invoice">Invoice</option>
          <option value="payment">Payment</option>
        </select>
        <label>Type</label>
      </div>      

      <label for="tofrom"> To/From: </label>
      <input type="text" name="tofrom" placeholder="Name" class="inputs" id="tofrom"/>

      <label for="details"> Details: </label>
      <input type="text" name="details" placeholder=" Details" class="inputs" id="details"/>

      <label for="amount"> Amount ($):</label>
      <input type="text" name="amount" class="inputs" id="amount"/>
      <button class="submit"> Add </button>

    </form>
  </div>
`,g=document.querySelector("#app");g.innerHTML=b;const w=document.querySelector(".new-item-form"),a=document.querySelector("#type"),c=document.querySelector("#tofrom"),u=document.querySelector("#details"),d=document.querySelector("#amount"),L=document.querySelector("ul"),$=new v(L);w.addEventListener("submit",s=>{s.preventDefault();let e;a.value==="invoice"?e=new h(c.value,u.value,d.valueAsNumber):e=new y(c.value,u.value,d.valueAsNumber),$.render(e,a.value,"start")});
