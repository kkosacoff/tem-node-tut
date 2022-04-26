// npm -global command, comes with node
// npm --version

//local dep - use it only in particular project
// npm i <packageName>

//global dep - use it in any project
//npm i -g <packageName>
//sudo npm install -g <packageName> //mac

//package.json - manifest file (stores imp info about project/package
//manual approach (create package.json in the root, create props)
//auto app, npm init, step by step
//npm init -y (default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);