<?php

    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
    header("Content-Type: application/json; charset=utf-8");
    include "config.php";

    $postjson = json_decode(file_get_contents('php://input'), true);
    if ($postjson['req']=="rchmedoc") {
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM donneur WHERE Grpsang = '$postjson[Grpsang]' AND
        FacR = '$postjson[FacR]' " );
    
         while($row = mysqli_fetch_array($query)){
             $data[]= array(
                 'Nom' => $row['Nom'],
                 'Prenom' => $row['Prenom'],
                 'Grpsang' => $row['Grpsang'],
                 'FacR' => $row['FacR'],
                 
             );
         }
            
        if ($query) $result = json_encode(array('success'=>true, 'result' => $data));
            else $result = json_encode(array('success'=>false, ));
            echo $result;

    }
    elseif ($postjson['aski']=="rchsang2") {
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM donneur WHERE Grpsang = '$postjson[Grpsang]' ");
    
         while($row = mysqli_fetch_array($query)){
             $data[]= array(
                 'Nom' => $row['Nom'],
                 'Prenom' => $row['Prenom'],
                 'Grpsang' => $row['Grpsang'],
                 'FacR' => $row['FacR'],
                 
             );
         }
            
        if ($query) $result = json_encode(array('success'=>true, 'result' => $data));
            else $result = json_encode(array('success'=>false, ));
            echo $result;
        }
?>