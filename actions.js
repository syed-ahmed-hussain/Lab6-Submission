function loadDoc() {
  
  var x = document.getElementById("list1");
  var y = document.getElementById("list2");
  
  var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			obj = JSON.parse(xhttp.responseText);
			
			for(var i=0; i < obj.length; i++){
    	
				option = document.createElement("option");
				option.text = obj[i].color + " " + obj[i].value;
				option.id = "" + i;
				console.log(option.id);
				x.add(option);
				

				voption = document.createElement("option");
				voption.text = obj[i].value + " " + obj[i].color;
				voption.id = "v" + i;
				y.add(voption);
				
				option.addEventListener("click", function(){
					
					var obj = document.getElementById("v" + this.id)
					obj.style.color = "blue";
				});
				//var obj = document.getElementById(option.id);
				//obj.onfocus = function() {
				//	alert("yes");
				//};
				
			}
		}
	}
	
  xhttp.open("GET", "http://localhost/Lab6/ColorNameMap.json", true);
  xhttp.send();
}