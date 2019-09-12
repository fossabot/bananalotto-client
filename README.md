# bananalotto-client
A client for bananalotto using node

[![Build Status](https://travis-ci.org/rem42/bananalotto-client.svg?branch=master)](https://travis-ci.org/rem42/bananalotto-client)
[![Coverage Status](https://coveralls.io/repos/github/rem42/bananalotto-client/badge.svg?branch=master)](https://coveralls.io/github/rem42/bananalotto-client?branch=master)

## Installation 
```sh
npm install bananalotto-client --save
```
## Usage
### TypeScript
```typescript
import {Credentials, BananalottoClient} from "bananalotto-client";

const credential = new Credentials();
credential.email = 'email@email.com';
credential.password = 'password';

BananalottoClient.init(credential)
.then((client: BananalottoClient) => {
    // code
});
```
