const i=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};i();const s=document.querySelector("#app"),a=`

  <div class="wrapper">
    <h1>Finance Logger</h1>

    <ul class="item list">
    
    </ul>
  
  </div>

  <footer>
    <form class="new-item-form">

      <label for="type">Type: </label>
      <select id="type" class="inputs">
        <option value="invoice"> Invoice </option>
        <option value="payment"> Payment </option>
      </select>

      <label for="tofrom"> To/From: </label>
      <input type="text" name="tofrom" placeholder="Name" class="inputs"/>

      <label for="details"> Details: </label>
      <input type="text" name="details" placeholder=" Details" class="inputs"/>

      <label for="amount"> Amount ($):</label>
      <input type="text" name="amount" class="inputs"/>
      <button> Add </button>
      
    </form>
    <a href="https://github.com">Github </a>
  </footer>
`;s.innerHTML=a;const c=document.querySelectorAll("a");console.log(c);
