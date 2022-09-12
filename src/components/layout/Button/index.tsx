import './style.scss';

import React, { CSSProperties, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
    className?: string;
    titleClassName?: string;
    title: string;
    children?: any;
    style?: CSSProperties;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>;

export type InlineButtonProps = PropsWithChildren<ButtonProps & {
    href?: string;
    target?: string,
}>;

export const Button = (props: ButtonProps) => {

    const { title, onClick, style, disabled } = props;
    const className: string = `button ${props.className || ''} ${props.disabled ? 'disabled' : ''}`;

    const p: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: className,
        onClick: onClick,
        style: style,
        disabled: disabled,
    };

    const titleClassName = props.titleClassName;

    return (
        <button {...p}>
            <span className={titleClassName}>
                {title}
                {props.children}
            </span>
        </button>
    );
};

export const InlineButton = (props: InlineButtonProps) => {
    const { title, onClick, style, href, target } = props;
    const className: string = `button btn-inline ${props.className || ''}`;

    const p: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
        className: className,
        onClick: onClick,
        style: style,
        href: href,
        target: target,
    };

    const titleClassName = props.titleClassName;

    return (
        <a {...p}>
            <span className={titleClassName}>
                {title}
                {props.children}
            </span>
        </a>
    );
};
