import React from 'react'

interface Props extends React.PropsWithChildren {
    id?: string,
    className?: string,
}

const Page = (props: Props) => {
    const { className, children } = props;
    return (
        <div id={`${props.id ? props.id : ''}`} className={`page ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Page