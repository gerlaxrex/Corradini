$(document).ready(function(){
    
    let ok = false;
    $('input[type="submit"]').attr("disabled",true);
    //Control for the inputs in the contact form
    $("input[type='email']").focusin(function(){
        $(this).keydown(function(){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(this).val())){
                ok = true;
                $('input[type="submit"]').attr("disabled",false);
                $('#message').attr('hidden',true);
                $(this).css('background-color', 'rgb(213, 255, 149)');
            }else{
                ok = false;
                $('#message').attr('hidden',false);
                $('input[type="submit"]').attr("disabled",true);
                $(this).css('background-color','rgb(255, 149, 149)');
            }
        })
    });

    $("input[type='email']").focusout(function(){
        if(!ok){
            $(this).css('background-color', 'rgb(255, 149, 149)');
        }else{
            $(this).css('background-color', 'rgb(213, 255, 149)');
        }

        if($(this).val().length <= 0 || $(this).val() == $(this).attr('placeholder')){
            $('#message').attr('hidden',true);
            $(this).css('background-color', 'rgb(255, 255, 255)');
        }
    });
});