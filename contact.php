<?php

header('Content-Type: text/html;charset=UTF-8');

$email = $_POST['email'];
$identite = $_POST['idendite'];
$objet = $_POST['objet'];
$message = $_POST['message'];
$expediteur = 'From: association-aaa@gmail.com'."\r\n" .
              'Reply-To: association-aaa@gmail.com'."\r\n" .
              'X-Mailer: PHP/' .  phpversion();

mail ($email, $objet, $message, $expediteur, $identite);
// echo "Votre message à bien été envoyé.";
header('Location: confirmation.php');
    
?>