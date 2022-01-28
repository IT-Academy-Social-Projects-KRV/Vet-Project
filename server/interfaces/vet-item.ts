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