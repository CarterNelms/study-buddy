'use strict';
$(function() {
  var $form = $('form.lesson');
  var $button = $form.find('button');
  $button.click(submitNewLesson);
  function submitNewLesson(e) {
    $(this).closest('form').submit(function() {
      var html = $('#content-container iframe').contents().find('body').html();
      $('input[name=material]').val(html);
      console.log('hello');
    });
  }
});

//# sourceMappingURL=lessonNew.map
