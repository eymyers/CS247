$(document).ready(function(){
	var imageUrls = ["url('res/img/graduation.jpg')",
					 "url('res/img/squirrel.png')",
					 "url('res/img/kuka.png')",
					 "url('res/img/planford.png')",
					 "url('res/img/batbot2.jpg')",
					 "url('res/img/reqtime.png')"];
	var imageLinks = ["work_in_progress.html",
					  "work_in_progress.html",
					  "kuka.html",
					  "work_in_progress.html",
					  "work_in_progress.html",
					  "work_in_progress.html"];

	var icons = document.getElementsByClassName("icon");

	var size = icons.length;
	for(var i=0; i < size; i++){
		var icon = icons[i];
		icon.style.backgroundImage = imageUrls[i];
		var pos = createIconPosition(i);
		icon.style.marginLeft = convertToPx(pos.x);
		icon.style.marginTop = convertToPx(pos.y);
		var link = icon.getElementsByTagName("a");
		link[0].href = imageLinks[i];
	}

});

function createIconPosition(index){
	var iconOffset = {x: 280, y:230};
	var maxLine = 4;
	var spacing = 50;
	var iconWidth = 150;

	var xPos = iconOffset.x;
	var yPos = iconOffset.y;

	xPos += (index % maxLine) * (spacing + iconWidth);
	yPos += round2Int(index/maxLine) * (spacing + iconWidth);
	return {x: xPos, y: yPos};
}

function convertToPx(integer){
	return integer+"px";
}

function round2Int (value) {
    return value | 0;
}


function toggleDisplay(id){
	var elementContainers = document.getElementsByClassName("element-container");
	// var turnOnElement = document.getElementById(id);
	// turnOnElement.style.display="visible";
	var len = elementContainers.length;
	for(var i = 0; i < len; i++){
		var container = elementContainers[i];
		if(container.id != id){
			console.log(container.id);
			container.style.display="none";
		} else {
			container.style.display="block";
		}
	}
}
