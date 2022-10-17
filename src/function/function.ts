import {studentType} from "../object/objectStudy";
import {CityType, governmentBuildingsType, housesType} from "../object/objectStudyTests";


export const addSkill = (student: studentType, skill: string) => {

    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}

export function changeSkill(s: studentType) {

    s.isActive = true;
}

export function changeStatusCity(st: studentType, city: string) {

   return  st.address.city.title === city

}

export  const addMoneyToBudget =  (governmentBuildings:governmentBuildingsType, budget:number) => {

    return governmentBuildings.budget += budget;

}

export function repairHouse(houses:housesType) {

    return houses.repaired = true;

}

export const toFireStaff = (governmentBuildings:governmentBuildingsType, staff:number) => {

    governmentBuildings.staffCount -= staff;

}

export const toHireStaff = (governmentBuildings:governmentBuildingsType, staff:number) => {

    governmentBuildings.staffCount += staff;

}

export function createMessage(props: CityType) {

return `Hello ${props.title} brothers!`;

}

