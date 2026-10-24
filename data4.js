/* humanity/skills — dataset part 4 of 6: expansion pass (micro + macro).
   Same entry format: [name, description, era, practitioners(log10), difficulty 1-5] */

const SKILLS_PART4 = {

survival: [
  ["Canyoneering", "Descending slot canyons by rope, jump and swim", 4, 3.6, 4],
  ["Cave diving", "Rebreathers and guidelines in flooded darkness", 4, 2.8, 5],
  ["Tidepool foraging", "Limpets, crabs and seaweed gathered at low tide", 0, 5.0, 2],
  ["Seaweed harvesting", "Edible algae cut by season and species", 1, 5.2, 2],
  ["Ice fishing", "Reading depth below a hole in the lake", 1, 4.6, 2],
  ["Cold-water survival", "One minute to breathe, ten minutes to move", 4, 4.4, 3],
  ["Rip-current escape", "Swimming sideways out of the river in the sea", 4, 5.6, 1],
  ["Hammock camping", "Sleeping suspended between two good trees", 4, 4.8, 2],
  ["Tarp pitching", "Ridgelines, angles and taut pitch in rain", 1, 5.4, 2],
  ["Wildlife safety", "Bears, snakes and hippos respected at distance", 1, 5.8, 2],
  ["Lightning safety", "Counting the seconds and getting low", 3, 6.4, 1]
],

food: [
  ["Eating with chopsticks", "A billion-strong daily mastery of two sticks", 1, 9.2, 2],
  ["Pancake flipping", "The wrist action that decides breakfast", 3, 6.6, 1],
  ["Whisking and folding", "Air beaten in, then treated gently", 3, 6.8, 2],
  ["Piping bag work", "Icing borders and filled pastries by squeeze", 3, 5.6, 2],
  ["Shucking oysters", "Hinge found, knife twisted, shell unharmed", 1, 4.2, 3],
  ["Filleting fish", "Bones left behind in one clean pass", 0, 6.2, 3],
  ["Carving a roast", "Slices cut across the grain at the table", 1, 5.6, 3],
  ["Seasoning a wok", "Patina built in layers of hot oil", 1, 4.8, 2],
  ["Bread scoring", "Ear-cut slashes that steer the oven spring", 1, 4.8, 3],
  ["Kneading dough", "Gluten developed by push, fold and turn", 0, 7.2, 2],
  ["Egg cookery", "Poached, folded, steamed and soft-boiled", 0, 7.4, 2],
  ["Stock making", "Bones, aromatics and unhurried simmering", 1, 6.6, 2],
  ["Dressings and vinaigrettes", "Emulsions shaken in a jar", 0, 6.8, 1],
  ["Caramel making", "Sugar watched to the edge of burnt", 4, 5.2, 2],
  ["Cast iron care", "Seasoned, dried and never soaked", 3, 6.2, 1],
  ["Baker's percentages", "Everything weighed against the flour", 3, 5.0, 3],
  ["Plating", "Food arranged so the eye eats first", 3, 5.4, 3],
  ["Menu design", "A kitchen's strategy printed on one card", 3, 5.0, 4],
  ["Kitchen brigade management", "A dozen stations run in sync", 3, 4.4, 4],
  ["Catering logistics", "Two hundred covers at one appointed hour", 3, 4.6, 3],
  ["Wine pairing", "Bottles matched to the menu's arc", 1, 5.4, 4],
  ["Kombucha brewing", "Sweet tea tended by a symbiotic culture", 4, 5.2, 2],
  ["Tea blending", "Leaf, flower and spice balanced in the tin", 3, 5.0, 3]
],

craft: [
  ["Chainmail making", "Thousands of rings linked into armor", 1, 3.2, 4],
  ["Bell founding", "Bronze poured and tuned into a voice", 1, 3.0, 5],
  ["Broom making", "Brooms bound from birch and broomcorn", 2, 3.6, 3],
  ["Shingle riving", "Roofing split from straight-grained cedar", 2, 4.0, 4],
  ["Timber hewing", "Logs squared with broadaxe and chalk line", 1, 4.2, 4],
  ["Barn raising", "A neighborhood raising a frame in a day", 1, 4.6, 3],
  ["Cloisonné enamel", "Wire cells filled with fused glass", 1, 3.8, 5],
  ["Urushi lacquer", "Sap layered and cured into a mirror finish", 1, 3.4, 5],
  ["Instrument repair", "Frets, bridges and electronics made right", 4, 4.4, 3],
  ["Bow rehairing", "Violin bows re-strung with fresh horsehair", 4, 3.0, 4],
  ["Camera repair", "Shutters, rangefinders and light seals revived", 4, 3.2, 4],
  ["Bicycle frame building", "Tubes brazed into a fitted ride", 3, 3.4, 5],
  ["Metal spinning", "Discs pressed against a form at speed", 3, 3.4, 4],
  ["Mosaic", "Tesserae set into patterns of grout", 1, 4.6, 3],
  ["Bone carving", "Scrimshaw and bone worked into keepsakes", 0, 3.8, 4],
  ["Quill cutting", "Feathers trimmed into fountain pens", 1, 3.4, 3],
  ["Ink making", "Oak galls and soot boiled into ink", 1, 4.2, 3],
  ["Parchment making", "Skins limed, scraped and stretched", 1, 3.4, 4],
  ["Raku firing", "Pots pulled glowing from the kiln", 2, 4.4, 3],
  ["Slip casting", "Liquid clay poured into plaster molds", 3, 4.2, 3]
],

build: [
  ["Urban planning", "Streets, density and light designed together", 1, 4.6, 5],
  ["Sanitation engineering", "Sewers, drains and the end of cholera", 3, 4.6, 5],
  ["Water treatment", "Filtration and chlorination for millions", 3, 5.2, 4],
  ["Earthquake engineering", "Buildings designed to sway, not fall", 4, 4.0, 5],
  ["Skyscraper construction", "Steel frames lifted a kilometer up", 4, 4.0, 5],
  ["Traffic engineering", "Signals, roundabouts and flow studied", 4, 4.6, 4],
  ["Cathedral building", "Stone vaults raised over generations", 2, 3.4, 5],
  ["Millwrighting", "Mills lined, leveled and kept turning", 2, 4.0, 4],
  ["Boilermaking", "Plates rolled and welded into pressure vessels", 3, 4.0, 4],
  ["Sand casting", "Molds packed and metal poured green", 1, 4.6, 4],
  ["Foundry patternmaking", "Wooden masters made for the melt", 3, 4.2, 4],
  ["Furniture restoration", "Old joinery revived without erasing it", 3, 4.6, 3],
  ["Window restoration", "Sash cords, weights and wavy glass kept", 3, 3.8, 4],
  ["Sundial making", "Shadow geometry cut into stone", 1, 3.8, 3]
],

land: [
  ["Agroforestry", "Trees and crops farmed as one system", 1, 4.6, 4],
  ["No-till farming", "Soil left intact, residue on top", 4, 5.2, 3],
  ["Cover cropping", "Fields dressed in green between harvests", 1, 5.0, 3],
  ["Landscape design", "Gardens composed in levels and seasons", 1, 5.4, 3],
  ["Hedge laying", "Living fences pleached and stock-proof", 1, 3.6, 4],
  ["Fence building", "Posts, wire and gates on honest lines", 1, 5.8, 2],
  ["Gate hanging", "A gate that swings true for decades", 2, 4.4, 3],
  ["Pond management", "Water, fish and plants balanced by hand", 1, 4.6, 3],
  ["Draft animal training", "Oxen and horses taught to pull in voice", 0, 4.0, 4],
  ["Livestock birthing", "Calves and lambs helped into the world", 0, 5.4, 3],
  ["Livestock insemination", "Genetics spread with a gloved arm", 3, 4.6, 4],
  ["Soil testing", "pH, organic matter and deficiencies read", 4, 5.4, 2]
],

style: [
  ["Fashion design", "Clothing imagined, draped and drafted", 1, 5.0, 5],
  ["Haute couture technique", "Thousands of hours sewn into one gown", 2, 3.0, 5],
  ["Draping", "Muslin shaped directly on the form", 3, 3.6, 4],
  ["Makeup application", "Kohl and color worn since the pyramids", 0, 7.0, 3],
  ["Manicure and nail care", "Nails shaped and polished since antiquity", 1, 6.6, 2],
  ["Nail art", "Tiny paintings carried on ten canvases", 4, 5.4, 3],
  ["Skincare", "Oils, clays and rituals for the largest organ", 0, 6.8, 2],
  ["Shaving and grooming", "Beards managed since flint razors", 0, 7.4, 2],
  ["Beard sculpting", "Cheek lines and fades in the mirror", 1, 5.4, 2],
  ["Personal styling", "A wardrobe built around a true self", 3, 6.6, 2],
  ["Color analysis", "Palettes matched to skin and season", 4, 4.6, 2],
  ["Runway modeling", "A walk that sells the whole collection", 3, 3.0, 3],
  ["Photographic modeling", "Angles found for every lens", 3, 3.4, 3],
  ["Drag performance", "Glamour, lip-sync and satire in sequins", 2, 3.6, 4],
  ["Cosplay crafting", "Characters built in foam, worbla and paint", 5, 4.6, 3]
]

};
