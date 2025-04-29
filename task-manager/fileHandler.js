const fs = require('fs');

function saveTasks(filePath, tasks) {
    tasks = JSON.stringify(tasks);
    fs.writeFileSync(filePath, tasks);
    console.log("The tasks have been saved to the file.");
}

function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log('INFO: The file doesn\'t exist. If you save your tasks a new file will be created.');
        return [];
    }
    let tasks = fs.readFileSync(filePath, 'utf-8');
    console.log("The tasks have been loaded from the file.");
    return JSON.parse(tasks);
}

module.exports = {saveTasks, loadTasks};