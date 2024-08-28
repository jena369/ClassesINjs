//Calculate trvel price for ola

class ola {
    constructor(price, km){
        this.price = price;
        this.km = km;
    }
    fairCalaculation(){
        return this.price*this.km;
    }
}

var fair = new ola(14, 20)
console.log(fair.fairCalaculation())


//Displaying Circle components

class Circle{
    constructor(radius,color){
      this.radius=radius
      this.color=color
    }
  getRadius(){
  return this.radius
  }
  setRadius(radius){
  this.radius=radius
  }
  getColor(){
  return this.color
  }
  setColor(color){
  this.color=color
  }
  getArea(){
  return Math.PI*this.radius*this.radius
  }
  getCircumference(){
  return 2*Math.PI*this.radius
  }
  }
  
  var circle_RC=new Circle(1,"Red")
  console.log(circle_RC.getRadius())
  circle_RC.setRadius(12)
  console.log(circle_RC.getColor())
  circle_RC.setColor("Blue")
  console.log(circle_RC.getArea())
  console.log(circle_RC.getCircumference())