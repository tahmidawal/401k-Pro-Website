import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Preload critical assets
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = logo; // Your logo path
    document.head.appendChild(preloadLink);
  }, []);

  return <Component {...pageProps} />;
} 