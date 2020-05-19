/*
	Countdown Timer - Spark Hackathon
	(c) 2019, Spark
	Licensed under CC BY-NC-SA 4.0
*/


const hackathonStart = new Date("Feb 1, 2020 09:00:00").getTime()
const morningWorkshops = new Date("Feb 1, 2020 10:00:00").getTime()
const afternoonWorkshops = new Date("Feb 1, 2020 13:00:00").getTime()
const hackingBegins = new Date("Feb 1, 2020 18:30:00").getTime()
const presentationPreparation = new Date("Feb 2, 2020 16:00:00").getTime()
const demoParty = new Date("Feb 2, 2020 17:00:00").getTime()


const countdown = (parent, event) => {
	const now = new Date().getTime()
	const diff = event - now

	const days = Math.floor(diff / (1000 * 60 * 60 * 24))
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((diff % (1000 * 60)) / 1000)

	const info = `${days}d ${hours}hr ${minutes}min ${seconds}s`
	$(`.${parent}`).text(info)

	if(diff <= 0) {
		clearInterval(countdown)
		$(`${parent}`).text("NOW")
	}
}

const startTimer = (parent, event) => {
	countdown(parent, event)
	setInterval(() => countdown(parent, event), 1000)
}


startTimer("hackathonStart", hackathonStart)
startTimer("morningWorkshops", morningWorkshops)
startTimer("afternoonWorkshops", afternoonWorkshops)
startTimer("hackingBegins", hackingBegins)
startTimer("presentationPreparation", presentationPreparation)
startTimer("demoParty", demoParty)