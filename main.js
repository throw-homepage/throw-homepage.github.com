			var old = '';

			function init() {
				update();
			}

			function update() {
				
				//console.log("update");
				var div = $("#codeTextarea");

				if (old != div.val()) {

					//console.log("updating iframe");
					old = div.val();
					
					
					//create new iframe so we clean out any old errors
					var iframe = $('<iframe></iframe>', {
					      name:"contentFrame"
					      ,id:"contentFrame"
					  });
					iframe.css("height", "100%").css("width", "100%");
					$("#outputframe").text('');
				 	iframe.appendTo("#outputframe");
					
				 	//get the raw element so we can append scripts
				 	//jquery append will not allow script tags to be appended
					v = document.getElementById('contentFrame');
					v.contentWindow.document.open();
					v.contentWindow.document.write(old);
					v.contentWindow.document.close();
					
				}
				// set timeout for future updates
				window.setTimeout(update, 150);
			}