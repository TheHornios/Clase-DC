<?php
    $arrPalabras = array('felicita a','medico','comprar','leer','limpiar la casa','ver la serie','ver la pelicula');
    if(isset($_REQUEST['key'])){
        if($_REQUEST['key']!= ' '&&$_REQUEST['key']!= ''){
            $arr = array();
            for($i = 0;$i<count($arrPalabras);$i++){
                $pos = stristr($arrPalabras[$i], $_REQUEST['key']);
                if($pos !== false){
                    $arr[] = $arrPalabras[$i];
                }
            }
            echo json_encode($arr);
        }
    }
?>