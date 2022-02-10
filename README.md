# ![Project banner](/client/src/assets/README/banner.jpeg)

[![GitHub issues](https://img.shields.io/github/issues/IT-Academy-Social-Projects-KRV/Vet-Project?style=plastic)](https://github.com/IT-Academy-Social-Projects-KRV/Vet-Project/issues) [![GitHub forks](https://img.shields.io/github/forks/IT-Academy-Social-Projects-KRV/Vet-Project?style=plastic)](https://github.com/IT-Academy-Social-Projects-KRV/Vet-Project/network) [![GitHub stars](https://img.shields.io/github/stars/IT-Academy-Social-Projects-KRV/Vet-Project?style=plastic)](https://github.com/IT-Academy-Social-Projects-KRV/Vet-Project/stargazers)

## Description

This is a social project that will help you find a suitable clinic for your pet. Also, with the help of this service, you can adopt the animal from the shelter, or help her.

---

## Installation

- Install [node.js and npm](https://nodejs.org/uk/)
- Install yarn **`npm i -g yarn`**
- Install the Angular CLI **`npm install -g @angular/cli`**
- Install project dependencies for client side:

> ```bash
> cd client
> yarn install
> ```

and server side:

> ```bash
> cd ../server
> yarn install
> ```

---

### Usage

To run the client and server part of the project at the same time, you need to do the following:

> ```bash
> cd client
> yarn serve
> ```

**Client app** located on **<http://localhost:4200/>** and **server api** located on **<http://localhost:3200/>**. The app will automatically reload if you change any of the source files.

The client and server part of this project can be run separately.

#### Client side

To run client part only:

> ```bash
> cd client
> ng serve --open
> ```

**Build:** run **`ng build`** to build the project. The build artifacts will be stored in the `dist/` directory.

**Test:** run **`ng test`** to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Server side

To run client part only:

> ```bash
> cd server
> yarn serve
> ```

---

## Run via Docker

To run this project via Docker you need to do the following comand:

> ```bash
> docker-compose up --build -d
> ```

**Client app** located on **<http://localhost:80/>** and **server api** located on **<http://localhost:3200/>**. The app will automatically reload if you change any of the source files.

---

## Structure of the project

#### Client side

In this project we use the modular architecture. The modular architecture lets manage complexity of app structure, by breaking them down to smaller modules. One important thing that you should always keep in mind, that for every team which work on own feature  of app, should be created own module. All components, services and interfaces which used by several modules must be locate into a special shared module.

##### Here is a modular structure of our project:

```bash
app/
|- app.module.ts
|- app-routing.module.ts
|- error-http-interseptor.ts
|- notifyer.service.ts

|- admin/
   |- admin.module.ts
   |- admin-routing.module.ts
   |- auth/
        |-login-modal/
        |-logout-modal/
   |- components/
      |- admin-layout/
      |- admin-nav/
      |- dialogs/
        |- pet-add-dialog/
        |- pet-delete-dialog/
        |- pet-edit-dialog/
        |- ...
      |- other-admin-components
   |- pages/
      |- admin-edit-pet/
      |- admin-edit-vet
      |- ...

|- home-page/
   |- home-page.module.ts
   |- home-page-routing.module.ts
   |- components/
      |- home-main/
      |- pet-services/
      |- ...
   |- pages/
        |- home-page.component.html
        |- home-page.component.ts
        |- ...

|- pets/
    |- pets.module.ts
    |- pets-routing.module.ts
    |- components/
      |- animal-list/
      |- pets-filter/
      |- ...
    |- pages/
      |- animal-list-page/
      |- animal-unit-page/
        |- animal-unit-page.ts
        |- animal-unit-page.html
        |- ...

|- othermoduleofpages/
    |- ...

|- shared/
    |- components/
      |- page-layout/
      |- ...
    |- services/
      |- api.service.ts
      |- notifier.service.ts
    |- interfeces/
      |- animals.ts
      |- vetinfo.ts
      |- ...
|- assets/
    |- someDirWithContent/
      |- ...
    |- .../
```

#### Be sure to follow the structure during development!

##### Conclusion:

In this way, we can guarantee that during One team working on Vets Module and the other team working on Pets module, they will preserve from merge conflict and uncontrolled bugs, because everyone has own isolate workspace.

---

## Developers

| Name                | GitHub Profile                   |
| ------------------- | -------------------------------- |
| Andrii Skokovskyi   | <https://github.com/Samwa-ua>    |
| Andrii Dziura       | <https://github.com/andrii-dziu> |
| Andriі Shushniak    | <https://github.com/Andriy445>   |
| Dmytro Myruk        | <https://github.com/DimaMirk>    |
| Oleksandr Parfeniuk | <https://github.com/sanderpa>    |
| Max Kobzar          | <https://github.com/KobzarMax>   |
