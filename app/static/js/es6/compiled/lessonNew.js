'use strict';
$(function() {
  var editor = new Quill('#editor');
  editor.addModule('toolbar', {container: '#toolbar'});
  var $form = $('form.lesson');
  var $button = $form.find('button');
  $button.click(submitNewLesson);
  function submitNewLesson(e) {
    $(this).closest('form').submit(function() {
      var html = editor.getHTML();
      $('input[name=material]').val(html);
    });
  }
});

//# sourceMappingURL=lessonNew.map
