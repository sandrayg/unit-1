//initialize function called when the script loads
function initialize(){
    // jQueryAjax();//loads GeoJSON file into the DOM
    console.log("test");
    debugAjax();
};

function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log(mydata);
        }
    });

    //check the data
    // console.log(response); //undefined

};


function debugAjax(){

	var mydata;

	$.ajax("data/MegaCities.geojson", { //read geojson file using jQuery.Ajax
		dataType: "json",
		success: function(response){ //anonymous callback function when loading is successful
			mydata = response; //added line; assign response (geojson file) to variable 'mydata'
			// debugCallback(mydata); //calls function that was defined before
      $("#mydiv").append('<br>GeoJSON data:</br> ' + JSON.stringify(mydata));

		}
	});

	// $(mydiv).append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
};

// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
//call the initialize function when the document has loaded
$(document).ready(initialize);
// $(document).ready(debugAjax);
