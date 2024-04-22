
let pinceladas = [];
let cantidad = 13;

function preload(){
  
  for( let i=0 ; i<cantidad ; i++){
    let nombre = "data/trazo"+nf( i , 2 )+".png";
    //console.log( nombre );
    pinceladas[i] = loadImage( nombre );
  }
}
function setup() {
  createCanvas( displayWidth, displayHeight );
  colorMode( HSB , 255 , 255 , 255 , 255 );
  background(255);
}
function draw() {

  let cual = int( random(cantidad));
  let x = random( width );
  let y = random( height );

  tint( random(150,190), 155, 255, 50 );
  image( pinceladas[cual] , x, y);
  

}
