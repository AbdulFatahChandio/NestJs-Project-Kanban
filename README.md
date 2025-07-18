<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  # 🗂️ Kanban Board API

A full-featured, modular **NestJS** backend for a Kanban-style task management app. Built with **Prisma** ORM and **PostgreSQL**, and powered by **Docker** for easy setup.

---

## 🚀 Features

- 🔐 JWT Authentication (Auth Module)
- 👤 User Management (CRUD)
- 🧩 List & Board Modules
- 🗃️ PostgreSQL via Docker
- 🔄 Prisma ORM for database management
- 📦 Modular architecture with NestJS
- 🔧 Environment config via `@nestjs/config`

---

## 📮 API Routes (NestJS Kanban)

All routes are prefixed based on their module. Example base URL: `http://localhost:3000`

---

### 🔐 Auth Routes

| Method | Endpoint   | Description             |
|--------|------------|-------------------------|
| POST   | `/auth`    | Authenticate a user and return a token |

---

### 👤 User Routes

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/users`       | Get all users         |
| GET    | `/users/:id`   | Get user by ID        |
| POST   | `/users`       | Create a new user     |
| PATCH  | `/users/:id`   | Update an existing user |
| DELETE | `/users/:id`   | Delete a user         |

---

### 📋 List Routes

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/lists`       | Get all Kanban lists  |
| GET    | `/lists/:id`   | Get a list by ID      |
| POST   | `/lists`       | Create a new list     |
| PATCH  | `/lists/:id`   | Update a list         |
| DELETE | `/lists/:id`   | Delete a list         |

---

### 🧾 Board Routes *(Planned)*

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/boards`       | Get all boards       |
| GET    | `/boards/:id`   | Get board by ID      |
| POST   | `/boards`       | Create a new board   |
| PATCH  | `/boards/:id`   | Update a board       |
| DELETE | `/boards/:id`   | Delete a board       |

---

### 🛡️ Authorization (Optional)

Most endpoints will require Bearer Token authentication once JWT is implemented. Add an `Authorization` header like:



## 📁 Project Structure

| Path                       | Description                           |
|----------------------------|---------------------------------------|
| `kanban-board/`            | Root project folder                   |
| ├── `prisma/`              | Prisma schema and migrations          |
| ├── ├── `migrations/`      | Prisma migration files                |
| ├── └── `schema.prisma`    | Prisma database schema                |
| ├── `src/`                 | Main source code folder               |
| ├── ├── `auth/`            | Auth module (JWT, strategies)         |
| ├── ├── `board/`           | Board module                          |
| ├── ├── `list/`            | List module                           |
| ├── ├── `user/`            | User module                           |
| ├── ├── `prisma/`          | PrismaService wrapper for DI          |
| ├── ├── `app.controller.ts`| Root controller (optional health check)|
| ├── ├── `app.module.ts`    | Root module importing all modules     |
| ├── ├── `app.service.ts`   | Root service logic (minimal)          |
| ├── └── `main.ts`          | Entry point for bootstrapping NestJS  |
| `docker-compose.yml`       | Docker config for PostgreSQL          |
| `.prettierrc`              | Prettier code formatting configuration|
| `nest-cli.json`            | NestJS CLI configuration              |
| `tsconfig.json`            | TypeScript compiler configuration     |


yaml
Copy
Edit


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
