<?php
    // Cabecera para indicar que vamos a enviar datos JSON y que no haga cach� de los datos.
    header('Content-Type: application/json');
    $host = "localhost";
    $user = "root";
    $dbname = "pr_06";
    $pass = "";
    // Creamos la conexi�n al servidor.
    $conexion=mysqli_connect($host,$user,$pass,$dbname);
    if(isset($_REQUEST['anadir'])){
        $anadir = $_REQUEST['anadir'];
        mysqli_query($conexion,"INSERT into tareas (pendientes,terminadas) values ('$anadir',0) ");
    }else{
        if(isset($_REQUEST['terminado'])){
            $e = $_REQUEST['terminado'];
            mysqli_query($conexion,"UPDATE tareas set terminadas=1 where pendientes='$e' ");
        }else{
            if(isset($_REQUEST['pendiente'])){
                $e = $_REQUEST['pendiente'];
                mysqli_query($conexion,"UPDATE tareas set terminadas=0 where pendientes='$e' ");
            }else{
                if(isset($_REQUEST['borrar'])){
                    $e = $_REQUEST['borrar'];
                    mysqli_query($conexion,"DELETE FROM tareas WHERE pendientes='$e'");
                }else{
                    if(isset($_REQUEST['borrarTodo'])){
                        mysqli_query($conexion,"DELETE FROM tareas");
                    }else{
                        $query1 = mysqli_query($conexion,"SELECT pendientes,terminadas from tareas");
                        $arr1 = array();
                        $arr2 = array();
                        while($rows = mysqli_fetch_array($query1)){
                            if($rows[1]==0){
                                $arr1[] = $rows[0];
                            }else{
                                $arr2[] = $rows[0];
                            }
                        }
                        echo json_encode(array($arr1,$arr2));
                    }
                }
                
            }
        }
        
    }
?>