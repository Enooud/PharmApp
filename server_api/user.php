<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");
include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if ($postjson['req']=="Add") {
//	$mdp = md5($postjson['mdp']);
	$query = mysqli_query($mysqli, "INSERT INTO utilisateur SET
        Nom = '$postjson[Nom]',
        Prenom = '$postjson[Prenom]',
        Datnais = '$postjson[Datnais]',
        Tel= '$postjson[Tel]',
		Email ='$postjson[Email]',
		Pass = '$postjson[Pass]'
		");
		if ($query) $result = json_encode(array('success'=>true));
		else{ 
			$result = json_encode(array('success'=>false, 'msg'=>'Vérifiez votre connexion ou ressayer plus tard'));
		}	
		echo $result;
	}
?>