// 各种页面加载后的事件
			  $("#CheckOut").on('mouseenter',function() {  //通过头像，出现菜单
					$("ul").fadeIn();
				});
				
			  $(".item").on('mouseleave',function() { //离开头像菜单消失
					$("ul").fadeOut();
				});	
				
		      $("#over").click( function() {             //退出登录
					document.cookie = 'user' + '=' + '' ;
					location.reload();
				});	
				
			  $("#again").click( function() {  //重新测试
					location.reload();
				});	

				
			  $("[type='checkbox']").each(function(index, element) {
						$(this).click( function() {
							$("[type='checkbox']").prop('checked',false);
							$(this).prop('checked',true);
						});   
            	});
			  
			  	$("#next").click( function() {
					$("[type='checkbox']").each(function(index, element) {
						if($(this).prop('checked'))
						{
							hisChoice.splice(num,1,$(this).val());
							if($(this).val() == AllQuestion.correct[num]) 
							{
								num++;
								point = point+2;							
								ChangeQues();
							}
							else 
							{
								num++;
								ChangeQues();	
							}
							$("#qnum").text(num+1+'/'+Qnum);
						}
                	});;
					ClearChoice(num);
			  	});
			  
			  $("#last").click( function() {
				  	num = num - 1;
				  	$("#qnum").text(num+1+'/'+Qnum);
				  	ClearChoice(num);
				 	$("[type='checkbox']").each(function(index, element) {
                  		if($(this).prop('checked')) 
						{
							if($(this).val() == AllQuestion.correct[num])
							point = point-2;							
						}
                  	});
				  	if(num != Qnum-1)
				  	{
						  $("#next").val('下一题');
				  	}
				 	ChangeQues()
			  	});
			  	
 			  function ForLog() {
				var user = $("#user").val();
				var password = $("#password").val();
				var x = localStorage.getItem(user);
				if(x) {
					if(x == password) {
						document.cookie = 'user' + '=' + user; //前面已经限定为字符串只是字母和数字,所以不需要URI编码
						$("#_word").text('Welcome Back'+' '+'Dear '+user+': ').fadeIn();
						$("#CheckOut").fadeIn();
						document.getElementById("LogSign").style.display = "none";
						$(".frame").fadeIn(1000);
					}
					else {
						alert('密码错误');
					}
				}
				else {
					alert('用户不存在');
				}	  	  
			  }	
			  
			  function ForSign() {
				var pat1 = /^[0-9A-Za-z]{1,8}$/, pat2 = /^[0-9a-zA-Z]{1,10}$/;
				var boolean1 = true,boolean2;
				$("#_user").on('blur',function() {
						var user = $("#_user").val();
						boolean1 = pat1.test(user);
						if(!boolean1) {
							$("#check_user").text('格式不符').css('color','#F00');
						}
						else {
							$("#check_user").text('RIGHT').css('color','#0F9');
						}
					});
					
				$("#_password").on('blur',function() {
						var password = $("#_password").val();
						boolean2 = pat2.test(password);
						if(!boolean2) {
							$("#check_password").text('格式不符').css('color','#F00');
						}
						else {
							$("#check_password").text('RIGHT').css('color','#0F9');
						}
					});
				$("#cancle").click( function() {                      //退出注册页
					$("#_user").value = '';
					$("#_password").value = '';
					$("#signPage").css('display','none');
					$("#LogSign").fadeIn(); 
					}); 
				
				BlockChange('LogSign','signPage')	 
				//$("#LogSign").css('display','none');
				//$("#signPage").fadeIn(1000);	
				 
			  	
				$("#ToSign").click( function() {
					var user = $("#_user").val();
					var password = $("#_password").val();
			  		if(GetLocal(user)) {
						alert('用户已存在！');
					}
					else {
						if(boolean1 && boolean2) {
							SetLocal(user,password);
							alert('注册成功');
							location.reload();
						}
						else {
							alert('注册失败，请按照格式填写资料');
						}
					}
					
					});
			  }
			  		
			 function ForClean() {
			  	var key = prompt('请输入权限密码');
			  	if(key == '0123') {
			  	localStorage.clear();
			  	alert('用户记录删除成功'); 
			  	}
			  	else {
				 	alert('密码错误'); 
			  	}
			  		}		