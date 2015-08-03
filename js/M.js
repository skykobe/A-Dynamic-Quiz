				var AllCookie = document.cookie ;
				var T_P = AllCookie.indexOf('=');
				if(T_P+1 != AllCookie.length && T_P !=- 1) { //直接登入
					$("#LogSign").css('display', 'none');
					$(".frame").fadeIn(1000);
					var XHR = new XMLHttpRequest();
			  		XHR.onload = function() {
				  		ShowQues(XHR);
			  		}
			  		XHR.open("get","resource/Question.json",true);
			  		XHR.send();
					$("#_word").text('Welcome Back'+' '+'Dear '+document.cookie.substring(T_P+1,AllCookie.length)+': ').fadeIn();
					$("#CheckOut").fadeIn();
				}
				else {
					
				$("#log").click(ForLog);
				$("#sign").click(ForSign);
				$("#clear").click(ForClean);		
			  	var XHR = new XMLHttpRequest();
			  	XHR.onload = function() {
				  	ShowQues(XHR)
			  	}
			  	XHR.open("get","resource/Question.json",true);
			  	XHR.send();
				}
				
				function SetLocal(name,value) {
					localStorage.setItem(name,value);
				}
				
				function GetLocal(name) {
					return localStorage.getItem(name);
				}
				
				//var 