# Serverless GraphQL example

Repo for the blog post https://johndous.com/posts/serverless-graphql-server-on-aws-lambda

![Serverless GraphQL](https://s3.eu-central-1.amazonaws.com/johndous.com/first-article-diagram.png "Serverless GraphQL")

# Getting Started

Please edit the `package.json` and replace the `serverless-graphql-johndous` s3 bucket with your universally unique s3 bucket name.
```bash
npm i
npm run cloud:create-s3-bucket
npm run cloud:package
npm run cloud:deploy
npm run cloud:list-exports
```
or just

`npm run deploy`
