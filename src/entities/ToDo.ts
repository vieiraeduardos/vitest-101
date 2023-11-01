export interface ToDoProps {
    title: string,
    createdAt: Date,
    isCompleted: boolean
}

export class ToDo {
    private props: ToDoProps;

    constructor(props: ToDoProps) {
        this.props = props;        
    }

    getTitle() {
        return this.props.title;
    }

    getCreatedAt() {
        return this.props.createdAt;
    }

    isCompleted() {
        return this.props.isCompleted;
    }

    check() {
        this.props.isCompleted = true;
    }
}