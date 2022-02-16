import './style.css'
import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interface/hasFormatter.js'
import { ListTemplate } from './classes/listTemplate.js'
import { htmlInject } from './html/htmlInject.js'


const app = document.querySelector<HTMLDivElement>('#app')!

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

  list.render(doc, type.value, "start");
  
})
const error = "error"


