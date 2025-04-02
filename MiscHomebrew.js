var iFileName = "MiscHomebrew.js";
SourceList["BoP"] = {
name : "MiscHomebrew",
  abbreviation : "MiscHB",
}
//This is basically the Satyr's Flute from The Gates of the Shadowmage by Eldritch Press but modified.
MagicItemsList["Twin Tailed Flute"] = {
  name : "Twin Tailed Flute",
  source : "MiscHB",
  type : "wondrous item",
  rarity : "legendary",
  attunement : true,
  weight : 1,
	prereqeval : function(v) {
		return v.isSpellcaster;
	},
	description : "I can use an action to cast a spell from the flute or to play a special song from the flute in order to cause one of a set of listed effects. Once used this way, the flute can't be used to play a special song until the next dusk.",
  descriptionLong : ["This simple but fantastical woodwind instrument was crafted by a celestial fae, who used it to enhance his magic after losing his voice.",
		    "Its alluring melody can affect the minds of creatures around it. While holding it, I gain a +2 bonus to spell save DCs and spell attack rolls",
		    "As an action I can play one of the following tunes. Each creature of my choice within 60 feet of me that can hear the flute must succeed on a wisdom saving throw against my spell DC or succumb to the tune’s effects for 1 minute.",
		    "I can spend a spell slot to extend the duration for a minute per spell level.",
		    "A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once a tune has been played, the flute can’t be used this way again until the next dusk.",
		    "Alluring Sonata: An affected target is charmed by me until the effect ends or until I or my companions do anything harmful to it. Charmed targets regard me as a friendly acquaintance.",
		    "Stupefying Aria: An affected target is stunned until the effect ends or someone uses an action to shake the target out of its stupor.",
		    "Horrifying Dirge: An affected target is frightened until the effect ends.",
		    "Infuriating Cadenza: An affected target uses its turn to move toward a randomly determined creature and attack it. If there are no creatures within its sight, the target does nothing. Each time a target takes damage, it makes a new Wisdom saving throw against the effect. If the saving throw succeeds, the effect ends.",
		    "Soothing Lullaby: An affected target falls unconscious until the effect ends, the target takes damage, or someone uses an action to shake or slap it awake. This song can effect elves, although they have advantage on their saves"],
	spellCalc : [
		function (type) {
			if (type == "dc" || type == "attack") return 2;
		},
	]
}
