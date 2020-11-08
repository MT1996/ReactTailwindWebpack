import * as React from "react";
import { TodoList } from "../TodoListComponent/TodoList.Component";
import { AddTodoItem } from "../AddTodoItemComponent/AddTodoItem.Component";

export const App : React.FC = () => {

    return (
        <div className={"w-full pl-4 pr-4"}>
            <div className={"flex flex-row -mr-4 -ml-4"}>
                <TodoList />
                <AddTodoItem />
            </div>
        </div>
    )
}