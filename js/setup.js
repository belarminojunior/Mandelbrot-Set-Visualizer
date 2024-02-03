function setup() {
  createCanvas(500, 500);
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.1);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
}
