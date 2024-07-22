import { v4 as uuidv4 } from 'uuid'

export class User {
    constructor(name, address, phone, email){
        this.id = uuidv4()
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email
    }
}