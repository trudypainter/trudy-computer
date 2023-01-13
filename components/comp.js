import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const STATIC_DENSITY = 15;
const PARTICLE_SIZE = 6;
const PARTICLE_BOUNCYNESS = 0.9;
const HEIGHT = 500;
const LINEWIDTH = 2;

export const MatterScene = () => {
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

    // create a renderer
    var render = Render.create({
      element: boxRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        height: HEIGHT,
        width: width,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 2,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const box = Bodies.rectangle(150, 300, 100, 100, {
      chamfer: { radius: 5 },
      friction: 1,
      density: 0.9,
      render: {
        fillStyle: 'white',
        strokeStyle: 'black',
        lineWidth: LINEWIDTH,
      },
    });
    // Composite.add(world, box);

    let conveyor = [];
    for (let i = -800; i < width / 2; i += 15) {
      let plank = Bodies.circle(i, 550, 8, {
        isStatic: true,
        friction: 1,
        // chamfer: { radius: 5 },
        render: {
          fillStyle: 'black',
        },
      });
      Composite.add(world, plank);
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

    // make conveyor belt
    // ⭐️ add wheels
    let planks = [];
    let LEN = 30;
    let SPACING = 10;
    let CONSTRAINTLENGTH = 30;
    let RADIUS = 10;
    let STARTY = 250;
    let DEBUGGING = false;
    let STIFFNESS = 0.2;

    let wheels = [];
    for (let i = 1; i < LEN; i++) {
      let plankA = Bodies.rectangle(
        i * (2 * (RADIUS + SPACING)) - RADIUS - SPACING,
        STARTY + RADIUS + SPACING / 2,
        SPACING,
        4 * RADIUS,
        {
          isStatic: true,
          density: 0.9,

          friction: 1,
          render: {
            fillStyle: 'black',
          },
        }
      );
      wheels.push(plankA);

      Composite.add(world, plankA);
      let plankB = Bodies.rectangle(
        i * (2 * (RADIUS + SPACING)) - RADIUS - SPACING,
        STARTY + RADIUS + SPACING / 2,
        4 * RADIUS,
        SPACING,
        {
          isStatic: true,
          friction: 1,
          render: {
            fillStyle: 'black',
          },
        }
      );
      Composite.add(world, plankB);
      wheels.push(plankB);
    }

    // top level
    let prev = -1;
    for (let i = 0; i < LEN; i++) {
      let plank = Bodies.circle(i * (2 * (RADIUS + SPACING)), STARTY, RADIUS, {
        isStatic: DEBUGGING,
        density: 0.9,
        friction: 1,
        render: {
          fillStyle: 'black',
        },
      });
      Composite.add(world, plank);
      planks.push(plank);
      if (prev > -1) {
        let constraint = Constraint.create({
          bodyA: planks[i],
          bodyB: planks[prev],
          length: CONSTRAINTLENGTH,
          stiffness: STIFFNESS,
          render: {
            strokeStyle: 'white',
          },
        });
        Composite.add(world, constraint);
      }
      prev += 1;
    }
    // bottom level
    for (let i = LEN; i < LEN * 2; i++) {
      let plank = Bodies.circle(
        (LEN * 2 - i - 1) * (2 * (RADIUS + SPACING)),
        STARTY + SPACING + 2 * RADIUS,
        RADIUS,
        {
          isStatic: DEBUGGING,
          friction: 1,
          render: {
            fillStyle: 'black',
          },
        }
      );
      Composite.add(world, plank);
      planks.push(plank);

      let constraint = Constraint.create({
        bodyA: planks[i],
        bodyB: planks[prev],
        length: CONSTRAINTLENGTH,
        stiffness: STIFFNESS,
        render: {
          strokeStyle: 'black',
        },
      });
      Composite.add(world, constraint);

      prev += 1;
    }

    // add final constraint
    let constraint = Constraint.create({
      bodyA: planks[0],
      bodyB: planks[prev],
      length: CONSTRAINTLENGTH,
      stiffness: 1,
      render: {
        strokeStyle: 'green',
      },
    });
    Composite.add(world, constraint);

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
      counter += 1;
      conveyor.map((plank) =>
        Body.setPosition(plank, {
          x: (plank.position.x + 0.28) % (width / 2),
          y: plank.position.y,
        })
      );
      if (!DEBUGGING) {
        wheels.map((spoke) => Body.rotate(spoke, 0.02));
      }
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
