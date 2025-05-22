var iFileName = "MiscHomebrew.js";
SourceList["MiscHB"] = {
name : "MiscHomebrew",
  abbreviation : "MiscHB",
};
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
  	action: ["action", " Play song"],
	toNotesPage : [{
	name : "Songs",  
	note : ["This simple but fantastical woodwind instrument was crafted by a celestial fae, who used it to enhance his magic after losing his voice.",
		    "Its alluring melody can affect the minds of creatures around it. While holding it, I gain a +2 bonus to spell save DCs and spell attack rolls",
		    "As an action I can play one of the following tunes. Each creature of my choice within 60 feet of me that can hear the flute must succeed on a wisdom saving throw against my spell DC or succumb to the tune’s effects for 1 minute.",
		    "I can spend a spell slot to extend the duration for a minute per spell level.",
		    "A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once a tune has been played, the flute can’t be used this way again until the next dusk.",
		    "Alluring Sonata: An affected target is charmed by me until the effect ends or until I or my companions do anything harmful to it. Charmed targets regard me as a friendly acquaintance.",
		    "Stupefying Aria: An affected target is stunned until the effect ends or someone uses an action to shake the target out of its stupor.",
		    "Horrifying Dirge: An affected target is frightened until the effect ends.",
		    "Infuriating Cadenza: An affected target uses its turn to move toward a randomly determined creature and attack it. If there are no creatures within its sight, the target does nothing. Each time a target takes damage, it makes a new Wisdom saving throw against the effect. If the saving throw succeeds, the effect ends.",
		    "Soothing Lullaby: An affected target falls unconscious until the effect ends, the target takes damage, or someone uses an action to shake or slap it awake. This song can effect elves, although they have advantage on their saves"
		    ]
	  
  }],
	extraLimitedFeatures : [{
			name : "Alluring Sonata",
			usages : 1,
			recovery : "dusk"
		}, {
			name : "Stupefying Aria",
			usages : 1,
			recovery : "dusk"
		}, {
			name : "Horrifying Dirge",
			usages : 1,
			recovery : "dusk"
		},
			       {
			name : "Infuriating Cadenza",
			usages : 1,
			recovery : "dusk"
		},
			       {
			name : "Soothing Lullaby",
			usages : 1,
			recovery : "dusk"
		}],
			calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare") return 2;
				},
				"While using the Twined Tail Flute my spell DC and spell attack modifier increase by 2."
			]
		}
};
FeatsList["book of rituals"] = {
					name : "Book of Rituals",
					description : desc([
						"I can add any two 1st-level spells that have the ritual tag to my Book of Shadows",
						"If I come across spells with the ritual tag, I can transcribe them into my book, as well",
						"I can cast any of these spells in my Book of Shadows as rituals, but not as normal spells",
						"I can cast my known spells as rituals if they have the ritual tag"
					]),
					source : "MiscHB",
					eval : function() {
						CurrentSpells['ritual book'] = {
							name : 'Ritual Book',
							ability : 'Cha',
							list : {class : 'any', ritual : true},
							known : {spells : 'book'},
							refType : "feat"
						};

						SetStringifieds('spells'); CurrentUpdates.types.push('spells');
					},
					removeeval : function() {
						delete CurrentSpells['ritual book'];
						SetStringifieds('spells'); CurrentUpdates.types.push('spells');
					},
					
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spName == "ritual book") {
									spellObj.firstCol = "(R)";
									if (!(/.*(\d+ ?h\b|special|see b).*/i).test(spellObj.time)) {
										var numMinutes = Number(spellObj.time.replace(/(\d+) ?min.*/, "$1"));
										if (isNaN(numMinutes)) numMinutes = 0;
										spellObj.time = (numMinutes + 10) + " min";
									}
									return true;
								};
							},
							"By the Book of Ancient Secrets invocation, I can cast ritual spells from my Book of Shadows. Ritual spell always have a casting time of 10 minutes or more."
						],
					}
				};
