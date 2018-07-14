document.getElementById("notificationsButton").onclick = function() { showNotificationsPage() };
document.getElementById("infoButton").onclick = function() { showInfoPage() };
document.getElementById("useDefaultButton").onclick = function() { showDefaultNotifications() };
document.getElementById("cancelButton").onclick = function() { hide() };
document.getElementById("okButton").onclick = function() { approveAction() };

function showNotificationsPage() {
    document.getElementById("hideRectangle").style.display = "initial";
    document.getElementById("infoButton").style.backgroundImage = "url('images/myPlant page/plantInfoIcon.png')";
    document.getElementById("notificationsButton").style.backgroundImage = "url('images/myPlant page/plantNotificationIcon - selected.png')";
    document.getElementById("chosenLine").style.left = "241px";
    document.getElementById("notificationsHeadText").style.display = "initial";
    document.getElementById("bellIcon").style.display = "initial";
    document.getElementById("paragraphText").style.display = "initial";
    document.getElementById("plusNotificationsButton").style.display = "initial";
    document.getElementById("orLine").style.display = "initial";
    document.getElementById("useDefaultButton").style.display = "initial";
}

function showInfoPage() {
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
        document.getElementById("plusNotificationsButton").style.top = "670px";
    }

    if(waterCheckbox.checked)
    {
        console.log(waterCheckbox.value)
        document.getElementById("waterIconBIGGER").style.display = "initial";
        document.getElementById("onIcon").style.display = "initial";
        document.getElementById("waterTimeText").style.display = "initial";
        document.getElementById("waterHeadText").style.display = "initial"
        document.getElementById("waterRepeatText").style.display = "initial";
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