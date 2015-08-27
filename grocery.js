$(document).ready(function(){
 var list = new List();

  $('.item').draggable(
    {helper: 'clone'}
  );

  $('#grocery_list').droppable({
    accept:'.item',
    drop: function(event, ui){
      var name = $(ui.draggable).clone().children().first().text();
      var value = parseFloat($(ui.draggable).clone().children().last().text());
      var item = new Item(name, value);
      $(this).append($(ui.draggable).clone());
      list.items.push(item);
      $('#total_cost').text(list.sum());
    }
  });
});

var Item = function(name, value){
  this.name = name;
  this.value = value;
};

var List = function(){
  this.items = [];
};

List.prototype.sum = function(){
  var sum = 0
  for(var i=0;i<this.items.length;i++){
    sum += this.items[i].value
  };
  return sum;
};