import './style.css'
import { Invoice } from './classes/invoice'
import { Payment } from './classes/payment'
import { HasFormatter } from './interface/hasFormatter'
import { ListTemplate } from './classes/listTemplate'


const app = document.querySelector<HTMLDivElement>('#app')!

const htmlInject = `

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
`
app.innerHTML = htmlInject


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
  
})


