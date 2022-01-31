export interface IBereVolonteerItem {
    first_name: string
    last_name: string
    email: string
    number: string
    city:string
}

export interface IVolonteerItem extends IBereVolonteerItem{
    id:number
}