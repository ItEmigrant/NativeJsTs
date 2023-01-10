import {makeHairStyle, moveUser, userType} from "./immutability";


test("type test", () => {
    let user: userType = {
        name: "Bogdan",
        hair: 32,
        address: {
            title: "Krakow"
        }
    };

    const cutUser = makeHairStyle(user, 2)


    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address);
})


/*test("copy test", () => {
    let user: userType = {
        name: "Bogdan",
        hair: 32,
        address: {
            title: "Krakow"
        }
    };

    const cutUser = moveUser(user, "Kiev")

    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address);
})*/

