# CursusDB Web
Sveltekit with express backend for CursusDB Website.

## Local Development
Install
``` 
yarn
```

Run
``` 
yarn dev
```

## Deploying
Build frontend code
``` 
yarn build
```

### Test Server
``` 
node server.js
```
 
Then deploy.  

The CursusDB website is deployed on Cloud Run.
So the command we use is:
```
gcloud run deploy
```