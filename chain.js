class Chain{
    constructor(bodyA,bodyB){
var option = {
    bodyA : bodyA,
    bodyB : bodyB,
    stiffness:0.6,
    lenght:30
}
this.chain = Constraint.create(option)
World.add(world,this.chain)
}
display(){
 var pong = this.chain.bodyA.position
 var ping = this.chain.bodyB.position
 strokeWeight(5)
 line(pong.x,pong.y,ping.x,ping.y)
}
}