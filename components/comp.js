import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const STATIC_DENSITY = 15;
const PARTICLE_SIZE = 6;
const PARTICLE_BOUNCYNESS = 0.9;

export const MatterScene = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create(),
      world = engine.world;

    // create a renderer
    var render = Render.create({
      element: boxRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        background: '#00f00',
        height: 500,
        width: 800,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));

      // round the edges of some bodies
      var chamfer = null;
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        };
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              {
                chamfer: chamfer,
                render: {
                  fillStyle: '#F35e66',
                  strokeStyle: 'black',
                  lineWidth: 1,
                },
              }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              {
                render: {
                  fillStyle: 'white',
                  strokeStyle: 'blue',
                  lineWidth: 3,
                },
                chamfer: chamfer,
              }
            );
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
            render: {
              fillStyle: '#F35e66',
              strokeStyle: 'black',
              lineWidth: 1,
            },
          });
      }
    });

    Composite.add(world, stack);

    Composite.add(world, [
      // walls
      Bodies.rectangle(-100, 610, 900, 10, { isStatic: true }),
      Bodies.rectangle(800, 610, 900, 10, { isStatic: true }),
      Bodies.rectangle(1600, 610, 900, 10, { isStatic: true }),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    );

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    );

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        style={{
          backgroundColor: '#00ff00',
        }}
        ref={canvasRef}
      />
    </div>
  );
};
