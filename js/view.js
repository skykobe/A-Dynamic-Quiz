var AllQuestion ;//= JSON.parse(XHR.responseText);
var num = 0;
var point = 0;
var Qnum ;//= AllQuestion.question.length;
var hisChoice = [];
var fullMark ;//= Qnum * 2;

$(".rina").on('mouseenter', function () {
    $(this).animate({height: '550px'});
});

$(".rina").on('mouseleave', function () {
    $(this).animate({height: '450px'});
});

function ShowQues(XHR) {
	AllQuestion = JSON.parse(XHR.responseText);
	Qnum = AllQuestion.question.length;
    fullMark = Qnum * 2;
    $("#1").text(AllQuestion.question[num]);//
    $("#2").text(AllQuestion.choice[num][0]);//
	$("#3").text(AllQuestion.choice[num][1]);
	$("#4").text(AllQuestion.choice[num][2]);
	$("#qnum").text('1/'+Qnum);
}

function ChangeQues() {
	$("#1").css('display','none');
	$("#2").css('display','none');
	$("#3").css('display','none');
	$("#4").css('display','none');
    if (num === Qnum)
	{
	   showPKQ();
	}
	else  {
       $("#1").text(AllQuestion.question[num]).fadeIn(500);
	   $("#2").text(AllQuestion.choice[num][0]).fadeIn(500);
	   $("#3").text(AllQuestion.choice[num][1]).fadeIn(500);
	   $("#4").text(AllQuestion.choice[num][2]).fadeIn(500);
        if (num === Qnum - 1) {
			$("#next").val('交卷');
		  }
	 }
}

function BlockChange(now,after) {
    $(now).css('display', 'none');
    $(after).fadeIn(1000);
}

function ReviewChoice(n) { //用于显示上下题，并且回显之前选择的题
	$("[type='checkbox']").each(function(index, element) {
          $(this).prop('checked',false);
     });
	$("[type='checkbox']").each(function(index, element) {
          if($(this).val() == hisChoice[n]) {
				$(this).prop('checked',true);						
		   }
     });
}

function CleanChoice() {
    $("[type='checkbox']").each(function (index, element) {
        $(this).prop('checked', false);
    });
}

function showPKQ() {
	if(point < 0.5*fullMark) {
		$(".frame").fadeOut(100);
        $("#ChoiceFrame").fadeOut(100);
        $('#end').attr('src', 'resource/img/1.jpg').slideDown();
        $("span#word").html('渣渣！！~~~~你的分数是：' + point + '分' + '<br>点击图片重新测试');
        $(".rina").fadeOut();
	}
	else if(point < fullMark) {
			$(".frame").fadeOut(100);
        $("#ChoiceFrame").fadeOut(100);
        $('#end').attr('src', 'resource/img/2.jpg').slideDown();
        $("span#word").html('GOOD JOB！~~~~你的分数是：' + point + '分' + '<br>点击图片重新测试');
        $(".rina").fadeOut();
		}
		else {
			$(".frame").fadeOut(100);
        $("#ChoiceFrame").fadeOut(100);
        $('#end').attr('src', 'resource/img/3.jpg').slideDown();
        //$("span#word").text('要不要那么厉害，这都满分~~~~你的分数是：' + point + '分');
        $("span#word").html('要不要那么厉害，这都满分~~~~你的分数是：' + point + '分' + '<br>点击图片重新测试');
        $(".rina").fadeOut();
		}
}
							
				