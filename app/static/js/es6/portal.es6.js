/*jshint unused:false*/

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
  	$('loginuser').click(showUserDash)
  }

  function showUserDash(){
  	$('#links').append(`<li>
  												<a href="/user">User Account</a>
  											</li>);
  };

})();

