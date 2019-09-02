# Moneyou AWS/serverless test


## Setup for local development

- Install dependencies
```
npm install
```

```
npm install --save serverless-dynamodb-local

sls dynamodb install

*Uncomment DynamoDB's resource on serverless.yml file* 
*Create .env file following the sample, providing AWS credentials*

sls dynamodb start --migrate

DYNAMO_TABLE=moneyou sls offline start
```


## Setup for deployment


- Install serverless client as a global tool
```
npm install -g serverless
```
- Config AWS credentials:
```
serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx

- Remove AWS credentials from .env file leaving only DYNAMO_TABLE
- Create a DynamoDB Table named "moneyou" on AWS Console

DYNAMO_TABLE=moneyou sls deploy
- if this step doesn't work check the authorizations of the account, add the necessary ones and try again.
```