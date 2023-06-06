let Engine = Matter.Engine;
let engine, world;
let level_1 = new Level_1();
function preload() {
  scena1 = loadJSON("./scena/scena.json");
}
function preload() {
  level_1.preload()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  engine.gravity.y = 2;
  world = engine.world;
  Engine.run(engine);
  level_1.create(engine, world)
}



function draw() {
 level_1.view()

}

function keyPressed(e) {
 level_1.pressed(e)
}

function keyReleased(e) {
  level_1.rePressed(e)
}