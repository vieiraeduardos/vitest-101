import { ToDo } from "../entities/todo";

export class ToDoRepository {
    private db: Array<ToDo>;

    constructor() {
        this.db = [];
    }

    insert(todo: ToDo): boolean {
        this.db.push(todo);

        return true;
    }

    findAll(): Array<ToDo> {
        return this.db;
    }

    deleteByTitle(title: string): boolean {
        this.db = this.db.filter(todo => {
            return todo.getTitle() != title
        });

        return true;
    }

    checkCompleted(title: string): boolean {
        this.db.map(todo => {
            if(todo.getTitle() == title) {
                todo.check();
            }
        });

        return true;
    }
}