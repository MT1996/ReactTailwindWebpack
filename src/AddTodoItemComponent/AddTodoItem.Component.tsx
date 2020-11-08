import * as React from "react";

export const AddTodoItem : React.FC = () => {


    let handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event);
    }

    let changingPriorityLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event);
    }

    return (
        <div className={"w-1/2 px-4"}>
            <h2 className={"text-3xl text-left mb-8"}>Neues Todo-Item Hinzufügen</h2>
            <form className={"w-full flex flex-col form"} onSubmit={handleSubmit}>
                <input className={"input input-default"} value={""} placeholder={"Titel..."} type={"text"} name={"title"} />
                <textarea className={""} value={""} placeholder={"Beschreibung..."} />
                <select onChange={changingPriorityLevel}>
                    <option value={"critical"}>Dringend</option>
                    <option value={"major"}>Wichtig</option>
                    <option value={"moderate"}>Mittel</option>
                    <option value={"low"}>Unwichtig</option>
                </select>
                <button className={"pl-8 pr-8 pt-3 pb-3"} type={"submit"}>Eintrag hinzufügen</button>
            </form>
        </div>
    )
}