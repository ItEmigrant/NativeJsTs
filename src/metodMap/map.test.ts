import {createGreetingMessages, ManType} from "./map";

let people: Array<ManType> = [
    {name: "Andre Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Bogdan Sol", age: 18},
]
beforeEach(() => {

    people = [
        {name: "Andre Ivanov", age: 33},
        {name: "Alex Petrov", age: 24},
        {name: "Bogdan Sol", age: 18},
    ]
})

test("should get array greeting messages", ()=>{

    const messages=createGreetingMessages(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Andre. Hello developers! ');
    expect(messages[1]).toBe('Alex. Hello developers! ');
    expect(messages[2]).toBe('Bogdan. Hello developers! ');

})



