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
  descriptionLong : "This simple but fantastical woodwind instrument was crafted by a celestial fae, who used it to enhance his magic after losing his voice.",
}
