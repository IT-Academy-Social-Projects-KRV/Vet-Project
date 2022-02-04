export interface IBareVolunteer {
	first_name: string,
	last_name: string,
	email: string,
	number: string,
	city: string
}

export interface IVolunteer extends IBareVolunteer {
	id: number
}
