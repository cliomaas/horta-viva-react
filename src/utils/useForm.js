import { useEffect, useState } from 'react'

export function useForm(initialFValues, validateOnChange = true, validate, setEmptyFields) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        if (validateOnChange) { validate() }
    }, [values, validate, validateOnChange])


    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
        setEmptyFields(false)
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}