// ==UserScript==
// @name         Analytics Checker
// @namespace    *://tampermonkey.net/
// @version      1.5
// @description  Check Websites For GAnalytics
// @author       António Silva
// @match        *://*/*
// @noframes
// @grant        none
// @include      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
	var text;
	var i;
	var teste;
	var teste2;
	var teste2 = false;
    var body_var = document.getElementsByTagName('body')[0];

    /* ==== Verificar se estamos em um backoffice ou não ==== */
    if (!body_var.classList.contains('wp-admin') && !body_var.classList.contains('login')) {
	var teste = document.getElementsByTagName('script');
        for (i = 0; i < teste.length; i++) {
			if ( teste[i].src == "https://www.google-analytics.com/analytics.js" || teste[i].src == "//www.google-analytics.com/analytics.js" || teste[i].src == "http://www.google-analytics.com/analytics.js") {
                var teste2 = true;
			}
		}
		if (teste2 === true) {
            var head_inner_html = document.getElementsByTagName('head')[0].childNodes;
            var myArray = Array.from(head_inner_html);
            console.log(myArray);
            var comment_end_index = myArray.findIndex(find);
            console.log(comment_end_index);
            if (comment_end_index == '-1') {var not_available = true;}
            else {
            var comment_start_index = comment_end_index - 4;
            console.log(comment_start_content);
            var comment_start_content = head_inner_html[comment_start_index].nodeValue.trim();
            console.log(comment_start_content);
            var comment_start_content_divided = comment_start_content.split('-');
            console.log(comment_start_content);
            console.log(comment_start_content_divided[0]);
            var comment_start_content_divided_more = comment_start_content_divided[0].split(' ');
            var version_number = comment_start_content_divided_more[2];
            }
			jQuery('body').prepend('<div class="checker" style="box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;cursor: initial;transition: right 0.45s linear;background:none;position:fixed;right:-45px;bottom:33%;z-index:999999;background-color:#3ab43a;color:white;width:50px;height:65px;padding:1px 1px;border-radius:0;border:none;"><span style="cursor: initial;line-height: 48px;padding: 0 14px;background:none;font-size: 35px;color:white">&check;<span class="version" style="display:block;cursor: initial;line-height: 15px;background:none;font-size: 10px;color:white;text-align: center;">' + ((not_available === true) ? 'N/A' : version_number ) + '</span><span id="hover_thingy" style="position: fixed;background:none;cursor: initial;bottom: 30%;width: 66px;height: 94px;right: -5px;"></span></div>');
            var right = -45;
            document.title = version_number;
        }
		else {
            document.title = 'ERRO Analytics';
			jQuery('body').prepend('<div class="checker" style="box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;cursor: initial;transition: right 0.45s linear;background:none;position:fixed;right:-35px;bottom:33%;z-index:999999;background-color:#d30000;color:white;width:40px;height:65px;padding:1px 1px;border-radius:0;border:none;"><span style="cursor: initial;line-height: 34px;background:none;padding: 0 7px;font-size: 35px;color:white;text-align:center">&Cross;</span><span id="hover_thingy" style="position: fixed;cursor: initial;background:none;bottom: 30%;width: 66px;height: 94px;right: -5px;"></span></div>');
            var right = -35;
        }
	}
else {
console.log('Not Needed');
}

var hover = jQuery("#hover_thingy");
var main_div = jQuery( ".checker" );

jQuery( hover ).mouseover(function(){
jQuery( main_div ).css("right","0");
});

jQuery( hover ).mouseout(function(){
jQuery( main_div ).css("right", right + "px");
});

function find(element, index, array) {
        if (element.nodeValue == ' END GADWP Universal Analytics ') {
            return element;
        }
}
})();
