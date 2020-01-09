<?php
	// Cabecera para indicar que vamos a enviar datos JSON y que no haga cach� de los datos.
	header('Content-Type: application/json');
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
		// Configuraci�n BASE DE DATOS MYSQL
	$host = "localhost";
	$user = "root";
	$dbname = "ajax1718";
	$pass = "";
	// Creamos la conexi�n al servidor.
	$conexion=mysqli_connect($host,$user,$pass,$dbname);
	mysqli_query($conexion,"SET NAMES 'utf8'");

	if(isset($_REQUEST['num'])){
		$id = $_REQUEST['num'];
		mysqli_query($conexion,"DELETE FROM viajescomprados WHERE id='$id'");
	}else{
		if(isset($_REQUEST['json'])){
			$arrJso = json_decode($_REQUEST['json']);
			$nom = $arrJso[0];
			$dec = $arrJso[1];
			$mail = $arrJso[2];
			$num = $arrJso[3];
			$prec = $arrJso[4];
			$numeroTa = $arrJso[5];
			$csv = $arrJso[6];
			mysqli_query($conexion,"INSERT into viajescomprados (nombre,descripcion,email,num,precio,numerotarjeta,csv) values ('$nom','$dec','$mail','$num','$prec','$numeroTa','$csv') ");
		}else{
			$query1 = mysqli_query($conexion,"SELECT * from viajescomprados");
			$arr = array();
			while($rows = mysqli_fetch_array($query1)){
				$arr[] = array($rows[0],$rows[1],$rows[2],$rows[3],$rows[4],$rows[5],$rows[6],$rows[7]);
			}
			echo json_encode($arr);
		}
	}
	
?>