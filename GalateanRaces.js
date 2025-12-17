var iFileName = "GalateanRaces.js";
SourceList["GalaR"] = {
name : "GalateanRaces",
  abbreviation : "GRaces"
};

RaceList["spiderfolk"] = {
	regExpSearch : /^(?=.*spider)(?=.*folk).*$/i,
	name : "Spiderfolk",
	source : [["GalaR", 8]],
	plural : "Spiderfolk",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	scoresGeneric : true,
	trait : "Spiderfolk" + (typePF ? "\n " : "\t") +
	"\u2022 Chitinous Shell: When I'm not wearing armor, my AC is equal to 13 + my dex modifier. I can wear a shield and still gain this benefit." +
	"\n \u2022 Spider Climb: Climbing speed equal to walking speed. At 3rd level, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free." + 
		"\n \u2022 Extra Arms: I have three additional sets of arms or arm like appendages. These additional arms can lift and manipulate objects weighing up to my Strength ability score but cannot properly wield shields or weapons without the light property." + 
		"\n \u2022 Eight Eyes: I have darkvision and am resistant to being blinded.",
	features : {
		"spider climb" : { // So it doesn't interfere with inherited speeds by useFromPreviousRace
			name : "Spider Climb",
			minlevel : 1,
			speed : { climb : { spd : "walk", enc : "walk" } }
		}
	},
	vision : [["Darkvision", 60]],
	savetxt : {
		adv_vs : ["blinded"]
		},
	armorOptions : [{
		regExpSearch : /^(?=.*chitinous)(?=.*shell).*$/i,
		name : "Chitinous Shell",
		source : [["GalaR", 8]],
		ac : 13,
		selectNow : true
	}],
};
