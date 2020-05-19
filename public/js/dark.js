/*
	Dark Mode - Spark Hackathon
	(c) 2019, Spark
	Licensed under CC BY-NC-SA 4.0
*/


const makeDark = (allLogos) => {
	$("#app").addClass("dark")
	$("body").css("background-color", "black")

	$("#darkToggle").text("Light Mode")

	for(let logo of allLogos) {
		$(logo).attr("src", "/images/bolt_white.svg")
	}

    $(".stab").children("img").attr("src", "/images/stab/logo_white.png")
}

const makeLight = (allLogos) => {
	$("#app").removeClass("dark")
	$("body").css("background-color", "white")

	$("#darkToggle").text("Dark Mode")

	for(let logo of allLogos) {
		$(logo).attr("src", "/images/bolt_black.svg")
	}

    $(".stab").children("img").attr("src", "/images/stab/logo_black.png")
}


$(document).ready(() => {
	let allLogos = $(".logo")
	
	if(localStorage.getItem("isDark") == null) {
		localStorage.setItem("isDark", "false")
	}

	if(localStorage.getItem("isDark") == "true") {
		makeDark(allLogos)
	} else {
		makeLight(allLogos)
	}

	$("#darkToggle").click((e) => {
		e.stopPropagation()

		$("#app").toggleClass("dark")

		if($("#app").hasClass("dark")) {
			localStorage.setItem("isDark", true)
			makeDark(allLogos)
		} else {
			localStorage.setItem("isDark", false)
			makeLight(allLogos)
		}
	})
})
