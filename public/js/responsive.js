/*
	Responsive - Spark Hackathon
	(c) 2019, Spark
	Licensed under CC BY-NC-SA 4.0
*/


$(document).ready(() => {
	$(".navLink").click(() => {
		$("#links").removeClass("visible")
		$(".header").css("margin-top", "128px")
	})

	$("#menuTrigger").click((e) => {
		e.stopPropagation()

		$("#links").toggleClass("visible")

		if($("#links").hasClass("visible")) {
			$(".header").css("margin-top", "400px")
		} else {
			$(".header").css("margin-top", "128px")
		}
	})
})