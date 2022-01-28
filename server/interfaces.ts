export interface IBareAnimalItem {
  name: string
  gender: string
  breed: string
  age: string
	shelter_name: string
	curator: string
	short_info: string
	behavioral_features: string
	wishes_for_shelter: string
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


