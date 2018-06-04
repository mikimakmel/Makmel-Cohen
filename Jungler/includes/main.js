var bool = 0;


var options = {
  valueNames: ['name', 'family', { attr: 'src', name: 'image' }],
  item: '<li>' +
    '<img class="image" src="">' +
    '<span class="name listFont"></span>' +
    '<img class="notificationImg notificationImgRight" src="images/Agams garden/trim.png">' +
    '<img class="notificationImg" src="images/Agams garden/water.png">' +
    '<div class="clearer"></div>' +
    '<span class="family"></span>' +
    '<img class="notificationImg notificationImgRight" src="images/Agams garden/harvest.png">' +
    '<img class="notificationImg" src="images/Agams garden/fertilize.png">' +
    '<img src="images/General icons/horizontalLine.png">' +
    '</li>'
};

var path = 'images/FlowersPng/';
var suffix = '.png';
var userList = new List('users', options, values);

userList.add({ image: 'images/FlowersPng/Petunia.png', name: 'Petunia', family: 'Petunia axillaris' });
userList.add({ image: 'images/FlowersPng/American Basswood.png', name: 'American Basswood', family: 'Tilia americana' });
userList.add({ image: 'images/FlowersPng/Aibika.png', name: 'Aibika', family: 'Abelmoschus manihot' });

document.getElementById("addHibiscus").onclick = function boolFunction() {
  // bool = 1;
  // console.log(bool);
  userList.add({ image: 'images/FlowersPng/Hibiscus.png', name: 'Hibiscus', family: 'Hibiscus genevil' });
  $(".flowerAddedBanner").css("visibility", "visible");  
}


// if(bool == 1){
//   userList.add({ image: 'images/FlowersPng/Hibiscus.png', name: 'Hibiscus', family: 'Hibiscus genevil' });
//   $(".flowerAddedBanner").css("visibility", "visible");  
// }

var values = [];

// $.getJSON("includes/flowers.json", function (data) {
//   var items = [];
//   $.each(data, function (key, val) {
//     items.push(key, val);
//   });

  // $.getJSON("includes/flowers.json", function (data) {
  //   var items = [];
  //   $.each(json, function (key, val) {
  //     // items.push(key, val);
  //     userList.add({ image: path + val + suffix , name: 'Petunia', family: 'Petunia axillaris' });
  //   });
  
  //   $.each(json, function(key,value){
  //     alert("output: "+key+" value "+value); 
  //     });