var gatoi,gato,back,ratoi,rato,g,a
function preload() {
    gatoi = [loadAnimation("images/cat1.png"),loadAnimation("images/cat2.png","images/cat3.png"),loadAnimation("images/cat4.png")]
    back=loadImage("images/garden.png");
    ratoi = [loadAnimation("images/mouse1.png"),loadAnimation("images/mouse2.png","images/mouse3.png"),loadAnimation("images/mouse4.png")]
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600);
    gato.addAnimation("c",gatoi[0]);
    gato.scale=0.3;
    rato=createSprite(200,600)
    rato.addAnimation("d",ratoi[0]);
    gato.setCollider("circle",gato.x-gato.width/2,gato.y-gato.height/2)
    rato.setCollider("circle",rato.x-rato.width/2,rato.y-rato.height/2);
    rato.scale=0.2
    g=false
    a=true
}

function draw() {

    background(back);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    /*console.log(`mouseX: ${mouseX}
mouseY: ${mouseY}`);*/
    if(gato.x-rato.x < (gato.width-rato.width)/2) {
        gato.velocityX=0
        gato.addAnimation("a",gatoi[2]);
        gato.x=300
        gato.scale = 0.2
        gato.changeAnimation("a");
        rato.addAnimation("f",ratoi[2]);
        rato.scale=0.15
        rato.changeAnimation("f");
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode == LEFT_ARROW) {
        gato.velocityX=-5
        gato.addAnimation("k",gatoi[1]);
        gato.changeAnimation("k");

        rato.addAnimation("o",ratoi[1])
        rato.frameDelay = 25
        rato.changeAnimation("o");
    }
  //Para mover e alterar a animação, escreva o código aqui


}
