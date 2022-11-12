test("", () => {
    let props = {
        name: "Bogdan",
        age: 35,
        lessons: [{title: '1'}, {title: "2"}],
        address: {
            street: {
                title: "RedDragon"
            }
        }

    }
    /*const age = props.age;
    const lesson = props.lessons;*/

    const {age, lessons} = props;
    const {title} = props.address.street

    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(35);
    expect(lessons).toBe(props.lessons);
    expect(lessons.length).toBe(2);
    expect(title).toBe("RedDragon")

    expect(a).toBe(35);
    expect(l).toBe(props.lessons);
    expect(l.length).toBe(2);

})