<?php 
    require_once('scripts/config.php');
    
    if(isset($_POST['submit'])){
    $firstname = trim($_POST['firstname']);
    $lastname = trim($_POST['lastname']);
    $email = trim($_POST['email']);
    $country = trim($_POST['country']);
       
    }


    if(empty($_POST['country']) || empty($_POST['firstname']) || empty($_POST['lastname']) || empty($_POST['email'])){
        $message = 'Please fill in required fields';
    } else {
        $country = $_POST['country'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];

        var_dump();

        $result = createUser($country, $firstname, $lastname, $email);
    }
        echo json_encode($message);




    // if(isset($_POST['submit'])){
    //     $firstname = trim($_POST['firstname']); //trim function gets rid of usless white spaces in the input.
    //     $lastname = trim($_POST['lastname']);
        
    //     $email = trim($_POST['email']);
    //     $country = trim($_POST['country']);
       
    //     //VALIDATION??

    //     if(empty($email) || empty($firstname)){ //customize validation here.
    //         $message = 'Please fill in the required fields!';
    //     }else{
    //     // CREATE USER
    //    $result = createUser($firstname, $lastname, $email, $country);

    //     $message = $result;
    // }
?>