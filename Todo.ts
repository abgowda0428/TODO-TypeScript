// Define the structure of a todo item
class TodoItem {
    constructor(public task: string, public isComplete: boolean = false) {}
}

class TodoList {
    private todos: TodoItem[] = [];

    addTask(task: string): void {
        const newTodo = new TodoItem(task);
        this.todos.push(newTodo);
        console.log(`Task added: ${task}`);
    }

    markComplete(index: number): void {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index].isComplete = true;
            console.log(`Task marked as complete: ${this.todos[index].task}`);
        } else {
            console.log("Invalid task index");
        }
    }

    listTasks(): void {
        console.log("Your Todo List:");
        this.todos.forEach((todo, index) => {
            const status = todo.isComplete ? "[X]" : "[ ]";
            console.log(`${index + 1}. ${status} ${todo.task}`);
        });
    }
}

// Usage
const myTodoList = new TodoList();

// Simulating user input
myTodoList.addTask("Learn TypeScript");
myTodoList.addTask("Build a Todo List app");
myTodoList.listTasks();
myTodoList.markComplete(0);
myTodoList.listTasks();