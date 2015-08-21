document.addEventListener('DOMContentLoaded', //this is one big parameter
    function handlers() {
    document.getElementById('defined').addEventListener('click', textToArray);

});

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



function loadXMLDoc(url) {
   
xmlhttp=null;
if (window.XMLHttpRequest)
  {
      xmlhttp=new XMLHttpRequest();
  }
if (xmlhttp!=null)
  {
      xmlhttp.onreadystatechange=state_Change;
      xmlhttp.open("GET",url,true);
      xmlhttp.send(null);
  }
}



function state_Change() {
    if (xmlhttp.readyState==4)
      {// 4 = "loaded"
          if (xmlhttp.status==200)
            {// 200 = OK
             //xmlhttp.data and shtuff
            // ...our code here...
            var definition = xmlDoc.getElementsByTagName("plaintext")[0];
            document.getElementById('output').value = definition


        }
    }
  else
        {
            alert("Problem retrieving data");
        }
  }


function textToArray(){
	var input;
	var url;
	   	var xmlhttp; //globals, needed for xml
  var stringArray = [];    
  var vocabList = document.getElementById('input').value
var stringArray = document.getElementById('input').value.split("\n");
var length = stringArray.length;
if (length > 0){
	var i = 0
}
else {
	alert("Nothing to be Defined"); } 



for (i = 0; input = stringArray[i] ; i++) { 
    url = "http://api.wolframalpha.com/v2/query?appid=J683VL-3XY28ALK48&input=define%20" + input + "&format=plaintext";



   	loadXMLDoc(url) 


}
}



