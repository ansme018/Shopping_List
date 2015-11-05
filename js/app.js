
//1. Add Item to Shopping List 

	//1.1 To enable user to press "enter" to add a new item to the list. 
	//input id#new-item
	//keydown()
$(document).ready(function () {
	function NewItem() {
		$('#new-item').keydown(function(enter){
			if(enter.keyCode ==13) {
				ListItem();
		}
	});
}

	//1.2  To append a new item to the list
	//input id#list-items
	//prepend() - Insert content into another element on page
function ListItem(){
	var item =$('#new-item').val();
	var OnList=$('<li>' + item + '</li>');
	$('#new-item').prepend($('#list-items'));
}

//2.  When user locates item on shopping trip or "gets it"
	//2.1 The text is crossed off. 
	//2.2. The text changes color (and background of item)
	//2.3 The text box moves to the bottom of list

//3.   When user unchecks "Got It!" (user made a mistake in checking it)
	//3.1 (Above rules are eliminated/reversed)


//4. User realizes he/she already has the item.  Wants it removed from list. 
	//4.1 The text is cleared from list. 