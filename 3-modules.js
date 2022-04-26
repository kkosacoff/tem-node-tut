//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share min)

const names = require('./4-namesFirstMod')
const sayHi = require('./5-utilsSecondMod')
const data = require('./6-alternative-flavor')


require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)