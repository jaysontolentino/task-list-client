import { useState } from 'react'

export const useForm = function(callback: () => any, state = {}) {
    const [data, setData] = useState(state)

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        callback()
    }

    return {
        data,
        onChange,
        onSubmit
    }
}