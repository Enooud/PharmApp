<?php

    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
    header("Content-Type: application/json; charset=utf-8");
    include "config.php";

    $postjson = json_decode(file_get_contents('php://input'), true);
    if ($postjson['req'] == "rchphar") {
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM pharmacie WHERE Villephar = '$postjson[Villephar]' AND
        Staphar = '$postjson[Staphar]' " );
    
         while($row = mysqli_fetch_array($query)){
             $data[]= array(
                 'Nomphar' => $row['Nomphar'],
                 'Adrphar' => $row['Adrphar'],
                 'Numphar' => $row['Numphar'],
                 'Mailphar' => $row['Mailphar'],
                 'Villephar' => $row['Villephar'],
                 'Quartierphar' => $row['Quartierphar'],
                 
             );
         }
         if ($query) $result = json_encode(array('success'=>true, 'result' => $data));
            else $result = json_encode(array('success'=>false, ));
            echo $result;

    } elseif ($postjson['req'] =="rchphar1") {
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM pharmacie WHERE Villephar = '$postjson[Villephar]' ");
    
         while($row = mysqli_fetch_array($query)){
             $data[]= array(
                 'Nomphar' => $row['Nomphar'],
                 'Adrphar' => $row['Adrphar'],
                 'Numphar' => $row['Numphar'],
                 'Mailphar' => $row['Mailphar'],
                 'Villephar' => $row['Villephar'],
                 'Quartierphar' => $row['Quartierphar'],
                 
                 
             );
         }
            
        if ($query) $result = json_encode(array('success'=>true, 'result' => $data));
            else $result = json_encode(array('success'=>false, ));
            echo $result;
    }
    /*
    elseif ($postjson['req']=="rchphar2") {
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM pharmacie WHERE Grpsang = '$postjson[Grpsang]' ");
    
         while($row = mysqli_fetch_array($query)){
             $data[]= array(
                 'Nomphar' => $row['Nomphar'],
                 'Adrphar' => $row['Adrphar'],
                 'Numphar' => $row['Numphar'],
                 'Mailphar' => $row['Mailphar'],
                 'Villephar' => $row['Villephar'],
                 'Quartierphar' => $row['Quartierphar'],
                 
             );
         }
            
        if ($query) $result = json_encode(array('success'=>true, 'result' => $data));
            else $result = json_encode(array('success'=>false, ));
            echo $result;
    }

    */

?>