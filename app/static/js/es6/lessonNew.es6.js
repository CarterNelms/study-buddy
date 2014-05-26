/* global Quill */

'use strict';

$(function()
{
  var editor = new Quill('#editor');
  editor.addModule('toolbar', {container: '#toolbar'});

  var $form = $('form.lesson');
  var $button = $form.find('button');
  $button.click(submitNewLesson);

  function submitNewLesson(e)
  {
    $(this).closest('form').submit(function()
    {
      // var editor = $('#content-container');
      var html = editor.getHTML();
      // var html = $('#content-container iframe').contents().find('body').html();
      $('input[name=material]').val(html);
    });
  }
});