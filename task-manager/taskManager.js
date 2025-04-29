function addTask(tasks, task) {
    if (tasks.includes(task)) {
        console.log(`The task "${task}" is already in the list.`);
        return;
    }
    tasks.push(task);
    console.log(`The task "${task}" is added successfully.`)
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