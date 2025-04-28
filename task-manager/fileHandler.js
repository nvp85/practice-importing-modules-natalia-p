const fs = require('fs');

function saveTasks(filePath, tasks) {
    tasks = JSON.stringify(tasks);
    fs.writeFileSync(filePath, tasks);
}

function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log('The file doesn\'t exist');
        return;
    }
    let tasks = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(tasks);
}

module.exports = {saveTasks, loadTasks};