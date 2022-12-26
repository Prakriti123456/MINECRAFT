var canvas=new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;

var block_img_obj="";
var player_obj="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
      player_obj=Img;

      player_obj.scaleToWidth(150);
      player_obj.scaleToHeight(140);
      player_obj.set({
        top:player_y,
        left:player_x
      });
      canvas.add(player_obj);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
      block_img_obj=Img;

      block_img_obj.scaleToWidth(block_img_width);
      block_img_obj.scaleToHeight(block_img_height);
      block_img_obj.set({
        top:player_y,
        left:player_x
      });
      canvas.add(block_img_obj);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey && keyPressed == '80')
{
  console.log("p and shift pressed together");
  block_img_width=block_img_width+10;
  block_img_height=block_img_height+10;
  document.getElementById("current_width").innerHTML=block_img_width;
  document.getElementById("current_height").innerHTML=block_img_height;
}

if(e.shiftKey && keyPressed == '77')
{
  console.log("m and shift pressed together");
  block_img_width=block_img_width-10;
  block_img_height=block_img_height-10;
  document.getElementById("current_width").innerHTML=block_img_width;
  document.getElementById("current_height").innerHTML=block_img_height;
}

if(keyPressed == '38')
{
  up();
  console.log("up");
}

if(keyPressed == '40')
{
  down();
  console.log("down");
}
if(keyPressed == '37')
{
  left();
  console.log("left");
}
if(keyPressed == '39')
{
 right();
  console.log("right");
}
if(keyPressed == '87')
{
 new_image('wall.jpg')
  console.log("w");
}
if(keyPressed == '71')
{
 new_image('ground.png')
  console.log("g");
}
if(keyPressed == '76')
{
 new_image('light_green.png')
  console.log("l");
}
if(keyPressed == '84')
{
 new_image('trunk.jpg')
  console.log("t");
}
if(keyPressed == '82')
{
 new_image('roof.jpg')
  console.log("r");
} 
if(keyPressed == '89')
{
 new_image('yellow_wall.png')
  console.log("y");
}
if(keyPressed == '68')
{
 new_image('dark_green.png')
  console.log("d");
}
if(keyPressed == '85')
{
 new_image('unique.png')
  console.log("u");
}
if(keyPressed == '67')
{
 new_image('cloud.jpg')
  console.log("c");
}

}

function up()
{
  if(player_y>=0)
  {
    player_y=player_y-block_img_height;
    console.log("block image height= " + block_img_height);
    console.log("when Up arrow key is pressed, X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_obj);
    player_update();
  }
}

function down()
{
  if(player_y<=500)
  {
    player_y=player_y+block_img_height;
    console.log("block image height= " + block_img_height);
    console.log("when Down arrow key is pressed, X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_obj);
    player_update();
  }
}

function left()
{
  if(player_x>0)
  {
    player_x=player_x-block_img_width;
    console.log("block image width= " + block_img_width);
    console.log("when Left arrow key is pressed, X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_obj);
    player_update();
  }
}

function right()
{
  if(player_x<=850)
  {
    player_x=player_x+block_img_width;
    console.log("block image width= " + block_img_width);
    console.log("when Right arrow key is pressed, X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_obj);
    player_update();
  }
}