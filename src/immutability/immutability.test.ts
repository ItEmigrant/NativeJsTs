import {
    addUserBook,
    makeHairStyle,
    movedUser, movedUserHouse,
    upgradeUserLaptop,
    userType,
    userWithBooksType,
    userWithLaptopType
} from "./immutability";


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

test("upgrade user house", () => {
    let user: userWithLaptopType & userWithBooksType = {
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
        },
        books: ["Artur", "War", "H.Ford"]
    };

    const cutUser = movedUserHouse(user, 88);

    expect(user).not.toBe(cutUser);
    expect(user.country.address).not.toBe(cutUser.country.address);
    expect(user.laptop).toBe(cutUser.laptop);
    expect(cutUser.laptop.title).toBe("Huawei");
    expect(user.country.address.house).toBe(12);
    expect(cutUser.country.address.house).toBe(88);
    expect(user.books).toBe(cutUser.books)


})

test("add book", () => {
    let user: userWithLaptopType & userWithBooksType = {
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
        },
        books: ["Artur", "War", "H.Ford"]
    };

    const cutUser = addUserBook(user, ["Cars and sex", "JavaScript"]);

    expect(user).not.toBe(cutUser);
    expect(user.country.address).toBe(cutUser.country.address);
    expect(user.laptop).toBe(cutUser.laptop);
    expect(cutUser.laptop.title).toBe("Huawei");
    expect(user.country.address.house).toBe(12);
    expect(cutUser.country.address.house).toBe(12);
    expect(user.books).not.toBe(cutUser.books)
    expect(cutUser.books[3]).toBe('Cars and sex')
    expect(cutUser.books[4]).toBe('JavaScript')


})

