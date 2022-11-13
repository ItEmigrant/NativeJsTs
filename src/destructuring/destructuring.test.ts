import {propsPT} from "./destructuring";


let props: propsPT;


beforeEach(() => {

    props = {
        name: "Bogdan",
        age: 35,
        lessons: [
            {title: '1'}, {title: '2'},
            {title: '3', name:"react"}
        ],
        address: {
            street: {
                title: "RedDragon"
            }
        }

    }
})


test("", () => {

    /*const age = props.age;
    const lesson = props.lessons;*/

    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(35);
    expect(lessons).toBe(props.lessons);
    expect(lessons.length).toBe(2);
    expect(title).toBe("RedDragon");
    expect(title.length).toBe(9);

})

test("Array", () => {

    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [,ls2, ...restLesson] = props.lessons


    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    /*expect(ls1.title).toBe("1")*/
    expect(restLesson.length).toBe(1)
    expect(restLesson[0].title).toBe("3")
    expect(restLesson[0].name).toBe("react")
    expect(restLesson[0]).toStrictEqual({ name:"react", title: '3'})
   expect(ls2.title).toBe("2")
  /* expect(ls3.title).toBe("3")*/


})