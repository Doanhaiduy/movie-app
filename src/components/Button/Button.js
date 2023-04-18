import { Link } from 'react-router-dom';

function Button({ className, to, href, children, leftIcon, rightIcon, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={className} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
