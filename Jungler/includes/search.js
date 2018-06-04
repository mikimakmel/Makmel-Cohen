$("#myInput").click(function(){
  $("#byCategory").remove();
});
// $("#byCategory").css("visibility", "hidden");

var searchList = {
  valueNames: ['name', 'family', { attr: 'src', name: 'image' }],
  item: '<li class="padLine">' +
    '<img class="image" src="">' +
    '<span class="name listFont"></span>' +
    '<div class="clearer"></div>' +    
    '<img class="notificationImg notificationImgRight" src="images/Search page/arrow.png">' +
    '<span class="family"></span>' +
    '<img class="padLine" src="images/General icons/horizontalLine.png">' +
    '</li>'
};

var flowerList = new List('findFlower', searchList, results);

flowerList.add({ image: 'images/FlowersPng/Petunia.png', name: 'Petunia', family: 'Petunia axillaris' });
flowerList.add({ image: 'images/FlowersPng/American Basswood.png', name: 'American Basswood', family: 'Tilia americana' });
flowerList.add({ image: 'images/FlowersPng/Aibika.png', name: 'Aibika', family: 'Abelmoschus manihot' });
flowerList.add({ image: 'images/FlowersPng/Hibiscus.png', name: 'Hibiscus', family: 'Hibiscus genevil' });

var results = [];