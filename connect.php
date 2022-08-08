<?php
if($_SERVER['REQUEST_METHOD'] =='POST' && isset($_POST['submit-final'])){
    //mysqli_connect(database,  type of user, database password, database name)
    $conn= mysqli_connect('localhost', 'root', '', 'resca_test1') or die("Connection failed: " .mysqli_connect_error());
    //check if null
    if(isset($_POST['first-name']) && isset($_POST['last-name']) && isset($_POST['email']) && isset($_POST['phone-number'])){
        //name field
        $firstName=$_POST['first-name'];
        $lastName=$_POST['last-name'];
        $email=$_POST['email'];
        $phone=$_POST['phone-number'];
        //table name
        $sql="INSERT INTO `users` (`firstName`,`lastName`,`email`,`phone`) VALUES('$firstName','$lastName','$email','$phone')";

        $query = mysqli_query($conn,$sql);
        if($query){
            echo 'Entry Successful';
        }
        else{
            echo 'Error Occurred';
        }

    }
}
?>