export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address:addressType
    technologies: Array<technologiesType>

}
type  addressType = {
    streetTitle: string
    city: localCityType
}
type localCityType = {
    title: string,
    countryTitle:string

}
type technologiesType = {
    id: number
    title: string
}

export const student: studentType = {
    id:1,
    name: "Bogdan",
    age: 35,
    isActive: false,
    address: {
        streetTitle: "Krygowskiego",
        city: {
            title: "Krakow",
            countryTitle: "Poland"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "React"
        },
        {
            id: 3,
            title: "Java Script"
        }

    ]
}
