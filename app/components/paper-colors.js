import Ember from 'ember';

export default Ember.Component.extend({
	input_text: "",
	convertToHex: function(input){
		var str = input.toString();
		var hex = "";
	    for(var i=0;i<str.length;i++) {
	        hex += ''+str.charCodeAt(i).toString(16);
	    }
		return hex;
	},
	groupHexa: function(hex){
		return hex.match(/.{1,6}/g);
	},
	makeElements: function(hexaArray){
		var elements = "";
		hexaArray.forEach(function(hexaItem){			
			if(hexaItem.length === 6){
				elements += `<div class='box-color' style='background-color:#${hexaItem}'></div>`			
			}else {
				elements += `<h1> ${hexaItem} </h1>`			
			}
		});
		return elements;
	},

	hexaColors: Ember.computed("input_text",  function(){
		var input_text = this.get("input_text");		
		var hexaColors = this.convertToHex(input_text);
		var elements = "";
		hexaColors = this.groupHexa(hexaColors);
		elements = this.makeElements(hexaColors) 		
		return elements;
	})
});
