import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sketch from 'react-p5';

const FractalTree = () => {
  const [angle, setAngle] = useState(Math.PI / 4);
  const [length, setLength] = useState(10);
  const [frameCount, setFrameCount] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * (2/3) - 64,
        height: window.innerHeight * (1/2) - 32
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);
    p5.angleMode(p5.RADIANS);
    p5.background(255);
  };

  const draw = (p5) => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height);
    branch(p5, length);

    setFrameCount((count) => count + 1);
    if (frameCount % 60 === 0) {
      setLength((len) => len + 2); // Increase the length over time
    }
  };

  const branch = (p5, len) => {
    p5.stroke(0);
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len < dimensions.height / 4) { // Adjust this condition to control branching length
      p5.push();
      p5.rotate(angle);
      branch(p5, len * 1.1); // Increase the length of new branches
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(p5, len * 1.1); // Increase the length of new branches
      p5.pop();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((a) => a + 0.01);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <Sketch setup={setup} draw={draw} />;
};

export default dynamic(() => Promise.resolve(FractalTree), { ssr: false });