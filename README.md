# Moneyou AWS/serverless test


## Setup for local development

- Install dependencies
```
npm install
```

```
npm run local
```


## Setup for deployment


- Install serverless client as a global tool
```
npm install -g serverless
```
- Config AWS credentials:
```
serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx
serverless deploy
- if this step doesn't work check the authorizations of the account, add the necessary ones and try again.
```