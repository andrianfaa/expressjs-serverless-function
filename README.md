# Express.js Serverless Function

this is an Express.js Template with Typescript that you can use if you want to deploy Express.js App to Vercel

<div align="left">
  <a href="#"><img src="https://img.shields.io/badge/vercel-success-success?labelColor=black&logo=vercel&style=flat" /></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript-%5E4.8.2-informational?labelColor=black&logo=typescript&style=flat" /></a>
  <a href="#"><img src="https://img.shields.io/badge/node-%5E16.15.1-green?labelColor=black&logo=node.js&style=flat" /></a>
  <a href="#"><img src="https://img.shields.io/badge/npm-%5E8.11.0-red?labelColor=black&logo=npm&style=flat" /></a>
</div>

## Deployed App

You can see this project already deployed at this link

- [Exprees.js Serverless Function - Deployed on Vercel](https://expressjs-serverless-function.api.andrianfa.my.id)

## Build setup

- Clone Repository

  ```bash
  git clone https://github.com/andrianfaa/expressjs-serverless-function
  ```

  if you don't want to use TypeScript, you can use Javascript in Branch [`with-javascript`](https://github.com/andrianfaa/expressjs-serverless-function/tree/with-javascript)

- Install Dependencies

  ```bash
  # with yarn
  $ yarn install

  # or with npm
  $ npm install
  ```

  it will automatically create a `config` folder containing the `.env.development` . file

- Run the development Server

  ```bash
  # with yarn
  $ yarn dev

  # or with npm
  $ npm run dev
  ```

  Server will running on port `5000`

## Deploy on vercel

if you want to deploy your app to Vercel, don't forget to edit `templateEnv` in `setup.sh` file
