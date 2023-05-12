<?php
error_reporting( E_ALL );

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$first_name = $_POST['firstname'];
$last_name = $_POST['lastname'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$title = $_POST['title'];
$country = $_POST['country'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$additional = $_POST['additional'];

$type = $_POST['form-type'];

$EmailTo = 'info@accern.com';

$Body = '';
$Body .= '<b>First Name:</b> ';
$Body .= $first_name;
$Body .= '<br>';
$Body .= '<b>Last Name:</b> ';
$Body .= $last_name;
$Body .= '<br>';
$Body .= '<b>Email:</b> ';
$Body .= $email;
$Body .= '<br>';
$Body .= '<b>Phone:</b> ';
$Body .= $phone;
$Body .= '<br>';

switch ( $type ) {
    case 'contactUs':
    default:
    $Subject = 'New message from the Accern Contact page';
    $Body .= '<b>Title:</b> ';
    $Body .= $title;
    $Body .= '<br>';
    $Body .= '<b>Country:</b> ';
    $Body .= $country;
    $Body .= '<br>';
    $Body .= '<b>Company:</b> ';
    $Body .= $company;
    $Body .= '<br>';
    $Body .= '<b>Subject:</b> ';
    $Body .= $subject;
    $Body .= '<br>';
    $Body .= '<b>Message:</b> ';
    $Body .= $message;
    $Body .= '<br>';
    break;
    case 'requestTrial':
    $Subject = 'New message from the Accern request trial form';
    $Body .= '<b>Title:</b> ';
    $Body .= $title;
    $Body .= '<br>';
    $Body .= '<b>Country:</b> ';
    $Body .= $country;
    $Body .= '<br>';
    $Body .= '<b>Company:</b> ';
    $Body .= $company;
    $Body .= '<br>';
    $Body .= '<b>Subject:</b> ';
    $Body .= $subject;
    $Body .= '<br>';
    $Body .= '<b>Message:</b> ';
    $Body .= $message;
    $Body .= '<br>';
    break;
    case 'getInTouch':
    $Subject = 'New message from the Accern get in touch form';
    $Body .= '<b>Title:</b> ';
    $Body .= $title;
    $Body .= '<br>';
    $Body .= '<b>Country:</b> ';
    $Body .= $country;
    $Body .= '<br>';
    $Body .= '<b>Message:</b> ';
    $Body .= $message;
    $Body .= '<br>';
    break;
    case 'file':
    $Subject = 'New message from the Accern download file';
    $Body .= '<b>Title:</b> ';
    $Body .= $title;
    $Body .= '<br>';
    $Body .= '<b>Company:</b> ';
    $Body .= $company;
    $Body .= '<br>';
    $Body .= '<b>File:</b> ';
    $Body .= $additional;
    $Body .= '<br>';
    break;
    case 'requestAccess':
    $Subject = 'New message from the Accern request access (use cases)';
    $Body .= '<b>Company:</b> ';
    $Body .= $company;
    $Body .= '<br>';
    $Body .= '<b>Message:</b> ';
    $Body .= $message;
    $Body .= '<br>';
    $Body .= $additional;
    $Body .= '<br>';
    break;
}

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer( true );

try {
    //Server settings
    $mail->isSMTP();
    // Send using SMTP
    $mail->Host       = 'accern.com';
    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;
    // Enable SMTP authentication
    $mail->Username   = 'form@accern.com';
    // SMTP username
    $mail->Password   = 'LRT7S-wD9(F}';
    // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom( $email, $name );
    $mail->addAddress( $EmailTo, 'Accern info' );
    $mail->addReplyTo( $email, 'Information' );

    // Content
    $mail->isHTML( true );

    $mail->Subject = $Subject;
    $mail->Body    = $Body;
    $mail->AltBody = $Body;

    $mail->send();
    $mail->ClearAllRecipients();
    echo 'success';
} catch ( Exception $e ) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
