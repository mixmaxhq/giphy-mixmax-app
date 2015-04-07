# Giphy Mixmax app

This is an open source Mixmax app. See <https://mixmax.com/blog/how-we-built-giphy> for details.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To test the JSON resolver, run:

```
curl -H "Content-Type: application/json" -X POST -d '{"src":"https://media2.giphy.com/media/iLM4h2qLVS7qo/giphy.gif","width":"300"}' http://localhost:3000/resolve
```
