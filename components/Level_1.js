class Level_1 {
    scena = new Scena("./scena/scena.json");
    player = new Player("player");
    animate = new Animate();
    mapPlatform = new TileMap(this.scena)
    platform = new Body("platform");
    lift = new Body("lift");
    point = new Body("point");
    events = new Events();
    portal = new Body("portal");
    preload() {
        this.scena.preload();
        this.player.loadImg();
        this.animate.setup();
        this.animate.animateE("./asset/level1/Background.png");
        this.mapPlatform.loadImg("./asset/level1/Tiles/IndustrialTile_73.png");
        this.lift.loadImage("./asset/level1/Tiles/IndustrialTile_73.png");
        
    }

    create(engine, world) {
        this.scena.create();
        this.player.setup(engine,world,this.scena);
        this.platform.createRect(world,this.scena);
        this.lift.createRect(world,this.scena);
        this.point.sensor = true;
        this.point.createRect(world,this.scena);
        this.events.collideStart(engine,this.scena);
        this.portal.createRect(world,this.scena)
        
    }

    view() {
        background(102, 98, 97);
        rectMode(p5.CENTER);
        this.player.translates();
        image(
            this.animate.sprite(),
            -window.innerWidth / 2,
            -window.innerHeight / 2,
            this.scena.size(this.scena.scenaWidth, this.scena.scale) + window.innerWidth,
            this.scena.size(this.scena.scenaHeigiht,this.scena.scale) + window.innerHeight
          );
          
        this.mapPlatform.view(73)
        this.lift.viewImage();
        this.point.viewRect();
        this.portal.viewRect()
        this.player.view();

    }

    pressed(e) {
        if (e.key === "ArrowRight") {
          this.player.speed = 1;
        } else if (e.key === "ArrowLeft") {
          this.player.speed = 2;
        }
        if (e.key === "ArrowUp") {
          //  this.player.up = -10;
        } else if (e.key === "ArrowDown") {
          //   this.player.up = 10;
        }
    }

    rePressed(e) {
        if (e.key === "ArrowRight") {
           this.player.speed = 0;
          } else if (e.key === "ArrowLeft") {
            this.player.speed = 0;
          }
          if (e.key === "ArrowUp") {
            //    this.player.up = 0;
          } else if (e.key === "ArrowDown") {
            //     this.player.up = 0;
          }
        }
    
}