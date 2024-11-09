<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form fields ko sanitize aur validate karein
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Email details
    $to = "muhammadnasssah@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: no-reply@yourwebsite.com";
    
    // Email send karne ki koshish
    if (mail($to, $subject, $body, $headers)) {
        // Agar email successfully send ho jae, user ko confirmation message dikhaye
        echo "<script>alert('Your form has been submitted successfully!');</script>";
        
        // Thoda delay de kar homepage par redirect kare
        echo "<script>
                setTimeout(function() {
                    window.location.href = './'; // Yeh aapke homepage ka URL hona chahiye
                }, 1000); // 2 seconds ka delay
              </script>";
    } else {
        echo "<script>alert('Failed to send your message. Please try again later.');</script>";
    }
}
?>
