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