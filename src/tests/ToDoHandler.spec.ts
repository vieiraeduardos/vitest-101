import { describe, test, expect, beforeAll } from "vitest";

import { ToDoHandler } from "../handlers/ToDoHandler";
import { ToDo, ToDoProps } from "../entities/todo";

let payload1: ToDoProps;
let payload2: ToDoProps;

beforeAll(() => {
    payload1 = { title: "Limpar a casa", createdAt: new Date(), isCompleted: false };
    payload2 = { title: "Cozinhar", createdAt: new Date(), isCompleted: false };

})

describe("ToDoHandler Module", () => {
    test("Should be a instance of ToDo", async () => {

        const todohandler = new ToDoHandler();

        const todo = await todohandler.create(payload1);

        expect(todo).toBeInstanceOf(ToDo);
    });

    test("Should list array of ToDos", async () => {
        const todohandler = new ToDoHandler();

        const todo = await todohandler.create(payload1);

        const todos = await todohandler.find();

        expect(todos.length).toBeGreaterThan(0);
    });

    test("Should delete a item from array of ToDos", async () => {
        const todohandler = new ToDoHandler();

        await todohandler.create(payload1);
        await todohandler.create(payload2);

        await todohandler.delete("Limpar a casa");

        const todos = await todohandler.find();

        expect(todos.length).toBe(1);
    });

    test("Should check completed a item from array of ToDos", async () => {
        const todohandler = new ToDoHandler();

        await todohandler.create(payload1);
        await todohandler.create(payload2);

        await todohandler.check("Limpar a casa");

        const todos = await todohandler.find();

        expect(todos[0].isCompleted()).toBeTruthy();
    });
});