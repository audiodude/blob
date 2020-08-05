import { Scene } from './scene';
import * as p5 from 'p5';

const sketch = (p: p5): void => {
  let scene: Scene;

  p.preload = (): void => {};

  p.setup = (): void => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    scene = new Scene(p);
  };

  p.windowResized = (): void => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = (): void => {
    p.background(0);
    scene.draw(p);
  };
};

new p5(sketch);
