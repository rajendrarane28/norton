$(document).ready(function() 
{
  $('input,select,textarea').blur(function()
    {
        if( $(this).val().length > 0 ) 
        {
            $(this).addClass('notempty');
        }//
        else
        {
             $(this).removeClass('notempty');
        }
  });
  /* $("#add_new_filter").click(function(){
    var t = $(".sample-faq-block").html();
    $(".faq_block").append(t);
  });
  
  $(".faq_block").on("click", '.btnRemove', function(){
    $(this).parent().parent().remove();
  }); */

  $(document).find("#add_new_filter").on("click", function(){
    console.log("sagar");
    var t = $(document).find(".sample-invoice-block").html();
    $(document).find(".faq_block").append(t);
  });

  $(".faq_block").on("click", '#btnRemove', function(){
    $(this).parent().parent().remove();
  });
});


