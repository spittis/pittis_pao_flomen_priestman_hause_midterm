<?php 
function createUser($firstname, $lastname, $email, $country){
   include('connect.php');

   // the following query will create a new row in the tbl_user table
   //with user_fname = $fname
   // user_name = $username
   // user_pass = $password
   // user_email = $email
    
    $check_exist_query = 'SELECT COUNT(*) FROM tbl_users';
    $check_exist_query .= ' WHERE user_email = :email ';

    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':email'=>$email
        )
        );
        $email_found = $user_set->fetchColumn();
        //var_dump($email_found);die;

        if($email_found > 0){
              // Query didn't work for some reason
            $update_user_query = 'UPDATE tbl_users SET user_lastupdate = date("h:i:sa") WHERE user_email = :email';
            $message = 'You are already an existing subscriber';
            return $message;
        }

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
        $notification = 'You have been added to the List';
        return $notification;
    }else{
        $message = 'Error';
        return $message;
    }

}


// Once you have created a new helper function make sure too include it in the config.php file 
// in order to load the content.