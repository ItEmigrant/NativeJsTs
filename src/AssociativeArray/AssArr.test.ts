type userPType = {
    [key: string]: { id: number, name: string }
}

export let users: userPType

beforeEach(() => {

    users = {
        '1': {id: 1, name: "Dima"},
        "1012": {id: 1012, name: "Bogs"},
        " 14403": {id: 14403, name: "Artur"},
        "104": {id: 104, name: "Tor"},

    };
})

test("should update user", () => {

    users['1'].name = 'Dmitrii'


    expect(users['1']).toEqual({id: 1, name: "Dmitrii"});


})

test("should delete user", () => {

    delete users['104']


    expect(users['104']).toBe(undefined)

})


