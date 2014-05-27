/*jshint unused:false*/

function ajax(url, verb, data={},success=r=>console.log(r),dataType='html'){
  'use strict';
  $.ajax({url:url, type:verb, success:success, data:data, dataType:dataType});
}

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    getContents();
  }

  function getContents(){
    // ajax('/lessons/:lessonId/content','GET', null, html=>{
    //   $('#content').empty().append(html);
    //
    // });
  }
})();
