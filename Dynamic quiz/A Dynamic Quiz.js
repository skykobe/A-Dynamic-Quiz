			$(document).ready(function(e) {
              var AllQuestion = {
			  		question : ['1 + 1 = ?','广工原名是什么？','超级厉害的ADC-Uzi叫什么名字'],
					choice : [['A.1','B.2','C.3'],['A.广东供热大学','B.宇宙工业大学','C.广东工业大学'],['A.简自豪','不知道','高地平']],
					correct : ['B','B','A']
			  }
			  var num = 0;
			  var point = 0;
			  var Qnum = AllQuestion.question.length;
			  var hisChoice = [];
			  $("#1").text(AllQuestion.question[num]);
			  $("#2").text(AllQuestion.choice[num][0]);
			  $("#3").text(AllQuestion.choice[num][1]);
			  $("#4").text(AllQuestion.choice[num][2]);
			  
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
						//hisChoice.push($(this).val());
					}
                });;
				ClearChoice(num);
			  });
			  
			  $("#last").click( function() {
				  num = num - 1;
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
			  	 /*$("[type='checkbox']").each(function(index, element) {
                  		if($(this).val() == hisChoice[num])
						{
							$(this).prop('checked',true);						
						}
                 });*/
				 $("#1").text(AllQuestion.question[num]);
			     $("#2").text(AllQuestion.choice[num][0]);
			     $("#3").text(AllQuestion.choice[num][1]);
			     $("#4").text(AllQuestion.choice[num][2]);
			  });
			  
			  function ChangeQues() {
				  if(num == Qnum)
				  {
					  alert('你这次的测验成绩为：'+point+'分');
				  }
				  else 
				  {
					  $("#1").text(AllQuestion.question[num]);
			  		  $("#2").text(AllQuestion.choice[num][0]);
					  $("#3").text(AllQuestion.choice[num][1]);
					  $("#4").text(AllQuestion.choice[num][2]);
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
			
			
            });