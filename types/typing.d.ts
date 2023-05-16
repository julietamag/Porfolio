type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type Point = { x: number; y: number };

interface dataMessage {
  [key: string]: string;
}

type ProjectData = {
  image: StaticImageData;
  title: string;
  description: string;
  techStack: string[];
  gitHub: string;
  demo: string;
};
