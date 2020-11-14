class Bob {
    constructor(x,y){
        this.trajectory = [];
    }
    display() {
       if(this.body.velocity.x>10 & this.body.position.x>200){
        this.trajectory.push([this.body.position.x, this.body.position.y])
      }
  }
}
