// var options = {
//     valueNames: [
//       'name',
//       'family',
//       { data: ['id'] },
//       { attr: 'src', name: 'image' },
//       { attr: 'href', name: 'link' },
//     ]
//   };
//   var userList = new List('users', options);
//   userList.add({ image: '/images/flower.png', name: 'Petunia', family: 'Petunia axillaris', id: 1});

var options = {
    valueNames: ['name', 'family'],
    item: '<li><img class="image" src="/images/flower.png"><h3 class="name"></h3><p class="family"></p></li>'
  };
  
  var values = [{
      name: 'Jonny Strömberg',
      family: 1986
    },
    {
      name: 'Jonas Arnklint',
      family: 1985
    },
    {
      name: 'Martina Elm',
      family: 1986
  }];
  
  var userList = new List('users', options, values);
  
  userList.add({
    name: "Gustaf Lindqvist",
    family: 1983
  });