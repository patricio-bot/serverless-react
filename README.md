# React Serverless Functions

Using airtable-api and serverless functions in React

```
[build]
 command='yarn build'
 publish='/build'
 functions= './functions'


[[redirects]]
 from='/api/*'
 to='/.netlify/functions/:splat'
 status=200

[[redirects]]
 from='/*'
 to='/index.html'
 status=200
```

## Deploy

https://react-serverless.netlify.app/
