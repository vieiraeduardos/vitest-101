import { describe, test, expect } from "vitest";
import { ToDo, ToDoProps } from "../entities/todo";

describe("ToDo Module", () => {
    test("Should be a instance of ToDo", () => {
        const todo = new ToDo({ title: "Limpar a casa", createdAt: new Date(), isCompleted: false });

        expect(todo).toBeInstanceOf(ToDo);
    });

    test("Should have property´s value createdAt equal to payload'", () => {
        const payload: ToDoProps = { title: "Limpar a casa", createdAt: new Date(), isCompleted: false };
        const todo = new ToDo(payload);

        expect(todo.getCreatedAt()).toBe(payload.createdAt);
    });

    test("Should have a property´s title equal to payload", () => {
        const payload: ToDoProps = { title: "Limpar a casa", createdAt: new Date(), isCompleted: false };
        const todo = new ToDo(payload);

        expect(todo.getTitle()).toBe(payload.title);
    });

    test("Should have a property´s isCompleted equal to payload", () => {
        const payload: ToDoProps = { title: "Limpar a casa", createdAt: new Date(), isCompleted: false };
        const todo = new ToDo(payload);

        expect(todo.isCompleted()).toBe(payload.isCompleted);
    });
});