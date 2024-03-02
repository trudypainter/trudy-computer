// components/InstagramEmbed.js
import React, { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);

    // Try to process any Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
    ></blockquote>
  );
};

export default InstagramEmbed;
