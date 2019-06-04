# crawli

Serverless Link Preview API build on [now.sh](https://zeit.co/now).

This is a learning project to get a better understanding of some Node internals and how to structure a smallish project for deployment on Zeit's platform.

# Development

To start developing on this project, clone this repository and install it's dependencies.

```sh
> git clone git@github.com:sto3psl/crawli.git

> cd crawli

> npm install
```

To get the project up and running you can start the development server with the following command:

```sh
> npm run dev
```

This will start `now dev`, which emulates the behaviour of the deployed lambda functions. If you want to learn more follow this link to the [developer documentation of now.sh](https://zeit.co/docs). This is not necessary and deployments are taken care of with [Zeits Github integration](https://zeit.co/docs/v2/integrations/now-for-github/).
