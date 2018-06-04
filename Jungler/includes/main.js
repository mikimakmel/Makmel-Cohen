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
var userList = new List('users', options, values);

userList.add({ image: 'images/FlowersPng/Petunia.png', name: 'Petunia', family: 'Petunia axillaris' });
userList.add({ image: 'images/FlowersPng/American_Basswood.png', name: 'American Basswood', family: 'Tilia americana' });
userList.add({ image: 'images/FlowersPng/Aibika.png', name: 'Aibika', family: 'Abelmoschus manihot' });
userList.add({ image: 'images/FlowersPng/Hibiscus.png', name: 'Hibiscus', family: 'Hibiscus genevil' });

var values = [];