This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a [Code Challenge](https://github.com/CollectiveDS/frontend-programming-assignment-v2)

Notes/Task
----------

Feel free to npm install any other JS/CSS libraries you'd like *, but React is a requirement.

* no transpilers are allowed (Coffee/TypeScript/etc)


Load data.json Async using [superagent]()

Create a table view and allow sorting based on column headers

EX: Clicking the "Views" heading should sort by views ascending. Clicking it again sorts by views descending. Etc.

Adding Loaders
--------------

Wanted to add custom loaders for SASS and CSS MODULES & Numeral for formatting dates and numbers

```
npm i --save-dev extract-text-webpack-plugin sass-resources-loader sass-loader node-sass numeral
```

```
npm run eject
```

So I could modify the webpack.config.dev.js file. I did not change anything to the production file.