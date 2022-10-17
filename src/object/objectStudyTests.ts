
export  type streetType = {
    title: string
}

export type AddressType = {
    number:number
    street: streetType

    }
export type housesType = {
    buildedAt: number
    repaired:boolean
    address: AddressType

}

export type StreetType = {
    title: string
}
export type addressType = {
    street: StreetType
}
export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount:number
    address: addressType
}


export type CityType = {
    title: string
    houses: Array<housesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number


}