var iFileName = "Vlada's Subclasses";
RequiredSheetVersion("13.2.1");

SourceList["VSoS"]={
	name : "Valda's Spire of Secrets",
	abbreviation : "VSoS",
	abbreviationSpellsheet : "V",
	date : "2022/12/30" // ! Updated as of 12-30-2022 (Version 1.4)
};

AddSubClass("sorcerer", "mirrorkin", {
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
        "These spells do not count against my known sorcerer spells but are treated as sorcerer spells. I can use my action to forget a spell learned this way." ]),
				spellcastingBonus : [{
					name : "Mimic Spells (1st-level)",
					"class" : "any",
					level : [1, 1],
					times : 2
				},
						     {
					name : "Mimic Spells (2nd-level)",
					"class" : "any",
					level : [2, 2],
					times : levels.map(function (n) { return n < 3 ? 0 : 2; })
				},
						     {
					name : "Mimic Spells (3rd level)",
					"class" : "any",
					level : [3, 3],
					times : levels.map(function (n) { return n < 5 ? 0 : 2; })
				},
						     {
					name : "Mimic Spells (4th level)",
					"class" : "any",
					level : [4, 4],
					times : levels.map(function (n) { return n < 7 ? 0 : 2; })
				},
						     {
					name : "Mimic Spells (5th level)",
					"class" : "any",
					level : [5, 5],
					times : levels.map(function (n) { return n < 9 ? 0 : 2; })
				}]
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
        ]),
      	
        recovery: "long rest",
	usages: 1
        },
	"subclassfeature18" : {
	name: "Perfect Duplicate",
	source : ["VSoS", 249],
	minlevel : 18,
	description: desc([
	"I learn the spells Disguise Self and Mirror Image if I do not already know them. I can cast these spells at will without expending a spell slot."
		]),
	spellcastingBonus : {
		name : "Perfect Duplicate",
		spells : ["disguise self", "mirror image"],
		firstcol : "atwill",
		times : 2
	},
	}
  }
})

