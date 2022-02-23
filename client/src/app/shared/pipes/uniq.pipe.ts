import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'uniq',
	pure: false
})
export class UniqPipe implements PipeTransform {
	transform(value: any, key: string): any {
		if (value !== undefined && value !== null) {
			const uniqBy = (arr: any[], predicate: string) => {
				const cb =
					typeof predicate === 'function' ? predicate : (o: { [x: string]: any }) => o[predicate]
				return [
					...arr
						.reduce((map, item) => {
							const key = item === null || item === undefined ? item : cb(item)

							map.has(key) || map.set(key, item)

							return map
						}, new Map())
						.values()
				]
			}
			return uniqBy(value, `${key}`)
		}
		return value
	}
}
