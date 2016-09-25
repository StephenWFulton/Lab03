var imgFilePaths=["catpic1", "catpic2", "catpic3", "catpic4", "catpic5"];
var curIndex = 0;
function prevPic(){
	curIndex--;
	if(curIndex < 0)
	{
		curIndex = 4;
	}
	document.getElementById("myImg").src = "img/" + imgFilePaths[curIndex]+".jpg";
}

function nextPic(){
	curIndex++;
	if(curIndex > 4)
	{
		curIndex = 0;
	}
	document.getElementById("myImg").src ="img/" + imgFilePaths[curIndex]+".jpg";
} 
