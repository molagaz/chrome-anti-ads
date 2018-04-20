(function(){

	// log on if debug mode.
	var debugOn = false;
	var log = function(){
		if(debugOn){
			console.log.apply(console, arguments);	
		}
	}
	// block the iframe
	var blocker = function(ifrs){
		for(var i=0;i<ifrs.length;i++){
			log("第"+i+"个iframe=", ifrs[i].src)
			clazz = ifrs[i].classList;
			if(!clazz){
				ifrs[i].classList = "ads-hidden";
			}else{
				ifrs[i].classList.add("ads-hidden");
			}
		}	
	}

	// Normally, Ads are in iframes.
	var ifrs = document.querySelectorAll("iframe");
	if(!ifrs || ifrs.length === 0){
		console.warn("No iframe was found.")
		return;
	}else{
		blocker(ifrs);
	}
			
})();
