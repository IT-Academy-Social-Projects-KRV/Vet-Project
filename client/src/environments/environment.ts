// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: 'https://vetspetsserver.azurewebsites.net/api',
	firebase: {
		apiKey: 'AIzaSyAUFTnQgrubVLr8znSDf13S6VBdaF7hHs8',
		authDomain: 'vetspets.firebaseapp.com',
		databaseURL: 'gs://vetspets.appspot.com/',
		projectId: 'vetspets',
		storageBucket: 'vetspets.appspot.com',
		messagingSenderId: '742536551070',
		appId: '1:742536551070:web:0ecc6c241f4b37deb8b98f',
		measurementId: 'G-PZ8DRF4ECJ'
	}
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
