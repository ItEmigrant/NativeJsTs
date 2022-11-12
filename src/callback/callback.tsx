/*const callback = () => {
    alert("Hello World")
}
window.setTimeout(callback, 1000);*/

import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const DellUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);

    }
    /* const SaveUser = () => {
         alert("User hello")
     }*/

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("FOCUS LOST!!!")
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed: ${event.currentTarget.value}`)
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}>
        Dima
        </textarea>
        <button name="DElETE" onClick={DellUser}>
            DELL
        </button>

        {/* <button name="Save" onClick={DellUser}>
            X
        </button>*/}
        <div>
            <input onChange={onAgeChanged} type={"number"}/>
        </div>
    </div>

}