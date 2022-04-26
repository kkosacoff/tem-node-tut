//Global variables can be accessed anywhere in the app

// __dirname = path to curr dir
// _filename = file name
// require = func to use modules
// module = info about current module (file)
// process = info about env where the program is being exec

console.log(__dirname)
setInterval(() => {
    console.log("Hello world")
}, 1000);