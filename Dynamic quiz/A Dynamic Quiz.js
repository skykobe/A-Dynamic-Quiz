			$(document).ready(function(e) {
              var AllQuestion = {
			  		question : ['KISS是什么词？?','一本书放在地上什么地方你跨不过去？','一个猎人，一只枪，抢射程100米，有一个狼离猎人200米，猎人和狼都不动，可是猎人却开枪把狼打死了？','猩猩最讨厌什么线？','上课的时候，小猫、小狗、小鸡谁最先被叫起来背书？'],
					choice : [['A.动词','B.形容词','C.连词'],['A.墙角里','B.茅坑中','C.讲台上'],['A.狼心脏病了','B.不知道','C.枪长100米'],['A.直线','B.平行线','C.横线'],['A.小猫','B.小狗','C.小鸡']],
					correct : ['C','A','C','B','B']
			  }
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
				  if(num == Qnum)
				  {
					  //alert('你这次的测验成绩为：'+point+'分');
					  showPKQ();
				  }
				  else 
				  {
					  $("#1").text(AllQuestion.question[num]).fadeIn();
			  		  $("#2").text(AllQuestion.choice[num][0]).fadeIn();
					  $("#3").text(AllQuestion.choice[num][1]).fadeIn();
					  $("#4").text(AllQuestion.choice[num][2]).fadeIn();
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
					$(".frame").fadeOut();
					$('img').attr('src','1.jpg').slideDown();
					$("span#word").text('渣渣！！~~~~你的分数是：' + point + '分');
				}
				else if(point < fullMark)
				{
					$(".frame").fadeOut();
					$('img').attr('src','2.jpg').slideDown();
					$("span#word").text('GOOD JOB！~~~~你的分数是：' + point + '分');
				}
				else
				{
					$(".frame").fadeOut();
					$('img').attr('src','3.jpg').slideDown();
					$("span#word").text('要不要那么厉害，这都一百分~~~~你的分数是：' + point + '分');
				}
			}
            });