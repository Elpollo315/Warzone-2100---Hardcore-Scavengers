
const MIN_ATTACKERS = 12;
const MIN_NEXUS = 4;
const MAX_DEFENDERS = 8;
const MAX_GLOBAL_DEFENDERS = 25;
const MAX_SENSORS = 5;
const MAX_UNITS = 300;
const MAX_HELICOPTERS = 30;
const MAX_CRANES = 10;

const CRANE_BODY = "B2crane";
const CRANE_WEAP = "scavCrane";


const derrick = "A0ResourceExtractor";
const factoryBaba = "A0BaBaFactory";
const factoryBaba2 = "A0BaBaFactory2";
const factoryBaba3 = "A0BaBaFactory3";
const factoryBaba4 = "A0BaBaFactory4";
const vtolfac = "A0BaBaVtolFactory";
const gen = "A0BaBaPowerGenerator";
const oilres = "OilResource";
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
	"X-Super-Missile-Scav",
	"X-Super-Rocket-Scav",
	"A0BaBaQuadcannonPitAT",
	"A0BaBaQuadcannonPitAT",
	"A0BaBaQuadcannonPitAT",
	"A0BaBaPowerGenerator2",
	"A0BaBaPowerGenerator2",
	"GuardTower1",
	"GuardTower1",
	"GuardTower2",
	"GuardTower2",
	"TankTrapC",
	"A0BaBaKatyshaPitAT",
	"A0BaBaKatyshaPitAT",
];

