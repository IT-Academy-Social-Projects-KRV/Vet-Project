export interface IBareVolunteer {
	image: string,
	first_name: string,
	last_name: string,
	email: string,
	number: string
}

export interface IVolunteer extends IBareVolunteer {
	id: number
}
