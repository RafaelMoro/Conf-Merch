import React from 'react'

const ErrorMessage = ({message, cssClass}) => (<p className={`message message--fade-in ${cssClass}`}>{message}</p>)

export {ErrorMessage}