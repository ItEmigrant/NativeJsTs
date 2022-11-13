import React, {useState} from 'react';

export type propsPT = {
    name: string
    age: number
    lessons: Array<lessonsPT>
    address: addressPT
}

export type lessonsPT = {
    title: string
    name?: string
}

export type addressPT = {
    street: streetPropsType
}
export type streetPropsType = {
    title: string
}

type PropsType = {
    title: string
    props: propsPT
    food:Array<string>
    car: {model: string}

}


/*function useBogdan(m:string) {
    return[m, function (){}]

}*/

/*const [message, setMessage] = useState("hello")*/

export const Destructuring: React.FC<PropsType> = ({title, props, ...restProps}) => {

   /* const { title, props:{name}} = props;*/
    /*const {name} = props.props*/
   /* const {title, props:{name}, ...restProps} = props;*/


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.name}
                {restProps.car.model}
                {restProps.food}
            </div>

        </div>
    );
};

