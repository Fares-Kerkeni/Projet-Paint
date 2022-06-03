// recuperation des boutton
var button_rectangle = document.getElementById("rectangle")
var button_carre = document.getElementById("carre")
var button_triangle = document.getElementById("triangle")
var button_cercle = document.getElementById("cercle")
var button_text = document.getElementById("text")
var button_dessin = document.getElementById("dessin")
var button_ligne = document.getElementById("ligne")
var button_gomme = document.getElementById("gomme")
var button_border = document.getElementById("border")
var button_fill = document.getElementById("fill")
var button_arial = document.getElementById("arial")
var button_montserrat = document.getElementById("montserrat")
var button_poppins = document.getElementById("poppins")
var button_modif_stroke = document.getElementById("modif_stroke")
var button_modif_fill = document.getElementById("modif_fill")
var button_plus = document.getElementById("plus")
var button_moins = document.getElementById("moins")
var button_haut = document.getElementById("haut")
var button_bas = document.getElementById("bas")
var button_gauche = document.getElementById("gauche")
var button_droite = document.getElementById("droite")

function select_button(){
    // enleve la bordure de tous les bouttons
    button_rectangle.classList.remove("button_border_active")
    button_carre.classList.remove("button_border_active")
    button_triangle.classList.remove("button_border_active")
    button_cercle.classList.remove("button_border_active")
    button_text.classList.remove("button_border_active")
    button_dessin.classList.remove("button_border_active")
    button_ligne.classList.remove("button_border_active")
    button_gomme.classList.remove("button_border_active")
    button_border.classList.remove("button_border_active")
    button_fill.classList.remove("button_border_active")
    button_arial.classList.remove("button_border_active")
    button_montserrat.classList.remove("button_border_active")
    button_poppins.classList.remove("button_border_active")
    button_modif_stroke.classList.remove("button_border_active")
    button_modif_fill.classList.remove("button_border_active")
    button_plus.classList.remove("button_border_active")
    button_moins.classList.remove("button_border_active")
    button_haut.classList.remove("button_border_active")
    button_bas.classList.remove("button_border_active")
    button_gauche.classList.remove("button_border_active")
    button_droite.classList.remove("button_border_active")
    // quand le mode en question est selectionné le bouton a une bordure pour savoir quel mode on utilise
    if (mode == "dessin"){
        button_dessin.classList.add("button_border_active")
    }
    if (mode == "gomme"){
        button_gomme.classList.add("button_border_active")
    }
    if (mode == "rectangle"){
        button_rectangle.classList.add("button_border_active")
    }
    if (mode == "triangle"){
        button_triangle.classList.add("button_border_active")
    }
    if (mode == "cercle"){
        button_cercle.classList.add("button_border_active")
    }
    if (mode == "text"){
        button_text.classList.add("button_border_active")
    }
    if (mode == "ligne"){
        button_ligne.classList.add("button_border_active")
    }
    if (mode == "carre"){
        button_carre.classList.add("button_border_active")
    }
    if (mode == "modif_stroke"){
        button_modif_stroke.classList.add("button_border_active")
    }
    if (mode == "modif_fill"){
        button_modif_fill.classList.add("button_border_active")
    }
    if (mode == "plus"){
        button_plus.classList.add("button_border_active")
    }
    if (mode == "moins"){
        button_moins.classList.add("button_border_active")
    }
    if (mode == "haut"){
        button_haut.classList.add("button_border_active")
    }
    if (mode == "bas"){
        button_bas.classList.add("button_border_active")
    }
    if (mode == "gauche"){
        button_gauche.classList.add("button_border_active")
    }
    if (mode == "droite"){
        button_droite.classList.add("button_border_active")
    }

    if (mode_color == "border"){
        button_border.classList.add("button_border_active")
    }
    if (mode_color == "fill"){
        button_fill.classList.add("button_border_active")
    }
    if (mode_police == "arial"){
        button_arial.classList.add("button_border_active")
    }
    if (mode_police == "montserrat"){
        button_montserrat.classList.add("button_border_active")
    }
    if (mode_police == "poppins"){
        button_poppins.classList.add("button_border_active")
    }
    else{
        console.log("no_mode")
    }
}