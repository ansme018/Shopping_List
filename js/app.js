
var newItem=$('#new-item').val();
var listItem= '<li> <input id="list-items" type = "text" />' + newItem + 
'<button class ="gotIt"> "Yum, I got it!" </span></li>' + '<button class=\'nevermind\'>
Nevermind </button>';

$(document).ready(function () {
	//1. Add Item to Shopping List 
	//1.1 User types in a new item.  
	//1.2 User presses the button submit. 
	$('.grocerylist form .submit').on("click", function(event){
		event.preventDefault();
		var newItem =$('#new-item').val();
		console.log(newItem); 
		addItem(newItem);
	});

//1.2  To append a new item to the list
	function addItem(newItem) {
		var listItem = '<li> <input id="list-items" type = "text" />' + newItem + 
		'<button class ="gotIt"> "Yum, I got it!" </span></li>' + '<button class=\'nevermind\'>
		Nevermind </button>';
		$('ul').append(listItem);
		$('ul').bind('click', function() {
			$(this).parent().remove();
		})
	}

//2.  When user locates item on shopping trip or "gets it"
	//Text is crossed off and changes color
	$('.gotIt button .submit').on("change", "input:checkbox:", function(event) {
		event.preventDefault();
		var item=$(this).closest("li").find("span");
			if($(this).is(":checked")) {
				item.addClass("gotIt");
				$(this).css({
					'color': 'blue',
					'text-decoration': 'line-through',
				})
			}
			else
				item.removeClass("gotIt");
		});

//3.   When user unchecks "Got It!" (user made a mistake in checking it)
	//3.1 (Above rules are eliminated/reversed)


//4. User realizes he/she already has the item.  Needs to delete an item
 	$('.nevermind button .submit').on('click', function(event) {
 		$(this).parent().remove(); 
 })

});