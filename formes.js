var formes = []
// les autres formes ne sont pas commenté car c'est exactement pareil pour chaque formes
// creation des tableaux
var carree = [];
var add_carree = []
// recupere les couleurs selectionner + la position du clic au moment ou le carre est crée et positionne chaque element dans un tableau et le tableau de
// chaque carrés est dans un tableau aussi pour avoir accès a chaque carrés plus tard
function createcarre(e) {
    //changement de mode
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    var largeur = 50;
    var hauteur = 50;
    ctx.strokeStyle = color_stroke ;
    ctx.fillStyle = color_fill ;
    if(mode == "carre") {
       add_carree = []
       // ajouts des positions de la souris au clic dans le tableau temporaire
       add_carree.push(posX,posY,largeur,hauteur,ctx.strokeStyle,ctx.fillStyle);
       // ajout du tableau temporaire dans le tableau des rectangles
       carree.push(add_carree);
       formes.push(add_carree);
       document.getElementById("input_carres").value = carree;
       create_last_carre()
    }
}   
// quand on clique sur le canvas ca lance la fonction create carre si le mode carre est actif
canvas.addEventListener('click', createcarre);
// passe en mode carre quand on selectionne le carre
function carre(){
    mode = "carre";
    select_button()
}
// crée tous les carre qui ont été sauvegardé
function createallcarre() {
    for (let i = 0; i < carree.length; i++) {
        for (let j = 0; j < carree.length; j++) {
            ctx.beginPath();
            ctx.rect(carree[i][0],carree[i][1],carree[i][2],carree[i][3])
            ctx.strokeStyle = carree[i][4];
            ctx.stroke();
            ctx.fillStyle= carree[i][5];
            ctx.fill();
        }
    }
}
// crée le dernier carré qui a été ajouté a la liste
function create_last_carre() {
    var données_carre = [carree[carree.length - 1][0],carree[carree.length - 1][1],carree[carree.length - 1][2],carree[carree.length - 1][3],carree[carree.length - 1][4],carree[carree.length - 1][5]]
    ctx.beginPath();
    ctx.rect(données_carre[0],données_carre[1],données_carre[2],données_carre[3])
    ctx.strokeStyle = données_carre[4];
    ctx.stroke();
    ctx.fillStyle= données_carre[5];
    ctx.fill();
}

// ----------------------- cercle -----------------------

var cerclee = [];
var add_cerclee = []

function createcercle(e) {
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    var diametre = 40; 
    var taille = 0; 
    var demi_cercle = 2; 
    ctx.strokeStyle = color_stroke ;
    ctx.fillStyle = color_fill ;
    if(mode == "cercle") {
       add_cerclee = []
       // ajouts des positions de la souris au clic dans le tableau temporaire
       add_cerclee.push(posX,posY,diametre,taille,demi_cercle,ctx.strokeStyle,ctx.fillStyle);
       // ajout du tableau temporaire dans le tableau des rectangles
       cerclee.push(add_cerclee);
       document.getElementById("input_cercles").value = cerclee;
       create_last_cercle()
    }
}   
canvas.addEventListener('click', createcercle);
function cercle(){
    mode = "cercle";
    select_button()
}

