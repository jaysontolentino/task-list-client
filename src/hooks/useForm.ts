import React, { useState } from 'react'

export const useForm = function(callback: () => any, state = {}) {
    const [data, setData] = useState(state)
    const [error, setError] = useState('')

    function onChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setError('')
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        callback()
    }

    function reset(initialValue: object | any) {
        setData(initialValue)
        setError('')
    }

    return {
        data,
        error,
        onChange,
        onSubmit,
        setError,
        reset
    }
}