# DMIT2008 Assesment 5
Ping Guan | HugeAsNever


This project was bootstrapped sass, next.js and stripe

This assesment includes two pages

- Storefront Page
- Checkout Page


## Storefront Page

 - Minimum of three products displayed
 - Storefront page build using NEXT.js getStaticProps (SSG)
 - Custom styled product card
 - Custom product component.
 - Initialize Stripe.js
 - Stripe object initialized using environmental variables (.env.local)





## Checkout Page

 - Fetches a single product from Firebase RealTime Database.
 - Product uid passed to API route using post method.
 - Stripe checkout session initialized.
 - Checkout session uses the secret key from the .env.local file.
 - Checkout session contains all required data: productName,
 - productDescription, productPrice
 - Redirect to Stripe Checkout page.


