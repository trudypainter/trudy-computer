import React from 'react';

const FigmaEmbed = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="fixed top-2 left-2 rounded-md bg-gray-100 text-gray-800 py-2 px-4">
        trudy.computer/ddp
      </div>
      <iframe
        className="border border-gray-200 rounded-md"
        width="800"
        height="450"
        src="https://embed.figma.com/slides/LDZLcpeJMZGb3Vl3r7GPBY/Parsons-Digital-Design?node-id=2-2&embed-host=share"
        allowFullScreen
        title="Figma Slide"
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
