import {studentType} from "../object/objectStudy";
import {addSkill, changeSkill, changeStatusCity} from "./function";

let student: studentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Bogdan",
        age: 35,
        isActive: false,
        address: {
            streetTitle: "Krygowskiego",
            city: {
                title: "Krakow",
                countryTitle: "Poland"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "React"
            },
            {
                id: 3,
                title: "Java Script"
            }

        ]
    }
})

test("new tech skill should added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "CSS");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("CSS")
    expect(student.technologies[3].id).toBeDefined()

})

test("student should be active", () => {
    expect(student.isActive).toBe(false)
    changeSkill(student);

    expect(student.isActive).toBe(true)

})

test("student should be status city", () => {

   let result1 = changeStatusCity(student, "Warszawa");
   let result2= changeStatusCity(student, "Krakow");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})
