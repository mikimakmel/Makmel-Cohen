document.getElementById("notificationsButton").onclick = function() { showNotificationsPage() };
document.getElementById("infoButton").onclick = function() { showInfoPage() };
document.getElementById("useDefaultButton").onclick = function() { showDefaultNotifications() };
document.getElementById("cancelButton").onclick = function() { hide() };
document.getElementById("okButton").onclick = function() { approveAction() };

var bool_approveAction = 0;
var bool_notificationsButton = 0;
var bool_infoButton = 1;

var myJSON = {
    "defaultNotifications": [
        {
            "name": "Water",
            "repeat": "Every day",
            "hour": "19:00",
            "img": "url('images/myPlant page/waterIconBIGGER.png')"
        },
        {
            "name": "Trim",
            "repeat": "Every day",
            "hour": "11:00",
            "img": "url('images/myPlant page/trimIconBIGGER.png')"
        },
        {
            "name": "Fertilize",
            "repeat": "Every day",
            "hour": "13:00",
            "img": "url('images/myPlant page/fertilizeIconBIGGER.png')"
        },
        {
            "name": "Harvest",
            "repeat": "Every day",
            "hour": "07:00",
            "img": "url('images/myPlant page/harvestIconBIGGER.png')"
        }
    ]
}

function showNotificationsPage() {
    bool_notificationsButton = 1;
    bool_infoButton = 0;

    document.getElementById("hideRectangle").style.display = "initial";
    document.getElementById("infoButton").style.backgroundImage = "url('images/myPlant page/plantInfoIcon.png')";
    document.getElementById("notificationsButton").style.backgroundImage = "url('images/myPlant page/plantNotificationIcon - selected.png')";
    if(window.innerWidth < 485)
    {
        document.getElementById("chosenLine").style.left = "241px";
    }
    if(window.innerWidth >= 485)
    {
        document.getElementById("chosenLine").style.left = "384px";
    }
    document.getElementById("notificationsHeadText").style.display = "initial";
    document.getElementById("plusNotificationsButton").style.display = "initial";

    if(bool_approveAction == 0)
    {
        document.getElementById("bellIcon").style.display = "initial";
        document.getElementById("paragraphText").style.display = "initial";
        document.getElementById("orLine").style.display = "initial";
        document.getElementById("useDefaultButton").style.display = "initial";
    }

    if(bool_approveAction == 1)
    {
        document.getElementById("biggerIcon").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("timeText").style.display = "initial";
        document.getElementById("typeText").style.display = "initial"
        document.getElementById("repetitionText").style.display = "initial";
    }
}

function showInfoPage() {
    bool_notificationsButton = 0;
    bool_infoButton = 1;

    document.getElementById("hideRectangle").style.display = "none";
    document.getElementById("infoButton").style.backgroundImage = "url('images/myPlant page/plantInfoIcon - selected.png')";
    document.getElementById("notificationsButton").style.backgroundImage = "url('images/myPlant page/plantNotificationIcon.png')";
    document.getElementById("chosenLine").style.left = "-2px";
    document.getElementById("notificationsHeadText").style.display = "none";
    document.getElementById("bellIcon").style.display = "none";
    document.getElementById("paragraphText").style.display = "none";
    document.getElementById("plusNotificationsButton").style.display = "none";
    document.getElementById("orLine").style.display = "none";
    document.getElementById("useDefaultButton").style.display = "none";

    if(bool_approveAction == 1)
    {
        document.getElementById("biggerIcon").style.display = "none";
        document.getElementById("onIcon").style.display = "none";
        document.getElementById("timeText").style.display = "none";
        document.getElementById("typeText").style.display = "none"
        document.getElementById("repetitionText").style.display = "none";
    }
}

function showDefaultNotifications() {
    document.getElementById("darkenBackground").style.display = "initial";
    document.getElementById("chooseKindBackground").style.display = "initial";
    document.getElementById("cancelButton").style.display = "initial";
    document.getElementById("okButton").style.display = "initial";
    document.getElementById("chooseKindText").style.display = "initial";

    document.getElementById("waterIcon").style.display = "initial";
    document.getElementById("waterText").style.display = "initial";
    document.getElementById("waterCheckbox").style.display = "initial";

    document.getElementById("trimIcon").style.display = "initial";
    document.getElementById("trimText").style.display = "initial";
    document.getElementById("trimCheckbox").style.display = "initial";

    document.getElementById("fertilizeIcon").style.display = "initial";
    document.getElementById("fertilizeText").style.display = "initial";
    document.getElementById("fertilizeCheckbox").style.display = "initial";

    document.getElementById("harvestIcon").style.display = "initial";
    document.getElementById("harvestText").style.display = "initial";
    document.getElementById("harvestCheckbox").style.display = "initial";
}

function hide() {
    document.getElementById("darkenBackground").style.display = "none";
    document.getElementById("chooseKindBackground").style.display = "none";
    document.getElementById("cancelButton").style.display = "none";
    document.getElementById("okButton").style.display = "none";
    document.getElementById("chooseKindText").style.display = "none";

    document.getElementById("waterIcon").style.display = "none";
    document.getElementById("waterText").style.display = "none";
    document.getElementById("waterCheckbox").style.display = "none";

    document.getElementById("trimIcon").style.display = "none";
    document.getElementById("trimText").style.display = "none";
    document.getElementById("trimCheckbox").style.display = "none";

    document.getElementById("fertilizeIcon").style.display = "none";
    document.getElementById("fertilizeText").style.display = "none";
    document.getElementById("fertilizeCheckbox").style.display = "none";

    document.getElementById("harvestIcon").style.display = "none";
    document.getElementById("harvestText").style.display = "none";
    document.getElementById("harvestCheckbox").style.display = "none";
}

