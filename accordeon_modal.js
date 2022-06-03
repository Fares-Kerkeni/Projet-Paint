var tab = document.getElementById('tab');
var choix_polices = document.getElementById('choix_polices');

tab.onclick = function() {
    open_close_tab()
};

function open_close_tab() {
    // si le style est deja a block alors il passe en none
    if(choix_polices.style.display == "block"){
        choix_polices.style.display = "none";
        tab.style.border = "1px solid #ece8e8";
    }
    // sinon il passe en block
    else{
        tab.style.border = "1px solid black";
        choix_polices.style.display = "block";
    }
}
    


var save = document.getElementById('save');
var modal_save = document.getElementById('modal_save');
var close_save = document.getElementById('close_save');

save.onclick = function() {
    open_modal_save()
};

function open_modal_save() {
    modal_save.style.display = "block"
}

close_save.onclick = function() {
    close_modal_save()
};

function close_modal_save() {
    modal_save.style.display = "none"
}

var recup = document.getElementById('recup');
var modal_recup = document.getElementById('modal_recup');
var close_recup = document.getElementById('close_recup');

recup.onclick = function() {
    open_modal_recup()
};

function open_modal_recup() {
    modal_recup.style.display = "block"
}

close_recup.onclick = function() {
    close_modal_recup()
};

function close_modal_recup() {
    modal_recup.style.display = "none"
}