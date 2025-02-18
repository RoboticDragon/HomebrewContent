var iFileName = "Sorcerer - Rifthopper (Kobold Press).js";
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
		walk : { spd : 40, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	weaponProfs : [false, false, ["spears", "shortbows"]],
	skills : [["stealth"]],
	age : " reach maturity by the age of 20. They can live well beyond 100 years, but it is unknown just how old they can become.",
	height : " stand over 6 feet tall")",
	weight : " weigh around 300 lb",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Alseid (+2 Dexterity, +1 Wisdom)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus."
};
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
        "subclassfeature1.2" : {
            name : "Reverberating Quintessence",
            source : [["WSoBP", 130]],
            minlevel : 1,
            description : desc([
                "I am immune to the deafened condition and have tremorsense out to 10 feet.",
                "I have advantage on saving throws against effects that deal thunder damage."
            ]),
            savetxt : { 
                text : ["Adv. on saves vs. thunder damage"], 
                immune : ["deafened"] 
            },
            vision : [["Tremorsense", 10]],
            extraname : "Reverberating Quintessence Upgrades",
            choices : ["level 3 upgrade", "level 6 upgrade"],
            "level 3 upgrade" : {
                description : "I gain resistance to thunder damage.",
                dmgres : ["Thunder"]
            },
            "level 6 upgrade" : {
                description : "My tremorsense increases to 20 feet.",
                vision : [["Tremorsense", 20]]
            }
        },
        "subclassfeature1.3" : {
            name : "Signature Sound",
            source : [["WSoBP", 130]],
            minlevel : 1,
            description : "I can cast Alarm (audible only) once per long rest without a spell slot.",
            spellcastingBonus : {
                name : "Signature Sound",
                spells : ["alarm"],
                selection : ["alarm"],
                times : 1
            },
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature6" : {
            name : "Sonic Savant",
            source : [["WSoBP", 130]],
            minlevel : 6,
            description : desc([
                "When I use Metamagic on a spell that deals thunder damage or manipulates sound:",
                "- If it normally costs 1 sorcery point, it now costs 0.",
                "- Other Metamagic costs half (rounded up)."
            ])
        },
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
        "subclassfeature14" : {
            name : "Sound and Fury",
            source : [["WSoBP", 130]],
            minlevel : 14,
            description : desc([
                "I gain immunity to thunder damage.",
                "When I cast a spell that deals damage, I can change its damage type to thunder.",
                "If the spell imposes a condition on a damaged creature, I can impose deafened instead."
            ]),
            dmgimm : ["Thunder"]
        },
        "subclassfeature14.1" : {
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
        "subclassfeature18.1" : {
            name : "Resounding Spellcasting",
            source : [["WSoBP", 130]],
            minlevel : 18,
            description : desc([
                "My thunder cantrips affect creatures even if they succeed on a saving throw.",
                "I can teleport using my full movement and a spell slot, with range based on slot level."
            ])
        }
    }
});
