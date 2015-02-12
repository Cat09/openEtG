var px = require("./px");
var tutor = module.exports = function(tutdata, x, y, stage){
	stage.tutor = [x, y, px.domEButton(13, function() {
		if (stage.tutspan) {
			stage.tutspan.remove();
			delete stage.tutspan;
			return;
		}
		stage.tutspan = document.createElement("span");
		tutdata.forEach(function(info) {
			var text = px.domText(info[info.length-1]);
			text.className = "tutorialbox";
			text.style.position = "absolute";
			text.style.left = info[0] + "px";
			text.style.top = info[1] + "px";
			text.style.width = info[2] + "px";
			if (info.length > 3) text.style.height = info[3] + "px";
			stage.tutspan.appendChild(text);
		});
		document.body.appendChild(stage.tutspan);
	})];
	return stage;
}
tutor.Editor = [[100, 32, 624, "Here the deck you are building shows up. Use the buttons to the left to save and load your deck:" +
		"\nClear: Erase this deck\nSave & Exit: Save the current deck and return to the main menu\nImport: Import a deck code from the import box\nSave: Save the current deck to the name in the name box in the top left" +
		"\nLoad: Load the deck with the name you have typed in the name box in the top left\nSave to #: Save the current deck and name to one of the quickload slots\nTip: Use one of the quickdeck buttons as a\"New Deck\" button, and then save any decks you make there to a proper name"],
		[298, 6, 426, "Clicking a quickload slot will instantly load the deck saved there"],
		[100, 232, 418, "Choose a mark. You will gain 1 quantum per turn of that element. Mark of Chroma gives 3 random quanta."],
		[520, 236, 320, "The import box shows the deck code of the deck"],
		[2, 350, 250, 100, "Click the element buttons to show cards of that element.\nThe rarity filters will only show cards of that rarity, except pillar filter which will show all cards."],
		[300, 350, 320, "Clicking a card will add it to your deck. A number after a / shows how many shiny cards you have."],
		[80, 530, 310, ": Shows all cards, including those you don't own"],
		[80, 575, 160, ": Don't show shiny cards"]];
tutor.Shop = [[45, 97, 520, 158, "1) Select the element of the pack you want to buy.\nEach card in the pack has a 50% chance of being the element you choose." +
		"\nRandom pack means the cards is completely random instead,\nand Recently Released means it has a 50% chance of being a recently added card."],
		[45, 275, 610, 158, "2) Select the type of pack you want.\nYou will see the amount of cards and rarity of each pack in the upper box."],
		[590, 97, 260, 158, "3) Buy the pack you selected!\nIf you want to buy many packs at once, type in the Bulk box how many you want.\nIn chat you will see a link to a deck code with the cards you got."]];