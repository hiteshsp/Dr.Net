$(document).ready(function () {
$("#todolist").keypress(function(e) {
    if(e.which == 13) {
       $('#sortable').append('<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ $("#todolist").val()+'</label></div></li>')
       return false;
    }
});
});