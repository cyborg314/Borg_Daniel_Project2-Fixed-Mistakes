Titanium.UI.setBackgroundColor("#000");

//Data
var superHeroes = [
{title: "Iron Man", description: "His alter ego is Tony Stark."},
{title: "Hulk", description: "His alter ego is Bruce Banner."},
{title: "Spiderman", description: "His alter ego is Peter Parker."},
{title: "Batman", description : "His alter ego is Bruce Wayne."},
{title: "Green Lantern", description: "His alter ego is Hal Jordan."}

];

var villains = [
{title: "Joker", description: "Will make you laugh to death."},
{title: "Harley Quinn", description: "Will help the Joker catch you by suprise."},
{title: "Mandirin", description: "Will try to rule the world with his ten powerful rings."},
{title: "Hobgoblin", description: "Will laugh in a evil way, gliding through the dark night."},
{title: "Magneto", description: "Will entrap any human in metal cages to protect mutants from being extinct."}

];

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});


var titleView = Ti.UI.createView({
	height: 65,
	backgroundcolor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "The Unforgettable Comic Characters",
	font: {fonteSize: 20, fontFamily: "Arial", fontWeigth: "bold"},
	top: 20,
	width: "100%",
	textAlign: "center"
});

var heroes = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	superHeroes.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var superHeroesSection = Ti.UI.createTableViewSection({
	headerTitle: "Comic Heroes",
	footerTitle: "The Unforgettable Heroes"
});

//Function and Loop
var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5",
	});

	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundcolor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fonteSize: 20, fontFamily: "Arial", fontWeigth: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: dataSource.desc,
		font: {fonteSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fonteSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	
	var closeWindow = function(){
		//detailWindow.close();
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};	

for(var i=0, j=superHeroes.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: superHeroes[i].title,
		desc: superHeroes[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
}
	
	superHeroesSection.add(theRow);
	//theRow.addEventListener("click", getDetail);
}
/////////
var villain = Ti.UI.createTableView({
	top: border.top + border.height
});

var villainsSection = Ti.UI.createTableViewSection({
	headerTitle: "Comic Villains",
	footerTitle: "The Unforgettable Villains"
});

var getDetail2 = function(dataSource){
	var detailWindow2 = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5",
	});

	var detailTitleView2 = Ti.UI.createView({
		height: 65,
		backgroundcolor: "#fff",
		top: 0
	});
	
	var detailBorder2 = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView2.height + detailTitleView2.top
	});
	
	var detailTitleLabel2 = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fonteSize: 20, fontFamily: "Arial", fontWeigth: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText2 = Ti.UI.createLabel({
		text: dataSource.desc,
		font: {fonteSize: 14, fontFamily: "Arial"},
		top: detailBorder2.height + detailBorder2.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fonteSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	
	var closeWindow = function(){
		//detailWindow2.close();
		detailWindow2.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView2.add(detailTitleLabel2);
	detailWindow2.add(detailTitleView2, detailBorder2, detailText2, closeButton);
	
	detailWindow2.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};	
///
for(var i=0, j=villains.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: villains[i].title,
		desc: villains[i].description,
		hasChild: true 
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
}
	villainsSection.add(theRow);
	//theRow.addEventListener("Click", getDetail2);
}	


var characterSections = [superHeroesSection, villainsSection]; 

heroes.setData(characterSections);
heroes.addEventListener("click", function(event){
	getDetail(event.source);
});

villain.setData(characterSections);
villain.addEventListener("click", function(event){
	getDetail2(event.source);
});

titleView.add(titleLabel);
mainWindow.add(titleView, border, heroes, villain);
mainWindow.open();
