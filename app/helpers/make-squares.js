import Ember from 'ember';

export function makeSquares(str) { 	
	var hex = '';
	var element = '';
	str = str.toString();
    
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }

	var hexa_colors = hex.match(/.{1,6}/g);
	if(hexa_colors){
		for (var i = hexa_colors.length - 1; i >= 0; i--) {	
			var currrent_color = hexa_colors[i];
			if(currrent_color.length === 6){
				element += `<div class='box-color' style='background-color:#${currrent_color}'></div>`			
			}else {
				element += `<h1> ${currrent_color} </h1>`			
			}
		}	
	}
	
		
    return element;
}

export default Ember.Helper.helper(makeSquares);
