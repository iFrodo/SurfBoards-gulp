const validateFields = (form, fieldsArray) => {
  fieldsArray.forEach((field) => {
    field.removeClass("input-error");
    if (field.val().trim() === "") {
      field.addClass("input-error");
    }
  });
  const errorFields = form.find(".input-error");
  return errorFields.length === 0;
};

$(".form__btn").on('click',(e) => {
  e.preventDefault();

  const form = $(".form");
  const name = form.find("[name = 'name']");
  const phone = form.find("[name = 'phone']");
  const comment = form.find(".form__input--textarea");
  const to = form.find("[name = 'to']");
  const content = $(".modal__content");
  isValid = validateFields(form, [name, phone, comment, to]);

  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
    });
    request.done((data) => {
      content.removeClass("error-text");
      content.text(data.message);
    });
    request.fail((data) => {
      let message;
      if(data?.responseJSON?.message){
        message = responseJSON.message
      }else{
        message = 'Произошла ошибка,попробуйте позже'
      }
      content.text(message);
      content.addClass("error-text");
    });
    request.always(() => {
     $.fancybox.open({
      src:'#form-modal',
      type:'inline',
     })
    });
  }
});

$(".btn--close").on('click',(e) => {
  e.preventDefault();
  $.fancybox.close()
  // $(".form-modal").css({ height: "0%", width: "0%" });
});
