<?php


  $engine = "mysql";
  $host = "localhost";
  $port = 8889;
  $dbname = "paint";  
  $username = "root";
  $password = "root";
  $pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);
  // if($pdo){
  //   echo"good";
  // }
  // else{
  //   echo"pas good";
  // }
  // envoie le dessin dans la base de donnée
  if (!empty($_POST['submit_save'])) {
    if(!empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['nom_dessin'])){
      $prenom = $_POST['prenom'];
      $nom = $_POST['nom'];
      $nom_dessin = $_POST['nom_dessin'];
      $carres = $_POST['input_carres'];
      $rectangles = $_POST['input_rectangles'];
      $lignes = $_POST['input_lignes'];
      $triangles = $_POST['input_triangles'];
      $cercles = $_POST['input_cercles'];
      $maRequete = $pdo->prepare("INSERT INTO user (prenom, nom, nom_dessin, carres, rectangles, lignes, triangles, cercles) VALUES ('".$prenom."','".$nom."','".$nom_dessin."','".$carres."','".$rectangles."','".$lignes."','".$triangles."','".$cercles."');");
      $maRequete->execute();
      header('Location: index.php');
    }
  }
  //recupère le dessin dans la base de données
  if (!empty($_POST['submit_recup'])) {
    if(!empty($_POST['prenom_recup']) && !empty($_POST['nom_recup']) && !empty($_POST['nom_dessin_recup'])){
      $prenom_recup = $_POST['prenom_recup'];
      $nom_recup = $_POST['nom_recup'];
      $nom_dessin_recup = $_POST['nom_dessin_recup'];
      $maRequete_recup = $pdo->prepare("SELECT * FROM user WHERE prenom = '".$prenom_recup."' AND nom = '".$nom_recup."' AND nom_dessin = '".$nom_dessin_recup."' ");
      $maRequete_recup->execute();
      $recup = $maRequete_recup->fetch(PDO::FETCH_ASSOC);
    }
  }
  
?>



