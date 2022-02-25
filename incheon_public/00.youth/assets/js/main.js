(function(){


  // 슬라이드
  function slideItem(){

    $(".banner-btn-wrap__start").hide();
    $(".banner-btn-wrap__start").on("click", function () {
      mainSlide.autoplay.start();
      $(".banner-btn-wrap__stop").show();
      $(".banner-btn-wrap__start").hide();
      $(".banner-btn-wrap__stop").focus();
      return false;

    });
    $(".banner-btn-wrap__stop").on("click", function () {
      mainSlide.autoplay.stop();
      $(".banner-btn-wrap__stop").hide();
      $(".banner-btn-wrap__start").show();
      $(".banner-btn-wrap__start").focus();
      return false;
    });

    var slideSetting = {
      slidesPerView : 'auto',
      spaceBetween : 10,
      loop : true,
      loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
      // watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      speed:2000,
      autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 2500,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      navigation: {   // 버튼 사용자 지정
        nextEl: '.visual-btn-next',
        prevEl: '.visual-btn-prev',
      },
    }

    const mainSlide = new Swiper("#main-slide",slideSetting);
  

  }

  // 탭

  function comTab(){

    // com var
    var tabList = $(".tab__list");
    var tabItem = $(".tab__item");
    var tabCnt = $(".tab-content");

    // init
    tabCnt.hide();
    tabCnt.eq(0).show();

    // click event
    tabList.on("click",function(e){
      e.preventDefault();

      var $this = $(this);
      // 메뉴버튼
      menuBtn($this);
      
      // 콘텐츠변경
      changeCnt($this);
    });

    function menuBtn($this){
      tabList.find(tabItem).removeClass("is-active");
      $this.find(tabItem).addClass("is-active");
    }

    function changeCnt($this){
      var currentValue =  $this.find(tabItem).attr("href");

      tabCnt.hide();
      $(currentValue).show();
    }


  }




  function init(){
    
    slideItem(); //슬라이드 모음
    comTab(); // 탭

  }
    
  
  init();

})();