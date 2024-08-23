
import { FieldValues, UseFormRegister } from "react-hook-form"

export interface InputStyledPropType {
    variant:'normal' | 'styled' | 'borderless'
    placeholder?:string
    maxLength?:number
    minLength?:number
    pattern?:string
    type?:string
    value?:string
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void 
    disabled?:boolean



}
export interface InputPropsType {
    type:string,
    name: string,
    placeholder: any,
    register : UseFormRegister<any>
    variant:'normal' | 'styled' |'borderless'
    maxLength?:number
    minLength?:number
    pattern?:string
    value?:string
    disabled?:boolean
}

