import { useState } from 'react';

function Image({ src, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [fallback, setFallback] = useState(
        'https://blog.logrocket.com/wp-content/uploads/2021/04/getting-started-with-create-react-app.png',
    );

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setError(true);
    };

    let displayImg = src;
    if (error || src === 'N/A' || !src || src.slice(-4) === 'null') {
        displayImg = fallback;
    }

    return <img src={displayImg} onLoad={handleLoad} onError={handleError} alt="" {...props} />;
}

export default Image;
