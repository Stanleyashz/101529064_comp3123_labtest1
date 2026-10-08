console.log("COMP3123 - Lab Test 1 - Question 3: Create Log files")

const fs = require("fs")
const path = require("path")

//Build the Logs directory path from the current working directory
const logsDir = path.join(process.cwd(), "Logs")

//create the Logs directory, if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

//change the current process to the new Logs directory
process.chdir(logsDir)

//create 10 log files, write some text and output the file names
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.writeFileSync(path.join(process.cwd(), fileName), `This is log file ${i}`)
    console.log(fileName)
}
