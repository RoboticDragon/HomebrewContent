var iFileName = "Vlada's Subclasses";
RequiredSheetVersion("13.2.1");

SourceList["VSoS"]={
	name : "Valda's Spire of Secrets",
	abbreviation : "VSoS",
	abbreviationSpellsheet : "V",
	date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
};

AddSubClass("sorcerer", "mirrorkin" {
	regExpSearch : /^(?=.*mirrorkin)(?=.*sorcerer).*$/i,
	subname : "Mirrorkin",
	source : ["VSoS", 249],
    features : {
    "subclassfeature1" : {
			name : "Mirror Magic",
			source : ["VSoS", 249],
			minlevel : 1,
        action : [["reaction", "Learn Spell"], ["action", "Forget Spell"]],
				description : desc([ "When a spell targets me or includes me in its area of effect, I can use my reaction to learn it if it affected me.", 
        "I can only learn a spell if I have spell slots of that level. I can learn 2 spells at 1st level, and 2 additional spells at 2nd, 3rd, 4th, and 5th level, for a total of 10 extra spells known.", 
        "These spells do not count against my known sorcerer spells but are treated as sorcerer spells. I can use my action to forget a spell learned this way." ])
			},
			  additional : levels.map(function(n) {
				return n < 3 ? 2 : (n < 5 ? 4 : n < 7 ? 6 : n < 9 ? 8 : 10) + " mimic spells";
			}),
		},
      "subclassfeature1.1" : {
        name : "Mimic Trait", 
        source : ["VSoS", 249],
			  minlevel : 1, 
        action : ["action", "Mimic Trait"],
        description: desc([ "As an action, I can choose a Humanoid you can see within 60 feet and gain one trait of my choice that they possess from the following list (even if they only possess it temporarily):",
          "One special sense, such as darkvision or tremorsense.",
          "One movement speed, such as a swim or climb speed.",
          "One skill, tool, or instrument proficiency.",
          "One damage resistance.",
          "Their accent, verbal tics, and mannerisms.",
          "I can keep this trait as long as I am within 60 feet of the target, or until the target dies or loses this trait or I use this ability again."
                           ]),
        
      },
    "subclassfeature6" : {
    name : "Reflect Magic",
    source : ["VSoS", 249],
		minlevel : 6,
    action : ["reaction", "Reflect Magic"],
      description: desc([
      "When a creature casts a spell requiring a saving throw that targets me or includes me in its area of effect,",
      "I can spend sorcery points equal to the spell’s level (1 sorcery point for cantrips) to attempt to reflect it.", 
      "If I succeed on my saving throw, the caster must also make a saving throw against their own spell using their own spell save DC.", 
      "On a failed save, they suffer the effects of the spell as if I had cast it and they were the original target."

      ])
        },
    "subclassfeature14" : {
      name : "Copycat",
      source : ["VSoS", 249],
		  minlevel : 14,
      action : ["action", "Copycat"],
      description: desc([
        "As an action, I can perform any action that has been performed within the last minute by a Humanoid (other than myself) that I can see within 60 feet.",
        "Any prerequisites (such as brandishing holy symbols, spending ki points, or consuming items) are waived, unless it is a spell or required a spell slot, in which case I must expend the relevant spell slot and any required expensive material components.", 
        "If the ability forces targets to make a saving throw, I can use my sorcerer spell save DC.", 
        "Once I use this ability, I must finish a long rest before I can use it again."
        ])
      usages: 1,
        recovery: "long rest"
        }
  })
}
