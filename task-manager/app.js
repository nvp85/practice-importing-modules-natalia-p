let taskManager = require("./taskManager");
let taskHandler = require("./fileHandler");
let path = require('path');


// path to the file
const pathFile = path.join(path.resolve(__dirname), 'tasks.json');
console.log(path.resolve(__dirname));

let tasks = taskHandler.loadTasks(pathFile);
console.log("Existing tasks:");
taskManager.listTask(tasks);
taskManager.addTask(tasks, "Put away groceries");
taskManager.addTask(tasks, "Put away groceries");
taskHandler.saveTasks(pathFile, tasks);
console.log("Tasks after we added a new one:");
taskManager.listTask(tasks);