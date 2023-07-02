import { FC } from "react"
import { FormFieldProps } from "@utilities/form.types"

import { 
    DevFormField,
    DevFormLabel,
    DevFormLabelText,
    DevFormLabelInput
} from "../dev-form-styled"

import { 
    ErrorSVG,
    WarningSVG
} from "../../ui/svg"

const FormField : FC<FormFieldProps> = ({title, placeholder, register, errors}) => {
    const tag = title.toLowerCase()
    return (
        <DevFormField>
            <DevFormLabel htmlFor={tag}>
                <DevFormLabelText>{title}</DevFormLabelText>
            </DevFormLabel>
            <DevFormLabelInput {...register(tag)} 
            id={tag} type="text" placeholder={(placeholder ? placeholder : `valid ${tag}`)} 
            className={`
            ${errors[tag] && 'invalid'}
            `}/>
            {errors[tag]?.message && 
                <div className="alert alert-warning mt-2">
                    <WarningSVG />
                    <span>{errors[tag]?.message?.toString()}</span>
                </div>}
        </DevFormField>   
   )
}

export default FormField