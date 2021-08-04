img = "";

function preload()
{
    img = loadImage('bedroom.png');

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("tv",240,70);
    noFill();
    stroke("#FF0000");
    rect(230,60,200,200);
}
function page1(){
    window.location = "index.html";
}
function preload()
{
    img = loadImage('phone.webp');

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("phone",240,70);
    noFill();
    stroke("#FF0000");
    rect(230,60,200,200);
}
function page1(){
    window.location = "index.html";
}