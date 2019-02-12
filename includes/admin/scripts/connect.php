<?php

// $user = "root";
// $pw = "root";

// try {
//     $conn = new PDO('mysql:host=localhost;dbname=INSERTDATABASENAME', $user,$pw);
//     //var_dump($conn); //CHECKING IF CONNECTION
// } catch(PDOException $exception) {
//     echo 'connect error!' . $exception->getMessage();
//     exit();
// }

$db_dsn = array(
	'host'=>'localhost',
	'dbname'=>'db_hackathon',
	'charset'=>'utf8'
);

$dsn = 'mysql:'. http_build_query($db_dsn,'',';');

// Set up connection credentials
$db_user = 'root';
$db_pass = 'root';

// Check connection
try{
	$pdo = new PDO($dsn,$db_user,$db_pass);
}catch(PDOException $exception){
	echo 'Connection Error: '.$exception->getMessage();
	exit();
}
?>