const templates = [
	["B4body-sml-trike01-Ultimate","bTrikeMG"],
	["B4body-sml-trike01-Ultimate","bTrikeMG"],
	["B4body-sml-trike01-Ultimate","bTrikeMG"],
	["B4body-sml-trike01-Ultimate","bTrikeMG"],
	["B3body-sml-buggy01-Ultimate","BuggyMG"],
	["B3body-sml-buggy01-Ultimate","BuggyMG"],
	["B2JeepBody-Ultimate","BJeepMG"],
	["B2JeepBody-Ultimate","BJeepMG"],
	["B2JeepBody-Ultimate","BJeepMG"],
	["Gigahorse-Hardcore","BJeepMG"],
	["Gigahorse-Hardcore","BJeepMG"],
	["Gigahorse-Hardcore","BJeepMG"],
	["Bigfoot-Hardcore","BusCannon"],
	["Bigfoot-Hardcore","BusCannon"],
	["Bigfoot-Hardcore","BusCannon"],
	["ClasicCar-Hardcore","BJeepMG"],
	["ClasicCoupe-Hardcore","BJeepMG"],
	["ClasicCar-Hardcore","BabaPitRocket"],
	["ClasicCar-Hardcore","BabaPitRocketAT"],
	["ClasicCar-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","BabaFlame"],
	["ClasicCoupe-Hardcore","BabaPitRocket"],
	["ClasicCoupe-Hardcore","BabaPitRocketAT"],
	["ClasicCoupe-Hardcore","BusCannon"],
	["ClasicCoupe-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","MG1Mk1"],
	["ClasicCoupe-Hardcore","MG2Mk1"],
	["ClasicCoupe-Hardcore","MG3Mk1"],
	["Buzzard-Hardcore","BabaGrenade"],
	["Buzzard-Hardcore","BabaGrenade"],
	["Buzzard-Hardcore","BabaGrenade"],
	["Buzzard-Hardcore","BJeepMG"],
	["Buzzard-Hardcore","BJeepMG"],
	["B3bodyRKbuggy01-Ultimate","BabaRocket"],
	["B3bodyRKbuggy01-Ultimate","BabaRocket"],
	["B2RKJeepBody-Ultimate","BabaRocket"],
	["B2RKJeepBody-Ultimate","BabaRocket"],
	["BusBody","BusCannon"],
	["BusBody","BusCannon"],
	["BusBody","BabaPitRocketAT"],
	["BusBody","MG3Mk1"],
	["BusBody","RailGun1Mk1"],
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
	["ScavCamperBody","MG3Mk1"],
	["ScavCamperBody","RailGun1Mk1"],
	["ScavTruckBody","BabaFlame","BabaRocket","BabaPitRocketAT"],
	["ScavTruckBody","BusCannon","BabaPitRocket","BabaRocket"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["WarRig-Hardcore","BabaFlame","BabaFlame"],
	["WarRig-Hardcore","BabaFlame","BusCannon"],
	["WarRig-Hardcore","BusCannon","BusCannon"],
	["WarRig-Hardcore","BJeepMG","BJeepMG"],
	["WarRig-Hardcore","MG3Mk1","MG3Mk1"],
	["ScavIcevanBody","BabaFlame"],
	["ScavIcevanBody","Mortar1Mk1"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["Camper-Hardcore","BabaPitRocket"],
	["Camper-Hardcore","BusCannon"],
	["Camper-Hardcore","MG3Mk1"],
	["Buggy-Hardcore","BabaPitRocket"],
	["Buggy-Hardcore","BabaPitRocketAT"],
	["Buggy-Hardcore","BabaRocket"],
	["Truck-Hardcore","BusCannon"],
	["Truck-Hardcore","BabaMedCannon"],
	["Truck-Hardcore","BabaHvyCannon"],
	["Truck-Hardcore","RailGun1Mk1"],
	["Truck-Hardcore","MG5TWINROTARY"],
	["Citybus-Hardcore","BusCannon"],
	["Citybus-Hardcore","BabaMedCannon"],
	["Citybus-Hardcore","BabaHvyCannon"],
	["Citybus-Hardcore","RailGun1Mk1"],
	["Citybus-Hardcore","MG5TWINROTARY"],
	["Tanker-Hardcore","ScudMissile-Incendiary"],
	["BusBody","BabaMedCannon"],
	["BusBody","MG4ROTARYMk1"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["Bike-Hardcore","bTrikeMG"],
	["Bike-Hardcore","bTrikeMG"],
	["Bike-Hardcore","bTrikeMG"],
	["Bike-Hardcore","bTrikeMG"],
	["Bike-Hardcore","bTrikeMG"],
	["Bike-Hardcore","bTrikeMG"],
	["Minitruck-Hardcore","BabaFlame"],
	["Minitruck-Hardcore","BabaPitRocket"],
	["Minitruck-Hardcore","BabaPitRocketAT"],
	["Minitruck-Hardcore","BusCannon"],
	["Minitruck-Hardcore","BabaRocket"],
	["Minitruck-Hardcore","RailGun1Mk1"],
	["Minitruck-Hardcore","Mortar1Mk1"],
	["Humvee-Hardcore","BabaPitRocket"],
	["Humvee-Hardcore","BabaPitRocketAT"],
	["Humvee-Hardcore","BusCannon"],
	["Humvee-Hardcore","BabaRocket"],
	["Humvee-Hardcore","MG1Mk1"],
	["Humvee-Hardcore","MG2Mk1"],
	["Humvee-Hardcore","MG3Mk1"],
	["Humvee2-Hardcore","BabaPitRocket"],
	["Humvee2-Hardcore","BabaPitRocketAT"],
	["Humvee2-Hardcore","BabaRocket"],
	["Humvee2-Hardcore","Mortar1Mk1"],
	["Doofwagon-Hardcore","Flame2","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","Flame2","BusCannon","BusCannon"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","BabaFlame","BusCannon","BusCannon"],
	["Peacemaker-Hardcore","PeacemakerMG"],
	["Peacemaker-Hardcore","PeacemakerMG"],
	["Peopleeater-Hardcore","PeacemakerMG"],
	["Peacemaker-Hardcore","PeacemakerMG"],
	["Peopleeater-Hardcore","BusCannon","BabaPitRocket"],
	["Peopleeater-Hardcore","BabaMedCannon","BabaPitRocket"],
	["Peopleeater-Hardcore","BabaMedCannon","BabaPitRocket"],
	["Peopleeater-Hardcore","MG4ROTARYMk1","BabaPitRocket"],
	["Peopleeater2-Hardcore","BusCannon","BabaFlame","BabaFlame"],
	["Peopleeater2-Hardcore","BabaMedCannon","BabaFlame","BabaFlame"],
	["Peopleeater2-Hardcore","BusCannon","BusCannon","BusCannon"],
	["Peopleeater2-Hardcore","BabaMedCannon","BusCannon","BusCannon"],
	["Peopleeater2-Hardcore","BabaFlame","BusCannon","BusCannon"],
	["Peopleeater2-Hardcore","MG4ROTARYMk1","BusCannon","BusCannon"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Swatvan-Hardcore","BabaPitRocket"],
	["Swatvan-Hardcore","BabaPitRocketAT"],
	["Swatvan-Hardcore","BusCannon"],
	["Swatvan-Hardcore","BabaRocket"],
	["Swatvan-Hardcore","RailGun1Mk1"],
	["ScudLauncher-Hardcore","ScudMissile-Incendiary"],
	["ScudLauncher-Hardcore","ScudMissile-Incendiary"],
	["ScudLauncher-Hardcore","ScudMissile-Incendiary"],
	["ScudLauncher-Hardcore","ScudMissile-Incendiary"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaHvyCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaMedCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaHvyCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaMedCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaPitRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaPitRocket"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["Swatvan-Hardcore","BabaMedCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["Titan-Hardcore","TitanCannons","TitanLaser"],
	["Titan-Hardcore","TitanCannons","TitanLaser"],
	["PinkCar-Hardcore","BJeepMG","BJeepMG"],
	["PinkCar-Hardcore","BJeepMG","Mortar1Mk1"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocketAT"],
	["PinkCar-Hardcore","BabaFlame","Mortar1Mk1"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocketAT"],
	["PinkCar-Hardcore","BusCannon","Mortar1Mk1"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocket"],
	["PinkCar-Hardcore","BusCannon","BabaRocket"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocketAT"],
	["BusBody","ScavDemolisher"],
	["ScavIcevanBody","ScavDemolisher"],
	["Camper-Hardcore","ScavDemolisher"],
	["Minitruck-Hardcore","ScavDemolisher"],
	["Humvee-Hardcore","ScavDemolisher"],
	["Humvee2-Hardcore","ScavDemolisher"],
	["B4body-sml-trike01-Ultimate","BabaPitRocket"],
	["B4body-sml-trike01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocket"],
	["B3body-sml-buggy01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","BabaPitRocket"],
	["B2JeepBody-Ultimate","BabaRocket"],
	["B2JeepBody-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","Mortar1Mk1"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaFlame"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["Peopleeater-Hardcore","BusCannon","QuadCannon-Quad"],
	["Peopleeater-Hardcore","BabaMedCannon","QuadCannon-Quad"],
	["Peopleeater-Hardcore","BabaMedCannon","QuadCannon-Quad"],
	["Peopleeater-Hardcore","MG4ROTARYMk1","QuadCannon-Quad"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["B2crane1-Hardcore","BusCannon"],
	["B2crane1-Hardcore","BabaPitRocket"],
	["B2crane1-Hardcore","BabaPitRocketAT"],
	["B2crane1-Hardcore","Scavrepair"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BusCannon"],
	["B2crane2-Hardcore","BabaPitRocket"],
	["B2crane2-Hardcore","QuadCannon-Quad"],
	["B2crane2-Hardcore","Scavrepair"],
	["B2crane1-Hardcore","MG3Mk1"],
	["B2crane1-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BabaRocket"],
	["B2crane3-Hardcore","BabaRocket"],
	["ScavCamperBody2","BabaPitRocket"],
	["ScavCamperBody2","BusCannon"],
	["ScavCamperBody2","MG3Mk1"],
	["ScavCamperBody2","RailGun1Mk1"],
	["Camper2-Hardcore","BabaPitRocket"],
	["Camper2-Hardcore","BusCannon"],
	["Camper2-Hardcore","MG3Mk1"],
	["Camper2-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","Laser2PULSEMk1"],
	["TechTruck-Hardcore","MortarEMP"],
	["TechTruck-Hardcore","SpyTurret01"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","Scavrepair"],
];

const vtolTemplates = [
	["ScavengerChopper", "MG1-VTOL-SCAVS"],
	["HeavyChopper", "Rocket-VTOL-Pod-SCAVS"],
	["ScavengerChopper", "MG1-VTOL-SCAVS"],
	["HeavyChopper", "Rocket-VTOL-Pod-SCAVS"],
	["ScavengerChopper", "MG1-VTOL-SCAVS"],
	["HeavyChopper", "Rocket-VTOL-Pod-SCAVS"],
	["HeavyChopper-Hardcore", "MG1-VTOL-SCAVS", "MG1-VTOL-SCAVS"],
	["Kirov-Hardcore", "Bomb3-VTOL-KirovBomb"],
	["Kirov-Hardcore", "Bomb3-VTOL-KirovBomb"],
	["ScavCamperBody", "MG1-VTOL-SCAVS"],
	["B4body-sml-trike01-Ultimate", "MG1-VTOL-SCAVS"],
	["B2JeepBody-Ultimate", "MG1-VTOL-SCAVS"],
	["B3body-sml-buggy01-Ultimate", "MG1-VTOL-SCAVS"],
	["ClasicCar-Hardcore", "MG1-VTOL-SCAVS"],
];

const bipTemplates = [
	["ScavCamperBody", "MG1-VTOL-SCAVS"],
	["ScavCamperBody", "MG1-VTOL-SCAVS"],
	["B2JeepBody-Ultimate", "MG1-VTOL-SCAVS"],
	["B2JeepBody-Ultimate", "MG1-VTOL-SCAVS"],
	["B3body-sml-buggy01-Ultimate", "MG1-VTOL-SCAVS"],
	["B3body-sml-buggy01-Ultimate", "MG1-VTOL-SCAVS"],
	["ClasicCar-Hardcore", "MG1-VTOL-SCAVS"],
	["ClasicCar-Hardcore", "MG1-VTOL-SCAVS"],
	["Camper-Hardcore", "MG1-VTOL-SCAVS"],
	["Camper-Hardcore", "MG1-VTOL-SCAVS"],
	["WarRig-Hardcore", "MG1-VTOL-SCAVS"],
];

const hovTemplates = [
	["ScavCamperBody","BabaPitRocket"],
	["ScavCamperBody","BusCannon"],
	["ScavCamperBody","MG3Mk1"],
	["ScavCamperBody","RailGun1Mk1"],
	["Camper-Hardcore","BabaPitRocket"],
	["Camper-Hardcore","BusCannon"],
	["Camper-Hardcore","MG3Mk1"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Swatvan-Hardcore","BabaPitRocket"],
	["Swatvan-Hardcore","BabaPitRocketAT"],
	["Swatvan-Hardcore","BusCannon"],
	["Swatvan-Hardcore","BabaRocket"],
	["Swatvan-Hardcore","RailGun1Mk1"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["Swatvan-Hardcore","BabaMedCannon"],
	["ClasicCar-Hardcore","BJeepMG"],
	["ClasicCoupe-Hardcore","BJeepMG"],
	["ClasicCar-Hardcore","BabaPitRocket"],
	["ClasicCar-Hardcore","BabaPitRocketAT"],
	["ClasicCar-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","BabaFlame"],
	["ClasicCoupe-Hardcore","BabaPitRocket"],
	["ClasicCoupe-Hardcore","BabaPitRocketAT"],
	["ClasicCoupe-Hardcore","BusCannon"],
	["ClasicCoupe-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","MG1Mk1"],
	["ClasicCoupe-Hardcore","MG2Mk1"],
	["ClasicCoupe-Hardcore","MG3Mk1"],
	["PinkCar-Hardcore","BJeepMG","BJeepMG"],
	["PinkCar-Hardcore","BJeepMG","Mortar1Mk1"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocketAT"],
	["PinkCar-Hardcore","BabaFlame","Mortar1Mk1"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocketAT"],
	["PinkCar-Hardcore","BusCannon","Mortar1Mk1"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocket"],
	["PinkCar-Hardcore","BusCannon","BabaRocket"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocketAT"],
	["Camper-Hardcore","ScavDemolisher"],
	["Minitruck-Hardcore","ScavDemolisher"],
	["Humvee-Hardcore","ScavDemolisher"],
	["Humvee2-Hardcore","ScavDemolisher"],
	["B4body-sml-trike01-Ultimate","BabaPitRocket"],
	["B4body-sml-trike01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocket"],
	["B3body-sml-buggy01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","BabaPitRocket"],
	["B2JeepBody-Ultimate","BabaRocket"],
	["B2JeepBody-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","Mortar1Mk1"],
	["ScavCamperBody2","BabaPitRocket"],
	["ScavCamperBody2","BusCannon"],
	["ScavCamperBody2","MG3Mk1"],
	["ScavCamperBody2","RailGun1Mk1"],
	["Camper2-Hardcore","BabaPitRocket"],
	["Camper2-Hardcore","BusCannon"],
	["Camper2-Hardcore","MG3Mk1"],
	["Camper2-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","Laser2PULSEMk1"],
	["TechTruck-Hardcore","MortarEMP"],
	["TechTruck-Hardcore","SpyTurret01"],
];

const htrackTemplates = [
	["ScavCamperBody","BabaPitRocket"],
	["ScavCamperBody","BusCannon"],
	["ScavCamperBody","MG3Mk1"],
	["ScavCamperBody","RailGun1Mk1"],
	["Camper-Hardcore","BabaPitRocket"],
	["Camper-Hardcore","BusCannon"],
	["Camper-Hardcore","MG3Mk1"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Swatvan-Hardcore","BabaPitRocket"],
	["Swatvan-Hardcore","BabaPitRocketAT"],
	["Swatvan-Hardcore","BusCannon"],
	["Swatvan-Hardcore","BabaRocket"],
	["Swatvan-Hardcore","RailGun1Mk1"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["Swatvan-Hardcore","BabaMedCannon"],
	["ClasicCar-Hardcore","BJeepMG"],
	["ClasicCoupe-Hardcore","BJeepMG"],
	["ClasicCar-Hardcore","BabaPitRocket"],
	["ClasicCar-Hardcore","BabaPitRocketAT"],
	["ClasicCar-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","BabaFlame"],
	["ClasicCoupe-Hardcore","BabaPitRocket"],
	["ClasicCoupe-Hardcore","BabaPitRocketAT"],
	["ClasicCoupe-Hardcore","BusCannon"],
	["ClasicCoupe-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","MG1Mk1"],
	["ClasicCoupe-Hardcore","MG2Mk1"],
	["ClasicCoupe-Hardcore","MG3Mk1"],
	["BusBody","BusCannon"],
	["BusBody","BusCannon"],
	["BusBody","BabaPitRocketAT"],
	["BusBody","MG3Mk1"],
	["BusBody","RailGun1Mk1"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["Truck-Hardcore","BusCannon"],
	["Truck-Hardcore","BabaMedCannon"],
	["Truck-Hardcore","BabaHvyCannon"],
	["Truck-Hardcore","RailGun1Mk1"],
	["Truck-Hardcore","MG5TWINROTARY"],
	["FireBody","BabaFlame"],
	["FireBody","BabaFlame"],
	["FireBody","BusCannon"],
	["FireBody","BabaPitRocket"],
	["FireBody","BabaPitRocketAT"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaHvyCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaMedCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaHvyCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaMedCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaPitRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaPitRocket"],
	["Minitruck-Hardcore","BabaFlame"],
	["Minitruck-Hardcore","BabaPitRocket"],
	["Minitruck-Hardcore","BabaPitRocketAT"],
	["Minitruck-Hardcore","BusCannon"],
	["Minitruck-Hardcore","BabaRocket"],
	["Minitruck-Hardcore","RailGun1Mk1"],
	["Minitruck-Hardcore","Mortar1Mk1"],
	["Humvee-Hardcore","BabaPitRocket"],
	["Humvee-Hardcore","BabaPitRocketAT"],
	["Humvee-Hardcore","BusCannon"],
	["Humvee-Hardcore","BabaRocket"],
	["Humvee-Hardcore","MG1Mk1"],
	["Humvee-Hardcore","MG2Mk1"],
	["Humvee-Hardcore","MG3Mk1"],
	["Humvee2-Hardcore","BabaPitRocket"],
	["Humvee2-Hardcore","BabaPitRocketAT"],
	["Humvee2-Hardcore","BabaRocket"],
	["Humvee2-Hardcore","Mortar1Mk1"],
	["WarRig-Hardcore","BabaFlame","BabaFlame"],
	["WarRig-Hardcore","BabaFlame","BusCannon"],
	["WarRig-Hardcore","BusCannon","BusCannon"],
	["WarRig-Hardcore","BJeepMG","BJeepMG"],
	["WarRig-Hardcore","MG3Mk1","MG3Mk1"],
	["Doofwagon-Hardcore","Flame2","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","Flame2","BusCannon","BusCannon"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["PinkCar-Hardcore","BJeepMG","BJeepMG"],
	["PinkCar-Hardcore","BJeepMG","Mortar1Mk1"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocketAT"],
	["PinkCar-Hardcore","BabaFlame","Mortar1Mk1"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocketAT"],
	["PinkCar-Hardcore","BusCannon","Mortar1Mk1"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocket"],
	["PinkCar-Hardcore","BusCannon","BabaRocket"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocketAT"],
	["BusBody","ScavDemolisher"],
	["ScavIcevanBody","ScavDemolisher"],
	["Camper-Hardcore","ScavDemolisher"],
	["Minitruck-Hardcore","ScavDemolisher"],
	["Humvee-Hardcore","ScavDemolisher"],
	["Humvee2-Hardcore","ScavDemolisher"],
	["B4body-sml-trike01-Ultimate","BabaPitRocket"],
	["B4body-sml-trike01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocket"],
	["B3body-sml-buggy01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","BabaPitRocket"],
	["B2JeepBody-Ultimate","BabaRocket"],
	["B2JeepBody-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","Mortar1Mk1"],
	["ScavTruckBody","BabaFlame","BabaRocket","BabaPitRocketAT"],
	["ScavTruckBody","BusCannon","BabaPitRocket","BabaRocket"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["BusBody","Scavrepair"],
	["BusBody","Scavrepair"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaFlame"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["B2crane1-Hardcore","BusCannon"],
	["B2crane1-Hardcore","BabaPitRocket"],
	["B2crane1-Hardcore","BabaPitRocketAT"],
	["B2crane1-Hardcore","Scavrepair"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BusCannon"],
	["B2crane2-Hardcore","BabaPitRocket"],
	["B2crane2-Hardcore","QuadCannon-Quad"],
	["B2crane2-Hardcore","Scavrepair"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BabaRocket"],
	["B2crane3-Hardcore","BabaRocket"],
	["Citybus-Hardcore","BusCannon"],
	["Citybus-Hardcore","BabaMedCannon"],
	["Citybus-Hardcore","BabaHvyCannon"],
	["Citybus-Hardcore","RailGun1Mk1"],
	["Citybus-Hardcore","MG5TWINROTARY"],
	["Citybus-Hardcore","Scavrepair"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["ScavCamperBody2","BabaPitRocket"],
	["ScavCamperBody2","BusCannon"],
	["ScavCamperBody2","MG3Mk1"],
	["ScavCamperBody2","RailGun1Mk1"],
	["Camper2-Hardcore","BabaPitRocket"],
	["Camper2-Hardcore","BusCannon"],
	["Camper2-Hardcore","MG3Mk1"],
	["Camper2-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","Laser2PULSEMk1"],
	["TechTruck-Hardcore","MortarEMP"],
	["TechTruck-Hardcore","SpyTurret01"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","Scavrepair"],
];

const trackTemplates = [
	["ScavCamperBody","BabaPitRocket"],
	["ScavCamperBody","BusCannon"],
	["ScavCamperBody","MG3Mk1"],
	["ScavCamperBody","RailGun1Mk1"],
	["Camper-Hardcore","BabaPitRocket"],
	["Camper-Hardcore","BusCannon"],
	["Camper-Hardcore","MG3Mk1"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Swatvan-Hardcore","BabaPitRocket"],
	["Swatvan-Hardcore","BabaPitRocketAT"],
	["Swatvan-Hardcore","BusCannon"],
	["Swatvan-Hardcore","BabaRocket"],
	["Swatvan-Hardcore","RailGun1Mk1"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["Swatvan-Hardcore","BabaMedCannon"],
	["ClasicCar-Hardcore","BJeepMG"],
	["ClasicCoupe-Hardcore","BJeepMG"],
	["ClasicCar-Hardcore","BabaPitRocket"],
	["ClasicCar-Hardcore","BabaPitRocketAT"],
	["ClasicCar-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","BabaFlame"],
	["ClasicCoupe-Hardcore","BabaPitRocket"],
	["ClasicCoupe-Hardcore","BabaPitRocketAT"],
	["ClasicCoupe-Hardcore","BusCannon"],
	["ClasicCoupe-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","MG1Mk1"],
	["ClasicCoupe-Hardcore","MG2Mk1"],
	["ClasicCoupe-Hardcore","MG3Mk1"],
	["BusBody","BusCannon"],
	["BusBody","BusCannon"],
	["BusBody","BabaPitRocketAT"],
	["BusBody","MG3Mk1"],
	["BusBody","RailGun1Mk1"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["QuadcannonTruck-Hardcore","QuadCannon-Quad"],
	["Truck-Hardcore","BusCannon"],
	["Truck-Hardcore","BabaMedCannon"],
	["Truck-Hardcore","BabaHvyCannon"],
	["Truck-Hardcore","RailGun1Mk1"],
	["Truck-Hardcore","MG5TWINROTARY"],
	["FireBody","BabaFlame"],
	["FireBody","BabaFlame"],
	["FireBody","BusCannon"],
	["FireBody","BabaPitRocket"],
	["FireBody","BabaPitRocketAT"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaRocket"],
	["MiningTruck-Hardcore","BabaHvyCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaMedCannon","QuadCannon-Quad"],
	["MiningTruck-Hardcore","BabaHvyCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaMedCannon","Mortar1Mk1"],
	["MiningTruck-Hardcore","BabaHvyCannon","BabaPitRocket"],
	["MiningTruck-Hardcore","BabaMedCannon","BabaPitRocket"],
	["Minitruck-Hardcore","BabaFlame"],
	["Minitruck-Hardcore","BabaPitRocket"],
	["Minitruck-Hardcore","BabaPitRocketAT"],
	["Minitruck-Hardcore","BusCannon"],
	["Minitruck-Hardcore","BabaRocket"],
	["Minitruck-Hardcore","RailGun1Mk1"],
	["Minitruck-Hardcore","Mortar1Mk1"],
	["Humvee-Hardcore","BabaPitRocket"],
	["Humvee-Hardcore","BabaPitRocketAT"],
	["Humvee-Hardcore","BusCannon"],
	["Humvee-Hardcore","BabaRocket"],
	["Humvee-Hardcore","MG1Mk1"],
	["Humvee-Hardcore","MG2Mk1"],
	["Humvee-Hardcore","MG3Mk1"],
	["Humvee2-Hardcore","BabaPitRocket"],
	["Humvee2-Hardcore","BabaPitRocketAT"],
	["Humvee2-Hardcore","BabaRocket"],
	["Humvee2-Hardcore","Mortar1Mk1"],
	["WarRig-Hardcore","BabaFlame","BabaFlame"],
	["WarRig-Hardcore","BabaFlame","BusCannon"],
	["WarRig-Hardcore","BusCannon","BusCannon"],
	["WarRig-Hardcore","BJeepMG","BJeepMG"],
	["WarRig-Hardcore","MG3Mk1","MG3Mk1"],
	["Doofwagon-Hardcore","Flame2","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","Flame2","BusCannon","BusCannon"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["Doofwagon-Hardcore","BabaFlame","BabaFlame","BabaFlame"],
	["PinkCar-Hardcore","BJeepMG","BJeepMG"],
	["PinkCar-Hardcore","BJeepMG","Mortar1Mk1"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocketAT"],
	["PinkCar-Hardcore","BabaFlame","Mortar1Mk1"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocketAT"],
	["PinkCar-Hardcore","BusCannon","Mortar1Mk1"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocket"],
	["PinkCar-Hardcore","BusCannon","BabaRocket"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocketAT"],
	["BusBody","ScavDemolisher"],
	["ScavIcevanBody","ScavDemolisher"],
	["Camper-Hardcore","ScavDemolisher"],
	["Minitruck-Hardcore","ScavDemolisher"],
	["Humvee-Hardcore","ScavDemolisher"],
	["Humvee2-Hardcore","ScavDemolisher"],
	["BusBody","ScavDemolisher"],
	["ScavIcevanBody","ScavDemolisher"],
	["Camper-Hardcore","ScavDemolisher"],
	["Minitruck-Hardcore","ScavDemolisher"],
	["Humvee-Hardcore","ScavDemolisher"],
	["Humvee2-Hardcore","ScavDemolisher"],
	["B4body-sml-trike01-Ultimate","BabaPitRocket"],
	["B4body-sml-trike01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocket"],
	["B3body-sml-buggy01-Ultimate","BabaRocket"],
	["B3body-sml-buggy01-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","BabaPitRocket"],
	["B2JeepBody-Ultimate","BabaRocket"],
	["B2JeepBody-Ultimate","BabaPitRocketAT"],
	["B2JeepBody-Ultimate","Mortar1Mk1"],
	["ScavTruckBody","BabaFlame","BabaRocket","BabaPitRocketAT"],
	["ScavTruckBody","BusCannon","BabaPitRocket","BabaRocket"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["ScavTruckBody","BusCannon","QuadCannon-Quad","QuadCannon-Quad"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","BabaHvyCannon"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["Tanker-Hardcore","MG5TWINROTARY"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack","ScavNEXUSlink"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaMedCannon"],
	["ScavNEXUStrack-Hardcore","BusCannon"],
	["ScavNEXUStrack-Hardcore","BabaFlame"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","BabaPitRocketAT"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","Rocket-LtA-T"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["ScavNEXUStrack-Hardcore","ScavDemolisher"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScavNEXUStrack-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","Scavrepair"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaMedCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BabaFlame","Rocket-LtA-T"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BusCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["ScorpionTank-Hardcore","BabaMedCannon"],
	["B2crane1-Hardcore","BusCannon"],
	["B2crane1-Hardcore","BabaPitRocket"],
	["B2crane1-Hardcore","BabaPitRocketAT"],
	["B2crane1-Hardcore","Scavrepair"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BabaRocket"],
	["B2crane2-Hardcore","BusCannon"],
	["B2crane2-Hardcore","BabaPitRocket"],
	["B2crane2-Hardcore","QuadCannon-Quad"],
	["B2crane2-Hardcore","Scavrepair"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","MG3Mk1"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BusCannon"],
	["B2crane3-Hardcore","BabaRocket"],
	["B2crane3-Hardcore","BabaRocket"],
	["Citybus-Hardcore","BusCannon"],
	["Citybus-Hardcore","BabaMedCannon"],
	["Citybus-Hardcore","BabaHvyCannon"],
	["Citybus-Hardcore","RailGun1Mk1"],
	["Citybus-Hardcore","MG5TWINROTARY"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["QuadcannonTruck-Hardcore","Katysha-Quad"],
	["ScavCamperBody2","BabaPitRocket"],
	["ScavCamperBody2","BusCannon"],
	["ScavCamperBody2","MG3Mk1"],
	["ScavCamperBody2","RailGun1Mk1"],
	["Camper2-Hardcore","BabaPitRocket"],
	["Camper2-Hardcore","BusCannon"],
	["Camper2-Hardcore","MG3Mk1"],
	["Camper2-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","RailGun1Mk1"],
	["TechTruck-Hardcore","Laser2PULSEMk1"],
	["TechTruck-Hardcore","MortarEMP"],
	["TechTruck-Hardcore","SpyTurret01"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","LemanCannon2"],
	["LemanRuss-Hardcore","Scavrepair"],
];

const turboTemplates = [
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BJeepMG"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Copcar-Hardcore","BaBaPersonShotgun"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["Bluesedan-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["RedPickup-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["WhiteWagon-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["BlueSUV-Hardcore","BJeepMG"],
	["Swatvan-Hardcore","BabaMedCannon"],
	["ClasicCar-Hardcore","BJeepMG"],
	["ClasicCoupe-Hardcore","BJeepMG"],
	["ClasicCar-Hardcore","BabaPitRocket"],
	["ClasicCar-Hardcore","BabaPitRocketAT"],
	["ClasicCar-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","BabaFlame"],
	["ClasicCoupe-Hardcore","BabaPitRocket"],
	["ClasicCoupe-Hardcore","BabaPitRocketAT"],
	["ClasicCoupe-Hardcore","BusCannon"],
	["ClasicCoupe-Hardcore","BabaRocket"],
	["ClasicCoupe-Hardcore","MG1Mk1"],
	["ClasicCoupe-Hardcore","MG2Mk1"],
	["ClasicCoupe-Hardcore","MG3Mk1"],
	["PinkCar-Hardcore","BJeepMG","BJeepMG"],
	["PinkCar-Hardcore","BJeepMG","Mortar1Mk1"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaRocket"],
	["PinkCar-Hardcore","BJeepMG","BabaPitRocketAT"],
	["PinkCar-Hardcore","BabaFlame","Mortar1Mk1"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaRocket"],
	["PinkCar-Hardcore","BabaFlame","BabaPitRocketAT"],
	["PinkCar-Hardcore","BusCannon","Mortar1Mk1"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocket"],
	["PinkCar-Hardcore","BusCannon","BabaRocket"],
	["PinkCar-Hardcore","BusCannon","BabaPitRocketAT"],
];
const infTemplates = [
	["B1BaBaPerson01", "BaBaMG"],
	["B1BaBaPerson01", "BaBaMG"],
	["B1BaBaPerson01", "BaBaMG"],
	["B1BaBaPerson01", "BaBaPersonShotgun"],
	["B1BaBaPerson01", "BaBaPersonShotgun"],
	["B1BaBaPerson01", "BaBaPersonRocket"],
	["B1BaBaPerson01", "BaBaPersonRocket"],
	["B1BaBaPerson01", "BaBaPersonHijack"],
];


// scav groups
var globalDefendGroup; // tanks that defend all bases
var needToPickGroup; // a group
var baseInfo = [];
const BASE_FIND_NEAREST = "Base"; //avoid passing a giant baseInfo to findNearest()

// unit limit constant
function atLimits()
{
	return countDroid(DROID_ANY, me) >= MAX_UNITS;
}

// random integer between 0 and max-1 (for convenience)
function random(max)
{
	return (max <= 0) ? 0 : Math.floor(Math.random() * max);
}

// Returns true if something is defined
function isDefined(data)
{
	return typeof(data) !== "undefined";
}

function isCopterPropulsion(droidProp)
{
	var helicopterPropulsions = [
		"Helicopter",
	];

	for (var i = 0, len = helicopterPropulsions.length; i < len; ++i)
	{
		var propulsion = helicopterPropulsions[i];

		if (propulsion === droidProp)
		{
			return true;
		}
	}

return false;
}

function helicoptersAreAllowed()
{
	if (getMultiTechLevel() === 1)
	{
		if ((baseType === CAMP_CLEAN && gameTime > (5.5 * 60000)) ||
			(baseType === CAMP_BASE && gameTime > (2.5 * 60000)) ||
			(baseType === CAMP_WALLS))
		{
			return true;
		}

		return false;
	}

	return true;
}

// Make sure a unit does not try to go off map
function mapLimits(x, y, num1, num2, xOffset, yOffset)
{
	var xPos = x + xOffset + random(num1) - num2;
	var yPos = y + yOffset + random(num1) - num2;

	if (xPos < 2)
	{
		xPos = 2;
	}
	if (yPos < 2)
	{
		yPos = 2;
	}
	if (xPos >= mapWidth - 2)
	{
		xPos = mapWidth - 3;
	}
	if (yPos >= mapHeight - 2)
	{
		yPos = mapHeight - 3;
	}

	return {x: xPos, y: yPos};
}

//Return a closeby enemy object. Will be undefined if none.
function rangeStep(obj, visibility)
{
	const MAX_TILE_LIMIT = 250;
	const STEP = 25;
	var target;

	for (var i = 0; i <= MAX_TILE_LIMIT; i += STEP)
	{
		var temp = enumRange(obj.x, obj.y, i, ENEMIES, visibility);
		if (temp.length > 0)
		{
			target = findNearest(temp, obj.x, obj.y, true);
			break;
		}
	}

	return target;
}

function constructBaseInfo(factory)
{
	var info = {
		x: factory.x,
		y: factory.y,
		id: factory.id,
		defendGroup: newGroup(),
		nexusGroup: newGroup(),
		builderGroup: newGroup(),
		attackGroup: newGroup(),
		helicopterAttackers: newGroup(),
	};

	return info;
}

function findNearest(list, x, y, flag)
{
	if (typeof list === "string" && list === BASE_FIND_NEAREST)
	{
		list = baseInfo;
	}

	var minDist = Infinity, minIdx;
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var d = distBetweenTwoPoints(list[i].x, list[i].y, x, y);
		if (d < minDist)
		{
			minDist = d;
			minIdx = i;
		}
	}

	if (!isDefined(minIdx))
	{
		return undefined;
	}

	return (flag === true) ? list[minIdx] : minIdx;
}

function reviseGroups()
{
	var list = enumGroup(needToPickGroup);
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var droid = list[i];
		if (addDroidToSomeGroup(droid))
		{
			var coords = mapLimits(droid.x, droid.y, 15, 7, 0, 0);
			orderDroidLoc(droid, DORDER_SCOUT, coords.x, coords.y);
		}
	}
}

function addDroidToSomeGroup(droid)
{
	var base = findNearest(BASE_FIND_NEAREST, droid.x, droid.y, true);
	if (!base)
	{
		return false;
	}

	switch (droid.droidType)
	{
		case DROID_CONSTRUCT:
		{
			groupAddDroid(base.builderGroup, droid);
			break;
		}
		case DROID_WEAPON:
		{
			if (droid.name.indexOf("Nexus") > -1)
			{
				if (groupSize(base.nexusGroup) < MIN_NEXUS)
				{
					groupAddDroid(base.nexusGroup, droid);
				}
				break;
			}

			if (isCopterPropulsion(droid.propulsion))
			{
				groupAddDroid(base.helicopterAttackers, droid);
				break;
			}

			if (groupSize(base.defendGroup) < MAX_DEFENDERS)
			{
				groupAddDroid(base.defendGroup, droid);
				break;
			}

			if (groupSize(base.attackGroup) < MIN_ATTACKERS)
			{
				groupAddDroid(base.attackGroup, droid);
				break;
			}

			if (groupSize(globalDefendGroup) < MAX_GLOBAL_DEFENDERS)
			{
				groupAddDroid(globalDefendGroup, droid);
				break;
			}
			else
			{
				groupAddDroid(base.attackGroup, droid);
			}
		}
		break;
		case DROID_SENSOR:
		{
			groupAddDroid(base.attackGroup, droid);
		}
		break;
	}

	return true;
}

function groupOfTank(droid)
{
	for (var i = 0, b = baseInfo.length; i < b; ++i)
	{
		if (droid.group === baseInfo[i].attackGroup)
		{
			return baseInfo[i].attackGroup;
		}

		if (droid.group === baseInfo[i].nexusGroup)
		{
			return baseInfo[i].nexusGroup;
		}
	}
}

function buildStructure(droid, stat)
{
	if (droid.order !== DORDER_BUILD && isStructureAvailable(stat, me))
	{
		const MAX_BLOCK_TILES = 0;
		var loc = pickStructLocation(droid, stat, droid.x, droid.y, MAX_BLOCK_TILES);

		if (loc && orderDroidBuild(droid, DORDER_BUILD, stat, loc.x, loc.y))
		{
			return true;
		}
	}

	return false;
}

function buildTower(droid)
{
	return buildStructure(droid, defenses[random(defenses.length)]);
}

function buildThingsWithDroid(droid)
{
	const MAX_FACTORY_COUNT = 100;

	switch (random(12))
	{
		case 0:
			if ((countStruct(factoryBaba) < MAX_FACTORY_COUNT) && (((5 * countStruct(factoryBaba)) < countStruct(derrick)) || (playerPower(me) > 500)))
			{
				buildStructure(droid, factoryBaba);
			}
		break;
		case 1:
			if ((countStruct(derrick) - (countStruct(gen) * 4)) > 0)
			{
				buildStructure(droid, gen);
			}
		break;
		case 2:
			if (helicoptersAreAllowed() && (4 * countStruct(vtolfac)) < countStruct(factoryBaba))
			{
				buildStructure(droid, vtolfac);
			}
		break;
		case 3:
			var result = findNearest(enumFeature(ALL_PLAYERS, oilres), droid.x, droid.y, true);
			if (result)
			{
				orderDroidBuild(droid, DORDER_BUILD, derrick, result.x, result.y);
			}
		break;
		case 4:
			if ((playerPower(me) > 60) && (countStruct(repair) < 5) && (gameTime > 200000))
			{
				buildStructure(droid, repair);
			}
		break;
		case 5:
			if (countHelicopters() > 2 * countStruct(vtolpad))
			{
				buildStructure(droid, vtolpad);
			}
		break;
		case 6:
			if ((countStruct(factoryBaba2) < MAX_FACTORY_COUNT) && (((5 * countStruct(factoryBaba2)) < countStruct(derrick)) || (playerPower(me) > 500)))
			{
				buildStructure(droid, factoryBaba2);
			}
		break;
		case 7:
			if ((countStruct(factoryBaba3) < MAX_FACTORY_COUNT) && (((5 * countStruct(factoryBaba3)) < countStruct(derrick)) || (playerPower(me) > 500)))
			{
				buildStructure(droid, factoryBaba3);
			}
		break;
		case 8:
			if ((countStruct(factoryBaba4) < MAX_FACTORY_COUNT) && (((5 * countStruct(factoryBaba4)) < countStruct(derrick)) || (playerPower(me) > 500)))
			{
				buildStructure(droid, factoryBaba4);
			}
		break;
		default:
			if (playerPower(me) > 150)
			{
				buildTower(droid);
			}
		break;
	}
}

function buildThings()
{
	var list = enumDroid(me, DROID_CONSTRUCT);

	for (var i = 0, len = list.length; i < len; ++i)
	{
		var droid = list[i];
		if (droid.order !== DORDER_RTR && droid.order !== DORDER_BUILD)
		{
			//Build a defense at an enemy derrick should we happen to be idle near one
			for (var j = 0; j < maxPlayers; ++j)
			{
				var dlist = enumStruct(j, derrick);
				for (var x = 0, len2 = dlist.length; x < len2; ++x)
				{
					var enemy_derrick = dlist[x];
					if (distBetweenTwoPoints(droid.x, droid.y, enemy_derrick.x, enemy_derrick.y) < 3)
					{
						buildTower(droid);
					}
				}
			}
			buildThingsWithDroid(droid);
		}
	}
}

function scavBuildDroid(fac, name, body, prop, weapon)
{
	var success = false;

	if (weapon.length === 3)
	{
		success = buildDroid(fac, name, body, prop, "", "", weapon[0], weapon[1], weapon[2]);
	}
	else if (weapon.length === 2)
	{
		success = buildDroid(fac, name, body, prop, "", "", weapon[0], weapon[1]);
	}
	else
	{
		success = buildDroid(fac, name, body, prop, "", "", weapon[0]);
	}

	return success;
}

function produceCrane(fac)
{
	if (countDroid(DROID_CONSTRUCT, me) >= MAX_CRANES)
	{
		return false;
	}

	var num = random(2) + 1; // Choose crane 1 or 2.

	return buildDroid(fac, "Crane", CRANE_BODY + num, "BaBaProp", "", "", CRANE_WEAP + num);
}

function produceDroid(fac)
{
	const MIN_CRANES = 4;
	var craneCount = countDroid(DROID_CONSTRUCT, me);

	if ((craneCount < MIN_CRANES) || ((craneCount < MAX_CRANES) && !random(10)))
	{
		produceCrane(fac);
		return;
	}

	var weapons = [];
	if (!random(10))
	{
		if (countDroid(DROID_SENSOR, me) < MAX_SENSORS)
		{
			weapons.push("ScavSensor");
			scavBuildDroid(fac, "Sensor", "BusBody", "BaBaProp", weapons);
		}
	}
	if (!random(5))
	{
	var j = random(infTemplates.length);
	var weapons = [];

	for (var x = 1; x < infTemplates[j].length; ++x)
	{
		var weapon = infTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "Grunt", infTemplates[j][0], "BaBaLegs", weapons);
	}
	else
	if (!random(4))
	{
	var j = random(hovTemplates.length);
	var weapons = [];

	for (var x = 1; x < hovTemplates[j].length; ++x)
	{
		var weapon = hovTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "Scavenger Hovercraft", hovTemplates[j][0], "hoverscavs", weapons);
	}
	else
	if (!random(4))
	{
	var j = random(htrackTemplates.length);
	var weapons = [];

	for (var x = 1; x < htrackTemplates[j].length; ++x)
	{
		var weapon = htrackTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "Scavenger Tracked", htrackTemplates[j][0], "halftrackscav", weapons);
	}
	else
	if (!random(4))
	{
	var j = random(turboTemplates.length);
	var weapons = [];

	for (var x = 1; x < turboTemplates[j].length; ++x)
	{
		var weapon = turboTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "Scavenger Tracked", turboTemplates[j][0], "Scavturbo", weapons);
	}
	else
	if (!random(3))
	{
	var j = random(trackTemplates.length);
	var weapons = [];

	for (var x = 1; x < trackTemplates[j].length; ++x)
	{
		var weapon = trackTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "Scavenger Tank", trackTemplates[j][0], "trackedscav", weapons);
	}
	else
	{
		var j = random(templates.length);
		var name = (templates[j][1].indexOf("NEXUS") > -1) ? "Nexus Tank" : "Scavenger unit";

		for (var x = 1; x < templates[j].length; ++x)
		{
			var weapon = templates[j][x];
			weapons.push(weapon);
		}
		scavBuildDroid(fac, name, templates[j][0], "BaBaProp", weapons);
	}
}

function produceHelicopter(fac)
{
	if (!random(5))
	{
	var j = random(bipTemplates.length);
	var weapons = [];

	for (var x = 1; x < bipTemplates[j].length; ++x)
	{
		var weapon = bipTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "ScavengerHelicopter", bipTemplates[j][0], "ScavBiplanes", weapons);
	}
	else
			{
	var j = random(vtolTemplates.length);
	var weapons = [];

	for (var x = 1; x < vtolTemplates[j].length; ++x)
	{
		var weapon = vtolTemplates[j][x];
		weapons.push(weapon);
	}

	scavBuildDroid(fac, "ScavengerHelicopter", vtolTemplates[j][0], "Helicopter", weapons);
		}
}

function produceThings()
{
	if (atLimits())
	{
		return;
	}

	var list = enumStruct(me, factoryBaba).concat(enumStruct(me, vtolfac));
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var fac = list[i];

		if (structureIdle(fac) && fac.status === BUILT)
		{
			if (fac.stattype === FACTORY)
			{
				produceDroid(fac);
			}
			else if (fac.stattype === VTOL_FACTORY)
			{
				produceHelicopter(fac);
			}
		}
	}
}

function produceThings2()
{
	if (atLimits())
	{
		return;
	}

	var list = enumStruct(me, factoryBaba2).concat(enumStruct(me, vtolfac));
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var fac = list[i];

		if (structureIdle(fac) && fac.status === BUILT)
		{
			if (fac.stattype === FACTORY)
			{
				produceDroid(fac);
			}
			else if (fac.stattype === VTOL_FACTORY)
			{
				produceHelicopter(fac);
			}
		}
	}
}

function produceThings3()
{
	if (atLimits())
	{
		return;
	}

	var list = enumStruct(me, factoryBaba3).concat(enumStruct(me, vtolfac));
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var fac = list[i];

		if (structureIdle(fac) && fac.status === BUILT)
		{
			if (fac.stattype === FACTORY)
			{
				produceDroid(fac);
			}
			else if (fac.stattype === VTOL_FACTORY)
			{
				produceHelicopter(fac);
			}
		}
	}
}

function produceThings4()
{
	if (atLimits())
	{
		return;
	}

	var list = enumStruct(me, factoryBaba4).concat(enumStruct(me, vtolfac));
	for (var i = 0, len = list.length; i < len; ++i)
	{
		var fac = list[i];

		if (structureIdle(fac) && fac.status === BUILT)
		{
			if (fac.stattype === FACTORY)
			{
				produceDroid(fac);
			}
			else if (fac.stattype === VTOL_FACTORY)
			{
				produceHelicopter(fac);
			}
		}
	}
}

function attackWithDroid(droid, target, force)
{
	if (isCopterPropulsion(droid.propulsion) || droid.order === DORDER_RTR)
	{
		return;
	}

	if (droid.droidType === DROID_WEAPON)
	{
		if ((droid.order !== DORDER_ATTACK) || force)
		{
			orderDroidObj(droid, DORDER_ATTACK, target);
		}
	}
	else if (droid.droidType === DROID_SENSOR)
	{
		if ((droid.order !== DORDER_OBSERVE) || force)
		{
			orderDroidObj(droid, DORDER_OBSERVE, target);
		}
	}
}

function helicopterArmed(obj)
{
	for (var i = 0, len = obj.weapons.length; i < len; ++i)
	{
		var weapon = obj.weapons[i];
		if (weapon.armed > 0)
		{
			return true;
		}
	}

	return false;
}

function helicopterReady(droid)
{
	if (droid.order === DORDER_REARM)
	{
		return false;
	}
	if (helicopterArmed(droid) && droid.health > 50)
	{
		return true;
	}
	if (droid.order !== DORDER_REARM)
	{
		orderDroid(droid, DORDER_REARM);
	}

	return false;
}

//Helicopters can only attack things that the scavengers have seen
function helicopterAttack()
{
	for (var i = 0, len = baseInfo.length; i < len; ++i)
	{
		var base = baseInfo[i];
		var copters = enumGroup(base.helicopterAttackers);
		var target = rangeStep(base, false);

		for (var j = 0, len2 = copters.length; j < len2; ++j)
		{
			var coords = [];
			var droid = copters[j];

			if (!helicopterReady(droid))
			{
				continue;
			}

			if (target)
			{
				coords = mapLimits(target.x, target.y, 5, 2, 0, 0);
			}
			else
			{
				var xOff = random(2);
				var yOff = random(2);
				xOff = (!xOff) ? -random(10) : random(10);
				yOff = (!yOff) ? -random(10) : random(10);
				coords = mapLimits(droid.x, droid.y, 5, 2, xOff, yOff);
			}

			orderDroidLoc(droid, DORDER_SCOUT, coords.x, coords.y);
		}
	}
}

//Ignores lifts
function countHelicopters()
{
	var count = 0;

	enumDroid(me).forEach(function(droid) {
		if (isCopterPropulsion(droid.propulsion))
		{
			++count;
		}
	});

	return count;
}

function groundAttackStuff()
{
	for (let i = 0, len = baseInfo.length; i < len; ++i)
	{
		var base = baseInfo[i];
		var target = rangeStep(base, false);
		if (target)
		{
			var attackDroids = enumGroup(base.attackGroup);
			var nexusDroids = enumGroup(base.nexusGroup);
			if (groupSize(base.attackGroup) > MIN_ATTACKERS)
			{
				for (let droidIdx = 0, len2 = attackDroids.length; droidIdx < len2; ++droidIdx)
				{
					attackWithDroid(attackDroids[droidIdx], target, false);
				}
			}

			if (groupSize(base.nexusGroup) > MIN_NEXUS)
			{
				for (let droidIdx = 0, len2 = nexusDroids.length; droidIdx < len2; ++droidIdx)
				{
					attackWithDroid(nexusDroids[droidIdx], target, false);
				}
			}
		}
	}
}

function eventAttacked(victim, attacker)
{
	// don't quarrel because of friendly splash damage
	if (attacker === null || victim.player !== me || attacker.player === me)
	{
		return;
	}

	var droids = enumGroup(globalDefendGroup);
	for (var i = 0, len = droids.length; i < len; ++i)
	{
		var droid = droids[i];
		if (droid.order !== DORDER_ATTACK)
		{
			attackWithDroid(droid, attacker, true);
		}
	}

	if (victim.type === STRUCTURE)
	{
		var base = findNearest(BASE_FIND_NEAREST, victim.x, victim.y, true);
		if (!base)
		{
			return;
		}

		var list = enumGroup(base.defendGroup);

		//Let this base build more defense units then
		if (list.length < Math.floor(MAX_DEFENDERS / 2))
		{
			list = enumGroup(base.attackDroids);
		}

		for (var i = 0, len = list.length; i < len; ++i)
		{
			attackWithDroid(list[i], attacker, true);
		}
	}
	else if (victim.type === DROID)
	{
		if (isCopterPropulsion(victim.propulsion))
		{
			return;
		}

		retreat(victim);
	}
}


function eventDroidBuilt(droid, fac)
{
	groupAddDroid(needToPickGroup, droid);
	reviseGroups();
}

function eventStructureBuilt(structure, droid)
{
	if (structure.stattype === FACTORY)
	{
		baseInfo.push(constructBaseInfo(structure));
		if (droid)
		{
			groupAddDroid(baseInfo[baseInfo.length - 1].builderGroup, droid);
		}

		if (!produceCrane(structure))
		{
			produceDroid(structure);
		}
	}
	else if (structure.stattype === VTOL_FACTORY)
	{
		produceHelicopter(structure);
	}
}

// respond correctly on unit transfers
function eventObjectTransfer(object, from)
{
	if (object.player !== me)
	{
		return; //not mine
	}

	if (object.type === DROID)
	{
		eventDroidBuilt(object, null);
	}
	else
	{
		eventStructureBuilt(object, null);
	}
}

function retreat(obj)
{
	const REPAIR_PERCENT = 50;

	if (obj.type === DROID && obj.order !== DORDER_RTR)
	{
		if (!isCopterPropulsion(obj.propulsion) && obj.health < REPAIR_PERCENT)
		{
			orderDroid(obj, DORDER_RTR);
		}
		return;
	}
}

//Check to see if a base factory still exists, and, if not, then free its groups
//and put them into another base.
function cleanupBaseInfo()
{
	var units = [];

	for (var i = 0, len = baseInfo.length; i < len; ++i)
	{
		var base = baseInfo[i];
		var factory = getObject(STRUCTURE, me, base.id);

		if (factory === null)
		{
			var atk = enumGroup(base.attackGroup);
			var nex = enumGroup(base.nexusGroup);
			var def = enumGroup(base.defendGroup);
			var con = enumGroup(base.builderGroup);
			var cop = enumGroup(base.helicopterAttackers);
			units = atk.concat(nex).concat(def).concat(con).concat(cop);
			baseInfo.splice(i, 1);
			break;
		}
	}

	for (var i = 0, len = units.length; i < len; ++i)
	{
		var droid = units[i];
		groupAddDroid(needToPickGroup, droid);
	}

	reviseGroups();
}

function eventStartLevel()
{
	var factories = enumStruct(me, factoryBaba);
	for (var i = 0, len = factories.length; i < len; ++i)
	{
		var fac = factories[i];
		baseInfo.push(constructBaseInfo(fac));
	}

	var droids = enumDroid(me);
	for (var i = 0, len = droids.length; i < len; ++i)
	{
		addDroidToSomeGroup(droids[i]);
	}

	globalDefendGroup = newGroup();
	needToPickGroup = newGroup();

	produceThings();
	setTimer("produceThings", 100);
	setTimer("produceThings2", 75);
	setTimer("produceThings3", 60);
	setTimer("produceThings4", 50);
	setTimer("buildThings", 900);
	setTimer("groundAttackStuff", 1200);
	setTimer("helicopterAttack", 2900);
	setTimer("cleanupBaseInfo", 8000);
}
