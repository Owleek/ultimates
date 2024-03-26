import * as React from 'react';
import './Button.scss';
import cn from 'classnames';

const Button = ({children, className, ...rest}) => {
    return <button className={cn('Button', className)} {...rest}>{children}</button>
}

export default Button;