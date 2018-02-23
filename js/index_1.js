$(function(){
    /*button click :  reservation*/
    $('#fastReserv').click(function(){
        console.log('test');
        $('#tonedown').addClass('onBg');
        $('#pop_window').addClass('on');
    });
    $('.pop_close').click(function(){
        $('#tonedown').removeClass('onBg');
        $('#pop_window').removeClass('on');
    });
    
    /*교육프로그램*/
    $('.menu1_tabbox').eq(1).css('display','none');
    $('.menu1_tabbox').eq(2).css('display','none');
    $('.menu1_tabbox').eq(3).css('display','none');

    $('.menu1_tab_btn').click(function(){
        $('.menu1_tab_btn').removeClass('selected');
        $(this).addClass('selected');

        var tabBoxName = $(this).attr('rel');
        console.log(tabBoxName);
        $('.menu1_tabbox').css('display','none');
        $('#'+tabBoxName).css('display','block');
            
    });
    
    /*체험프로그램*/
    $('.menu2_tabbox').eq(1).css('display','none');
    $('.menu2_tabbox').eq(2).css('display','none');
    $('.menu2_tabbox').eq(3).css('display','none');

    $('.menu2_tab_btn').click(function(){
        $('.menu2_tab_btn').removeClass('selected');
        $(this).addClass('selected');

        var tabBoxName = $(this).attr('rel');
        console.log(tabBoxName);
        $('.menu2_tabbox').css('display','none');
        $('#'+tabBoxName).css('display','block');
            
    });
    
    /*문화프로그램*/
    $('.menu3_tabbox').eq(1).css('display','none');
    $('.menu3_tabbox').eq(2).css('display','none');
    $('.menu3_tabbox').eq(3).css('display','none');

    $('.menu3_tab_btn').click(function(){
        $('.menu3_tab_btn').removeClass('selected');
        $(this).addClass('selected');

        var tabBoxName = $(this).attr('rel');
        console.log(tabBoxName);
        $('.menu3_tabbox').css('display','none');
        $('#'+tabBoxName).css('display','block');
    });
});

