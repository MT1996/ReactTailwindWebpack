import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello : React.FC<HelloProps> = ({compiler, framework}) => {

    return (
        <>
            <h1 className={"text-red-500"}>Hello from {compiler} and {framework}!</h1>
            <h2 className={"bg-teal-100"}>This combination is just awesome to code with...</h2>
        </>
    );
}