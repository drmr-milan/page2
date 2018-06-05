<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $emailTitle = $_POST['emailTitle'];
        $message = $_POST['message'];
        
        $emailTo = "bnu12096@mziqo.com";
        $headers = "From: ".$emailFrom;
        $txt = "Email sent from ".$name.".\n\n".$message;
        
        mail($emailTo, $emailTitle, $txt, $headers);
    }
?>