function approveAction() {
    hide();
    bool_approveAction = 1;

    var waterCheckbox = document.getElementById("waterCheckbox");
    var trimCheckbox = document.getElementById("trimCheckbox");
    var fertilizeCheckbox = document.getElementById("fertilizeCheckbox");
    var harvestCheckbox = document.getElementById("harvestCheckbox");

    if(waterCheckbox.checked || trimCheckbox.checked || fertilizeCheckbox.checked || harvestCheckbox.checked)
    {
        document.getElementById("bannerBackground").style.display = "initial";
        document.getElementById("reminderEnableBanner").style.display = "initial";
        document.getElementById("bellIcon").style.display = "none";
        document.getElementById("paragraphText").style.display = "none";
        document.getElementById("orLine").style.display = "none";
        document.getElementById("useDefaultButton").style.display = "none";
    }

    if(waterCheckbox.checked)
    {
        console.log(waterCheckbox.value)
        document.getElementById("biggerIcon").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("timeText").style.display = "initial";
        document.getElementById("typeText").style.display = "initial"
        document.getElementById("repetitionText").style.display = "initial";

        document.getElementById("typeText").innerHTML = myJSON.defaultNotifications[0].name;
        document.getElementById("repetitionText").innerHTML = myJSON.defaultNotifications[0].repeat;
        document.getElementById("timeText").innerHTML = myJSON.defaultNotifications[0].hour;
        document.getElementById("biggerIcon").style.backgroundImage = myJSON.defaultNotifications[0].img;
    }
    if(trimCheckbox.checked)
    {
        console.log(waterCheckbox.value)
        document.getElementById("biggerIcon").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("timeText").style.display = "initial";
        document.getElementById("typeText").style.display = "initial"
        document.getElementById("repetitionText").style.display = "initial";

        document.getElementById("typeText").innerHTML = myJSON.defaultNotifications[1].name;
        document.getElementById("repetitionText").innerHTML = myJSON.defaultNotifications[1].repeat;
        document.getElementById("timeText").innerHTML = myJSON.defaultNotifications[1].hour;
        document.getElementById("biggerIcon").style.backgroundImage = myJSON.defaultNotifications[1].img;
    }
    if(fertilizeCheckbox.checked)
    {
        console.log(waterCheckbox.value)
        document.getElementById("biggerIcon").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("timeText").style.display = "initial";
        document.getElementById("typeText").style.display = "initial"
        document.getElementById("repetitionText").style.display = "initial";

        document.getElementById("typeText").innerHTML = myJSON.defaultNotifications[2].name;
        document.getElementById("repetitionText").innerHTML = myJSON.defaultNotifications[2].repeat;
        document.getElementById("timeText").innerHTML = myJSON.defaultNotifications[2].hour;
        document.getElementById("biggerIcon").style.backgroundImage = myJSON.defaultNotifications[2].img;
    }
    if(harvestCheckbox.checked)
    {
        console.log(waterCheckbox.value)
        document.getElementById("biggerIcon").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("timeText").style.display = "initial";
        document.getElementById("typeText").style.display = "initial"
        document.getElementById("repetitionText").style.display = "initial";

        document.getElementById("typeText").innerHTML = myJSON.defaultNotifications[3].name;
        document.getElementById("repetitionText").innerHTML = myJSON.defaultNotifications[3].repeat;
        document.getElementById("timeText").innerHTML = myJSON.defaultNotifications[3].hour;
        document.getElementById("biggerIcon").style.backgroundImage = myJSON.defaultNotifications[3].img;
    }

    if(window.innerWidth < 485)
    {
        document.getElementById("plusNotificationsButton").style.top = "670px";
    }
    if(window.innerWidth >= 485)
    {
        document.getElementById("plusNotificationsButton").style.top = "336px";
    }

    if(trimCheckbox.checked)
    {
        console.log(trimCheckbox.value)
    }
    if(fertilizeCheckbox.checked)
    {
        console.log(fertilizeCheckbox.value)
    }
    if(harvestCheckbox.checked)
    {
        console.log(harvestCheckbox.value)
    }

    // document.getElementById("notificationsForm").submit();
}

window.onresize = function () {
    if(window.innerWidth < 485)
    {
        document.getElementById("chosenLine").style.width = "239px";

        if(bool_approveAction == 0)
        {
            document.getElementById("plusNotificationsButton").style.top = "594px";
        }
        if(bool_approveAction == 1)
        {
            document.getElementById("plusNotificationsButton").style.top = "670px";
        }

        if(bool_notificationsButton == 0)
        {
            document.getElementById("chosenLine").style.left = "-4px";
        }
        if(bool_notificationsButton == 1)
        {
            document.getElementById("chosenLine").style.left = "241px";
        }
    }
    if(window.innerWidth >= 485)
    {
        document.getElementById("chosenLine").style.width = "392px";

        if(bool_approveAction == 0)
        {
            document.getElementById("plusNotificationsButton").style.top = "260px";
        }
        if(bool_approveAction == 1)
        {
            document.getElementById("plusNotificationsButton").style.top = "336px";
        }

        if(bool_notificationsButton == 0)
        {
            document.getElementById("chosenLine").style.left = "-4px";
        }
        if(bool_notificationsButton == 1)
        {
            document.getElementById("chosenLine").style.left = "384px";
        }
    }
}


