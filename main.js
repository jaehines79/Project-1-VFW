//Activity 2
//Visual Frameworks 1201
//Janis Hines
//January 12, 2012


window.addEventListener("DOMContentLoaded", function(){
	alert(localstorage.value(0));
	
	//getElementbyId Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
		}
		
	//Create select field element and populate with functions
	function makeCats(){
		var formTag = document.getElementByTagName("form"); //formTag is an array of all the formTags
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=eventGroups.length; i<j; i++){
			var makeOption = document.creatElement("option");
			var optText = eventGroups[i];
			makeOption.setAttribute)"value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms(0).relation
		for(var i=0; i<radio.length; i++){
			if(radios[i].checked){
			 	relationValue = radios[i].value;
			 }
		}
	}
	
	function storeData(){
		var id    =Math.floor(Math.random()*100000001);
		//gather form field values in an object
		//object properties contain array with form label and input values
		getSelectedRadio();
		var item      	    = (),
			item.ename 		= ["Name: ", $("name"), value]
			item.edate		= ["Date: ", $("date"), value];
			item.radio		= ["Choice: ", radiovalue];
			item.checkbox	= ["Check: ", checkboxvalue];
			item.notes		= ["Notes: ", $("comments"), value];
			
			
		//Save data into local storage: Use Stringify to convert object to a string
		localstorage.setItem(id, JSON.stringify(item));
		alert("Event Saved");
		
		
	

	//Variable Defaults
	var eventGroups = ["--Choose a Group--", "Friends", "Family", "Work"];
		relationValue
		favoriteValue = "No"
	
	makecats();
	
	//Set Link & Submit Click Events
	var displayLink = $("display");
	displayLink.addeventListener("click", getData);
	var clearLink = $("clear");
	clearlink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);


});