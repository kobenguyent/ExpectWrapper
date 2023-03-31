# Introduction

This is an expect-wrapper that you can use with CodeceptJS.

# Installation

This requires [Node.js](https://nodejs.org/) v16+ to run.
NPM package: https://www.npmjs.com/package/codeceptjs-expectwrapper

```sh
cd codeceptjs-project
npm i codeceptjs-expectwrapper
```

### Configuration

This helper should be added in `codecept.conf.ts/codecept.conf.js`

Example:

```json
{
    "helpers": {
        "Expectwrapper": {
            "require": "codeceptjs-expectwrapper"
        }
    }
}
```
