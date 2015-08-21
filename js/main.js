var 
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		
		
		showRight = document.getElementById( 'showRight' ),
		
		body = document.body;


showRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
};

function disableOther( button ) {
	
	if( button !== 'showRight' ) {
		classie.toggle( showRight, 'disabled' );
	}

}


function textToArray(){
	var input;
  var stringArray = [];    
  var vocabList = document.getElementById('input').value
var stringArray = document.getElementById('input').value.split("\n");
var length = stringArray.length;
if (length > 0){
	var i = 0
}
else {
	alert("Nothing to be Defined");
} 

for (i = 0; var input = stringArray[i] ; i++) { 
    var url = "http://api.wolframalpha.com/v2/query?appid=J683VL-3XY28ALK48&input=define%20" + input + "&format=plaintext";

   	send to to wolfram 


   }

