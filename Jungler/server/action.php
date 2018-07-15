<?php
    include('db.php');

    if(isset($_POST['fFlower'])){
        $flower = mysqli_real_escape_string($connection, $_POST['fFlower']);
        $family = mysqli_real_escape_string($connection, $_POST['fFamily']);
        $uname= mysqli_real_escape_string($connection, $_POST['fUname']);
        
        $insert = "INSERT into jungler(flower,family,uname) values ('$flower', '$family', '$uname')";
        
        $result = mysqli_query($connection, $insert);

        if(!$result) {
            die('DB QUERY FAILED.');
        }
        else{
            echo "great success";
        }
    }
        mysqli_free_result($result);
    
        mysqli_close($connection);

?>