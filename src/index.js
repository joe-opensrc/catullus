/* can use if not using <script... defer> */
/* document.addEventListener('DOMContentLoaded', () => {}) */

import van from "vanjs-core"
const { div, span, p, h1, h2, h3 } = van.tags;

const appDiv = document.getElementById("vapp");

const catPrams = van.state([]);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       catPrams.val = JSON.parse(xhttp.responseText);
    }
};

xhttp.open("GET", "catullus.json", true);
xhttp.send();

const h2ZeroTrim = (h) => h2( { class: "zero-trim" }, h );
van.add(appDiv, div( { id: "vtitle" }, h2ZeroTrim("Catulli Carmina (selection)") ) );

function formatPramBody(pram){
  const sents = pram.split("\\n");
  const pramBodyDiv = p( {class: "pram-body"} ) 
  for ( s of sents ){
    const lineDiv = div( {class: "pram-line"}, s )
    van.add( pramBodyDiv, lineDiv )
  }
  return pramBodyDiv;
}

function composePram(cp){
  return div( { id: `pram-${cp.t}`, class: "pram" }, p({ class: "pram-title"}, cp.t ), formatPramBody(cp.p) );
}

const pramsDiv = div( { id: "prams-1a", class: "prams" } );

van.derive( () => { 
  for ( cp of catPrams.val ){
    van.add( pramsDiv, composePram(cp) )
  }
})

van.add( appDiv, pramsDiv );
