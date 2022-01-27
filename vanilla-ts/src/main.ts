import { Invoice } from './Invoice';
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
      <input type="text" name="tofrom" placeholder="Name" class="inputs" id="tofrom"/>

      <label for="details"> Details: </label>
      <input type="text" name="details" placeholder=" Details" class="inputs" id="details"/>

      <label for="amount"> Amount ($):</label>
      <input type="text" name="amount" class="inputs" id="amount"/>
      <button> Add </button>
      
    </form>
    <a href="https://github.com">Github </a>
  </footer>
`
app.innerHTML = htmlInject

const invOne = new Invoice('Mario', 'work on typescript', 250);
let invoices: Invoice[] = [];
invoices.push(invOne)

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber);
})





