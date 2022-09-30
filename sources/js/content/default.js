/**
 * @description 왁뷰의 기본적인 코드들을 담당합니다.
 * @author chamwhy <chamwhy8@gmail.com>
 * @license MIT
 */

 jQuery(function($){
    $(window.setTopInIframe).ready(() => {
        console.log(window.setTopInIframe);
    });
    $(document).last().ready(() => {
        injectCafeCategoryEffect();
        
    });
    $('iframe[id="cafe_main"]').ready(() => {
        switchCommentWriter();
    });

    /**
     * @description 카페 카테고리에 적용하는 효과 모음집입니다.
     */
    function injectCafeCategoryEffect(){
        const cafeCategoryHtml = `
        <div class="wv_cafeCategory">
            <div class="wv_cafeinfoToggle" id="wv_cafeinfoToggle">
    
            </div>
        </div>
        `;

        $('#group-area').prepend(cafeCategoryHtml);

        $('.wv_cafeCategory>div').click(function(){
            console.log("children clicked");
            const clickedBtn = $(this); 

            switch(clickedBtn.attr('id')){
                case 'wv_cafeinfoToggle':
                    $('#cafe-info-action').toggleClass('none');
                    break;
            }
            
            if(clickedBtn.hasClass("enabled")){
                clickedBtn.removeClass("enabled");
            }else{
                clickedBtn.addClass("enabled");
            }
        })
    }

    function switchCommentWriter(){
        $('.CommentBox').ready(() => {
            const commentBox = $(this);
            $('.CommentWriter').prependTo(commentBox);
        });
        
    }
});