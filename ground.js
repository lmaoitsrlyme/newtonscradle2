class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400, 50, 500, 30, options);
        //this.width = 500;
        //this.height = 30;
        //this.x = 400;
        //this.y = 50;
        World.add(world, this.body); 
    }


    display(){
        var groundPos=this.body.position;		

			
			rect(groundPos.x,groundPos.y,500,30);
    }
}