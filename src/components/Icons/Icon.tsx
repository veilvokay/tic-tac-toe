import './styles.scss'
import React from 'react'

interface Props {
    content: JSX.Element,
    className?: string,
}

export const Icon = ({content, className}: Props) => {
    
    return (
        <div
            className={`icon ${className ? className : ''}`}
        >
            {content}
        </div>
    )
}