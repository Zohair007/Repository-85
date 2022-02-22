var canvas=document.getElementById("marsCanvas")
ctx=canvas.getContext("2d")
background_image="mars.jpg"
rover_image="rover.png"
rover_x=213
rover_y=39
function add() {
    background_imageadd=new Image()
    background_imageadd.onload=upload_background
    background_imageadd.src=background_image
    rover_imageadd=new Image()
    rover_imageadd.onload=upload_rover
    rover_imageadd.src=rover_image
}
function upload_background() {
    ctx.drawImage(background_imageadd, 0, 0, 600, 470)
}
function upload_rover() {
    ctx.drawImage(rover_imageadd, rover_x, rover_y, 70, 60)
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed=="37") {
    console.log("left")
    left()
}
if(keypressed=="38") {
    console.log("up")
    up()
}
if(keypressed=="39") {
    console.log("right")
    right()
}
if(keypressed=="40") {
    console.log("down")
    down()
}
}
function up() {
    rover_y=rover_y-10
    upload_background()
    upload_rover()
}
function down() {
    rover_y=rover_y+10
    upload_background()
    upload_rover()
}
function left() {
    rover_x=rover_x-10
    upload_background()
    upload_rover()
}
function right() {
    rover_x=rover_x+10
    upload_background()
    upload_rover()
}