<!DOCTYPE html>
<html lang="fr">
  <head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paint projet</title>
    <link rel="stylesheet" href="couleurs.css" />
    <link rel="stylesheet" href="outils.css" />
    <link rel="stylesheet" href="style.css" />

  </head>



  <body>

    <h1>Paint App</h1>
    <button type="bouton" id="aide"><a href="Aide.html">Help</a></button>

    <main>
      <!-- blocs à gauche avec toutes les couleurs et les outils -->

      <div class="left-block">

        <!-- bloc avec toutes les couleurs -->
        <div class="colors">

          <p>Colors</p>
          <button type="button" value="#08090a" id="noir"></button>
          <button type="button" value="#858585" id="gris"></button>
          <button type="button" value="#fffafa" id="blanc"></button>

          <button type="button" value="#f73030" id="rouge"></button>
          <button type="button" value="#ffa10a" id="orange"></button>
          <button type="button" value="#ffff00" id="jaune"></button>

          <button type="button" value="#0000ff" id="bleu-foncé"></button>
          <button type="button" value="#2585e4" id="bleu"></button>
          <button type="button" value="#61bafa" id="bleu-clair"></button>

          <button type="button" value="#4f3894" id="violet-foncé"></button>
          <button type="button" value="#826bc7" id="violet"></button>
          <button type="button" value="#b4a6dd" id="violet-clair"></button>

          <button type="button" value="#257a00" id="vert-foncé"></button>
          <button type="button" value="#43e000" id="vert"></button>
          <button type="button" value="#9bff70" id="vert-clair"></button>

          <button type="button" value="#ce1483" id="magenta"></button>
          <button type="button" value="#e83f6f" id="rose"></button>
          <button type="button" value="#f6a2d4" id="rose-clair"></button>

        </div>

        <!-- div avec les boutons border et fill -->
        <div class="choice">

          <button id="border" type="button" onclick="border();">Border</button>
          <button id="fill" type="button" onclick="fill();">Fill</button>

        </div>

        <!-- affichage des couleurs -->
        <div class="color_stroke_fill">
          <div id="color_stroke"></div>
          <div id="color_fill"></div>
        </div>

        <!-- bloque avec tous les outils -->
        <div class="shapes">

          <p>Shapes</p>

          <div class="formes">
            <button id="rectangle" type="button" onclick="rectangle();"></button>
            <button id="carre" type="button" onclick="carre();"></button>
            <button id="triangle" type="button" onclick="triangle();"></button>
            <button id="cercle" type="button" onclick="cercle();"></button>
          </div>

          <div class="autres">
            <button id="text" type="button" onclick="text();">T</button>
            <button id="ligne" type="button" onclick="ligne();">---</button>
            <button id="dessin" type="button" onclick="dessin();"></button>
            <button id="gomme" type="button" onclick="gomme();"></button>

            <button id="modif_stroke" type="button" onclick="modif_stroke();"></button>
            <button id="modif_fill" type="button" onclick="modif_fill();"></button>
            <button id="plus" type="button" onclick="plus()">+</button>
            <button id="moins" type="button" onclick="moins()">-</button>

            <button id="haut" type="button" onclick="haut()"></button>
            <button id="bas" type="button" onclick="bas()"></button>
            <button id="gauche" type="button" onclick="gauche()"></button>
            <button id="droite" type="button" onclick="droite()"></button>
          </div>

        </div>

        <!-- bloque avec toutes les polices -->
        <div class="font">

          <div id="tab">Fonts</div>
          <div id="choix_polices">
            <div class ="fonts" id="arial" onclick="arial();">Arial</div>
            <div class ="fonts" id="montserrat" onclick ="montserrat();">Montserrat</div>
            <div class ="fonts" id="poppins" onclick = "poppins();">Poppins</div>
          </div>

        </div>

        <button id="clear" type="button">Clear</button>

        <!-- bloque avec sauvegarde/png/pdf -->
        <div class="save">
          <button id="save" type="button">Save</button>
          <button id="recup" type="button">recup</button>
        </div>

        <div class="download_buttons">
          <button id="PNG" type="button">Png</button>
          <button id="PDF" type="button"onclick="generatePDF();">Pdf</button>
        </div>

      </div>

      <div class="right-block" id="right-block">
          <canvas id="paint-canvas" width="658" height="460"></canvas>
      </div>


    </main>

    <div id="modal_save" class="modal_save_recup">
      <div class="flex">

        <form action="index.php" method="post">

          <span>Sauvegarde</span>
          <div class="close_modal" id="close_save">X</div>
          <label for="prenom">prenom</label>
          <input type="text" id="prenom" name="prenom">
          <label for="nom">nom</label>
          <input type="text" id="nom" name="nom">
          <label for="nom_dessin">nom du dessin</label>
          <input type="text" id="nom_dessin" name="nom_dessin">
          <input type="hidden" id="input_carres" name="input_carres">
          <input type="hidden" id="input_rectangles" name="input_rectangles">
          <input type="hidden" id="input_lignes" name="input_lignes">
          <input type="hidden" id="input_triangles" name="input_triangles">
          <input type="hidden" id="input_cercles" name="input_cercles">
          <input type="submit" name="submit_save" value="Envoyer">
        </form>
      </div>

    </div>
    <div id="modal_recup" class="modal_save_recup">
      <div class="flex">
        <form action="index.php?" method="post">
          <span>Recuperer un dessin</span>
          <div class="close_modal" id="close_recup">X</div>
          <label for="prenom">prenom</label>
          <input type="text" id="prenom_recup" name="prenom_recup">
          <label for="nom">nom</label>
          <input type="text" id="nom_recup" name="nom_recup">
          <label for="nom_dessin">nom du dessin à récuperer</label>
          <input type="text" id="nom_dessin_recup" name="nom_dessin_recup">
          <input type="submit" name="submit_recup" value="Envoyer">
        </form>
      </div>
    </div>


    
    <input type="hidden" id="input_recup_carres" value="<?= $recup["carres"] ?>">
    <input type="hidden" id="input_recup_rectangles" value="<?= $recup["rectangles"] ?>">
    <input type="hidden" id="input_recup_lignes" value="<?= $recup["lignes"] ?>">
    <input type="hidden" id="input_recup_triangles" value="<?= $recup["triangles"] ?>">
    <input type="hidden" id="input_recup_cercles" value="<?= $recup["cercles"] ?>">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
    <script src="formes.js"></script>
    <script src="resize.js"></script>
    <script src="select_button.js"></script>
    <script src="accordeon_modal.js"></script>
    <script src="sauvegarde.js"></script>
  </body>
</html>
