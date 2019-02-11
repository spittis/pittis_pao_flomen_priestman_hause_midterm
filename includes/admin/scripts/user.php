<?php 
function createUser($firstname, $lastname, $email, $country){
   include('connect.php');

   // the following query will create a new row in the tbl_user table
   //with user_fname = $fname
   // user_name = $username
   // user_pass = $password
   // user_email = $email
   $create_user_query = 'INSERT INTO tbl_users(user_firstname,user_lastname,user_email,user_country)';
   $create_user_query .= ' VALUES(:firstname,:lastname,:email,:country)';

   $create_user_set = $pdo->prepare($create_user_query);
   $create_user_set->execute(
       array(
          ':firstname'=>$firstname,
          ':lastname'=>$lastname,
          ':email'=>$email,
          ':country'=>$country
       )
       );

    if($create_user_set->rowCount()){
        redirect_to('sign-up.php');
    }else{
        $message = 'Error';
        return $message;
    }

}


// Once you have created a new helper function make sure too include it in the config.php file 
// in order to load the content.