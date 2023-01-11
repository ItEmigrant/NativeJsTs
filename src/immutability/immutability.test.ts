import {makeHairStyle, movedUser, upgradeUserLaptop, userType, userWithLaptopType} from "./immutability";


test("type test", () => {
    let user: userType = {
        name: "Bogdan",
        hair: 32,
        country: {
            address: {
                city: "Krakow",
                house: 12,
            }
        }
    };

    const cutUser = makeHairStyle(user, 2)


    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.country).toBe(user.country);
})


test("change address", () => {
    let user: userWithLaptopType = {
        name: "Bogdan",
        hair: 32,
        country: {
            address: {
                city: "Krakow",
                house: 12

            }
        },
        laptop: {
            title: "Huawei"
        }
    };

    const cutUser = movedUser(user, "Kiev");

    expect(user).not.toBe(cutUser);
    expect(user.country.address.city).not.toBe(cutUser.country.address.city);
    expect(cutUser.country.address.city).toBe("Kiev");
    expect(user.country.address.city).toBe("Krakow");
    expect(user.laptop).toBe(cutUser.laptop);

})

test("upgrade laptop to macbook", () => {
    let user: userWithLaptopType = {
        name: "Bogdan",
        hair: 32,
        country: {
            address: {
                city: "Krakow",
                house: 12
            }

        },
        laptop: {
            title: "Huawei"
        }
    };

    const cutUser = upgradeUserLaptop(user, "macbook");

    expect(user).not.toBe(cutUser);
    expect(user.country.address).toBe(cutUser.country.address);
    expect(user.laptop).not.toBe(cutUser.laptop);
    expect(cutUser.laptop.title).toBe("macbook");
    expect(user.laptop.title).toBe("Huawei");


})