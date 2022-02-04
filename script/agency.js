(($,window,document,undefined)=>{
    
    class Pofo {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        }
        header(){
            //메인버튼 이벤트
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');

            //메인메뉴 - 서브메뉴 1단계=>2단계
            mainBtn.on({
                mouseenter(e){
                    e.preventDefault();
                    const $this = $(this);
                    sub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                },
                focusin(e){ // tab키로 접근성 확보
                    e.preventDefault();
                    const $this = $(this);
                    sub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                }
            });            

            nav.on({
                mouseleave(e){
                    e.preventDefault();
                    sub.stop().fadeOut(400);
                    subSub.stop().fadeOut(0);
                }
            });

            //서브메뉴-서브서브메뉴까지 2단계=>3단계
            subBtn.on({
                mouseenter(){
                    const $this = $(this);
                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                },
                focusin(){
                    const $this = $(this);
                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                }
            });

        }
        section1(){
            //변수등록
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            let cnt = 0;

            function mainSlide(){
                slideWrap.stop().animate({left:-1903*cnt},600,'easeInOutExpo', function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left:-1903*cnt},0);
                });
            }

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }

            //setInterval(prevCount,3000);

            //스와이프(좌우터치 이벤트)
            //오른쪽->왼쪽 터치: 다음슬라이드( >0)
            //왼쪽->오른쪽 터치: 이전슬라이드( <0)

            let touchStart = null; //터치시작 좌표값
            let touchEnd = null;   //터치종료 좌표값
            let dragEnd=null;   // 드래그 끝 
            let dragStart=null; // 드래그 시작
            let mouseDown = null;
            
            slideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX - slideWrap.offset().left-1903;
                    mouseDown = true;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown = false;
                    if( (touchStart-touchEnd)>0){
                        nextCount();
                    }
                    if( (touchStart-touchEnd)<0){
                        prevCount();
                    }
                },
                mousemove:function(e){ //드래그할 때 마우스에 딸려오는 모양
                    //slideWrap.css({left: 드래그끝-드래그시작});
                    //반드시 mousedown이 이루어진 상태에서 (mouseup은 마우스 클릭을 마친 상태)
                    //if(mouseDown!==true){return} : mouseDown이 아니면 return해라
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    slideWrap.css({left:dragEnd-dragStart});
                }
            });

        }
        section2(){
        }
        section3(){
        }
        section4(){
        }
        section5(){
        }
        section6(){
        }
        section7(){
        }
        section8(){
        }
        section9(){
        }
        section10(){
        }
        footer(){
        }
    }
    const newPofo = new Pofo();
    newPofo.init();
})(jQuery,window,document);