var iFileName = "CasStor.js";

MagicItemsList["staff of twilight veil"] = {
	name : "Staff of the Twilight Veil",
	source : [["Cas:Stor", 1]], // Source of the item
	type : "magic item",
	rarity : "legendary",
	requireAttunement : true,
	attunementRequirements : "Only a vampire can attune to this staff. If another creature attempts to wield it, the staff becomes inert and unusable, losing all its magical properties.",
	description : "The Staff of the Twilight Veil is a dark, elegant staff with intricate carvings of shadowy tendrils spiraling along its length. Its obsidian-like surface absorbs light, and faint whispers can be heard emanating from it. This regalia holds the power to devour unlife and manipulate the boundary between life and death.",
	properties : {
		magicWeapon : {
			bonus : 3,
			type : "attack and damage"
		},
		spellcastingFocus : true,
		weight : 6
	},
	abilities : [
		{
			name : "Devour Unlife",
			description : "As an action, you can target an undead creature within 60 feet that has 50 hit points or fewer. The creature must make a DC 18 Constitution saving throw. On a failed save, it is instantly destroyed, and its life force is absorbed by the staff, healing you for hit points equal to half the creature's maximum hit points. Once you use this ability, you can't use it again until you finish a long rest."
		},
		{
			name : "Dark Shroud",
			description : "As an action, you can summon a shroud of darkness that envelops you for 1 minute. While shrouded, you have advantage on Stealth checks, and you gain resistance to necrotic damage. Once you use this ability, you can’t use it again until the next dusk."
		},
		{
			name : "Life from Death",
			description : "You learn the spell Spare the Dying. Additionally, you can use the staff to cast the following spells:\n- Raise Dead once per day\n- Gentle Repose at will (requires concentration)\n- Clone once per new moon\n- True Resurrection once per solstice\nYou do not need to provide material components when casting these spells with the staff.",
			costs : {
				"Clone" : "Requires the life force of a creature with at least one-quarter of your maximum hit points, sacrificed within the last 24 hours.",
				"True Resurrection" : "Requires the life force of a creature with at least half of your maximum hit points, sacrificed within the last 24 hours. Additionally, you must give up 75% of your maximum hit points, which cannot be regained until the next dawn."
			}
		},
		{
			name : "Life-Draining Strike",
			description : "When you hit a creature with a melee attack using the staff, you can expend a spell slot to deal an additional 2d8 necrotic damage plus 1d8 per level of the spell slot. You regain hit points equal to half the necrotic damage dealt. You can use this ability even if you are out of spell slots, but the staff will deal 2d10 damage to you if you do so. This damage ignores resistances and immunities."
		}
	],
	notes : "The Staff of the Twilight Veil is a rare artifact with immense power. It reflects the duality of death and rebirth, and the sacrifices required to wield such power. It should be used cautiously, as overuse of its darker abilities may draw unwanted attention or exact a greater toll on the user."
};
var iFileName = "CassStor.js";

// Add the staff to the AttackList
AttackList["staff of twilight veil"] = {
	name : "Staff of the Twilight Veil",
	source : [["Cas:Stor", 1]], // Source of the item
	type : "melee", // Type of attack
	damage : "1d8 + 3", // Base damage
	damageType : "bludgeoning", // Damage type
	ability : "str", // Ability modifier to use (Strength for melee)
	notes : "This staff is a magic weapon that provides a +3 bonus to attack and damage rolls. Additionally, when you hit a creature with this staff, you can expend a spell slot to deal extra necrotic damage." // Additional notes
};
