let gradient;

preload = () => {
  gradient = loadShader("./base.vert", "./gradient.frag");
};

setup = () => {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  shader(gradient);

  gradient.setUniform("u_resolution", [windowWidth, windowHeight]);
};

draw = () => {
  rect(0, 0, width, height);
};

windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
  gradient.setUniform("u_resolution", [windowWidth, windowHeight]);
};
