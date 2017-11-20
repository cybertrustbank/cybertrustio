$(document).ready(function() {
    // 
    // ga('create', 'UA-106150580-1', 'auto');
    function ga_goal(identificator, value){
    ga('create', 'UA-106150580-1', 'auto');
    ga('send', {
      hitType: 'event',
      eventCategory: identificator,
      eventAction: identificator,
      eventLabel: identificator,
      eventValue: value,
      
    });
    console.log('ga_goal',identificator);
  }

  	//SVG
  	svg4everybody();

  	//COUNTER
  	$('.countdown').countdown({
        date: "November 27, 2017 21:00:00",
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 0) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>" );
          }
    });
    //COUNTER2
    $('.countdown_two').countdown({
      date: "December 5, 2017 21:00:00",
      render: function(data) {
          $(this.el).html("<div>" + this.leadingZeros(data.days, 0) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
      }
    }); 
    //COUNTER_CN
    $('.countdowncn').countdown({
      date: "November 27, 2017 21:00:00",
      render: function(data) {
          $(this.el).html("<div>" + this.leadingZeros(data.days, 0) + " <span>天</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>时</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
      }
    });

    //COUNTER2_CN
    $('.countdowncn_two').countdown({
        date: "December 5, 2017 21:00:00",
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 0) + " <span>天</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>时</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
        }
    }); 

    //COUNTER_BORNES  
    $('.countdown_bonus').countdown({
      date: "November 27, 2017 21:00:00",
      render: function(data) {
          $(this.el).html("<div>" + this.leadingZeros(data.days, 0) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
      }
    });


    //SCROLL
    $(window).scroll(function() {
    	var fromTop = $('.counter-wrap--main').offset().top + $('.counter-wrap--main').height();

	    if ($(window).scrollTop() > fromTop) {
	       $('.counter-wrap--fixed').addClass('show');
	    }
	    else {
	       $('.counter-wrap--fixed').removeClass('show');
	    }
  	});

    //3
    $('.Participatenow').click(function(){
       if ($(this).data('target')=='#modal-participate'){
        ga_goal('participate_now_open');
        }
    });
    //4
    $("#submit").click(function(){
      ga_goal('participate_now_send', $('[name=_amount]').val().split(/-|or/g)[0].trim());
    })
    //5
    $(".WhitePaper").click(function(){
      ga_goal('whitepaper');
    })
    

    //FORM
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    $("#teambox .col-sm-6").click(function(e){
      if(e.target.tagName=="A"||e.target.tagName=="I"){return}
      var _index = $(this).parent().index()*4+$(this).index();
       if($(this).find("img").length<1  ){
          return false
        }
      if($(this).parent().index()==0){
        $("#teambox").animate({"left":"1000px"},300,function(){
         $("#teambox").hide()
        });
        $("#introduceInfo .j-active__item").eq(_index).show().animate({"left":"0px"},300);;
      }
     
        
    })
    $(".b-people__close-info").click(function(e){

      $(this).parents(".j-active__item").animate({"left":"1000px"},300,function(){
         $(this).hide();
        });
      $("#teambox").show().animate({"left":"0px"},300);
    })

    $("#submit").attr("disabled",true);
    $("input[type=checkbox]").click(function(){
      if($("input[type=checkbox]:checked").length==2){
        $("#submit").attr("disabled",false);
      }else{
        $("#submit").attr("disabled",true);
      }
    })
});



