(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.add-test-question').on('click', addQuestion);
  }

  function addQuestion(event){
    var question = $('form#test .question-answer-container:first');
    $('form#test').append(question.clone()).find('.question-answer-container:last-child input').val('');
    event.preventDefault();
  }
})();
