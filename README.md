## Introduction

First of all, we appreciate you. We understand take-home projects like this consume your personal time. Over the years, we've found this kind of project demonstrates your skills better than the alternatives (e.g. the dreaded whiteboard live-coding exercise.)

While we don't use React ourselves (we're an Ember shop), this exercise is *not* intended to evaluate your expertise in our specific stack, or to provide a direct example of the code you would be working on. We're more interested in *how* you work and your approach to solving new problems in existing code. We'd recommend avoiding a complete rewrite -- we'd like to see how you operate within an existing codebase that has its own preset conventions. If it helps, just imagine there are 100s of additional components and endpoints, as there are in the main Thought Industries codebase. This project is just on a much smaller scale.

## Your Task

We've created a sample catalog of songs pulled from [Spotify](https://www.spotify.com/)'s API. This is designed to match a small part of our own catalog functionality, which you can [see a demo of here](https://www.onlinecookingschool.com/catalog), but more musical and hopefully fun.

There's some bugs in the current implementation that could use fixing, a small design refresh, and an opportunity to introduce some new functionality as well.

While we like to be transparent with code reviews and Pull Requests, for this challenge you'll need to clone this repository into a private repository (they're free these days!) on your account. Once you're done with the challenge, you can commit your changes on a branch there, open up a Pull Request, and send us the link.

### Bugs (everyone creates bugs, we squash 'em on "Bug Fix Friday")
 - Paginating past page two doesn't work.
 - Searching for a song with two slashes in it, such as "Finally // beautiful stranger", doesn't seem to work.

### Design Changes

We're constantly evolving our UX & UI at Thought Industries. To emulate that, our designer has [provided a comp](https://projects.invisionapp.com/share/9NZUUUZXPD5#/screens/441734173) containing an updated song display they would like to see implemented. There's blue flashing hints on the comp which you can click on to learn more about the anticipated changes. This project uses the standard [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/) for styling, so you are free to use all Bootstrap 5 classes.

### New Feature

Right now, search is powered by [a fairly naïve implementation](graphql/songs.js#L12-L16). It would be nice to implement search-as-you-type (aka "autocomplete") functionality, and while we're at it, we should probably introduce a real search engine to handle things like typos and index  content without loading up [a 20mb json file](songs.json) for every search.

[MeiliSearch](https://www.meilisearch.com/) is an open source search engine that is fairly easy to get setup and index documents.

Here's a high-level set of steps you can follow:

1. [Install MeiliSearch](https://docs.meilisearch.com/guides/advanced_guides/installation.html). We recommend the Docker option if you already have Docker installed.
2. After you have MeiliSearch installed, you'll need to [index the documents](https://docs.meilisearch.com/guides/main_concepts/indexes.html#index-creation) in [songs.json](songs.json).
3. Finally, you can replace the aforementioned naïve implementation with [MeiliSearch JavaScript](https://github.com/meilisearch/meilisearch-js), which is already included as a dependency.
4. You can then implement search-as-you-type in the [Header](components/header.js).

It would be great if you could record your MeiliSearch setup steps in [this file](meilisearch-setup-steps.txt) so we can see how you got it going as part of the PR.

## Installation

You should be able to checkout this project and run `yarn` (if you have it!) or `npm install` to install the dependencies. You will need node v10+ to run this application. From there, simply run `yarn dev` or `npm dev` and then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Getting Started

The frontend starts in [pages/[[...q]]/index.js](pages/[[...q]]/index.js), and the backend is mostly located in [graphql/songs.js](graphql/songs.js). You should be able to start there and follow the other imported files.

## Available Scripts

In the project directory, you can run:

### `npm dev` / `yarn dev`

Runs the app in the development mode and starts the server.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make edits, and show you errors if there are any.

Note Next.js does not love the [20mb songs.json](songs.json) and sometimes runs out of memory and crashes during development. If that happens, just kill the process and restart it to get things going again. Once you get MeiliSearch setup, this should stop happening.

### `npm test` / `yarn test`

Launches the test runner.<br>
This repository uses [jest](https://jestjs.io/) as its test runner and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) as a framework for testing React components. Tests are located in the [__tests__](__tests__) directory.

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn about React, check out the [React documentation](https://reactjs.org/). Be sure to check out [hooks](https://reactjs.org/docs/hooks-intro.html) as well.

Don't hesitate to ask any questions!
