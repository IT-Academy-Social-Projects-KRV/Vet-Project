export interface IBareAnimalItem {
  image: string
  name: string
  gender: string
  breed: string
  age: number
	shelter_name: string
	curator: string
	short_info: string
	behavioral_features: string
	wishes_for_shelter: string
}

export interface IAnimalItem extends IBareAnimalItem {
  id: number
}