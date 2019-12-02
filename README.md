# ShopBox App

## ShopBox Overview
This project was the complete redesign of an e-commerce platform to modernize their webpage. The application was built by a four person team and adhered to a business requirements document. The microservices of the application included: Product Overview, Related Items & Add to Outfit, Question & Answers, and Reviews. Each individual on the team took ownership of one microservice.

![Shop-Box-Overview](/dist/images/Shopbox-Complete.gif)

## Components

#### Product Overview
#### Related Items
#### Question & Answers
The Questions & Answers microservice allows asking and answering of questions for the product selected. Users can add photos to their answers and there is form validation for both submitting answers and questions. A live-search algorithm was implemented and searches through answers when there are more than 3 letters typed in the search bar.

![q-and-a](/dist/images/q-and-a.gif)
#### Reviews

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

To start the server in production:

```sh
npm start
```

To run Jest unit tests:

```sh
npm run test
```

## Frameworks

```sh
React with React Hooks
Redux
Material UI
```

## Testing

```sh
Jest  
Puppeteer
```

## Running

Go to http://localhost:3000/ 

## Credits

Made with [createapp.dev](https://createapp.dev/)


