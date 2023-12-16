# Data Collector Application

## 💡 Description

This project consists of an application that integrates a RestAPI with a detailed data scraping layer.

<br>

## 📜 Recommendations

Here we have all of this application's dependencies managed by yarn.

- Javascript
- Node.js
- Express
- Puppeter
- Nodemon
- MySQL
- Axios
- Sequelize
- Mysql2
- Jest
- Mocha
- Chai
- Sinon
- Dotenv
- Swagger

<br>

## ✍️ Application and Intent

The application consists of some CRUD *Endpoints* (*Create and Read*), which have the following entity:

- Notebooks

Despite being a simple application, it ends up having several problems that we encounter in our daily lives as developers, so it is possible to evaluate how you would do by developing such skills to solve these problems.

<br>

## 👀 Attention 👀
- Make sure to configure the environment variables for your local database or in a container (like in docker) and change the name of the .example.env file to .env .
- The api runs on port 3399.
- For the scraped data to be stored in the database, the API must be running.

<br>

## 🌐 Flow application

- https://youtu.be/wCUgpSbfjjU

<br>


## 📖 Swagger Documentation route

- http://localhost:3399/api/v1/docs

<br>

## ✅ Tests ❌

Unit tests:
```
yarn test:unit
```

Integration tests:
```
yarn test:integration
```
<br>

## 💈 Running API

Clone and access repository:

```
git clone git@github.com:oligregz/data-collector.git
```

```
cd data-collector
```

Install dependencies:

```
yarn
```
Create database:

```
yarn create:db
```

Create the notebook table via migration:

```
yarn migrate:db
```

Run api:

```
yarn dev
```

Populate the database with scrape data:

```
yarn populate:db
```

## Remove all registered notebooks
To remove all notebooks from the database via CLI, the sequelize-cli migration undo command was used.
If you want to know more, look at package.json.

Resete database data:

```
yarn resete:db
```

## View scraping data in the terminal:
```
yarn scrap
```

