import { useState } from 'react';

function Image({ src, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback('https://blog.logrocket.com/wp-content/uploads/2021/04/getting-started-with-create-react-app.png');
    };

    if (src === 'N/A' || !src || src.slice(-4) === 'null') {
        src = fallback;
    }

    return <img src={src} onError={handleError} alt="" {...props} />;
}

export default Image;
