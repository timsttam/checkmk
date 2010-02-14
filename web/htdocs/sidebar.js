// Load stylesheet for sidebar

// Get object of script (myself)
var oScript = document.getElementById("check_mk_sidebar").childNodes[0];
var url = oScript.src.replace("sidebar.js", "");

var oLink = document.createElement('link')
oLink.href = url + "check_mk.css";
oLink.rel = 'stylesheet';
oLink.type = 'text/css';
document.body.appendChild(oLink);
oLink = null;

function getFile(url) {
      if (window.XMLHttpRequest) {              
          AJAX=new XMLHttpRequest();              
      } else {                                  
          AJAX=new ActiveXObject("Microsoft.XMLHTTP");
      }
      if (AJAX) {
         AJAX.open("GET", url, false);                             
         AJAX.send(null);
         return AJAX.responseText;                                         
      } else {
         return false;
      }                                             
}

document.write(getFile(url + 'sidebar.py'));

function toggle_sidebar_snapin(oH2)
{
    var oContent = oH2.parentNode.childNodes[3];
    var closed = oContent.style.display == "none";
    if (closed)
	oContent.style.display = "";
    else
	oContent.style.display = "none";
    oContent = null;
}

function switch_site(baseuri, switchvar)
{
    getFile(baseuri + "/switch_site.py?" + switchvar);
    parent.frames[1].location.reload(); /* reload main frame */
}

