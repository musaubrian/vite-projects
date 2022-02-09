//classes
import { HasFormatter } from "../interface/hasFormatter"; 
export class Invoice implements HasFormatter{
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `
            <li> ${this.client} owes $ ${this.amount} for ${this.details} </li>`
    }
}