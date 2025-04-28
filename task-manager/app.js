let taskManager = require("./taskManager");
let taskHandler = require("./fileHandler");
let path = require('path');


// absolute path to the file
const pathFile = path.join(path.resolve(__dirname), 'tasks.json');
console.log(path.resolve(__dirname));

let tasks = taskHandler.loadTasks(pathFile);
taskManager.listTask(tasks);
taskManager.addTask(tasks, "Put away groceries");
taskHandler.saveTasks(pathFile, tasks);
taskManager.listTask(tasks);
