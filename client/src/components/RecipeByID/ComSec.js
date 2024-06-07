export default function ComSec(){
    return(
        <div class="comments-section">
                <div class="comments-section__layout">
                    <div class="comments-section__header">
                        <div class="title title_sans-serif">Комментарии — 0</div>
                    </div>
                    <div class="show_popup_auth" id="comment_form_template">
                        <form class="comment_form_template" id="new_comment" action="/comments" accept-charset="UTF-8" data-remote="true" method="post">
                            <input type="hidden" name="authenticity_token" value="Si/UfDCLmNf0Trn4WB5a0LhKZICVX74FQPE9p0mxS7E+deHGfVU11EPgzZY6ExkZdCh1reg7tAQ/gA2/xSRAOw=="></input>
                            <input value="Recipe" type="hidden" name="comment[commentable_type]" id="comment_commentable_type"></input>
                            <input value="153156" type="hidden" name="comment[commentable_id]" id="comment_commentable_id"></input>
                            <input type="hidden" name="comment[parent_id]" id="comment_parent_id"></input>
                            <div class="comment-box">
                                <div class="field-comment">
                                    <textarea placeholder="Текст вашего сообщения..." class="field-comment__textarea" name="comment[body]" id="comment_body"></textarea>
                                </div>
                                <div class="button send_comment" data-comment-id="">
                                    <span class="fonticon fonticon_publish"></span>
                                    <span class="btn_text">Отправить</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

