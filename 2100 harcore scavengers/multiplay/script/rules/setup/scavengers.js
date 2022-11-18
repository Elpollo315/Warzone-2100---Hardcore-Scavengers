function setupScavenger()	// inside hackNetOff()
{
	// Returns true if something is defined
	function isDefined(data)
	{
		return typeof(data) !== "undefined";
	}

	const derrick = "A0ResourceExtractor";
	const factory = "A0BaBaFactory";
	const vtolfac = "A0BaBaVtolFactory";
	const gen = "A0BaBaPowerGenerator";
	const repair = "ScavRepairCentre";
	const vtolpad = "A0BaBaVtolPad";

	const defenses = [
		"A0BaBaBunker",
		"A0BaBaBunker",
		"A0BaBaBunker",
		"A0CannonTower",
		"A0CannonTower",
		"A0CannonTower",
		"A0BaBaFlameTower",
		"A0BaBaFlameTower",
		"A0BaBaRocketPit",
		"A0BaBaRocketPit",
		"A0BaBaRocketPitAT",
		"A0BaBaMortarPit",
		"bbaatow",
	];

	const templates = [
		["B4body-sml-trike01","bTrikeMG"],
		["B4body-sml-trike01","bTrikeMG"],
		["B4body-sml-trike01","bTrikeMG"],
		["B4body-sml-trike01","bTrikeMG"],
		["B3body-sml-buggy01","BuggyMG"],
		["B3body-sml-buggy01","BuggyMG"],
		["B2JeepBody","BJeepMG"],
		["B2JeepBody","BJeepMG"],
		["B2JeepBody","BJeepMG"],
		["B3bodyRKbuggy01","BabaRocket"],
		["B3bodyRKbuggy01","BabaRocket"],
		["B2RKJeepBody","BabaRocket"],
		["B2RKJeepBody","BabaRocket"],
		["B4body-sml-trike01-Ultimate","bTrikeMG"],
		["B4body-sml-trike01-Ultimate","bTrikeMG"],
		["B4body-sml-trike01-Ultimate","bTrikeMG"],
		["B4body-sml-trike01-Ultimate","bTrikeMG"],
		["B3body-sml-buggy01-Ultimate","BuggyMG"],
		["B3body-sml-buggy01-Ultimate","BuggyMG"],
		["B2JeepBody-Ultimate","BJeepMG"],
		["B2JeepBody-Ultimate","BJeepMG"],
		["B2JeepBody-Ultimate","BJeepMG"],
		["Gigahorse-Hardcore","BusCannon"],
		["ClasicCar-Hardcore","BJeepMG"],
		["Bigfoot-Hardcore","BJeepMG"],
		["ClasicCar-Hardcore","BJeepMG"],
		["ClasicCoupe-Hardcore","BJeepMG"],
		["Buzzard-Hardcore","BJeepMG"],
		["B3bodyRKbuggy01-Ultimate","BabaRocket"],
		["B3bodyRKbuggy01-Ultimate","BabaRocket"],
		["B2RKJeepBody-Ultimate","BabaRocket"],
		["B2RKJeepBody-Ultimate","BabaRocket"],
		["BusBody","BusCannon"],
		["BusBody","BusCannon"],
		["BusBody","BabaPitRocketAT"],
		["Buggy-Hardcore","BabaPitRocketAT"],
		["B2tractor","BabaFlame"],
		["B2tractor","BabaFlame"],
		["B2tractor","BabaFlame"],
		["FireBody","BabaFlame"],
		["FireBody","BabaFlame"],
		["FireBody","BusCannon"],
		["FireBody","BabaPitRocket"],
		["FireBody","BabaPitRocketAT"],
		["ScavCamperBody","BabaPitRocket"],
		["ScavCamperBody","BusCannon"],
		["ScavTruckBody","BabaFlame","BabaRocket","BabaPitRocketAT"],
		["ScavTruckBody","BusCannon","BabaPitRocket","BabaRocket"],
		["WarRig-Hardcore","BabaFlame","BabaFlame"],
		["WarRig-Hardcore","BabaFlame","BusCannon"],
		["WarRig-Hardcore","BusCannon","BusCannon"],
		["WarRig-Hardcore","BJeepMG","BJeepMG"],
		["ScavIcevanBody","BabaFlame"],
		["ScavIcevanBody","Mortar1Mk1"],
		["ScavNEXUStrack","ScavNEXUSlink"],
		["ScavNEXUStrack","ScavNEXUSlink"],
		["ScavNEXUStrack","ScavNEXUSlink"],
		["Camper-Hardcore","BabaPitRocket"],
		["Camper-Hardcore","BusCannon"],
		["Truck-Hardcore","BusCannon"],
		["Truck-Hardcore","BusCannon"],
		["Camper-Hardcore","BabaPitRocket"],
		["Camper-Hardcore","BusCannon"],
		["Buggy-Hardcore","BabaPitRocket"],
		["Buggy-Hardcore","BabaPitRocketAT"],
		["Buggy-Hardcore","BabaRocket"],
		["Truck-Hardcore","BusCannon"],
		["Truck-Hardcore","BabaMedCannon"],
		["Truck-Hardcore","BabaHvyCannon"],
		["Truck-Hardcore","Howitzer-Incendiary"],
		["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
		["BusBody","BabaMedCannon"],
		["Tanker-Hardcore","BabaHvyCannon"],
		["Tanker-Hardcore","BabaHvyCannon"],
	];

	const vtolTemplates = [
		["ScavengerChopper", "MG1-VTOL-SCAVS"],
		["HeavyChopper", "Rocket-VTOL-Pod-SCAVS"],
	];

	for (var i = 0, len = templates.length; i < len; ++i)
	{
		makeComponentAvailable(templates[i][0], scavengerPlayer);
		makeComponentAvailable(templates[i][1], scavengerPlayer);

		if (isDefined(templates[i][2]))
		{
			makeComponentAvailable(templates[i][2], scavengerPlayer);
		}

		if (isDefined(templates[i][3]))
		{
			makeComponentAvailable(templates[i][3], scavengerPlayer);
		}
	}

	for (var i = 0, len = vtolTemplates.length; i < len; ++i)
	{

		makeComponentAvailable(vtolTemplates[i][0], scavengerPlayer);
		makeComponentAvailable(vtolTemplates[i][1], scavengerPlayer);

		if (isDefined(vtolTemplates[i][2]))
		{
			makeComponentAvailable(vtolTemplates[i][2], scavengerPlayer);
		}

		if (isDefined(vtolTemplates[i][3]))
		{
			makeComponentAvailable(vtolTemplates[i][3], scavengerPlayer);
		}

	}

	const SCAV_COMPONENTS = [
		"B4body-sml-trike01",
		"B3body-sml-buggy01",
		"B2JeepBody",
		"BusBody",
		"FireBody",
		"B1BaBaPerson01",
		"BaBaProp",
		"BaBaLegs",
		"bTrikeMG",
		"BuggyMG",
		"BJeepMG",
		"BusCannon",
		"BabaFlame",
		"BaBaMG",
		"B2crane1",
		"scavCrane1",
		"B2crane2",
		"scavCrane2",
		"ScavSensor",
		"Helicopter",
		"B2RKJeepBody",
		"B2tractor",
		"B3bodyRKbuggy01",
		"HeavyChopper",
		"ScavCamperBody",
		"ScavengerChopper",
		"ScavIcevanBody",
		"ScavNEXUSbody",
		"ScavNEXUStrack",
		"ScavTruckBody",
		"MG1-VTOL-SCAVS",
		"Rocket-VTOL-Pod-SCAVS",
		"ScavNEXUSlink",
		"BaBaCannon",
		"BabaPitRocket",
		"BabaPitRocketAT",
		"BabaRocket",
		"BTowerMG",
		"Mortar1Mk1",
		"B4body-sml-trike01-Ultimate",
		"B3body-sml-buggy01-Ultimate",
		"B2JeepBody-Ultimate",
		"Gigahorse-Hardcore",
		"ClasicCar-Hardcore",
		"ClasicCoupe-Hardcore",
		"Camper-Hardcore",
		"Buggy-Hardcore",
		"Buzzard-Hardcore",
		"WarRig-Hardcore",
		"Truck-Hardcore",
		"Tanker-Hardcore",
		"B3bodyRKbuggy01-Ultimate",
		"B2RKJeepBody-Ultimate",
		"BabaGrenade",
		"BabaMedCannon",
		"BabaHvyCannon",
		"Howitzer-Incendiary",
		"HeavyChopper-Hardcore",
		"Bike-Hardcore",
		"BaBaPersonShotgun",
		"BaBaPersonHijack",
		"Minitruck-Hardcore",
		"Humvee-Hardcore",
		"Humvee2-Hardcore",
		"Doofwagon-Hardcore",
		"Flame2",
		"Peacemaker-Hardcore",
		"PeacemakerMG",
		"Peacemaker-Hardcore",
		"Peopleeater2-Hardcore",
		"Copcar-Hardcore",
		"Swatvan-Hardcore",
		"MG1Mk1",
		"MG2Mk1",
		"MG3Mk1",
		"RailGun1Mk1",
		"MG4ROTARYMk1",
		"Bigfoot-Hardcore",
		"ScudLauncher-Hardcore",
		"ScudMissile-Incendiary",
		"QuadcannonTruck-Hardcore",
		"QuadCannon-Quad",
		"MiningTruck-Hardcore",
		"Kirov-Hardcore",
		"Bomb3-VTOL-KirovBomb",
		"MG5TWINROTARY",
		"Bluesedan-Hardcore",
		"RedPickup-Hardcore",
		"WhiteWagon-Hardcore",
		"BlueSUV-Hardcore",
		"ScorpionTank-Hardcore",
		"Rocket-LtA-T",
		"TitanCannons",
		"TitanLaser",
		"Titan-Hardcore",
		"hoverscavs",
		"ScavBiplanes",
		"halftrackscav",
		"trackedscav",
		"Scavturbo",
	];

	for (var i = 0, len = SCAV_COMPONENTS.length; i < len; ++i)
	{
		makeComponentAvailable(SCAV_COMPONENTS[i], scavengerPlayer);
	}

	enableStructure(factory, scavengerPlayer);
	enableStructure(vtolfac, scavengerPlayer);
	enableStructure(derrick, scavengerPlayer);
	enableStructure(gen, scavengerPlayer);
	enableStructure(repair, scavengerPlayer);
	enableStructure(vtolpad, scavengerPlayer);

	for (var i = 0, len = defenses.length; i < len; ++i)
	{
		enableStructure(defenses[i], scavengerPlayer);
	}
}
