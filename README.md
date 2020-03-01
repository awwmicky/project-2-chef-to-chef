# Project 2 - Chef To Chef

## Team Members:

- [Micky F. Alvarez](https://github.com/awwmicky) | `Project Lead`
- [Huan Nguyen](https://github.com/huancal) | `Front-End`
- [Herman Liu](https://github.com/hermsicle) | `Front-End`
- [Lawrence Nan](https://github.com/LarryYuki) | `Back-End`
- [Wilson Wong](https://github.com/wilsonwong1) | `Back-End`


## Summary of App: 

We want to make a personal chef web app, which allows skillful Cooks to sign up as a Personal Chef and do catering for users' in the Bay Area.

Users can go to the site to view Personal Chefs around their area & select the chef to cater their meal. Then after the meal has been made, the User can review them.


## Minimum Requirement for our App: 

- Build database for chef profiles
- users login and use POST and GET to add or update database.


## Bonuses for the App: 

We can expand on it by adding a sign up feature for both users and chefs in separate html pages.

Also, we can link recipes with chef's specialities.



### Clone Repo Setup:

- `npm init` & `npm install`
    - open terminal/git-bash
    - execute init, then install
- create an `.env` file (remove quotes)
    - `DB_USER_LOCAL = "username"`
    - `DB_PASS_LOCAL = "password"`
    - `DB_NAME_LOCAL = "database"`
    - `DB_HOST_LOCAL = "hostname"`
- execute `schema.sql` file
    - go to `./app/database/schema.sql`
    - open file on mySQL workbench
    - connect to Local instance
    - highlight all code (2 lines)
    - run code (once)
        - `CTRL + SHIFT + ENTER`
- once all 3 three is complete:
    - npm run dev