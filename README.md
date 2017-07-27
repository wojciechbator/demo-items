Author:
  Wojciech Bator

Overview:
  Simple demo app that takes the data from Sienn api, enables
  logging in and displays list of products.

Notes from author:
  Since this is very small and basic app I decided to use MobX
  instead of Redux as state container, as it is much easier to
  implement on such scale. To enjoy mobx fully make sure, You
  have installed MobX development tools in browser. However -
  MobX doesn't implement action creators and reducers as Redux,
  therefore developer has to create more logic methods inside
  React container to properly handle logic, that would normally
  be handled with dispatch() method from redux-thunk. This app is 
  modular and ready to extend with new domains such as registration,
  new elements and pages. Styling is a bit minimal, but at least
  there are not much duplicates and useless properties.

  Running the app:
  Make sure You have the following:
   - Node.js (the best is >= 8.0.0)
   - npm/yarn (yarn is better, but You can still use npm)
  Enter the main app dir, where package.json resides. Issue following:
   - npm i && npm start
  Or in yarn's case (faster install and caching the dependencies):
   - yarn install && yarn start

  Have fun and wait for token expiration :)
