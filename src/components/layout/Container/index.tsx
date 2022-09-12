import './styles.scss'
import React from 'react'

interface Props extends React.PropsWithChildren {
    className?: string,
}

const Container = (props: Props) => {
    const { children, className } = props;
    return (
        <div className={`container ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Container

export const FlexContainer = () => <Container className='flex' />