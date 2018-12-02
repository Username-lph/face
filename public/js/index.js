// $(function(){
//     $('#name').keyup(function(){
//         val=this.value;
//         // $('#name2').append(val);
//         $('#name2').html(val);
//     })
//     $('#area').keyup(function(){
//         val=this.value;
//         $('#area2').append(val);
//     })
// })

$(function(){
    //用户名留言部分 
    $('#name').keyup(function () {
        val = this.value;
        // $('#name2').append(val);
        $('#name2').html(val);
    })
    $('#area').keyup(function () {
        val = this.value;
        $('#area2').append(val);
    })

    // // 判断是否为谷歌浏览器
    // function isChorme(){
    //     // 区分浏览器的内核
    //     nu=navigator.userAgent;
    //     if(nu.match(/Chorme/i)){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
  

    // scrollobj = $('.scrollTop');
    
    // $(window).scroll(function(){
    //     if(isChorme()){
    //         st = $(window).scrollTop();
    //         document.title=st;
    //         if(st>200){
    //             scrollobj.show();
    //         }else{
    //             scrollobj.hide();
    //         }
    //     }else{
    //         st = $(window).scrollTop();
    //         document.title=st;
    //         if(st>200){
    //             scrollobj.show();
    //         }else{
    //             scrollobj.hide();
    //         }
    //     }
    // })

    // scrollobj.click(function(){
    //     if(isChorme()){
    //         document.body.scrollTop=0;
    //     }else{
    //         document.documentElement.scrollTop=0;
    //     }
    // })


    // （滚动条回到顶部）jQuery已兼容各个浏览器
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $('.gotop').fadeIn(400);
        }else{
            $('.gotop').fadeOut(400);
        }
    })

    $('.gotop').click(function(event){
        // 将防止上面的链接打开URL
        event.preventDefault();
        // 滚动条返回时的动画 
        $('html,body').animate({'scrollTop':0},500);
        return false;
    })
    // 下拉菜单
    $('#select-city').change(function(){
        val=this.value;
        $('#choose').html(val);
    })
    $('#select-area').change(function(){
        val=this.value;
        $('#city-area').html(val);
    })
    $('#select-county').change(function(){
        val=this.value;
        $('#county').html(val);
    })

    // choose=$('#choose');
    // city=$('#select-city');
    // function getChange(obj,objs){
    //     // val=obj.value;
    //     alert(obj.value);
       
    //     // return  objs.html(val);;
    // }
    // city.change(function(){
        
    //     getChange(city,choose);
    // })
    
})