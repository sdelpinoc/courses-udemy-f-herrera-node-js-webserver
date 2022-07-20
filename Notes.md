# Notes
- Created package.json with:
- `npm init -y`

- Added "type": "module" in package.json
- Added "start": "node app.js" in package.json -> "scripts"

- Added .env with PORT variable

## Installations
- [express](https://www.npmjs.com/package/express)
- `npm install express`

- [hbs](https://github.com/pillarjs/hbs)
- `npm install hbs`

- [dotenv](https://www.npmjs.com/package/dotenv)
- `npm install dotenv`

## Heroku
- heroku login
- heroku git:remote -a sdelpinoc-node-js-webserver
- git push heroku main
- https://sdelpinoc-node-js-webserver.herokuapp.com/

## react-app
- Use app-react.js file in package.json, "scripts" -> "start" command
- Changed the route of express static
- Changed the page not found route in app.get(*, )

## angular-app
- Use app-angular.js file in package.json, "scripts" -> "start" command
- Changed the route of express static
- Changed the page not found route in app.get(*, )