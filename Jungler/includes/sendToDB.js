bannerBool = 0;

$(function() {
    $("#flowerToAdd").submit(function() {
        var flower = "Hibiscus";
        var family = "Malvales";
        var uname = "Agam";        
        var dataString = 'fFlower=' + flower + '&fFamily=' + family + '&fUname=' + uname;

        console.log(dataString);
        $("#loader").fadeIn(500).html();

        $.ajax({
            type: "POST",
            url: "server/action.php",
            data: dataString,
            cache: true,
             success: function(html){
                $("#loader").after(html);
                $("#loader").hide();
                console.log(html)

                 // $("#flowerAddedBanner").show();
                 bannerBool = 1;
             }  
        });
    });
});

document.getElementById("theButton").onclick = function() {
    if(bannerBool == 1)
    {
        document.getElementById("flowerAddedBanner").style.display = "initial";
    }
};