$(function(){
   /*별자리*/
    // 크롬 감지
    isChrome = function() {
        return Boolean(window.chrome);
    }
    // 크롬이면 코드 실행
    if(isChrome()){
        window.requestAnimFrame = function(){
                return(
                    window.requestAnimationFrame       || 
                    window.webkitRequestAnimationFrame || 
                    window.mozRequestAnimationFrame    || 
                    window.oRequestAnimationFrame      || 
                    window.msRequestAnimationFrame     || 
                    function(/* function */ callback){
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            }();

            var canvas = document.getElementById('canvas'); 
            var context = canvas.getContext('2d');

            var W = window.innerWidth, H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;

            var particle_count = 30,
                particles = [],
                couleurs   = ["#cfcfcf", "#dfdfdf", "#ffc200","#fff"];
            function Particle(){
                this.radius = Math.round((Math.random()*1)+3);
                this.x = Math.floor((Math.random() * canvas.width/2) + this.radius); 
                this.y =  Math.floor((Math.random() * canvas.height/2) + this.radius); 
                this.color = couleurs[Math.round(Math.random()*couleurs.length)];
                this.speedx = Math.round((Math.random()*300)+0)/100;
                this.speedy = Math.round((Math.random()*300)+0)/100;

                switch (Math.round(Math.random()*couleurs.length)){
                    case 1:
                    this.speedx *= 1;
                    this.speedy *= 1;
                    break;
                    case 2:
                    this.speedx *= -1;
                    this.speedy *= 1;
                    break;
                    case 3:
                    this.speedx *= 1;
                    this.speedy *= -1;
                    break;
                    case 4:
                    this.speedx *= -1;
                    this.speedy *= -1;
                    break;
                }

                this.move = function(){
                    context.beginPath();
                    context.globalCompositeOperation = 'source-over';
                    context.fillStyle   = this.color;
                    context.globalAlpha = 1;
                    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
                    context.fill();
                    context.closePath();

                    this.x = this.x + this.speedx;
                    this.y = this.y + this.speedy;

                    if(this.x <= 0+this.radius){ this.speedx *= -1; }
                    if(this.x >= canvas.width-this.radius){ this.speedx *= -1; }
                    if(this.y <= 0+this.radius){this.speedy *= -1;}
                    if(this.y >= canvas.height-this.radius){ this.speedy *= -1; }

                    for (var j = 0; j < particle_count; j++){
                        var particleActuelle = particles[j],
                            yd = particleActuelle.y - this.y,
                            xd = particleActuelle.x - this.x,
                            d  = Math.sqrt(xd * xd + yd * yd);
                        if ( d < 200 ){
                            context.beginPath();
                            context.globalAlpha = (200 - d) / (200 - 0);
                            context.globalCompositeOperation = 'destination-over';
                            context.lineWidth = 1;
                            context.moveTo(this.x, this.y);
                            context.lineTo(particleActuelle.x, particleActuelle.y);
                            context.strokeStyle = this.color;
                            context.lineCap = "round";
                            context.stroke();
                            context.closePath();
                        }
                    };
                };
            };
            for (var i = 0; i < particle_count; i++){
                var particle = new Particle();
                particles.push(particle);
            }

            function animate(){
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < particle_count; i++){
                    particles[i].move();
                }
                requestAnimFrame(animate);
            }
            animate();
    }
});

 //end 별자리
$(window).resize(function(){
    $('canvas').css('width');
    var w = window.innerWidth;
    $('#gnb>ul>li.depth2').removeAttr('height');
    if ( w <= 924){
        $('#gnb>ul>li:nth-child(1) .depth2, #gnb>ul>li:nth-child(2) .depth2').css('height','228px');
        $('#gnb>ul>li:nth-child(3) .depth2, #gnb>ul>li:nth-child(4) .depth2, #gnb>ul>li:nth-child(6) .depth2').css('height','171px');
        $('#gnb>ul>li:nth-child(5) .depth2').css('height','114px');
    } else if ( w > 924 && w <= 1056){
        $('#gnb>ul>li:nth-child(1) .depth2, #gnb>ul>li:nth-child(2) .depth2').css('height','267.2px');
        $('#gnb>ul>li:nth-child(3) .depth2, #gnb>ul>li:nth-child(4) .depth2, #gnb>ul>li:nth-child(6) .depth2').css('height','200.4px');
        $('#gnb>ul>li:nth-child(5) .depth2').css('height','133.6px');
    } else{
        $('#gnb>ul>li:nth-child(1) .depth2, #gnb>ul>li:nth-child(2) .depth2').css('height','336px');
        $('#gnb>ul>li:nth-child(3) .depth2, #gnb>ul>li:nth-child(4) .depth2, #gnb>ul>li:nth-child(6) .depth2').css('height','252px');
        $('#gnb>ul>li:nth-child(5) .depth2').css('height','168px');
    }
});

/* 반응형 웹페이지*/
$(function(){
    var w = window.innerWidth;
    if(w >= 768){
        $('#mobile_nav, #mobile_login').hide();
        $('#nav_sub').show();
    }else{
        $('#mobile_nav, #mobile_login').show();
        $('#nav_sub').hide();
    }
    $(window).resize(function(){
        var w = window.innerWidth;
        if(w >= 768){
            $('#mobile_nav, #mobile_login').hide();
            $('#nav_sub').show();
        } else {
            $('#mobile_nav, #mobile_login').show();
            $('#nav_sub').hide();
        }
        if(w <=480){
            $('.sitemap span').html('▲');
        } else{
            $('.sitemap span').html('▼');
        }
    });
});

                 
$(function(){
    /*2depth menu 초기에 숨김*/
    $('header nav#gnb>ul>li').find('ul').hide();
    
    $(function(){
        var scrolltop = $(window).scrollTop();
        var origin_fontcolor = $('header nav#gnb li > a').css('color');
//        console.log(origin_fontcolor);
        /*scroll effect*/
        var logoUrl = ($('#logo img').attr('src'));
        $(function(){
            if($(document).scrollTop() !== 0) {
            $('header').stop().animate({
                backgroundColor:'#fff',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: '#ddd'       
            },0);
            $('#logo img').attr('src','images/logo_160.png');
            $('#logo_sub').css('color','#666');
            $('header nav#gnb>ul>li > a').stop().animate({
                color: '#333'
            },0);
            $('#mobile_nav i, #mobile_login i ').css('color','#666');

            } else {
                $('header').stop().animate({
                backgroundColor:'rgba(0,0,0,0)',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'rgba(255,255,255,.4)'
                },300);
                $('#logo img').attr('src',logoUrl);
                $('header nav#gnb>ul>li > a').stop().animate({
                color: origin_fontcolor
                },300);
                $('#mobile_nav i, #mobile_login i').css('color','#fff');
            }
        });
        $(document).scroll(function(){
            if($(document).scrollTop() !== 0) {
            $('header').stop().animate({
                backgroundColor:'#fff',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: '#ddd'       
            },0);
            $('#logo img').attr('src','images/logo_160.png');
            $('#logo_sub').css('color','#666');
            $('header nav#gnb>ul>li > a').stop().animate({
                color: '#333'
            },0);
            $('#mobile_nav i, #mobile_login i').css('color','#666');

            } else {
                $('header').stop().animate({
                backgroundColor:'rgba(0,0,0,0)',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'rgba(255,255,255,.4)'
                },300);
                $('#logo img').attr('src',logoUrl);
                $('header nav#gnb>ul>li > a').stop().animate({
                color: origin_fontcolor
                },300);
                $('#mobile_nav i, #mobile_login i').css('color','#fff');
            }
        });/*end scroll effect*/

        /*dropdown menu*/
         $('header nav#gnb>ul>li').stop().mouseleave(function(){
            $(this).find('ul').stop().slideUp(200);
         });
         $('header nav#gnb>ul>li').stop().mouseenter(function(){
            $(this).find('ul').stop().slideDown(300);
         });
        
        /*mouse move test*/
        var mX, mY;
        var wW = $(window).width();
        var wH = $(window).height();
        var traX, traY;
        if (wW > 768){
        $(document).mousemove(function(e){
            mX = e.pageX;
            mY = e.pageY;
//            console.log(mX , mY);
//            console.log(wW , wH);
            /*나누는 값이 커질수록 작게 움직인다*/
            traX = ((4 * mX) / 100) + 40;
            traY = ((4 * mY) / 300) + 40;
//            console.log(traX);
            $('#bg_fix1')
                .css('background-position-x',traX+'%');
//                .css('background-position-y',traY+'%');
            });/*end mouse move*/
        }
        /*smooth wheel*/
        $(window).on('mousewheel DOMMouseScroll', function(e) {
            var dir,
            amt = 400;

            e.preventDefault();
            if(e.type === 'mousewheel') {
                dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
            }
            else {
                dir = e.originalEvent.detail < 0 ? '-=' : '+=';
            }      

            $('html, body').stop().animate({
                scrollTop: dir + amt
            },550, 'easeOutQuad');
        });/*smooth wheel*/
        
        /*sticky header*/
$(function(){
    var w = window.innerWidth;
        var windowScrolltop = $(window).scrollTop();
        var mobile_gnb = document.getElementById('gnb');
        var header = $('header').css('height');
        if ( w <= 480 ){
            if (windowScrolltop >= 400) {
                $('#sub1_menu_tab').addClass('fixed_header');
                $('#sub2_menu_tab').addClass('fixed_header');
                if( header == '50px'){
                    $('.fixed_header').css('top', '50px');
                } else{
                    $('.fixed_header').css('top', '150px');
                }
            }
            else {
                $('#sub1_menu_tab').removeClass('fixed_header');
                $('#sub2_menu_tab').removeClass('fixed_header');
            }
        } else{
            if (windowScrolltop >= 400) {
                $('#sub1_menu_tab').addClass('fixed_header');
                $('#sub2_menu_tab').addClass('fixed_header');
                if( header == '50px'){
                    $('.fixed_header').css('top', '50px');
                } else{
                    $('.fixed_header').css('top', '100px');
                }
            }
            else {
                $('#sub1_menu_tab').removeClass('fixed_header');
                $('#sub2_menu_tab').removeClass('fixed_header');
            }
        }
        $(window).scroll(function(){
            var w = window.innerWidth;
            var windowScrolltop = $(window).scrollTop();
            var mobile_gnb = document.getElementById('gnb');
            var header = $('header').css('height');
            if ( w <= 480 ){
                if (windowScrolltop >= 400) {
                    $('#sub1_menu_tab').addClass('fixed_header');
                    $('#sub2_menu_tab').addClass('fixed_header');
                    if( header == '50px'){
                        $('.fixed_header').css('top', '50px');
                    } else{
                        $('.fixed_header').css('top', '150px');
                    }
                }
                else {
                    $('#sub1_menu_tab').removeClass('fixed_header');
                    $('#sub2_menu_tab').removeClass('fixed_header');
                }
            } else{
                if (windowScrolltop >= 400) {
                    $('#sub1_menu_tab').addClass('fixed_header');
                    $('#sub2_menu_tab').addClass('fixed_header');
                    if( header == '50px'){
                        $('.fixed_header').css('top', '50px');
                    } else{
                        $('.fixed_header').css('top', '100px');
                    }
                }
                else {
                    $('#sub1_menu_tab').removeClass('fixed_header');
                    $('#sub2_menu_tab').removeClass('fixed_header');
                }
            }
        });/*end sticky header*/
});        
        });/*end script*/
    });

    /* button tab function*/
    function moveToContent(seq){
        var scrolltop = $(document).scrollTop();
        var offset = $('#sub2_content_title' + seq).offset();
//        console.log(offset);
        $('html,body').stop().animate({
            scrollTop : offset.top- 100},600);
            var class_by_id = $('#sub2_menu_tab').attr('class');
            if (class_by_id == 'fixed_header'){
                $('html,body').stop().animate({
                scrollTop : offset.top-100},800);
            } else {
                $('html,body').stop().animate({
                scrollTop : offset.top-150},800);
            }
    }

    function moveToContent1(seq) {
        var scrolltop = $(document).scrollTop();
        var offset = $('#sub1_content' + seq).offset();
        $('html,body').stop().animate({
            scrollTop : offset.top-100},400);
            var class_by_id = $('#sub1_menu_tab').attr('class');
            
            if (class_by_id === 'fixed_header'){
                $('html,body').stop().animate({
                scrollTop : offset.top-100},400);
            } else{
                $('html,body').stop().animate({
                scrollTop : offset.top-150},400);
            }
        }/*end button tab function*/

    function initMap(){
        var seoul_astro = {lat: 37.546371 , lng: 127.106131};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: seoul_astro
        });
        var marker = new google.maps.Marker({
          position: seoul_astro,
          map: map
    });
}

