document.addEventListener('DOMContentLoaded', function() {
    var tampon = []
    // place chaque index du tableau dans un tableau soit en les convertissant soit en les laissant comme tel
    // et ensuite ce tableau est envoyé au tableau de sa forme et les index déjà recupéré sont effacés
    var recup_carres = document.getElementById("input_recup_carres").value.split(',')
    while (recup_carres.length > 0) {
        tampon.push(parseInt(recup_carres[0]))
        tampon.push(parseInt(recup_carres[1]))
        tampon.push(parseInt(recup_carres[2]))
        tampon.push(parseInt(recup_carres[3]))
        tampon.push(recup_carres[4])
        tampon.push(recup_carres[5])
        recup_carres.splice(0,6)
        carree.push(tampon)
        formes.push(tampon)
        var tampon = []
    }

    var recup_rectangles = document.getElementById("input_recup_rectangles").value.split(',')
    while (recup_rectangles.length > 0) {
        tampon.push(parseInt(recup_rectangles[0]))
        tampon.push(parseInt(recup_rectangles[1]))
        tampon.push(parseInt(recup_rectangles[2]))
        tampon.push(parseInt(recup_rectangles[3]))
        tampon.push(recup_rectangles[4])
        tampon.push(recup_rectangles[5])
        recup_rectangles.splice(0,6)
        rectangles.push(tampon)
        formes.push(tampon)
        var tampon = []
    }

    var recup_lignes = document.getElementById("input_recup_lignes").value.split(',')
    while (recup_lignes.length > 0) {
        tampon.push(parseInt(recup_lignes[0]))
        tampon.push(parseInt(recup_lignes[1]))
        tampon.push(parseInt(recup_lignes[2]))
        tampon.push(parseInt(recup_lignes[3]))
        tampon.push(recup_lignes[4])
        tampon.push(recup_lignes[5])
        recup_lignes.splice(0,6)
        lignee.push(tampon)
        formes.push(tampon)
        var tampon = []
    }

    var recup_triangles = document.getElementById("input_recup_triangles").value.split(',')
    while (recup_triangles.length > 0) {
        tampon.push(parseInt(recup_triangles[0]))
        tampon.push(parseInt(recup_triangles[1]))
        tampon.push(parseInt(recup_triangles[2]))
        tampon.push(parseInt(recup_triangles[3]))
        tampon.push(parseInt(recup_triangles[4]))
        tampon.push(recup_triangles[5])
        tampon.push(recup_triangles[6])
        recup_triangles.splice(0,7)
        trianglee.push(tampon)
        var tampon = []
    }

    var recup_cercles = document.getElementById("input_recup_cercles").value.split(',')
    while (recup_cercles.length > 0) {
        tampon.push(parseInt(recup_cercles[0]))
        tampon.push(parseInt(recup_cercles[1]))
        tampon.push(parseInt(recup_cercles[2]))
        tampon.push(parseInt(recup_cercles[3]))
        tampon.push(parseInt(recup_cercles[4]))
        tampon.push(recup_cercles[5])
        tampon.push(recup_cercles[6])
        recup_cercles.splice(0,7)
        cerclee.push(tampon)
        var tampon = []
    }
    refresh()
});