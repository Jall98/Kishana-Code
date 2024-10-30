// src/utils/redirects.js

export const handleRedirect = (url) => {
     if (url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('https://') || url.startsWith('http://')) {
       window.open(url, '_blank');
     } else {
       // For internal routing, return the path
       return url;
     }
   };
   