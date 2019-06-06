# crawli

Serverless Link Preview API build on [now.sh](https://zeit.co/now).

This is a learning project to get a better understanding of some Node internals and how to structure a smallish project for deployment on Zeit's platform.

I hope this will be a lot of fun and everyone can learn something new 🙂.

## Topics

These are the topics we will touch during the project. In no particular order:

* Learn how to use basic Node.js APIs
* Refactoring code
* Writing tests for more reliable code
* Javascript tooling
* Writing asynchronous code
* A little bit of frontend development with [Preact](https://preactjs.com)

## Development

To start developing on this project, clone this repository and install it's dependencies.

```sh
> git clone git@github.com:sto3psl/crawli.git

> cd crawli

> npm install
```

To get the project up and running you can start the development server with the following command:

```sh
> npm run dev

# The output will look something like this.
> Now CLI 15.3.0 dev (beta) — https://zeit.co/feedback/dev
> Setting up 1 Builder
> Success! Builder setup complete
> Ready! Available at http://localhost:3000
✨  Built in 526ms.
...
```

This will start `now dev`, which emulates the behaviour of the deployed lambda functions. If you want to learn more follow this link to the [developer documentation of now.sh](https://zeit.co/docs). This is not necessary but might be useful if something goes wrong and deployments are taken care of with [Zeits Github integration](https://zeit.co/docs/v2/integrations/now-for-github/).

Changing files in the projects root or in `api/` will trigger a rebuild and start the webserver with the new changes. During development the webserver will run on `localhost:3000`. Make sure to have the dev tools of your browser open and disable cache, otherwise your changes won't be visible since `now dev` caches content like the live platform would do.

## Project structure

At the moment the project is very simple and there are 2 main parts: 

1. The actual JSON API that crawls URLs for metadata like `title`, `description`, `image`  
The code can be found in [api/index.js](./api/index.js).
1. A small webapp, built on [Preact](https://preactjs.com) (a smaller alternative to React), that makes it simple to just use the API and see it's output.  
The code can be found in [main.js](./main.js).

## Project management

New features, bug fixes, etc. will be discussed in [Github issues](https://github.com/sto3psl/crawli/issues) and the [project board](https://github.com/sto3psl/crawli/projects/1) displays status and priority.

### Pull requests

Every issue or feature that's being worked on should become a pull request and 1 approving review is necessary to merge to `master`. Additionally status checks from `now` have to pass before merging. In the future we might add some linting, formatting and test scripts but that is not necessary at the moment.

Pull requests will usually get squash merged which means individual commit messages will get lost. If they are important and well formatted, we rebase merge.

> [Article - Always Squash and Rebase your Git Commits](https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/) 
