# Platzi Merch

Platzi Merch is a fictional front end of an e-commerce of Platzi.

## Usage

The website starts with a Home page showing the products where you can add them to the cart. You may see how many items you've added to the cart on the icon on the header.
If you click the shopping cart icon, a modal is shown with the quantity of each products you decided to buy.
You can delete any product from the cart, add more or put a specific quantity.

If you proceed to the checkout, you may see the total and proceed to the Payment filling a form with your personal information.
After, you may proceed to the payment paying with Paypal.

If the payment is successful, you'll see a map showing the tracking of your order.

## Description

Here are all the technologies, libraries used on this project:

| Technologies / Libraries | Description |
| ----------- | ----------- |
| React | UI Interface  |
| React Router  | Routing  |
| Webpack  | Module Bundler  |
| SASS  | CSS handlement |
| @paypal/react-paypal-js |  Paypal SDK in React |
| Leaflet and React Leaflet |  Map rendering |
| AniCollection | CSS Animations |

In React, I used some hooks such as useState, useEffect, useRef for the form handlement, useContext for the global use of the state. 

The website was launched into production with Netlify. This is the link: https://vocal-eclair-4a8151.netlify.app


## Installation

To install it, use:

```bash
npm install
```

To launch it on development mode:
```bash
npm run start
```

To launch it on production mode:
```bash
npm run build
```

You may use the file ".env-example" to know what environment variables the project uses. At the time being, only the client-id is needed to use de Paypal SDK API.