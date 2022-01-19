export interface IBareAnimalItem {
  name: string
  gender: string
  breed: string
  age: string
  shelterName: string
  curator: string
  shortInfo: string
  behavioralFeatures: string
  wishesForShelter: string
}

export interface IAnimalItem extends IBareAnimalItem {
  id: number
}
// --------------------
export interface IBareServiceItem {
  title: string
  description: string
}

export interface IServiceItem extends IBareServiceItem {
  id: number
}
// --------------------
export interface IBareVetItem {
	title: string
	adress: string
	phone: string
	email: string
	map_link: string
}

export interface IVetItem extends IBareVetItem {
	id: number
}

export interface ILoginItem {
  email: string
  password: string
}
