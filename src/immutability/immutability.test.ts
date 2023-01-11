import {makeHairStyle, movedUser, userType, userWithLaptopType} from "./immutability";


test("type test", () => {
    let user: userType = {
        name: "Bogdan",
        hair: 32,
        address: {
            city: "Krakow",
            house: 12
        }
    };

    const cutUser = makeHairStyle(user, 2)


    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address);
})


test("change address", () => {
    let user: userWithLaptopType = {
        name: "Bogdan",
        hair: 32,
        address: {
            city: "Krakow",
            house: 12

        },
        laptop: {
            title: "Huawei"
        }
    };

    const cutUser = movedUser(user, "Kiev");


    expect(user).not.toBe(cutUser);
    expect(user.address).not.toBe(cutUser.address);
    expect(cutUser.address.city).toBe("Kiev");
    expect(user.laptop).toBe(cutUser.laptop);

})

