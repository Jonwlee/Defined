document.addEventListener('DOMContentLoaded', //this is one big parameter
    function handlers() {
        document.getElementById('defined').addEventListener('click', textToArray); //event handlers

    });
//--------menu js
var definition;

var
    menuRight = document.getElementById('cbp-spmenu-s2'),


    showRight = document.getElementById('showRight'),

    body = document.body;


showRight.onclick = function() {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRight');
};

function disableOther(button) {

    if (button !== 'showRight') {
        classie.toggle(showRight, 'disabled');
    }

}
//---end of menu js


function textToArray() {
    var input;
    var url;
    var stringArray = [];
    var vocabList = document.getElementById('input').value
    var stringArray = document.getElementById('input').value.split("\n");
    var length = stringArray.length;
    if (length > 0) {
        var i = 0
    } else {
        alert("Nothing to be Defined");
    }

    for (i = 0; input = stringArray[i]; i++) {
        url = "http://crossorigin.me/http://api.wolframalpha.com/v2/query?appid=J683VL-3XY28ALK48&input=define%20" + input + "&format=plaintext&podtitle=Result";

        loadXMLDoc(url, function() {
            xmlDoc = this.responseXML;
           var result = $(xmlDoc).find("plaintext").text();


       document.getElementById('output').value = document.getElementById('output').value + "\n" + result;  


        });


        

    }
}

function loadXMLDoc(url,callback) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://login.live.com/oauth20_authorize.srf?client_id={000000004C170226} &scope={mshealth.login}&response_type=code&redirect_uri={https://login.live.com/oauth20_desktop.srf}", true);
    xmlhttp.send();
    xmlhttp.onload=callback;
    return xmlhttp.responseXML;
}





