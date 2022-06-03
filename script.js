console.log("good")
var canvas = document.querySelector("canvas");  // on va chercher la l'élément canvas 
var ctx = canvas.getContext('2d'); // on lui définit un context 2d
//dernière position connue
//x coordonées horizontale 
//y coordonées verticales
var posX = 0; // dernière position connu en gros par défault indique en haut à gauche point de départ
var posY = 0;
var color_fill = "white" ;
var color_stroke = "black";
var mode = ""
var mode_color = ""
var mode_police = ""
var mode_selection = ""
StarttingX=0
var recentWords = [];
var undoList = [];
function saveState(){
    undoList.push(canvas.toDataURL());
}

function undo(){
    var imgData = undoList[undoList.length - 1];
    var image = new Image();
    image.src = imgData;
    image.onload = function () {
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height)
    }
    undoList.pop();
}
// Evénements pour le click 

document.addEventListener("keydown", draw);

function draw(e){
    //console.log("salut");
    posX = e.pageX - canvas.offsetLeft;
    posY = e.pageY - canvas.offsetTop;
    StarttingX = posX ;
    return false;
}
//ecriture du texte
function arial(){
    mode_police = "arial";
    select_button()
}

function poppins(){
    mode_police = "poppins";
    select_button()
}

function montserrat(){
    mode_police = "montserrat";
    select_button()
}

document.addEventListener("keydown", write);
function write(e){
    if(mode == "text") {
        ctx.font = "16px Arial";
        // changement de police
        if(mode_police == "arial") {
            ctx.font = "16px Arial";
        }
        if(mode_police == "poppins") {
            ctx.font = "16px Poppins";
        }
        if(mode_police == "montserrat") {
            ctx.font = "16px Montserrat";
        }
        // les conditions pour que les touches agissent comme elles doivent agire au lieu que par exemple la touche return ecrive return
        if(e.keyCode == 8){
            undo();
            var recentWord = recentWords[recentWords.length -1];
            posX -= ctx.measureText(recentWord).width;
            recentWords.pop();
            
        }else if(e.keyCode == 13){
            posX = StarttingX;
            posY += 20;

        }else if(e.keyCode == 9){
            posX += 30;
            posY = StarttingY;

        }else if(e.keyCode == 16){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 17){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 18){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 20){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 33){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 34){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 35){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 36){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 37){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 38){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 39){
            posX = EndingX;
            posY = StarttingY;

        }else if(e.keyCode == 40){
            posX = EndingX;
            posY = StarttingY;
        }else if(e.keyCode == 46){
            posX = EndingX;
            posY = StarttingY;
        }else{
            ctx.fillText(e.key, posX, posY);
            posX +=ctx.measureText(e.key).width;
            saveState();
        }
    }
    return false;
}

function text(){
    mode = "text";
    select_button()
}

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition); //  declenche un évènement quand on appuie sur un bouton.
document.addEventListener('mouseenter', setPosition); //  L'événement se produit lorsque le pointeur (pointer) est déplacé sur un élément.

//Fonction SetPosition
// nouvelle position de la souris quand le bouton est relâché
// new position from mouse event
function setPosition(e) {
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
}
//--- function draw ----- 

function draw(e) {
    if(mode == "dessin" || mode == "gomme"){
        //changement de mode
        // mouse left button must be pressed
        if (e.buttons !== 1) return;    // 1 = clicgauche de la souris   si le btn 1 est actionné alors on retour la fonction draw
        if(mode == "dessin") {
            ctx.strokeStyle = color_stroke;
        }
        if(mode == "gomme") {
            ctx.strokeStyle = "#fff";
        }
        ctx.beginPath(); // begin   // permet de définir un premier chemin du tracé
        //console.log(ctx.beginPath);
        ctx.lineWidth = 3; // taille de la largeur du trait de dessin
        ctx.lineCap = 'round'; // forme de la fin  du trait de dessin
        ctx.moveTo(posX, posY); // from  // méthode CanvasRenderingContext2D.moveTo() de l'API Canvas 2D déplace le point de départ d'un nouveau sous-chemin vers les coordonnées (x, y).
        setPosition(e);
        ctx.lineTo(posX, posY); // to    //La méthode CanvasRenderingContext2D.lineTo() de l'API Canvas 2D connecte le dernier point du sous-chemin en cours aux coordonnées x, y spécifiées avec une ligne droite (sans tracer réellement le chemin).
        ctx.stroke(); // draw it!
    }    
}

function dessin(){
    mode = "dessin";
    select_button()
}
function gomme(){
    mode = "gomme";
    select_button()
}


// boutton clear
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    cerclee=[]
    rectangles=[]
    carree=[]
    lignee=[]
    trianglee=[]
    formes=[]
    refresh()
});

// boutton sauvegarde png
var pngButton = document.getElementById('PNG');
pngButton.addEventListener('click', function() {
    var imageName = 'dessin'
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
});

// boutton sauvegarde png
function generatePDF(){
    const element = document.getElementById("paint-canvas");
    html2pdf()
    .from(element)
    .save();
}

// boutton pour stocker la couleur selectionner
var colors = document.getElementsByClassName('colors')[0];
colors.addEventListener('click', function(event) {
    if(mode_color == "border") {
        ctx.strokeStyle = event.target.value || 'black';
        color_stroke = event.target.value
        document.getElementById("color_stroke").style.borderColor = color_stroke
    }
    if(mode_color == "fill") {
        ctx.fillStyle = event.target.value || 'black';
        color_fill = event.target.value
        document.getElementById("color_fill").style.backgroundColor = color_fill
    }
});

//passer en mode border pour pouvoir selectionner les border(la couleur de bordure des formes)
function border(){
    mode_color = "border";
    select_button()
}

//passer en mode fill pour pouvoir selectionner les fill(la couleur de fond des formes)
function fill(){
    mode_color = "fill";
    select_button()
}

