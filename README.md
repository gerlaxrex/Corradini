[![JS](https://img.shields.io/badge/%7F-Javascript-yellow.svg?logo=Javascript)](https://shields.io/)
[![HTML5](https://img.shields.io/badge/%7F-HTML5-red.svg?logo=HTML5)](https://shields.io/)
[![CSS3](https://img.shields.io/badge/%7F-CSS3-blue.svg?logo=CSS3)](https://shields.io/)
[![JQuery](https://img.shields.io/badge/%7F-JQuery-darkblue.svg?logo=JQuery)](https://shields.io/)
[![Bootstrap](https://img.shields.io/badge/%7F-Bootstrap-violet.svg?logo=Bootstrap)](https://shields.io/)
[![Node.js](https://img.shields.io/badge/%7F-Node.js-green.svg?logo=Node.js)](https://shields.io/)
[![PostgreSQL](https://img.shields.io/badge/%7F-PostgreSQL-lightblue.svg?logo=PostgreSQL)](https://shields.io/)

<img src="https://user-images.githubusercontent.com/36633875/109721364-896a4800-7bab-11eb-8404-da0f468ba06f.jpg" width="100%"/>


# Corradini Website 🍃
## (Hypermedia Course A.A. 2019/2020 PoliMi)

This is the website that I designed for the Hypermedia course at Politecnico di Milano in 2020.
In general the website is quite simple, but is was a good exercise both for the coding of the front-end part and the in depth study of Bootstrap, and also for the learning of Node.js and OpenAPI.

The website is dedicated to a **fake** volunteering association that is involved in the integration and sustain of young people affected by the Autism Spectre Disorder through a __Common Garden__ planted and cultivated by these young men and women and a __Shop__ where they can sell the products of the nature.

There were some requirements about the design of the website and so I respected them fully, trying to give the website a clear structure without many intertwined links.

## Front-end 🌱

The palette that I've chosen for the website is all nature-based: leaf green, soil brown, and a little of purple somewhere reminding of the eggplants. I decided however to give an important space to white in order to make the user eye rest through all the time that He/She spents on the website.
I used Bootstrap 4 in order to help myself in giving the website a good organization in terms of layout, and it's also been useful for the navigation bar of the website. No template has been used and I tried to give my personal visual design for the website. A note on the Logo: it has been gently done by a designer I know.
After the structure of the Homepage, I organized the structure of the various Group Pages(People, People by Job...) and Topic pages(Specific Person or Role...) adding various transactional links and group links to these pages in order to help the user to navigate.
I also decided to enrich the visual aspect of the website by adding some color transitions on links and on other parts of the website (contact form), and other static visual effects like fading images.

## APIs 💬

RESTful API has been implemented for the website using Swagger and Swagger Editor. They are shaped after the navigational structure of the website and following in the best way the REST principles. They are really simple to use and to understand, developed in such a way that you can progressively access data. You can try it out at: https://corrdn.herokuapp.com/backend/swaggerUI/

## Back-end 🗄️

The back-end part, that is the bussiness logic and the Database did not require much effort since the website is straightforward: I implemented some function in order to better format the data and finally implemented the services and the necessary code in order to retrive data from the DB.
I used **knex** for the connection and query to the database, and **PostgreSQL** as RDBMS. 

## Deployment 🚀

I used **Heroku** since it is free and easy to use. Moreover it allows the automatic and free deploy of you DB onto AWS servers.
