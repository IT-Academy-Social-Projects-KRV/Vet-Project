export interface IBareVetItem {
	image: string
	title: string
	adress: string
	phone: string
	email: string
	map_link: string
	animal_type?: string
} 
export interface IVetItem extends IBareVetItem {
	id: number
} 