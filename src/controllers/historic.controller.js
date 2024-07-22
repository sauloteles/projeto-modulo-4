import { Historic } from "../models/Historic.model.js";

let listHistoric = []

export const getAllHistoric = ()=>{
    return listHistoric;
}


export const addHistoric = (name, phone, email,quatity) => {
    const addHistoric = new Historic(name, phone, email, quatity)
    listHistoric.push(addHistoric)
    return addHistoric
}