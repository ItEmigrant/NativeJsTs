/*const callback = () => {
    alert("Hello World")
}
window.setTimeout(callback, 1000);*/


export const User = () => {

    const DellUser = () => {
        alert("Delete User")
    }
    const SaveUser = () => {
        alert("User hello")
    }


    return <div> Dima
        <div onClick={DellUser}>Dell</div>
        <button onClick={SaveUser}>Save</button>
    </div>

}