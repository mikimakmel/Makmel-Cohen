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
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script></head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>
</head>

<body id="Hibiscus">
    <div id="wrapper">
        <header>
            <div class="flowerCoverPic"></div>
            <a href="#" class="logoMobile"></a>
            <a href="searchByCatagory.html" class="backArrow"></a>
            <h3 class="plantsCoverText">Hibiscus</h3>
        </header>
        
        <main>
            <form method="post" id="flowerToAdd" action="index.php">
                <input type="hidden" id="fFlower" value="Hibiscus">
                <input type="hidden" id="fFamily" value="Malvales">
                <input type="hidden" id="fUname" value="Agam">
                <button type="submit" class="addToGardenButton" id="theButton"></button>
            </form>
            <div class="separationLine"></div>
            <h3 class="plantsMainTextHeadline plantsMainTextFamily">Family</h3>
            <h3 class="plantsMainTextHeadline plantsMainTextDuration">Duration</h3>
            <h2 class="plantsMainTextInfo plantsMainTextFamilyInfo">Malvales</h2>
            <h2 class="plantsMainTextInfo plantsMainTextDurationInfo">Annually</h2>
        </main>


        <nav>
            <div class="infoBoxesForPlant waterInfo"></div>
            <h2 class="infoBoxText waterInfoHeadline">Water</h2>
            <h2 class="infoBoxText waterInfoContents">Low</h2>
            <div class="infoBoxesForPlant plantingInfo"></div>
            <h2 class="infoBoxText plantingInfoHeadline">Planting</h2>
            <h2 class="infoBoxText plantingInfoContents">Late Summer</h2>
            <div class="infoBoxesForPlant spaceInfo"></div>
            <h2 class="infoBoxText spaceInfoHeadline">Space</h2>
            <h2 class="infoBoxText spaceInfoContents">50 cm</h2>
            <div class="infoBoxesForPlant exposureInfo"></div>
            <h2 class="infoBoxText exposureInfoHeadline">Exposure</h2>
            <h2 class="infoBoxText exposureInfoContents">Half Shade</h2>
        </nav>
    </div>

    <script src="includes/sendToDB.js"></script>
</body>

</html>