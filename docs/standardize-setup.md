# Standardize Setup

## Front-End

^ `./views/` folder
- make 3 files with the same name
    - ./assets/CSS → `[ file-name ].css`
    - ./assets/JS → `[ file-name ].js`
    - views → `[ file-name ].hbs`

## Back-End

^ `./server.js` file
- make a middleware fn with same name
    - `const [ model-name ] + Routes`
        - `require('./controllers/api-routes'/`...
        - ...`[ model-name ] + Routes + .js)`
    - `app.use('/api', [ model-name ] + Routes)`

^ `./controllers/api-routes/` folder
- make a route file with the same name
    - `[ model-name ] + Routes + .js`

^ `./models` folder
- make a model file with the same name
    -`[ Model-Name ] + .js`