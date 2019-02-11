<?php

$user = "root";
$pw = "root";

try {
    $conn = new PDO('mysql:host=localhost;dbname=INSERTDATABASENAME', $user,$pw);
    //var_dump($conn); //CHECKING IF CONNECTION
} catch(PDOException $exception) {
    echo 'connect error!' . $exception->getMessage();
}

?>