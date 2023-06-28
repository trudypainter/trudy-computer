import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Bio } from './bio';

const STATIC_DENSITY = 15;
const PARTICLE_SIZE = 6;
const PARTICLE_BOUNCYNESS = 0.9;
const HEIGHT = 500;
const LINEWIDTH = 2;

export const CompDom = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Events = Matter.Events,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    let width = window.innerWidth;

    // create an engine
    var engine = Engine.create(),
      world = engine.world;

    var render = Render.create({
      element: boxRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: 500,
        background: 'transparent', // transparent to hide
        wireframeBackground: 'transparent', // transparent to hide
        wireframes: false,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    let addBox = () => {
      const box = Bodies.rectangle(-250, -50, 100, 100, {
        chamfer: { radius: 5 },
        friction: 0.9,
        density: 0.9,
        frictionAir: 0.015,
        render: {
          fillStyle: 'white',
          strokeStyle: 'black',
          lineWidth: LINEWIDTH,
        },
      });
      Composite.add(world, box);
    };

    let conveyor = [];
    let RADIUS = 8;
    for (let i = -800; i < width; i += 1) {
      let plank = Bodies.rectangle(i * RADIUS + 2, 550, RADIUS, 8, {
        isStatic: true,
        friction: 1,
        // chamfer: { radius: 5 },
        render: {
          fillStyle: 'black',
        },
      });
      Composite.add(world, plank);
      if (i % 16 == 0) {
        let plank = Bodies.rectangle(i * RADIUS * 2, 550 - 6, 4, 12, {
          isStatic: true,
          friction: 0,
          // chamfer: { radius: 5 },
          render: {
            fillStyle: 'black',
          },
        });
        Composite.add(world, plank);
        conveyor.push(plank);
      }
      conveyor.push(plank);
    }

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

    Composite.add(world, mouseConstraint);

    // add bottom plank

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // remove scroll constraint
    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    );

    var counter = 0;
    Events.on(runner, 'afterTick', function (event) {
      conveyor.map((plank) => {
        Body.setPosition(plank, {
          x: plank.position.x + 0.6,
          y: plank.position.y,
        });
      });
      if (counter % 480 == 32) {
        addBox();
      }
      counter += 1;
    });

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
        zIndex: 0,
      }}
    >
      <canvas
        style={{
          backgroundColor: '#00ff00',
        }}
        ref={canvasRef}
      />
      <Bio />
    </div>
  );
};
