window.onload = function() {
	setTimeout(function(){
		$('.aops-rogb-container').hide()
		$(".alc--give-up").text("SOLUTION")
		$(".alc--give-up").on("click",function(){setTimeout(function(){$(".aops-modal-body").text("Confirm show solution.")},150)})
	},500); 
}	