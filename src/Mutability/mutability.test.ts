const incAge = (u: userTypePR) => {
    u.age++;
}

type userTypePR = {
    name: string
    age: number
    address: addressType
}

type addressType = {
    title: string
}

test("should show age", () => {

    let user: userTypePR = {
        name: "Bogdan",
        age: 35,
        address: {
            title: "Krakow"
        }
    };

    incAge(user)

    const supermen = user
    supermen.age = 1000;

    expect(user.age).toBe(1000);


})

test("should show Array", () => {

    let users = [
        {
            name: "Bogdan",
            age: 35
        },
        {
            name: "Alisa",
            age: 4
        },

    ];

    let admins = users;
    admins.push({name: "Luda", age: 37})


    expect(users.length).toBe(3);


})

test("should show value", () => {

    let usersCount = 100;

    let adminsCount = usersCount;


    adminsCount++

    expect(adminsCount).toBe(100);


})


test("should show new object", () => {

    const address = {
        title: "Krakow"
    }

    let user: userTypePR = {
        name: "Bogdan",
        age: 35,
        address: address
    };


    let user2: userTypePR = {
        name: "Natasha",
        age: 30,
        address: address

    }

    address.title = "Krakow-City"


    expect(user.address.title).toBe(user2.address.title);
    expect(user2.address.title).toBe("Krakow-City");


})


test("should show new Array", () => {

    const address = {
        title: "Krakow"
    }

    let user: userTypePR = {
        name: "Bogdan",
        age: 35,
        address: address
    };
    let user2: userTypePR = {
        name: "Natasha",
        age: 30,
        address: address

    }

    const users1 = [
        user, user2,
        {
            name: "Artur",
            age: 55,
            address: address
        }
    ];

    const admins1 = [user, user2]

    admins1[0].name = "BJ"
    address.title = "Krakow-City"


    expect(users1.length).toBe(3);
    expect(user2.name).toBe('Natasha');
    expect(users1[2].name).toBe('Artur');
    expect(admins1.length).toBe(2);
    expect(user.name).toBe('BJ');


})

test("should show sort", () => {

    const letters = ["c", "d", "a", "z", "e"];

    pass(letters)

    expect(letters).toEqual(["c", "d", "a", "z", "e"]);

})

function pass(letters: any) {

    const copyLetters = [...letters].sort();

}