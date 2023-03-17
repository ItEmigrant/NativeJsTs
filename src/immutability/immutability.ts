export type userType = {
    name: string,
    hair: number,
    country: countryType
};

export type countryType = {
    address: addressType
}

export type addressType = {
    city: string,
    house: number
}

export type LaptopType = {
    title: string
}

export type userWithLaptopType = userType & {
    laptop: LaptopType
}
export type userWithBooksType = userType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };

export type CompaniesType = {
    companies: Array<CompanyType>
}


export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> },                                          userName: string,
                                   id: number,
                                   newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === id ? {...c, title: newTitle} : c)

    return companyCopy;

};

export const makeHairStyle = (u: userType, power: number) => {

    //copy.hair = u.hair / power
    return {
        ...u,
        hair: u.hair / power
    };
}

export const movedUser = (u: userWithLaptopType, city: string) => {

    return {
        ...u, country: {address: {...u.country.address, city: city}}

    };
}

export const upgradeUserLaptop = (u: userWithLaptopType, laptop: string) => {

    return {
        ...u, laptop: {...u.laptop, title: laptop}
    };
}

export const movedUserHouse = (u: userWithLaptopType & userWithBooksType, house: number) => {

    return {
        ...u, country: {address: {...u.country.address, house: house}}

    };
}

export const addUserBook = (u: userWithLaptopType & userWithBooksType, book: string[]) => {

    return {
        ...u, books: [...u.books, ...book, [u.books, book]]

    };
}

export const updateUserBook = (u: userWithLaptopType & userWithBooksType, book: string, newBook: string) => {

    return {
        ...u, books: [...u.books.map(e => e === book ? newBook : e)]

    };
}

export const removeUserBook = (u: userWithLaptopType & userWithBooksType, book: string) => {

    return {
        ...u, books: [...u.books.filter(e => e !== book)]

    };
}

export const addCompany = (u: userWithLaptopType & CompaniesType, newCompany: string) => {

    return {
        ...u, companies: [...u.companies, {id: 4, title: newCompany}]

    };
}

export const updateCompany = (u: CompaniesType, id: number, newCompany: string) => {

    return {
        ...u, companies: u.companies.map(el => el.id === id ? {...el, title: newCompany} : el)

    }

};

