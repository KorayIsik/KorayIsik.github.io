function loadContent(contentDiv, loaderDiv, delay) {
	setTimeout(function() {
	    showContent(contentDiv, loaderDiv);
	}, delay*1000);
}

function showContent(contentDiv, loaderDiv) {
  	document.getElementById(loaderDiv).style.display = "none";
  	document.getElementById(contentDiv).style.display = "block";
}