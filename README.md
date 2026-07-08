
SECOND_PROJECT : 
-In this project, I learnt about CORS and how to handle CORS.
-I've practiced .fetch() so far to get data from an API, but i learned about AXIOS and how can we get API data using AXIOS without resolving it into JSON, directly.
-I learned about PROXY and how to use it in vite(in-built proxy). It helps to resolve CORS error.
    server:{
       proxy:{
         '/api': 'http://localhost:3000',
       }
    },
