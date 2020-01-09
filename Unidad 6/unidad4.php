<?php
    $arr = array('madrid','Burgos','Mi Casa','Barcelona','Soria','Valencia','Mi casa del pueblo','Palencia','Valladolid','Murcia Soterrada');
    $texto = -1;
    for($i = 0;$i<count($arr);$i++){
        if($arr[$i]==$_REQUEST['ciudad']){
            $texto = $i;
        }
    }
    echo $texto;
?>