/* mobile navon*/
function mobile_navon(){
    var h = $('header').css('height');
    var w = window.innerWidth;
    var gnb = document.getElementById('gnb');
    var off = gnb.getAttribute('class');
    if( w <= 480 ){
        if( h === '50px'){
            $('header').css('height','150px');
        } else{
            $('header').css('height','50px');
        }
        if( off == "nav_off"){
            gnb.removeAttribute('class');
            $('.fixed_header').css('top', '150px');
        } else{
            gnb.setAttribute('class','nav_off');
            $('.fixed_header').css('top', '50px');
        }  
    } else{
        if( h === '50px'){
            $('header').css('height','100px');
        } else{
            $('header').css('height','50px');
        }
        if( off == "nav_off"){
            gnb.removeAttribute('class');
            $('.fixed_header').css('top', '100px');
        } else{
            gnb.setAttribute('class','nav_off');
            $('.fixed_header').css('top', '50px');
        }    
    }
//    gnb.classList.toggle("nav_off");
};

/* mobile index add effect*/
$(function(){
    var w = window.innerWidth;
    if(w < 768){
        $('#main #content1 .banner_program ul').before('<i class="fas fa-angle-double-up"></i>');
    }
    if(w <480){
        $('.sitemap span').html('▲');
    }
});


$(window).resize(function(){
    var w = window.innerWidth;
    var gnb = document.getElementById('gnb');
    var off = gnb.getAttribute('class');
    if( w < 768 && w >480){
        if( off == "nav_off"){
            $('header').removeAttr('height');
            $('header').css('height','50px');
            $('.fixed_header').css('top', '50px');
        } else{
            $('header').removeAttr('height');
            $('header').css('height','100px');
            $('.fixed_header').css('top', '100px');
        }
    } else if( w <=480 ){
        if( off == "nav_off"){
            $('header').removeAttr('height');
            $('header').css('height','50px');
            $('.fixed_header').css('top', '50px');
        } else{
            $('header').removeAttr('height');
            $('header').css('height','150px');
            $('.fixed_header').css('top', '150px');
        }
    } else{
        $('header').removeAttr('height');
        $('header').css('height','100px');
        gnb.setAttribute('class','nav_off');
        $('.fixed_header').css('top', '100px');
    }
});