AddSubClass("paladin", "oath of the sun", {
    regExpSearch : /^(((?=.*(sun(s)?))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
    subname : "Oath of the Sun",
    source : ["VSoS", 233],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Glorious Radiance",
            source : ["VSoS", 233],
            minlevel : 3,
	additional : levels.map(function (n) {
		return (n < 11 ? 5 : n < 17 ? 10 : 15) + " radiant dmg";
	}),
            description : desc([
                "As an action, I shed bright light out to a radius of 30 feet.",
                "Additionally, I gain a number of temporary hit points equal to my paladin level + my Charisma modifier.",
                "If a creature hits me with a melee atk while I have these hit points, I can use my reaction to deal 5 radiant dmg to it",
	    "this increases to 10 damage at 11th level and 15 damage at 17th level."]),

            
            action : ["reaction", ""],
            spellcastingExtra : ["burning hands", "guiding bolt", "darkvision", "scorching ray", "daylight", "spirit guardians", "spirit guardians", "wall of fire", "flame strike", "hallow"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Solar Flare",
            source : ["VSoS", 233],
            minlevel : 3,
            descroption : desc([
                "As an action, each creature I choose within 20 feet of me must make a con saving throw",
		"or be blinded for 1 minute. The blinded creature can make a con saving throw at the end of each of its turns,",
		    "ending the effect on itself on a success."
            ]),
            action : ["action", ""]
        },
        "subclassfeature7" : {
            name : "Sun's Warmth",
            source : ["VSoS", 233],
            minlevel : 7,
            additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
            description : desc([
                "I and all friendly creatures within 10 feet of me have resistance to cold and fire damage and can tolerate temperatures as low as -100 degrees and as high as 200 degrees.", 
		    "Additionally, when I deal fire damage, I can choose to deal radiant damage instead, or vice versa.", 
		    "At 18th level, the range of this aura increases to 30 feet."
            ]),
            dmgres : ["Fire", "Cold"]
        },
        "subclassfeature15" : {
            name : "Incandescent Fury",
            source : ["VSoS", 233],
            minlevel : 15,
            description : desc([
                "Dmg die for improved divine smite becomes d10"
            ]),
            calcChanges : {
		atkAdd : [
			function (fields, v) {
				//if (v.isMeleeWeapon) (v.isMeleeWeapon) fields.Description -= (fields.Description ? '; ' : '') + '+1d8 Radiant damage' + (v.isThrownWeapon ? ' in melee' : ''); 
				if (v.isMeleeWeapon) fields.Description = fields.Description.replace('+1d8 Radiant damage', '+1d10 Radiant damage');
						},
						"With my melee weapon attacks I deal an extra 1d10 radiant damage."
					]
				}
        },
        "subclassfeature20" : {
            name : "Zenith",
            source : ["VSoS", 233],
            minlevel : 20,
            description : desc([
                "As an action, I cast sunbeam without using a spell slot. While the spell is active",
                "at the start of each of my turns during this spell's duration,", 
		"I regain hit points equal to my Charisma modifier if I have no more than half of my hit points left.",
                " Once this feature is used, it cannot be used until I finish a long rest."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["action", ""]
           

    }
    }
})
AddSubClass("fighter", "corsair", {
	regExpSearch : /corsair/i,
	subname : "Corsair",
	source : [["VSoS", 219]],
	fullname : "Corsair",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["VSoS", 219]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Sleight of Hand"
			]),
			skills : "sleight of hand"
		},
		"subclassfeature3.1" : {
			name : "Surprise Attack",
			source : [["VSoS", 219]],
			minlevel : 3,
			description : desc([
				"I've learned to strike foes when they least expect it.", 
				"Once per turn, I can deal an extra damage to one creature I hit with an attack roll. The attack must use a finesse or a ranged weapon.", 
				"I don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and I don't have disadvantage on the attack roll." 
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 7 ? 1 : n < 11 ? 2 : n < 15 ? 3 : 4) + "d6 extra damage"; })
		},
		"subclassfeature3.2" : {
			name : "Commandeer",
			source : [["VSoS", 219]],
			minlevel : 3,
			discription : desc(["At 3rd level, I can replace one of my attacks with an attempt to steal an item being carried by another creature.", 
								"I can't attempt to steal an object that is being work as clothing or armor, nor can you steal an object that is being held in one of the target's hands.", 
								"Make a Dexterity (Sleight of Hand) check, opposed by the target's AC. On a success, I successfully steal that object. I must have a free hand to use this ability." ]),
		},
		"subclassfeature7" : {
			name : "Three Sheets",
			source : [["VSoS", 219]],
			minlevel : 7,
			description : desc([
				"Starting at 7th level, whenever I use my Second Wind ability, I can also take the Dash or Disengage action as part of the same bonus action."
			])
		},
		"subclassfeature10" : {
			name : "Charmed Life",
			source : [["VSoS", 219]],
			minlevel : 10,
			description : desc(["By 10th level, I can saunter into trouble and make it out unscathed tanks to my considerable luck.", 
			"I can gain advantage on one ability check, attack roll, or saving throw that uses Dexterity or Charisma.", 
								"Once I use this ability, I can't use it again until I finish a short or long rest."]),

			usages : 1,
            recovery : "short rest",
            action : ["action", "Charmed Life"]
		},
		"subclassfeature15" : {
			name : "Slippery Positioning",
			source : [["VSoS", 219]],
			minlevel : 15,
			description : desc([
				"Starting at 15th level, whenever a hostile creature that I can see within 60 feet moves, I can move 5 feet without using your reaction or provoking opportunity attacks.", 
				"On each round, I can use this ability a number of times equal to my Dexterity modifier."
			])
		},
		"subclassfeature18" : {
			name : "Untouchable Swordsman",
			source : [["VSoS", 219]],
			minlevel : 18,
			description : desc([
				"By 18th level, I am legendary with a cutlass.", 
				"Whenever I hit a creature with my Surprise Attack, the target has disadvantage on attack rolls against me until the start of my next turn."
			])
		}
	}
});
	
