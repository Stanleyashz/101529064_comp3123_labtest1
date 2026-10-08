console.log("COMP3123 - Lab Test 1 - Question 3: Remove Log files")

const fs = require("fs")
const path = require("path")

//Build the Logs directory path from the current working directory
const logsDir = path.join(process.cwd(), "Logs")

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir)

    //remove all the files and output the file names
    files.forEach(file => {
        console.log(`delete files...${file}`)
        fs.unlinkSync(path.join(logsDir, file))
    })

    //remove the Logs directory
    fs.rmdirSync(logsDir)
}
