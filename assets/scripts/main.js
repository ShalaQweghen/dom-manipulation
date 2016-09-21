$(document).ready(function() {
	index();
	$("#home").on("click", index);
	$("#menu").on("click", menu);
	$("#contact").on("click", contact);
	}
);

function menu() {
	$("#content").empty();
	$("#home").removeAttr("class");
	$("#contact").removeAttr("class");
	$("#menu").attr("class", "clear");
	$("#content").append("<div id='menus'></div>");
	$("#menus").append("<div id='breakfast'></div>",
										 "<div id='lunch'></div>", "<div id='dinner'></div" );
	$("#breakfast").append("<h1>Breakfast</h1>",
												 "<ul id='breakfast-menu' class='menu-items'></ul>");
	$("#breakfast-menu").append("<li>Pork sausages</li><li>Soya & leek sausages</li><li>Back bacon</li><li>Black pudding</li><li>Grilled tomato</li><li>Grilled flat mushroom</li><li>Baked beans</li><li>Fries</li><li>Hash browns</li><li>Fried egg</li><li>Scrambled egg</li><li>Poached egg</li>");
	$("#lunch").append("<h1>Lunch</h1>",
										 "<ul id='lunch-menu' class='menu-items'></ul>");
	$("#lunch-menu").append("<li>Crispy Chicken Tenders</li><li>Dipping Sauce Cup</li><li>Buttermilk Biscuit/Corn Cob</li><li>Mozzarella Sticks</li><li>Marinara Sauce</li><li>Sweet Potato Wedges</li><li>Sliced Cucumbers</li>");
	$("#dinner").append("<h1>Dinner</h1>",
											"<ul id='dinner-menu' class='menu-items'></ul>");
	$("#dinner-menu").append("<li>Hot Spinach & Arichoke Dip</li><li>Coconut Calamari</li><li>Roasted Garlic Caesar Salad</li><li>Surfside Salad</li><li>Beef Bolognese</li><li>Orange Basil Salmon</li><li>Grilled Sirloin</li>");
};

function contact() {
	$("#content").empty();
	$("#home").removeAttr("class");
	$("#menu").removeAttr("class");
	$("#contact").attr("class", "clear");
	$("#content").append("<h1 class='contact'>Contact us</h1>",
											 "<table class='contact'><tr><th>Phone</th><td>1-980-213-41-23</td></tr><tr><th>Address</th><td>Right around the corner</td></tr><tr><th>Map</th><td><img class='map' src='assets/img/around.jpg'></td></tr></table>");
};

function index() {
	$("#content").empty();
	$("#menu").removeAttr("class");
	$("#contact").removeAttr("class");
	$("#home").attr("class", "clear");
	$("#content").append("<h1 class='contact'>Welcome to Eris' Diner</h1>",
											 "<img src='assets/img/restaurant.jpg'>",
											 "<p>Portland has been long in the planning and built from scratch on the site of a long-forgotten clothing showroom. It has 45 covers and a private room for 16. We take reservations for all services but we might need your table back two hours later, if that’s ok, as we’re quite a small place. Our food is based on the very best produce we can find cooked as simply as possible but with imagination and plenty of care. Our wine list changes every month – it starts at £21 a bottle and goes up to our ‘Special’ bottles which are all available by the glass. The restaurant is open for lunch and dinner from Monday to Saturday.We very much hope to meet you at Portland soon.</p>");	
};