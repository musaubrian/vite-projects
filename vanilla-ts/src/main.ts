import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const htmlInject = `

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
`
app.innerHTML = htmlInject

const anchor = document.querySelectorAll('a')
console.log(anchor)




