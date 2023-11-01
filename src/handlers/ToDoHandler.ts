import { ToDo, ToDoProps } from "../entities/todo";
import { ToDoRepository } from "../repositories/ToDoRepository";

export class ToDoHandler {
    private repository: ToDoRepository;

    constructor() {
        this.repository = new ToDoRepository();
    }

    async create(payload: ToDoProps): Promise<ToDo> {
        const todo = new ToDo(payload);
        
        this.repository.insert(todo);
        
        return todo;
    }

    async find(): Promise<Array<ToDo>> {        
        const todos = this.repository.findAll();
        
        return todos;
    }

    async delete(title: string): Promise<boolean> {
        return this.repository.deleteByTitle(title);
    }

    async check(title: string): Promise<boolean> {
        return this.repository.checkCompleted(title);
    }
}