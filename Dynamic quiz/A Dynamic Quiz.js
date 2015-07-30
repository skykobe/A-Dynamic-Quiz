			$(document).ready(function(e) {
			  var XHR = new XMLHttpRequest();
			  XHR.onload = function() {
				  Question();
			  }
			XHR.open("get","Question.json",true);
			XHR.send();
			
			function Question()
			{
			  var AllQuestion = JSON.parse(XHR.responseText);
			  var num = 0;
			  var point = 0;
			  var Qnum = AllQuestion.question.length;
			  var hisChoice = [];
			  var fullMark = Qnum * 2;
			  $("#1").text(AllQuestion.question[num]);
			  $("#2").text(AllQuestion.choice[num][0]);
			  $("#3").text(AllQuestion.choice[num][1]);
			  $("#4").text(AllQuestion.choice[num][2]);
			  $("#qnum").text('1/'+Qnum);
			  
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
			  
			  function ChangeQues() {
				  $("#1").css('display','none');
				  $("#2").css('display','none');
				  $("#3").css('display','none');
				  $("#4").css('display','none');
				  if(num == Qnum)
				  {
					  showPKQ();
				  }
				  else 
				  {
					  $("#1").text(AllQuestion.question[num]).fadeIn(500);
			  		  $("#2").text(AllQuestion.choice[num][0]).fadeIn(500);
					  $("#3").text(AllQuestion.choice[num][1]).fadeIn(500);
					  $("#4").text(AllQuestion.choice[num][2]).fadeIn(500);
					  if(num == Qnum-1)
					  {
						  $("#next").val('交卷');
					  }
				  }
			  }
			  	
			function ClearChoice(n) {
				$("[type='checkbox']").each(function(index, element) {
                    $(this).prop('checked',false);
                });
				$("[type='checkbox']").each(function(index, element) {
                  		if($(this).val() == hisChoice[n])
						{
							$(this).prop('checked',true);						
						}
                 });
			}
			
			function showPKQ() {
				if(point < 0.5*fullMark)
				{
					$(".frame").fadeOut(100);
					$('img').attr('src','1.jpg').slideDown();
					$("span#word").text('渣渣！！~~~~你的分数是：' + point + '分');
				}
				else if(point < fullMark)
				{
					$(".frame").fadeOut(100);
					$('img').attr('src','2.jpg').slideDown();
					$("span#word").text('GOOD JOB！~~~~你的分数是：' + point + '分');
				}
				else
				{
					$(".frame").fadeOut(100);
					$('img').attr('src','3.jpg').slideDown();
					$("span#word").text('要不要那么厉害，这都一百分~~~~你的分数是：' + point + '分');
				}
							}
			}
            });