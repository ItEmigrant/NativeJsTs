import {governmentBuildingsType, housesType} from "../object/objectStudyTests";

export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: "Andre Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Bogdan Sol", age: 18},
]

/*const Transformator = (man: ManType) => {
    return {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    };*/

const Transformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
});
const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alex',
        lastName: 'Petrov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Bogdan',
        lastName: 'Sol',
    },
];
const devs2 = [
    Transformator(people[0]),
    Transformator(people[1]),
    Transformator(people[2]),
]

/*const devs3 = people.map(Transformator)

const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));*/


/*const messages = people.map(man => `${man.name.split(" ")[0]}. Hello developers! `)*/

export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map(man => `${man.name.split(" ")[0]}. Hello developers! `)
}

export const getStreetsTitlesOfGovernmentBuildings = (Buildings: Array<governmentBuildingsType>) => {
    return Buildings.map(b => b.address.street.title)

}

export const getStreetsTitlesOfHouses = (houses: Array<housesType>) => {
    return houses.map(h => h.address.street.title);

}

export const createGreetingMessages1 = (houses: Array<housesType>) => {
    let callbackfn = (s: housesType) => {

        return `hello citizens ${s.address.street.title}`
    };

    let newArray = houses.map(callbackfn)
    return newArray;
}