import Sketch from 'react-p5';
import React, { useState } from 'react';

export default function P5Background({ height, windowWidth, scrollPosition }) {
  const [scaleFactor, setScaleFactor] = useState(1);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(windowWidth, height).parent(canvasParentRef);
    p5.fill(0);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.background('#ffffb2');
    // drawHalftone(p5.mouseX, p5.mouseY, 'lightgray', 0.5, p5);
    drawHalftone(p5.mouseX, p5.mouseY, '#ffff00', 0, p5);
  };

  const drawHalftone = (mx, my, color, dr, p5) => {
    let dotSize;
    let maxDotSize = 80;
    let spacing = 30;

    for (let x = 0; x < p5.width + maxDotSize; x += spacing) {
      p5.fill(color);
      for (let y = 0; y < p5.height + maxDotSize; y += spacing) {
        dotSize =
          p5.map(getBrightness(x, y, p5), 0, 600, maxDotSize, 0) *
          (scaleFactor + (scrollPosition / 200) * 0.7);
        p5.ellipse(x, y, dotSize + dr);
      }
    }
  };

  const getBrightness = (x, y, p5) => {
    let distance = p5.dist(p5.mouseX, p5.mouseY, x, y);
    let brightness = p5.map(distance, 0, p5.width / 1, 500, 0);
    return brightness;
  };

  return (
    <div className="absolute top-0 left-0">
      {scrollPosition < height && <Sketch setup={setup} draw={draw} />}
    </div>
  );
}
