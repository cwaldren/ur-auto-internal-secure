$(document).ready(function() {

	var user = '';
	var pass = '';

	$("input[name='username']").val(user);
	$("input[name='password']").val(pass);

	setTimeout(function(){
		$("input[name='Submit']").click();
	},500);
	
})