# TreeCount
An application for foresters and treeplanters to keep track of their seedlots and their plots

# Backend
The backend is built with the Graphene GraphQL framework sitting on top of a Python/Django framework

It is managed using pipenv

Getting things running:

1. Install pipenv
2. run migrate all the current migrations `pipenv run python manage.py migrate`
3. run server `pipenv run python manage.py runserver`
4. Go to `http://localhost:8000/graphql/` to start testing queries!


# Frontend
The frontend is built React-Native using Redux to handle state
It is managed using yarn
Getting things running:
1. Install Android Studio or Xcode and get an emulator running
2. Install yarn if you don't have it already
3. Run `yarn` in the home directory
4. Run `yarn start`, Expo should start in the browser
5. Start up an emulator
6. Choose the emulator you would like to run the app on from your browser

GOTCHAS:
1. Expo will not work on certain public wifi networks

** Note: This project uses Storybook for easily rendering and testing UI components
`npm run storybook`should build and run storybook in your browser
New stories should be placed in the directory that the component lives in with the filename *.js.stories.js
