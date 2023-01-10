export type userType = {
    name: string,
    hair: number
    address: { title: string }
};

export const makeHairStyle = (u: userType, power: number) => {

    const copyU = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copyU;
}

export const  moveUser= (u: userType) => {

    const copyU = {

    }

    return copyU;
}
