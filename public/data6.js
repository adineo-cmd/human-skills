/* humanity/skills — dataset part 6 of 6: expansion — social, trade, navigation,
   home, science, computing, faith, play. */

const SKILLS_PART6 = {

social: [
  ["Boundary setting", "Lines drawn and calmly held", 0, 6.4, 2],
  ["Saying no", "Refusal offered without a speech", 0, 7.0, 2],
  ["Asking for help", "Pride set down when it matters", 0, 7.2, 2],
  ["Giving feedback", "Criticism delivered so it can be used", 3, 6.0, 3],
  ["Receiving criticism", "Notes heard without bleeding", 3, 6.2, 3],
  ["Praise and encouragement", "Effort named out loud", 0, 7.4, 1],
  ["Emotion labeling", "Feelings named at high resolution", 4, 5.4, 2],
  ["Difficult conversations", "The talk everyone postpones, done well", 3, 5.4, 4],
  ["Nonviolent communication", "Needs and observations before judgments", 4, 5.4, 3],
  ["Emotional first aid", "Acute feelings tended like wounds", 4, 5.0, 3],
  ["Mutual aid organizing", "Neighbors supplying each other directly", 1, 5.0, 3],
  ["Care coordination", "Doctors, insurers and family aligned for one person", 4, 5.0, 3]
],

trade: [
  ["Constitution writing", "A government designed on paper first", 1, 3.4, 5],
  ["Electoral system design", "Votes translated into power, fairly", 2, 3.6, 5],
  ["Central banking", "Money's supply steered with a light hand", 3, 3.6, 5],
  ["Census taking", "Every household counted for the record", 1, 4.8, 4],
  ["Standardization", "Screw threads, paper sizes and the shared world", 3, 5.4, 4],
  ["Metrology", "Weights and measures kept honest", 1, 4.6, 5],
  ["Quality control", "Defects caught before the customer does", 3, 5.8, 3],
  ["Port operations", "Ten thousand containers moved per day", 1, 5.0, 4],
  ["Railway signaling", "Trains kept apart by logic and light", 3, 4.0, 5],
  ["Peacekeeping", "Force deployed to prevent force", 3, 4.4, 4],
  ["Post-conflict reconstruction", "Institutions rebuilt after the guns stop", 3, 4.0, 5],
  ["Humanitarian logistics", "Food and medicine moved into chaos", 3, 4.4, 5],
  ["Disaster response", "The first seventy-two hours managed", 3, 4.8, 4],
  ["Patent drafting", "Inventions claimed in exacting prose", 3, 4.2, 5],
  ["School administration", "A building of teachers kept funded and fair", 3, 5.2, 3],
  ["Curriculum design", "What is learned, in what order", 3, 5.0, 4],
  ["Mass literacy campaigns", "Reading brought to whole nations", 3, 4.4, 4],
  ["Notarization", "Signatures witnessed and sealed", 1, 5.0, 2],
  ["Compliance", "Rules followed and provably so", 4, 5.2, 3]
],

nav: [
  ["Parallel parking", "The maneuver every new driver dreads", 3, 7.2, 2],
  ["Manual transmission driving", "Clutch, gears and the perfect hill start", 3, 8.3, 2],
  ["Defensive driving", "Assuming everyone else will err", 4, 6.8, 3],
  ["Winter driving", "Snow, ice and the slow everything", 3, 5.8, 3],
  ["Trailer reversing", "Steering left so the trailer goes right", 3, 5.2, 3],
  ["Hypermiling", "Every extra mile wrung from the tank", 3, 4.4, 2],
  ["EV charging planning", "Routes plotted around plugs and range", 5, 5.0, 1],
  ["Tacking and jibing", "Turning through the wind without losing it", 1, 4.6, 3],
  ["Reefing sails", "Canvas shortened before the squall", 1, 4.6, 3],
  ["Man overboard recovery", "The drill drilled until it is calm", 3, 4.4, 4],
  ["Hitchhiking", "Rides flagged with thumb and trust", 3, 4.6, 1],
  ["Rideshare driving", "Five-star averages kept at rush hour", 5, 6.0, 2],
  ["Bike commuting", "Traffic threaded daily in work clothes", 4, 6.0, 2],
  ["Dog sledding", "A team of dogs driven by voice", 1, 3.4, 4],
  ["Drone racing", "Goggles on, quadcopters flown at 130 mph", 5, 3.4, 3]
],

home: [
  ["Folding a fitted sheet", "The domestic skill that humbles everyone", 3, 6.6, 3],
  ["Tying shoelaces", "Bunny ears, loops and childhood graduation", 2, 7.8, 1],
  ["Gift wrapping", "Corners creased and ribbon curled", 1, 6.6, 2],
  ["Stain removal", "Blot, never rub, and know your solvent", 2, 6.8, 1],
  ["Packing a suitcase", "A month in carry-on, rolled not folded", 3, 7.2, 2],
  ["Unclogging drains", "Plungers, snakes and the trap removed", 3, 6.4, 2],
  ["Resetting a tripped breaker", "The panel read and the dead circuit found", 4, 6.6, 1],
  ["Childproofing", "A home re-engineered at toddler height", 3, 5.8, 2],
  ["Houseplant propagation", "Cuttings rooted in water and patience", 1, 5.8, 2],
  ["Opening stubborn jars", "Grip, leverage and the lid-tapping trick", 3, 7.4, 1],
  ["Smart home setup", "Lights, locks and speakers made to cooperate", 5, 5.4, 2]
],

science: [
  ["Calendrics", "Leap years and the 365.2425-day fix", 1, 4.6, 5],
  ["Alchemy", "Proto-chemistry: distillation, calcination and gold fever", 1, 4.2, 4],
  ["Astrolabe use", "The sky measured with a brass instrument", 1, 3.6, 4],
  ["Satellite engineering", "Machines built to fall forever", 4, 4.0, 5],
  ["Amateur telescope making", "Mirrors ground to a wavelength of glass", 3, 3.4, 4],
  ["Radio astronomy", "The universe listened to at long wavelength", 4, 3.0, 5],
  ["Particle accelerator operation", "Atoms collided at nearly light speed", 4, 2.6, 5],
  ["Nuclear engineering", "Fission harnessed and contained", 3, 4.0, 5],
  ["Fusion research", "A star lit inside a magnetic bottle", 5, 2.4, 5],
  ["Synthetic biology", "Life reprogrammed base by base", 5, 3.2, 5],
  ["Bioinformatics", "Genomes crunched into understanding", 4, 4.2, 4],
  ["Genealogy research", "Ancestors traced through the paper trail", 1, 5.8, 3],
  ["Oral history collection", "Elders recorded before the voices go", 0, 4.4, 3],
  ["Citizen science", "Amateurs classifying galaxies and birds", 4, 5.4, 2],
  ["Zoo keeping", "Wild animals kept healthy in captivity", 3, 4.4, 4],
  ["Wildlife rehabilitation", "Injured animals raised for release", 4, 4.4, 4],
  ["Seed banking", "Crops' wild relatives saved for the future", 2, 4.2, 4],
  ["Volcano monitoring", "Mountains instrumented before they wake", 3, 3.6, 5]
],

compute: [
  ["Regular expressions", "Pattern matching compressed to an incantation", 4, 5.4, 4],
  ["Code review", "Others' code read with generosity and rigor", 4, 5.8, 3],
  ["Refactoring", "Behavior kept, structure improved", 4, 5.6, 3],
  ["Software testing", "Failures provoked on purpose, before users do", 4, 5.8, 3],
  ["Profiling and optimization", "The actual bottleneck found and fixed", 4, 5.0, 4],
  ["Reverse engineering", "Systems understood without their blueprints", 3, 4.4, 5],
  ["Data scraping", "The web's pages turned into tables", 4, 5.0, 3],
  ["API design", "Interfaces other humans can use", 4, 5.6, 4],
  ["Distributed systems", "Computers kept in agreement at scale", 4, 4.6, 5],
  ["Shader programming", "Light and surface computed per pixel", 4, 4.0, 5],
  ["Model fine-tuning", "Pretrained models taught your specialty", 5, 4.4, 4],
  ["No-code building", "Software assembled without syntax", 5, 5.4, 2],
  ["Streaming setup", "One person broadcasting to thousands", 5, 5.4, 2],
  ["Video editing", "Creator footage cut for retention", 4, 6.2, 2],
  ["Pixel art", "Images resolved one deliberate pixel at a time", 4, 4.4, 3],
  ["VR development", "Worlds built to be believed", 5, 4.0, 4]
],

spirit: [
  ["Loving-kindness meditation", "Goodwill systematically extended", 1, 5.8, 3],
  ["Sweat lodge ceremony", "Purification in heat, dark and prayer", 0, 3.8, 3],
  ["Coming-of-age ceremonies", "Childhood ended in the eyes of the community", 0, 6.6, 2],
  ["Naming ceremonies", "A person's name given and witnessed", 0, 6.4, 1],
  ["Seasonal festival keeping", "The year's turning marked together", 0, 6.8, 2]
],

play: [
  ["Skipping stones", "The spin found for four skips and more", 0, 6.6, 2],
  ["Cat's cradle", "String figures passed between four hands", 0, 5.8, 2],
  ["Cup stacking", "Pyramids built and felled in seconds", 4, 4.2, 2],
  ["Domino toppling", "Ten thousand pieces set for one run", 3, 4.2, 3],
  ["Card castle building", "A tower balanced on friction alone", 1, 3.8, 2],
  ["Sandcastle building", "Turrets, moats and the incoming tide", 0, 6.4, 1],
  ["Thumb wrestling", "Four fingers, one table, no mercy", 0, 6.0, 1],
  ["Rock-paper-scissors", "Randomness, psychology and best of three", 1, 6.6, 1],
  ["Hide and seek", "The universal game of seeking and being found", 0, 7.4, 1],
  ["Hopscotch", "Chalk courts and one lucky stone", 1, 6.4, 1],
  ["Leapfrog", "Backs vaulted in playground procession", 0, 6.2, 1],
  ["Clapping games", "Pat-a-cake at ever-increasing speed", 0, 6.4, 1],
  ["Twenty questions", "Anything in the world found by yes and no", 3, 6.4, 1],
  ["Charades", "Books and films acted in silence", 3, 6.6, 2],
  ["Miniature painting", "Tiny figures painted for tiny wars", 3, 4.6, 3],
  ["Collectible card games", "Decks built from a thousand options", 4, 5.0, 3],
  ["Geocaching", "Hidden containers hunted by satellite", 5, 4.6, 2],
  ["LARPing", "Characters lived out in costume and forest", 3, 3.8, 3]
]

};
