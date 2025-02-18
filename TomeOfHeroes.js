
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

      
			]),
			toNotesPage : [{
				name : "Wild Magic Surge Table",
				source : [["P", 104]],
				popupName : "Wild Mage's Wild Magic Surge Table, part 1",
				additional : "results 01-50",
				note : [
					"My spellcasting can unleash surges of untamed magic. Immediately after I cast a sorcerer spell of 1st level or higher, the DM can have me roll a d20. If I roll a 1, a Wild Magic Surge happens. Roll on the table below to create a random magical effect. A surge can happen only once per turn.",
					"If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
					"d100  Effect",
					"01-02 Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
					"03-04 For the next minute, you can see any invisible creature if you have line of sight to it.",
					"05-06 A modron chosen and controlled by the DM appears in an unoccupied space within 5 ft of you, then disappears 1 minute later.",
					"07-08 You cast fireball as a 3rd-level spell centered on yourself.",
					"09-10 You cast magic missile as a 5th-level spell.",
					"11-12 Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
					"13-14 You cast confusion centered on yourself.",
					"15-16 For the next minute, you regain 5 hit points at the start of each of your turns.",
					"17-18 You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
					"19-20 You cast grease centered on yourself.",
					"21-22 Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
					"23-24 Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
					"25-26 An eye appears on your forehead for the next minute.",
					"27-28 For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
					"29-30 You teleport up to 60 ft to an unoccupied space of your choice that you can see.",
					"31-32 You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
					"33-34 Maximize the damage of the next damaging spell you cast within the next minute.",
					"35-36 Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
					"37-38 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 ft of you and are frightened of you. They vanish after 1 minute.",
					"39-40 You regain 2d10 hit points.",
					"41-42 You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
					"43-44 For the next minute, you can teleport up to 20 ft as a bonus action on each of your turns.",
					"45-46 You cast levitate on yourself.",
					"47-48 A unicorn controlled by the DM appears in a space within 5 ft of you, then disappears 1 minute later.",
					"49-50 You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
				]
			}, {
				name : "Wild Magic Surge Table",
				source : [["P", 104]],
				popupName : "Wild Mage's Wild Magic Surge Table, part 2",
				additional : "results 51-100",
				note : [
					"d100  Effect",
					"51-52 A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
					"53-54 You are immune to being intoxicated by alcohol for the next 5d6 days.",
					"55-56 Your hair falls out but grows back within 24 hours.",
					"57-58 For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
					"59-60 You regain your lowest-level expended spell slot.",
					"61-62 For the next minute, you must shout when you speak.",
					"63-64 You cast fog cloud centered on yourself.",
					"65-66 Up to three creatures you choose within 30 ft of you take 4d10 lightning damage.",
					"67-68 You are frightened by the nearest creature until the end of your next turn.",
					"69-70 Each creature within 30 ft of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
					"71-72 You gain resistance to all damage for the next minute.",
					"73-74 A random creature within 60 ft of you becomes poisoned for 1d4 hours.",
					"75-76 You glow with bright light in a 30-ft radius for the next minute. Any creature that ends its turn within 5 ft of you is blinded until the end of its next turn.",
					"79-80 Illusory butterflies and flower petals flutter in the air within 10 ft of you for the next minute.",
					"77-78 You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
					"81-82 You can take one additional action immediately.",
					"83-84 Each creature within 30 ft of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
					"85-86 You cast mirror image.",
					"87-88 You cast fly on a random creature within 60 ft of you.",
					"89-90 You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
					"91-92 If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
					"93-94 Your size increases by one size category for the next minute.",
					"95-96 You and all creatures within 30 ft of you gain vulnerability to piercing damage for the next minute.",
					"97-98 You are surrounded by faint, ethereal music for the next minute.",
					"99-100 You regain all expended sorcery points."
				]
			}]
		},
		"subclassfeature1.1" : {
			name : "Tides of Chaos",
			source : [["P", 103]],
			minlevel : 1,
			description : "\n   " + "I can gain advantage on either one attack roll, ability check, or saving throw" + "\n   " + "After I cast a 1st-level or higher sorcerer spell, the DM can impose a Wild Magic Surge" + "\n   " + "After I roll on the Wild Magic Surge table, I regain my use of Tides of Chaos",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Bend Luck",
			source : [["P", 103]],
			minlevel : 6,
			description : "\n   " + "As a reaction, I can add/subtract 1d4 from another's attack roll, ability check, or save",
			action : [["reaction", " (2 sorcery points)"]],
			additional : "2 sorcery points"
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : [["P", 103]],
			minlevel : 14,
			description : "\n   " + "Whenever I roll on the Wild Magic Surge table, I can roll twice and use either result"
		},
		"subclassfeature18" : {
			name : "Spell Bombardment",
			source : [["P", 103]],
			minlevel : 18,
			description : "\n   " + "Once per turn, when I roll spell damage, I can take one damage die that rolled max" + "\n   " + "I can then roll this die again and add it to the spell's damage"
		}
	}
});
