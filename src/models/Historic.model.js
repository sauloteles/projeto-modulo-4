import { v4 as uuidv4 } from 'uuid'

let currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
export class Historic {
    constructor(name, phone, email,quatity){
        this.id = uuidv4()
        this.name = name
        this.phone = phone
        this.email = email
        this.quatity = quatity;
        this.date = formattedDate;
    }
}