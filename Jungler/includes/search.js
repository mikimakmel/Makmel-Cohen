document.getElementById("deleteIcon").onclick = function() { document.getElementById('myInput').value = ''};

var bool = 0;

  $("#myInput").click(function(){
  $("#byCategory").remove();
  $("#sideLetters").css("visibility", "visible");

  if(bool == 0){
    var searchList = {
      valueNames: ['name', 'family', { attr: 'src', name: 'image' }],
      item: 
      '<li class="padLine">' +
      '<a href="plantsPage.html">' + 
      '<img class="image" src="">' +
      '<span class="name listFont"></span>' +
      '<div class="clearer"></div>' +    
      '<img class="notificationImg notificationImgRight" src="images/Search page/arrow.png">' +
      '<span class="family"></span>' +
      '<img class="padLine" src="images/General icons/horizontalLine.png">' +
      '</a>' +
      '</li>'
    };
    
    var flowerList = new List('findFlower', searchList, results);

    flowerList.add({ image: 'images/FlowersPng/Aibika.png', name: 'Aibika', family: 'Abelmoschus manihot' });
    flowerList.add({ image: 'images/FlowersPng/American Basswood.png', name: 'American Basswood', family: 'Tilia americana' });
    flowerList.add({ image: 'images/FlowersPng/Hibiscus.png', name: 'Hibiscus', family: 'Hibiscus genevil' });
    flowerList.add({ image: 'images/FlowersPng/Petunia.png', name: 'Petunia', family: 'Petunia axillaris' });
    
    var results = [];
  }
  bool++;


});
