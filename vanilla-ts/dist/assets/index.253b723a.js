var d=Object.defineProperty;var m=(s,e,o)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var l=(s,e,o)=>(m(s,typeof e!="symbol"?e+"":e,o),o);const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};p();class f{constructor(e,o,i){l(this,"client");l(this,"details");l(this,"amount");this.client=e,this.details=o,this.amount=i}format(){return`${this.client} owes $ ${this.amount} for ${this.details}`}}class y{constructor(e,o,i){l(this,"client");l(this,"details");l(this,"amount");this.client=e,this.details=o,this.amount=i}format(){return`${this.client} payed $ ${this.amount} for ${this.details}`}}const v=document.querySelector("#app"),h=`

  <div class="wrapper">
    <h1>Finance Logger</h1>

    <ul class="item-list">
    
    </ul>
  
  </div>
  <a class="waves-effect waves-dark btn modal-trigger" href="#modal">
    <span class="material-icons">
        add
    </span>
  </a>

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
`;v.innerHTML=h;const b=document.querySelector(".new-item-form"),g=document.querySelector("#type"),r=document.querySelector("#tofrom"),c=document.querySelector("#details"),u=document.querySelector("#amount");b.addEventListener("submit",s=>{if(s.preventDefault(),g.value=="invoice"){const e=new f(r.value,c.value,u.valueAsNumber);console.log(e)}else{const e=new y(r.value,c.value,u.valueAsNumber);console.log(e)}});
