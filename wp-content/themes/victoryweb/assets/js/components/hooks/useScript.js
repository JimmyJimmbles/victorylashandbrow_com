import { useEffect } from 'react';

const useScript = (url, element) => {
  useEffect(() => {
    const { current } = element;
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    script.async = true;

    if (current) {
      current.appendChild(script);

      return () => {
        current.removeChild(script);
      };
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
