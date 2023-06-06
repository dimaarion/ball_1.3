class Player extends Body {
  body = {};
  scena = {};
  m = {};
  x = 100;
  y = 100;
  static = false;
  width = 50;
  height = 50;
  radius = 50;
  left = 0;
  right = 0;
  up = 0;
  down = 6;
  mass = 1;
  speed = 0;
  friction = 1;
  getObj;
  image = "./asset/Player/player3.png";
  imageR = "./asset/Player/playerR.png";
  imageS = "./asset/Player/soplo.png"
  imageS2 = "./asset/Player/soplo2.png"
  frame = 1;
  baseY = 0;
  img = 0;
  world;
  p5;
  time = 0;
  time2 = 0;
  direction = 0;
  soploX = 2;
  soploX2 = 2;
  animate = new Animate();
  animateR = new Animate();
  soplo = new Animate();
  soplo2 = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg() {
    this.animate.setup()
    this.animate.animateE(this.image);
    this.animateR.setup()
    this.animateR.animateD(this.imageR, 13);
    this.soplo.setup()
    this.soplo.animateD(this.imageS, 29)
    this.soplo2.setup()
    this.soplo2.animateD(this.imageS2, 29)
  }

  setup(engine, world, scena) {
    this.scena = scena;
    this.animate.setupAnimate();
    this.animateR.setupAnimate();
    this.soplo.setupAnimate();
    this.soplo2.setupAnimate();
    this.createEllipse(world, scena)
    console.log(this.body[0].angle)
  }

  view() {

    if (this.speed === 1) {
      this.setRotate(0.1);
      this.direction = 1
    } else if (this.speed === 2) {
      this.setRotate(-0.1);
      this.direction = 2
    } else {
      this.description = 0;
    }

    // this.animate.animated = false
    if (this.direction === 1) {
      //  this.animate.animated = true;
      // this.animate.format = 1
    } else if (this.direction === 2) {
      // this.animate.animated = true;
      // this.animate.format = 2

    }
    if (this.speed === 5) {
      this.soploX = (this.animate.xp + 1) * 1.21
    } else {
      this.soploX = (this.animate.xp + 1) * 1.30
    }

    if (this.speed === -5) {
      this.soploX2 = -(this.animate.xp + 1) * 20
    } else {
      this.soploX2 = -(this.animate.xp + 1) * 1.5
    }

    //this.body.map((b) => image(this.soplo2.spriteEllipse(b.width / 1.2), b.position.x + b.width / this.soploX2 + this.scena.size(0.8, this.scena.scale), b.position.y - b.width / 2.4))
    //this.body.map((b) => image(this.soplo.spriteEllipse(b.width / 1.2), b.position.x - b.width / this.soploX - this.scena.size(1.5, this.scena.scale), b.position.y - b.width / 2.4))
push()
    translate(this.body[0].position.x ,this.body[0].position.y )
    rotate(this.body[0].angle)
    this.body.map((b) => image(this.animate.sprite(), -b.width / 2, -b.width / 2, b.width, b.width))
    pop()
    
    

  }
}
