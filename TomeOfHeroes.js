var iFileName = "Tome of Heroes (Kobold Press).js";
RequiredSheetVersion("13.1.12");

SourceList["WSoBP"] = {
    name : "Tome of Heroes",
    abbreviation : "WSoBP",
    group : "Third Party",
    url : "https://koboldpress.com/kpstore/product/tome-of-heroes-for-5th-edition/",
    date : "2022/08/09"
};
RaceList["alseid"] = {
	regExpSearch : /^((?=.*(hylar|daewar))|((?=.*\b(alseid?)\b)\b)).*$/i,
	name : "Alseid",
	sortname : "Alseid",
	source : [["WSoBP", 12]],
	plural : "Alseids",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Elvish", "Trade Tongue"],
	vision : [["Darkvision", 60]],
	weaponProfs : [false, false, ["spears", "shortbows"]],
	skills : [["stealth"]],
	age : " reach maturity by the age of 20. They can live well beyond 100 years, but it is unknown just how old they can become.",
	height : " stand over 6 feet tall",
	weight : " weigh around 300 lb",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Alseid (+2 Dexterity, +1 Wisdom)\n\nAlseid Weapon Training: I have proficiency in spears and shortbows\nLight Hooves: I have proficiency in stealth\nQuadruped: I have to squeeze when moving through trapdoors, manholes, and similar structures even when a Medium humanoid wouldn’t have to squeeze. In addition, ladders, stairs, and similar structures are difficult terrain for me.\nWoodfriend: When in a forest, I leave no tracks and can automatically discern true north.\n"
};
AddSubClass( // this is the function you will be calling to add the variant

	"ranger", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"grove warden", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /grove|grove warden|warden/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Grove Warden", //required; the name of the subclass

		source : ["WSoBP"], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Grove Warden (Ranger)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		//abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		//abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		//spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight
			"subclassfeatures3" : {
				name : "Grove Warden Magic",
				source : ["WSoBP", 109],
				minlevel : 3,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["entangle", "branding smite", "speak with plants", "hallucinatory terrain", "animate objects"].concat(new Array(95)).concat("AddToKnown")
			},
			"subclassfeature3.1" : {
				name : "Whispers of the Forest",
				source : ["WSoBP", 109],
				minlevel : 3,				
				description : "\n   " + "Starting at level 3, when I use your Primeval Awareness feature while within a forest, I add humanoids to the list of creature types I can sense." + "\n   " + "When sensing humanoids, I know the general direction of the creatures, and I know if a humanoid is solitary, in a small group of up to 5 humanoids, or a pack of more than 5 humanoids.",
			},
			"subclassfeature3.2" : {
				name : "Margreve’s Will",
				source : ["WSoBP", 109],
				minlevel : 3,
				description : "\n   " + "Starting at level 3, I can magically draw on the living essence of the land to hamper my foes." + "\n   " + "As a bonus action, choose one creature I can see within 60 feet of me. My next weapon attack against that creature has advantage." + "\n   " + "If that attack hits, the creature’s speed is reduced by 10 feet until the start of my next turn." + "\n   " + "When I reach 11th level in this class, if that attack hits, the creature’s speed is instead halved until the start of my next turn.",
				action : ["bonus action", "Margreve’s Will"]
			},
			"subclassfeature7" : {
				name : "Intruder’s Bane",
				source : ["WSoBP", 109],
				minlevel : 7,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", "Intruder's Bane"],
				description : "\n   " + "Starting at level 7, as a bonus action, choose a point I can see on the ground within 60 feet." + "\n   " + "I cause the area within 15 feet of that point to undulate and warp. Each creature in the area must make a Dexterity saving throw against my spell save DC.\n" + "On a failure, a creature is pushed up to 15 feet in a direction of my choice and knocked prone. Once you use this feature, I can’t use it again until you finish a short or long rest.",
		
			},
			"subclassfeature11" : {
				name : "Wrath of the Forest",
				source : ["WSoBP", 109],
				minlevel : 11,			
				description : "\n   " + "Starting at level 11, when I take the Attack action, I can use a bonus action to make a rock, branch, root, or other small object attack a creature within 30 feet of me." + "\n   " + "I am proficient with the attack, it counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage, and I add your Dexterity modifier to the attack and damage rolls.\n" + "The damage is of a type appropriate to the surroundings and the damage die is a d8",
				action : ["bonus action", "Wrath of the Forest"]
			},
			"subclassfeature15" : {
				name : "Living Bulwark",
				source : ["WSoBP", 109],
				minlevel : 15,
				description : "\n   " + "When a creature I can see targets me with an attack, I can use my reaction to roll a d8 and add it to my AC against the attack.",
				action: ["reaction", "Living Bulwark"]
			},
		}
	}
);
AddSubClass("sorcerer", "rifthopper", {
    regExpSearch : /^(?=.*(mage|magus|sorcerer|witch))(?=.*(rifthopper)).*$/i,
    subname : "Rifthopper",
    source : [["WSoBP", 130]],
    features : {
        "subclassfeature1" : {
            name : "Teleport Object",
            source : [["WSoBP", 130]],
            minlevel : 1,
            description : desc([
                "I can use an action to teleport a small object that isn’t being worn or carried within 30 feet to my hand.",
                "Alternatively, I can teleport an object from my hand to a space I can see within 30 feet.",
                "The object can weigh no more than a certain amount, based on my sorcerer level."]),
            
            additional : levels.map(function(n) {
                return (n < 6 ? 5 : n < 15 ? 14 : 20) + " pounds";
            }),

            action : ["action", "Teleport Object"] 
        },
        "subclassfeature1.1" : {
            name : "Shift Space",
            source : [["WSoBP", 130]],
            minlevel : 1,
            description : desc([
                "Once per turn, I can spend movement up to half my speed to teleport that distance.",
                "If my speed is 0, such as when grappled or restrained, I can't use this feature."
            ])
        },
        // "subclassfeature1.2" : {
        //     name : "Reverberating Quintessence",
        //     source : [["WSoBP", 130]],
        //     minlevel : 1,
        //     description : desc([
        //         "I am immune to the deafened condition and have tremorsense out to 10 feet.",
        //         "I have advantage on saving throws against effects that deal thunder damage."
        //     ]),
        //     savetxt : { 
        //         text : ["Adv. on saves vs. thunder damage"], 
        //         immune : ["deafened"] 
        //     },
        //     vision : [["Tremorsense", 10]],
        //     extraname : "Reverberating Quintessence Upgrades",
        //     choices : ["level 3 upgrade", "level 6 upgrade"],
        //     "level 3 upgrade" : {
        //         description : "I gain resistance to thunder damage.",
        //         dmgres : ["Thunder"]
        //     },
        //     "level 6 upgrade" : {
        //         description : "My tremorsense increases to 20 feet.",
        //         vision : [["Tremorsense", 20]]
        //     }
        // },
        // "subclassfeature1.3" : {
        //     name : "Signature Sound",
        //     source : [["WSoBP", 130]],
        //     minlevel : 1,
        //     description : "I can cast Alarm (audible only) once per long rest without a spell slot.",
        //     spellcastingBonus : {
        //         name : "Signature Sound",
        //         spells : ["alarm"],
        //         selection : ["alarm"],
        //         times : 1
        //     },
        //     usages : 1,
        //     recovery : "long rest"
        // },
        // "subclassfeature6" : {
        //     name : "Sonic Savant",
        //     source : [["WSoBP", 130]],
        //     minlevel : 6,
        //     description : desc([
        //         "When I use Metamagic on a spell that deals thunder damage or manipulates sound:",
        //         "- If it normally costs 1 sorcery point, it now costs 0.",
        //         "- Other Metamagic costs half (rounded up)."
        //     ])
        // },
        "subclassfeature6.1" : {
            name : "Tactical Swap",
            source : [["WSoBP", 130]],
            minlevel : 6,
            description : desc([
                "As a reaction, when a creature I can see within 60 feet starts its turn or is attacked:",
                "- If it is willing, I can swap positions with it.",
                "- If swapping due to an attack, the new creature in that space becomes the target."
            ]),
            action : [["reaction", ""]]
        },
        // "subclassfeature14" : {
        //     name : "Sound and Fury",
        //     source : [["WSoBP", 130]],
        //     minlevel : 14,
        //     description : desc([
        //         "I gain immunity to thunder damage.",
        //         "When I cast a spell that deals damage, I can change its damage type to thunder.",
        //         "If the spell imposes a condition on a damaged creature, I can impose deafened instead."
        //     ]),
        //     dmgimm : ["Thunder"]
        // },
        "subclassfeature14" : {
            name : "Familiar Locations",
            source : [["WSoBP", 130]],
            minlevel : 14,
            description : desc([
                "By spending 1 hour familiarizing myself with a location, I can teleport there later.",
                "I can be familiar with a number of locations equal to my Charisma modifier.",
                "I can forget one at any time to learn a new one."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature18" : {
            name : "Dimensional Ambler",
            source : [["WSoBP", 130]],
            minlevel : 18,
            description : desc([
                "As an action, I can transport myself and willing creatures to the Astral or Ethereal Plane.",
                "While there, we can move normally but must stay within 60 feet of me.",
                "I can return us to the Material Plane as a bonus action."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        // "subclassfeature18.1" : {
        //     name : "Resounding Spellcasting",
        //     source : [["WSoBP", 130]],
        //     minlevel : 18,
        //     description : desc([
        //         "My thunder cantrips affect creatures even if they succeed on a saving throw.",
        //         "I can teleport using my full movement and a spell slot, with range based on slot level."
        //     ])
        // }
    }
});
