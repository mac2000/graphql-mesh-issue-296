# GrapQL Mesh issue 296 demo

In this demo I'm trying to demonstrate the problem encountered while trying to combine both federated and not federated services

Lets suppose we have not federated accounts service `accounts.js` and federated `articles.js` and wish to combine them together

To run demo:

```bash
node accounts.js
node articles.js
npm start
open http://localhost:4000
```

Expecting to see both account and article types in entities union but got only one