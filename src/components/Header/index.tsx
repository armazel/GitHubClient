import * as React from 'react';

type HeaderProps = {
    title: string,
    className?: string,
};

export const Header: React.FunctionComponent<HeaderProps> = ({title, className}) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}