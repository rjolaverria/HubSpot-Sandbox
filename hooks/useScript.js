import React, { useEffect, useState } from 'react';

const useScript = (source = '', defer = false, async = false) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        // Create script element
        let script = document.createElement('script');
        script.src = source;
        script.type = 'text/javascript';
        if (async) script.async = true;
        if (defer) script.defer = true;

        let success = () => setLoaded(true);
        script.addEventListener('load', success);

        // Add to body
        document.body.appendChild(script);

        // Remove script when component unmounts
        return () => {
            script.removeEventListener('load', success);
            document.body.removeChild(script);
        };
    }, [source]);

    return loaded;
};

export default useScript;
