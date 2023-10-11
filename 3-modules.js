//MODULES
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names")
const SayHi = require("./5-utils")
const data = require("./6-alternative-flavour")
require("./7-MindGernade")

SayHi ("Muhammad")
SayHi (names.Muhammad)
SayHi (names.abdullah)