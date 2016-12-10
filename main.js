
// var greeting = function() {
//
//   $('.jumbo_text').text('I changed the text!').css('background-color', 'orange');
// };
//
// $(".alert_button").click(greeting);

var getName = function(){
  var nameInput = $('.name_input').val();
  console.log(nameInput)
  alert("Hello there " + nameInput);
};

$('.alert_button2').click(getName);

console.log("ftgyhjhgf");
