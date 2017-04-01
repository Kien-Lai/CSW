class PlayerController{
  constructor(configs,color) {
    this.sprite = CSW.add.sprite(CSW.configs.GAME_WIDTH/2,CSW.configs.GAME_HEIGHT/3*2,"player");
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.configs = configs;
    this.elapsedTime = 1;
    this.tapCount = 0;
    this.sprite.tint = CSW.configs.COLORS[color];
    this.sprite.color = color;
    this.yOrig = CSW.configs.GAME_HEIGHT/2;
    this.yChange = 0;
  }

  update() {
    if (CSW.keyboard.isDown(this.configs.TAP)) {
      if (this.elapsedTime>=0.3) {
        this.elapsedTime = 0;
        if (this.tapCount==0) CSW.physics.p2.gravity.y = 1500;
        //this.configs.direction.y = this.sprite.body.velocity.y>=0?-this.configs.direction.y:this.configs.direction.y
        //this.sprite.body.velocity = this.configs.direction.setMagnitude(this.configs.speed);
        this.sprite.body.moveUp(this.configs.direction.y*this.configs.speed);
        this.tapCount++;
      }
    }
    this.elapsedTime += CSW.time.physicsElapsed;

    //Update the yChange
    this.yChange = Math.max(this.yChange, this.yOrig - this.sprite.y);
  }
}