function createallcercle() {
    for (let i = 0; i < cerclee.length; i++) {
        for (let j = 0; j < cerclee.length; j++) {
            ctx.beginPath();
            ctx.arc(cerclee[i][0],cerclee[i][1],cerclee[i][2],cerclee[i][3],cerclee[i][4]*Math.PI);
            ctx.closePath();
            ctx.strokeStyle = cerclee[i][5];
            ctx.fillStyle= cerclee[i][6];
            ctx.fill();
            ctx.stroke();
        }
    }
}
function create_last_cercle() {
    var données_cercle = [cerclee[cerclee.length - 1][0],cerclee[cerclee.length - 1][1],cerclee[cerclee.length - 1][2],cerclee[cerclee.length - 1][3],cerclee[cerclee.length - 1][4],cerclee[cerclee.length - 1][5],cerclee[cerclee.length - 1][6]]
    ctx.beginPath();
    ctx.arc(données_cercle[0],données_cercle[1],données_cercle[2],données_cercle[3],données_cercle[4]*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = données_cercle[5];
    ctx.stroke();
    ctx.fillStyle= données_cercle[6];
    ctx.fill();
}    

// ----------------------- triangle -----------------------

var trianglee = [];
var add_trianglee = []

function createtriangle(e) {
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    var trait1 = 85 ; 
    var trait2 = 45 ;
    var trait3 = 67 ;
    ctx.strokeStyle = color_stroke ;
    ctx.fillStyle = color_fill ;
    if(mode == "triangle") {
       add_trianglee = []
       // ajouts des positions de la souris au clic dans le tableau temporaire
       add_trianglee.push(posX,posY,trait1,trait2,trait3,ctx.strokeStyle,ctx.fillStyle) ;
       // ajout du tableau temporaire dans le tableau des rectangles
       trianglee.push(add_trianglee);
       document.getElementById("input_triangles").value = trianglee;
       create_last_triangle()
    }
}   
canvas.addEventListener('click', createtriangle);
function triangle(){
    mode = "triangle";
    select_button()
}

function createalltriangle() {
    for (let i = 0; i < trianglee.length; i++) {
        for (let j = 0; j < trianglee.length; j++) {
            ctx.beginPath();
            ctx.moveTo(trianglee[i][0],trianglee[i][1]);
            ctx.lineTo(trianglee[i][0]-trianglee[i][2],trianglee[i][1]);
            ctx.lineTo(trianglee[i][0]-trianglee[i][3],trianglee[i][1]-trianglee[i][4]);
            ctx.closePath();
            ctx.strokeStyle = trianglee[i][5];
            ctx.stroke();
            ctx.fillStyle= trianglee[i][6];
            ctx.fill();
        }
    }
}
function create_last_triangle() {
    var données_triangles = [trianglee[trianglee.length - 1][0],trianglee[trianglee.length - 1][1],trianglee[trianglee.length - 1][2],trianglee[trianglee.length - 1][3],trianglee[trianglee.length - 1][4],trianglee[trianglee.length - 1][5],trianglee[trianglee.length - 1][6]]
    ctx.beginPath();
    ctx.moveTo(données_triangles[0],données_triangles[1]);       
    ctx.lineTo(données_triangles[0]-données_triangles[2],données_triangles[1]);
    ctx.lineTo(données_triangles[0]-données_triangles[3],données_triangles[1]-données_triangles[4]);
    ctx.closePath();
    ctx.strokeStyle = données_triangles[5];
    ctx.stroke();
    ctx.fillStyle= données_triangles[6];
    ctx.fill();
}   

// ----------------------- ligne -----------------------

var lignee = [];
var add_lignee = []

function createligne(e) {
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    var largeur = 80;
    var hauteur = 0.5;
    ctx.strokeStyle = color_stroke ;
    ctx.fillStyle = color_fill ;
    if(mode == "ligne") {
       add_lignee = []
       // ajouts des positions de la souris au clic dans le tableau temporaire
       add_lignee.push(posX,posY,largeur,hauteur,ctx.strokeStyle,ctx.fillStyle);
       // ajout du tableau temporaire dans le tableau des rectangles
       lignee.push(add_lignee);
       formes.push(add_lignee);
       document.getElementById("input_lignes").value = lignee;
       create_last_ligne()
    }
}   
canvas.addEventListener('click', createligne);
function ligne(){
    mode = "ligne";
    select_button()
}

function createallligne() {
    for (let i = 0; i < lignee.length; i++) {
        for (let j = 0; j < lignee.length; j++) {
            ctx.beginPath();
            ctx.rect(lignee[i][0],lignee[i][1],lignee[i][2],lignee[i][3])
            ctx.strokeStyle = lignee[i][4];
            ctx.stroke();
            ctx.fillStyle = lignee[i][5];
            ctx.fill();
        }
    }
}
function create_last_ligne() {
    var données_ligne = [lignee[lignee.length - 1][0],lignee[lignee.length - 1][1],lignee[lignee.length - 1][2],lignee[lignee.length - 1][3],lignee[lignee.length - 1][4],lignee[lignee.length - 1][5]]
    ctx.beginPath();
    ctx.rect(données_ligne[0],données_ligne[1],données_ligne[2],données_ligne[3])
    ctx.strokeStyle = données_ligne[4];
    ctx.stroke();
    ctx.fillStyle= données_ligne[5];
    ctx.fill();
}

// ----------------------- rectangle -----------------------

var rectangles = [];
var add_rectangle = []

function creatrectangle(e) {
    var rect = canvas.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    var largeur = 70;
    var hauteur = 30;
    ctx.strokeStyle = color_stroke ;
    ctx.fillStyle = color_fill ;
    if(mode == "rectangle") {
       add_rectangle = []
       // ajouts des positions de la souris au clic dans le tableau temporaire
       add_rectangle.push(posX,posY,largeur,hauteur,ctx.strokeStyle,ctx.fillStyle);
       // ajout du tableau temporaire dans le tableau des rectangles
       rectangles.push(add_rectangle);
       formes.push(add_rectangle);
       document.getElementById("input_rectangles").value = rectangles;
       create_last_rectangle()
    }
}   
canvas.addEventListener('click', creatrectangle);
function rectangle(){
    mode = "rectangle";
    select_button()
}

function createallrectangle() {
    for (let i = 0; i < rectangles.length; i++) {
        for (let j = 0; j < rectangles.length; j++) {
            ctx.beginPath();
            ctx.rect(rectangles[i][0],rectangles[i][1],rectangles[i][2],rectangles[i][3])
            ctx.strokeStyle = rectangles[i][4];
            ctx.stroke();
            ctx.fillStyle = rectangles[i][5];
            ctx.fill();
        }
    }
}
function create_last_rectangle() {
    var données_rectangle = [rectangles[rectangles.length - 1][0],rectangles[rectangles.length - 1][1],rectangles[rectangles.length - 1][2],rectangles[rectangles.length - 1][3],rectangles[rectangles.length - 1][4],rectangles[rectangles.length - 1][5]]
    ctx.beginPath();
    ctx.rect(données_rectangle[0],données_rectangle[1],données_rectangle[2],données_rectangle[3])
    ctx.strokeStyle = données_rectangle[4];
    ctx.stroke();
    ctx.fillStyle = données_rectangle[5];
    ctx.fill();
}

// pour entrer dans le mode modification de la taille
function plus(){
    mode = "plus";
    select_button()
}

function moins(){
    mode = "moins";
    select_button()
}

// pour entrer dans le mode modification de la position
function haut(){
    mode = "haut";
    select_button()
}

function bas(){
    mode = "bas";
    select_button()
}

function gauche(){
    mode = "gauche";
    select_button()
}

function droite(){
    mode = "droite";
    select_button()
}

// pour entrer dans le mode modification de la bordure
function modif_stroke(){
    mode = "modif_stroke";
    select_button()
}

// pour entrer dans le mode modification du fond
function modif_fill(){
    mode = "modif_fill";
    select_button()
}

// detecte quand la souris clique sur la forme
function dansLaForme(e){
    var xC = e.layerX;//on recupe X
    var yC = e.layerY;// on recupe Y
    for (var i=0; i<formes.length; i++){//on parcours les rectangles 
        if (xC>formes[i][0] && xC<formes[i][0]+formes[i][2] && yC>formes[i][1] && yC<formes[i][1]+formes[i][3]){//se souvenir de l'explication
            if(mode == "modif_stroke"){
                formes[i][4] = color_stroke
                refresh()
            }
            if(mode == "modif_fill"){
                formes[i][5] = color_fill
                refresh()
            }
            if(mode == "plus"){
                formes[i][2] = formes[i][2] + 5
                formes[i][3] = formes[i][3] + 5
                refresh()
            }
            if(mode == "moins"){
                formes[i][2] = formes[i][2] - 5
                formes[i][3] = formes[i][3] - 5
                refresh()
            }
            if(mode == "haut"){
                formes[i][1] = formes[i][1] - 5
                refresh()
            }
            if(mode == "bas"){
                formes[i][1] = formes[i][1] + 5
                refresh()
            }
            if(mode == "gauche"){
                formes[i][0] = formes[i][0] - 5
                refresh()
            }
            if(mode == "droite"){
                formes[i][0] = formes[i][0] + 5
                refresh()
            }
        }
        
    }
}

canvas.addEventListener('click', dansLaForme);
// canvas.addEventListener('mousemove', dansLaForme);

// creer toutes les formes sauvegardées
function refresh(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createallcarre()
    createallcercle()
    createallligne()
    createallrectangle()
    createalltriangle()
}