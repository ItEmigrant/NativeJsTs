import {
    addCompany,
    addUserBook, CompaniesType, CompanyType,
    makeHairStyle,
    movedUser, movedUserHouse, removeUserBook, updateCompany, updateCompanyTitle, updateUserBook,
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

test(" update book", () => {
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


    const cutUser = updateUserBook(user, "H.Ford", "LIFE");

    expect(user).not.toBe(cutUser);
    expect(user.books).not.toBe(cutUser.books)
    expect(cutUser.books[2]).toBe('LIFE')
    expect(cutUser.books[0]).toBe('Artur')
    expect(user.books[2]).toBe('H.Ford')


})

test(" remove book", () => {
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


    const cutUser = removeUserBook(user, "War");

    expect(user).not.toBe(cutUser);
    expect(user.books).not.toBe(cutUser.books)
    expect(cutUser.books[1]).toBe('H.Ford')
    expect(cutUser.books.length).toBe(2)
    expect(user.books.length).toBe(3)
    expect(user.books[1]).toBe("War")

})

test(" user work in companies", () => {
    let user: userWithLaptopType & CompaniesType = {
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
        companies: [
            {id: 1, title: "Apple"},
            {id: 2, title: "Samsung"},
            {id: 3, title: "Nokia"}
        ]
    };


    const cutUser = addCompany(user, "Tesla");

    expect(user).not.toBe(cutUser);
    expect(user.companies).not.toBe(cutUser.companies)

    expect(cutUser.companies.length).toBe(4)
    expect(user.companies.length).toBe(3)
    expect(cutUser.companies[3].title).toBe("Tesla")

})

test("update companies", () => {
    let user: userWithLaptopType & CompaniesType = {
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
        companies: [
            {id: 1, title: "Apple"},
            {id: 2, title: "Samsung"},
            {id: 3, title: "Nokia"}
        ]
    };


    const cutUser = updateCompany(user, 2, "BMW") as userType & CompaniesType;

    expect(user).not.toBe(cutUser);
    expect(user.companies).not.toBe(cutUser.companies)
    expect(cutUser.companies.length).toBe(3)
    expect(user.companies.length).toBe(3)
    expect(cutUser.companies[1].title).toBe("BMW")
    expect(user.companies[1].title).toBe("Samsung")

})

test("update company AA", () => {
    let companies = {
        "firm": [
            {id: 1, title: "Apple"},
            {id: 2, title: "Samsung"},
            {id: 3, title: "Nokia"}
        ],
        "org": [
            {id: 1, title: "AT club"},
        ]
    }

    const copy = updateCompanyTitle(companies, "firm", 3, "Tesla") as {[key: string]: Array<CompanyType>    }

    expect(companies).not.toBe(copy);
    expect(copy['org']).toBe(companies['org']);
    expect(copy.firm.length).toBe(3)
    expect(companies.org.length).toBe(1)
    expect(copy["firm"][2].title).toBe("Tesla")
    expect(companies['firm'][2].title).toBe("Nokia")
    expect(companies.org[0].title).toBe("AT club")

})