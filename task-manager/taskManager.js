function addTask(tasks, task) {
    tasks.push(task);
}

function listTask(tasks) {
    if (tasks.length == 0) {
        console.log("The list is empty.");
    }
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i+1} ${tasks[i]}`);
    }
}

module.exports = {addTask, listTask};