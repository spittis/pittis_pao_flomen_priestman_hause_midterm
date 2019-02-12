<?php 
    require_once('scripts/config.php');
    
    if(isset($_POST['submit'])){
        $firstname = trim($_POST['firstname']); //trim function gets rid of usless white spaces in the input.
        $lastname = trim($_POST['lastname']);
        
        $email = trim($_POST['email']);
        $country = trim($_POST['country']);
       
        //VALIDATION??

        if(empty($email) || empty($firstname)){ //customize validation here.
            $message = 'Please fill in the required fields!';
        }else{
        // CREATE USER
       $result = createUser($firstname, $lastname, $email, $country);

        $message = $result;
    }
}

if(isset($_POST['submit'])){
    $to = $_POST['email']; // this is your Email address
    $from = "blakealexhause@gmail.com"; // this is the sender's Email address
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $subject = "Subscription.";
    $message = "Thank you for subscribing!";
    // $subject2 = "Copy of your form submission";
    // $message = $firstname . " " . $lastname . " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Your are now Subscribed! Thank you " . $firstname . ", you will recieve an email shortly!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up Form</title>
</head>
<body>
<?php if(!empty($message)):?>
	<p><?php echo $message;?></p>
	<?php endif;?>
 <h2>Subscribe to our newsletter</h2>
 <form action="sign-up.php" method="post">
 <label for="country">Country:</label>
 <input type="text" id="country" name="country" value="">
 <label for="firstname">First Name:</label>
 <input type="text" id="firstname" name="firstname" value="">
 <label for="lastname">Last Name:</label>
 <input type="text" id="lastname" name="lastname" value="">
 <label for="email">Email:</label>
 <input type="email" id="email" name="email" value="">
 <button type="submit" name="submit">Subscribe</button>
 </form>
    
</body>
</html>