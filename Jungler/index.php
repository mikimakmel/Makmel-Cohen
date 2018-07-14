<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Jungler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=ABeeZee|Abhaya+Libre' rel='stylesheet'>
        <link rel="stylesheet" href="includes/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">
    </head>

<body id="AgamsGarden">
<div id="wrapper">

    <header>
        <a href="#" class="logoMobile"></a>
        <div class="headerBar"></div>
        <a href="#" class="hamburger"></a>
        <a href="#" class="options"></a>
        <!--<div class="flowerAddedBanner"></div>-->
    </header>

    <main>
        <h2 class="gardenNameText">Agam's Garden</h2>
        <div class="listBackground">
            <div id="users">
                <?php
                include('db.php');
                echo '<ul class="list">'
                while($row = mysqli_fetch_assoc($result)){
                    echo '<li><img class="image" src="images/FlowersPng/' . $row["flower"]'.png"><span class="name listFont">' . $row["flower"] . "</span></li>";
                }
                echo "</ul>";
                // <ul class="list">
                //     <li>
                //         <img class="image" src="images/FlowersPng/Petunia.png">
                //         <span class="name listFont">Petunia</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/trim.png">
                //         <img class="notificationImg" src="images/Agams garden/water.png">
                //         <div class="clearer"></div>
                //         <span class="family">Petunia axillaris</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/harvest.png">
                //         <img class="notificationImg" src="images/Agams garden/fertilize.png">
                //         <img src="images/General icons/horizontalLine.png">
                //     </li>
                //     <li>
                //         <img class="image" src="images/FlowersPng/American Basswood.png">
                //         <span class="name listFont">American Basswood</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/trim.png">
                //         <img class="notificationImg" src="images/Agams garden/water.png">
                //         <div class="clearer"></div>
                //         <span class="family">Tilia americana</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/harvest.png">
                //         <img class="notificationImg" src="images/Agams garden/fertilize.png">
                //         <img src="images/General icons/horizontalLine.png">
                //     </li>
                //     <li>
                //         <img class="image" src="images/FlowersPng/Aibika.png">
                //         <span class="name listFont">Aibika</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/trim.png">
                //         <img class="notificationImg" src="images/Agams garden/water.png">
                //         <div class="clearer"></div>
                //         <span class="family">Abelmoschus manihot</span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/harvest.png">
                //         <img class="notificationImg" src="images/Agams garden/fertilize.png">
                //         <img src="images/General icons/horizontalLine.png">
                //     </li>
                //     <li>
                //         <img class="image" src="">
                //         <span class="name listFont"></span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/trim.png">
                //         <img class="notificationImg" src="images/Agams garden/water.png">
                //         <div class="clearer"></div>
                //         <span class="family"></span>
                //         <img class="notificationImg notificationImgRight" src="images/Agams garden/harvest.png">
                //         <img class="notificationImg" src="images/Agams garden/fertilize.png">
                //         <img src="images/General icons/horizontalLine.png">
                //     </li>
                // </ul>
                ?>
            </div>
        </div>
        <a href="#" class="leftArrow"></a>
        <a href="#" class="rightArrow"></a>
        <a href="#" class="myGardenList"></a>
        <a href="#" class="myGardenNotifications"></a>
    </main>

    <footer>
        <a href="#" class="recommendedButton"></a>
        <a href="#" class="myGardensButton myGardensButton-Selected"></a>
        <a href="searchByCatagory.html" class="searchButton"></a>
    </footer>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
crossorigin="anonymous"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="includes/main.js"></script>
</body>

</html>