# Tools Setup

## Project Lead
- does stuff

## Front-End

- working within `views/` folder
- working with `controllers/clientRoutes.js`
- **DO NOT** edit specific folders/files
    - `hbs-engine/` | `tmpl-default/` | `tmpl-parts/`
    - `assets/fonts/` | `assets/images/icons/`
    - `assets/CSS/parts/` | CSS → `reset.css`
- adding new files
    - maintain the same [ file-name ]
        - for each file: HBS | CSS | JS
        - e.g: `home.hbs` | `home.css` | `home.js`
    - res.render( '[ file-name ].hbs', { [ obj-data ] } )
        - e.g:
        `
        res.render('home.hbs', {
            title: 'home',
            style: 'home.css',
            script: home.js 
        })
        `

## Back-End

- working within `controllers/api-routes/` & `database/` folders
- **DO NOT** edit specific folders/files
    - `database/config/` | `database/seeders/`
    - `database/models/index.js`
- adding new files
    - [ api_name ] + Routes + .js
    - [ Model_name ] + .js
-