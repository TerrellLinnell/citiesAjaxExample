var mapToArray = function (arr) {

  for(var i = 0; i<arr.length; i++){

    $('.table').append('<tr> <td>' + arr[i].city + '</td> <td>' + arr[i].state + '</td> <td>' + arr[i].zip + '</td> </tr>');

  };

};



var dataLoad = function(){

  $('.table').append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    setTimeout(function () {
      $.ajax({
        url:"https://api.meetup.com/2/cities",
        type: 'GET',
        success: function(data) {
          $('i').css("display", "none");
          mapToArray(data.results);
      },
    dataType: 'jsonp'
  })
}, 500);

}

$('.data-Load').click(dataLoad);


var dataRemove = function() {

  $('tbody').remove();

};
$('.data-Remove').click(dataRemove);
