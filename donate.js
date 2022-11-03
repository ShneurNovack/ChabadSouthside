//donate page
var pathArray = window.location.pathname.split('/');

var urlP = pathArray[2];
var org = pathArray[3];
var org2 = pathArray[4];

var header = document.getElementById('header');
var content = document.getElementById('content');
var footer = document.getElementById('footer');

var unfAmounts = '<button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button><button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button><button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button><button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button><button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button><button id="orgUNF" type="button" class="js-amounts-button" data-value="999">$999</button>'

var title = document.getElementsByTagName('h1')[0];
var img = document.getElementsByTagName('aside')[0];
var amounts = document.querySelector('.amounts');
var description = document.querySelector('.description');

if (urlP == "donate_cdo") {

if (org == "unf") {
title.innerHTML = "Yes, I would like to support Chabad at UNF";
description.innerHTML = "";
img.style.backgroundImage = "url('https://w2.chabad.org/media/images/1149/EpgX11490427.jpg')";
amounts.innerHTML = unfAmounts;
}

if (org2 == "embed") {
header.innerHTML = "";
footer.innerHTML = "";
header.style.display = "none";
footer.style.display = "none";
content.style.margin = "0px";
}

}
