import React from 'react'

const InputForm = (props) => {
    return (
        <>
            <input className="input" type={props.type} placeholder={props.placeholder} {...props.register(`${props.inputName}`, props.options)} />
            {props.errors && props.onError()}
            {props.children}
        </>
    )
}

export {InputForm}