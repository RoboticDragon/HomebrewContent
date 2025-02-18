
var iFileName = "Sorcerer - Rifthopper (Kobold Press).js";
RequiredSheetVersion("13.1.12");
SourceList["WSoBP"] = {
	name : "Tome of Heroes",
	abbreviation : "WSoBP",
	group : "Third Party",
	url : "https://koboldpress.com/kpstore/product/tome-of-heroes-for-5th-edition/",
	date : "2022/08/09"
};

AddSubClass("sorcerer", "rifthopper", {
	regExpSearch : /^(?=.*(mage|magus|sorcerer|witch))(?=.*(wild|chaos|chaotic|limbo)).*$/i,
	subname : "Rifthopper",
	fullname : "Rifthopper",
	source : [["WSoBP", 130]],
	features : {
		"subclassfeature1" : {
			name : "Teleport Object",
			source : [["WSoBP", 130]],
			minlevel : 1,
			description : desc([
				"I can use an action to teleport a small object that isn’t being worn or carried and that you can see within 30 feet of you into your hand.",
				"Alternatively, I can teleport an object from my hand to a space I can see within 30 feet of me.", 
				"The object can weigh no more than 5 pounds and must be able to fit into a 1-foot cube."

      
			]),
				additional : levels.map( function(n) {
				return (n < 6 ? 5: n <15 ? 14: n <18 ? 20) + " pounds";
			})
			},
		"subclassfeature1.1" : {
			name : "Shift Space",
			source : [["WSoBP", 130]],
			minlevel : 1,
			description : "\n   " + "At 1st level, once on each of your turns, you can spend an amount of movement equal to up to half your speed and" + "\n   " + "teleport to an unoccupied space you can see within a number of feet equal to the movement you spent. If your speed is" + "\n   " + "0, such as from being grappled or restrained, you can’t use this feature.",
		},
		"subclassfeature1.2" : {
ClassFeatureOptions["reverberating quintessence"] = {
    name: "Reverberating Quintessence",
    source: [["WSoBP", 130]],
    minlevel: 1,
    description: "\n   " + "I am immune to the deafened condition and have tremorsense out to 10 feet. I have advantage on saving throws against effects that deal thunder damage.",
    savetxt: { 
        text: ["Adv. on saves vs. thunder damage"], 
        immune: ["deafened"] 
    },
    vision: [["Tremorsense", 10]],
    extraname: "Reverberating Quintessence Upgrades",
    additionalExtra: ["", "Thunder Resistance", "Tremorsense 20 ft"],
    choices: ["3rd Level Upgrade", "6th Level Upgrade"],
    "3rd Level Upgrade": {
        description: "\n   " + "I gain resistance to thunder damage.",
        dmgres: ["Thunder"]
    },
    "6th Level Upgrade": {
        description: "\n   " + "My tremors
		},
		"subclassfeature1.3" : {
			    name: "Signature Sound",
    			source : [["WSoBP", 130]],
    minlevel: 1,
    description: "\n   " + "I can cast Alarm (audible option only) once per long rest without using a spell slot or material components.",
    additional: ["Alarm (audible) 1/long rest"],
    spellcastingBonus: {
        name: "Signature Sound",
        spells: ["alarm"],
        selection: ["alarm"],
        times: 1
    },
    usages: 1,
    recovery: "long rest",
    extraname: "Signature Sound (3rd level)",
    additionalExtra: ["", "", "3 SP: Cast Shatter or Silence"],
    choices: ["3rd Level Upgrade"],
    "3rd Level Upgrade": {
        description: "\n   " + "I can expend 3 sorcery points to cast Shatter or Silence without using a spell slot or material components.",
        additional: "3 SP: Cast Shatter or Silence",
        spellcastingBonus: [{
            name: "Signature Sound (Shatter)",
            spells: ["shatter"],
            selection: ["shatter"],
            spellcastingAbility: "charisma"
        }, {
            name: "Signature Sound (Silence)",
            spells: ["silence"],
            selection: ["silence"],
            spellcastingAbility: "charisma"
        }]
    }
};
		},
		"subclassfeature6" : {
    name: "Sonic Savant",
    source: [["WSoBP", 130]],
    minlevel: 6,
    description: "\n   " + "When I use Metamagic on a spell that deals thunder damage, deafens, silences, or magnifies sound, I reduce the sorcery point cost.",
    additional: ["Metamagic: 1 SP → 0 SP; Others → Half (round up)"],
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest",
    toNotesPage: [{
        name: "Sonic Savant (Metamagic Cost Reduction)",
        note: [
            "Metamagic on thunder damage, deafening, silencing, or sound-altering spells:",
            "• Normally 1 SP → Costs 0 SP",
            "• Other Metamagic → Costs half (rounded up)",
            "• Limited to Prof. Bonus per long rest"
        ]
    }]

		},
		"subclassfeature6.1"{
			name: "Tactical Swap",
    source: [["WSoBP", 130]],
    minlevel: 6,
    description: "\n   " + "As a reaction, when a creature I can see within 60 feet starts its turn or when I or another creature I can see is attacked, I can swap positions with the creature, if it is willing. If swapping due to an attack, the new creature in that space becomes the target instead.",
    action: [["reaction", ""]],
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest"
		},
		"subclassfeature14" : {
			name: "Sound and Fury",
    source: [["WSoBP", 130]],
    minlevel: 14,
    description: "\n   " + "My resistance to thunder damage becomes immunity. When I cast a spell that deals damage, I can change its damage type to thunder. If the spell imposes a condition on a damaged creature, I can choose to impose the deafened condition instead.",
    dmgres: ["Thunder"],
    dmgimm: ["Thunder"],
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest"
		},
		"subclassfeature14.1" : {
		name: "Familiar Locations",
    source: [["WSoBP", 130]],
    minlevel: 14,
    description: "\n   " + "By spending 1 hour familiarizing myself with a location, I can teleport myself and a number of willing creatures equal to my Charisma modifier (min 1) to that location. The location must be stationary and on the same plane. I can be familiar with a number of locations equal to my Charisma modifier and can forget one at any time to learn a new one.",
    action: [["action", ""]],
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest"
		},
		"subclassfeature18" : {
			  name: "Dimensional Ambler",
    source: [["WSoBP", 130]],
    minlevel: 18,
    description: "\n   " + "As an action, I can transport myself and a number of willing creatures equal to my Charisma modifier (min 1) within 30 feet to the Astral or Ethereal Plane. While there, we can move normally but must stay within 60 feet of me. I can return us to the Material Plane as a bonus action.",
    action: [["action", "Plane Shift"], ["bonus action", "Return"]],
    usages: 1,
    recovery: "long rest"
		},
		"subclassfeature18.1" : {
			  name: "Resounding Spellcasting",
    source: [["WSoBP", 130]],
    minlevel: 18,
    description: "\n   " + "My thunder-damage cantrips affect even those that succeed on their saving throws. When I reach 3rd level in this class, I can teleport using my movement and a spell slot of 2nd level or higher. The teleport range depends on the spell slot used. If I land in an occupied space, I take 4d6 force damage and am pushed to the nearest unoccupied space.",
    additional: ["Teleportation range depends on spell slot used"],
    usages: "Speed to 0 + Spell Slot",
    recovery: "long rest",
    toNotesPage: [{
        name: "Rifthopper Teleportation Distance",
        note: [
            "2nd-level spell slot: 30 feet",
            "3rd-level spell slot: 60 feet",
            "4th-level spell slot: 120 feet",
            "5th-level spell slot: 300 feet",
            "6th-level spell slot: 1 mile",
            "7th-level+ spell slot: Any known location on the same plane",
            "If arriving in an occupied space: Take 4d6 force damage and move to nearest unoccupied space"
        ]
    }]

		}
	}
});
