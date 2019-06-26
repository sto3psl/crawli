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

> yarn install
```

To get the project up and running you can start the development server with the following command:

```sh
> yarn dev

yarn run v1.17.0
$ concurrently 'yarn app' 'yarn api'
$ parcel index.html
$ micro-dev api/index.js
[1]
[1]    ┌────────────────────────────────────────────────────┐
[1]    │                                                    │
[1]    │   Micro is running!                                │
[1]    │                                                    │
[1]    │   • Local:            http://localhost:3000        │
[1]    │   • On Your Network:  http://192.168.125.23:3000   │
[1]    │                                                    │
[1]    │                                                    │
[1]    │                                                    │
[1]    └────────────────────────────────────────────────────┘
[1]
[0] Server running at http://localhost:1234
[0]
[1] File changed: dist/index.html - Restarting server...
[1] Restarted!
[0] ✨  Built in 906ms.
[1]
[1] File changed: dist/index.js - Restarting server...
[1] Restarted!
```

This will start a small api server and a frontend server with Parcel, which emulates the behaviour of the deployed lambda functions. If you want to learn more follow this link to the [developer documentation of now.sh](https://zeit.co/docs). This is not necessary but might be useful if something goes wrong and deployments are taken care of with [Zeits Github integration](https://zeit.co/docs/v2/integrations/now-for-github/).

Changing files in the projects root or in `api/` will trigger a rebuild and start the webserver with the new changes. During development the webserver will run on `localhost:1234`. The api runs on `localhost:3000`

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
