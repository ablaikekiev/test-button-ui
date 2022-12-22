import React, {FC} from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: 'primary' | 'text' | 'contained' | 'outlined';
    href?: string,
    color?: 'primary' | 'secondary' | 'error' | 'success',
    size?: 'small' | 'medium' | 'large',
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     variant = 'primary',
                                     color = 'primary',
                                     size = 'medium',
                                     disabled = false,
                                     href,
                                     style,
                                     ...props
                                 }) => {
    const buttonClassName = cn(styles.button,
        {
            [styles.primary]: variant === 'text' || variant === 'primary',
            [styles.contained]: variant === 'contained',
            [styles.outlined]: variant === 'outlined',

            [styles.disabled]: disabled,

            [styles.colorError]: color === 'error',
            [styles.colorSuccess]: color === 'success',
            [styles.colorSecondary]: color === 'secondary',

            [styles.sizeSmall]: size === 'small',
            [styles.sizeMedium]: size === 'medium',
            [styles.sizeLarge]: size === 'large',
        })

    if (href && !disabled) {
        return (
            <a
                {...props}
                style={style}
                href={href}
                className={buttonClassName}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...props}
            style={style}
            disabled={disabled}
            className={buttonClassName}
        >
            {children}
        </button>
    );
};

export default Button;