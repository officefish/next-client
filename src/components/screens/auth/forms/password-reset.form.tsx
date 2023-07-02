import { FC } from "react"
import { FormTokenProps } from "@utilities/form.types"
import FormField from "@/components/form/dev/field"
import SubmitButton from "@/components/form/dev/button"
import HiddenFormField from "@/components/form/dev/hidden.field"

import { 
    DevForm,
    DevSubmitWrapper,
    DevSubmitButton
} from "@/components/form/dev-form-styled"

const PasswordResetForm : FC<FormTokenProps> = ({   title, 
    register, 
    handleSubmit, 
    submitHandler, 
    errors,
    email,
    expires,
    token
}) => {
    
    console.log(email, expires, token)
    return (
        <DevForm onSubmit={handleSubmit(submitHandler)}>
            <FormField title='Password' 
                register={register} errors={errors} />
            <HiddenFormField 
                title='Email' value={email} 
                register={register} errors={errors} />
            <HiddenFormField 
                title='Expires' value={expires} 
                register={register} errors={errors} />
            <HiddenFormField 
                title='Token' value={token} 
                register={register} errors={errors} />
            <DevSubmitWrapper>
                <DevSubmitButton>{title}</DevSubmitButton>
            </DevSubmitWrapper>
        </DevForm>
   )
}

export default PasswordResetForm