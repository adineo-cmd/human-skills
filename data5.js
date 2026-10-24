/* humanity/skills — dataset part 5 of 6: expansion — health, movement, arts, language, mind. */

const SKILLS_PART5 = {

health: [
  ["Pandemic response", "Whole societies slowed in coordination", 4, 4.4, 5],
  ["Health system administration", "Hospitals run as systems, not buildings", 4, 4.8, 4],
  ["Laparoscopic surgery", "Operated through keyhole incisions", 4, 3.6, 5],
  ["Robotic surgery", "Steady robot arms guided by surgeon hands", 5, 3.0, 5],
  ["Microsurgery", "Vessels and nerves sutured under the scope", 4, 3.0, 5],
  ["Dialysis care", "Blood cleaned by machine, thrice weekly", 4, 4.0, 4],
  ["Intensive care", "Failing organs supported hour by hour", 4, 4.4, 5],
  ["Neonatal care", "The smallest patients kept warm and breathing", 4, 4.4, 5],
  ["Palliative care", "Comfort and meaning at the end of life", 4, 4.8, 4],
  ["Blood transfusion", "Typed, crossed and given back to life", 4, 4.4, 4],
  ["Blood banking", "Donation, testing and cold chains of blood", 4, 4.2, 4],
  ["Sterile technique", "The invisible discipline that prevents infection", 3, 5.8, 3],
  ["Chronic wound care", "Ulcers and diabetic feet healed patiently", 4, 5.0, 3],
  ["Phlebotomy", "A good vein found on the first try", 1, 5.2, 2],
  ["IV cannulation", "Lines placed in rolling, vanishing veins", 4, 5.4, 3],
  ["Giving injections", "Vaccines delivered quickly and kindly", 3, 6.0, 2],
  ["Addiction counseling", "Recovery supported one day at a time", 4, 5.2, 4],
  ["Orthodontics", "Teeth migrated by wire and bracket", 3, 4.0, 5],
  ["Dental implants", "Titanium roots set into bone", 4, 3.6, 5],
  ["Plaster casting", "Fractures encased and itched beneath", 3, 4.6, 3]
],

move: [
  ["Handstanding", "Balance found upside down", 0, 5.0, 3],
  ["Cartwheeling", "The first flip every playground teaches", 1, 6.4, 1],
  ["Muscle-up", "The pull-up that becomes a dip", 4, 4.2, 4],
  ["Rope climbing", "Hauled upward by arms alone", 0, 5.4, 3],
  ["Hula hooping", "Hips timed to a circling ring", 3, 5.8, 2],
  ["Windsurfing", "Sail held in the hands on a board", 4, 4.2, 3],
  ["Kitesurfing", "Kite flown, board planed, water left behind", 4, 4.0, 4],
  ["Kayak rolling", "Righted underwater with one sweep", 1, 4.0, 4],
  ["Bodysurfing", "The wave ridden with no equipment at all", 1, 5.0, 2],
  ["Skimboarding", "The shoreline's shallow-speed art", 3, 3.6, 3],
  ["Trail running", "Mountains covered at conversation pace", 4, 5.8, 2],
  ["Obstacle racing", "Walls, ropes and mud at full effort", 4, 4.2, 3],
  ["Highlining", "Slackline walked over canyons", 4, 3.0, 4],
  ["Wingsuit flying", "Mountains threaded in a gliding suit", 4, 2.2, 5],
  ["BASE jumping", "Parachutes packed for the shortest flights", 4, 2.6, 5],
  ["Jousting", "Lance, shield and full-speed courtesy", 2, 2.4, 4],
  ["Decathlon", "Ten events, two days, one athlete", 3, 2.8, 5]
],

arts: [
  ["Choral singing", "Strangers tuned into one voice", 1, 6.0, 3],
  ["Throat singing", "Two pitches sung by one person", 1, 2.8, 5],
  ["Opera singing", "Voice unamplified over an orchestra", 1, 3.4, 5],
  ["Ensemble playing", "Chamber musicians breathing together", 1, 5.0, 4],
  ["Manuscript illumination", "Gold leaf and pigment on vellum", 2, 3.4, 5],
  ["Gregorian chant", "Plainchant sung as one unbroken line", 1, 3.6, 4],
  ["Documentary filmmaking", "Truth shaped without breaking it", 3, 4.0, 5],
  ["Photojournalism", "History photographed as it happens", 3, 4.4, 4],
  ["Sound design", "The world's offstage noises invented", 4, 4.8, 4],
  ["Foley artistry", "Footsteps and doors performed for film", 3, 3.4, 4]
],

word: [
  ["Simultaneous interpreting", "Speech rendered into another language mid-sentence", 4, 3.4, 5],
  ["Literary translation", "Poetry carried across without dropping it", 1, 3.8, 5],
  ["Librarianship", "Knowledge organized for finding again", 1, 4.8, 4],
  ["Archiving", "Records kept alive for future readers", 1, 4.4, 4],
  ["Records management", "Clay tablets to cloud files, filed right", 1, 4.6, 3],
  ["Radio broadcasting", "Live voice carried to a city at once", 4, 4.8, 3],
  ["Television production", "Cameras, gallery and one take at airtime", 4, 4.6, 4],
  ["Podcasting", "A studio in a closet and the world listening", 5, 5.0, 2],
  ["Voice acting", "Characters performed with the throat alone", 4, 4.0, 4],
  ["Audiobook narration", "Twelve hours of consistent character voices", 4, 4.0, 3],
  ["Speech writing", "One voice written for another", 1, 4.6, 4],
  ["Ghostwriting", "Books written inside someone else's voice", 1, 4.2, 3],
  ["Captioning", "Speech transcribed live for access", 4, 4.2, 3],
  ["Manuscript copying", "Scriptoria preserving texts by hand", 2, 3.2, 3]
],

mind: [
  ["Remembering names", "The oldest social superpower", 0, 7.0, 2],
  ["Pen spinning", "Idle hands taught small physics", 3, 4.4, 2],
  ["Sketchnoting", "Lectures captured in drawings and arrows", 4, 4.6, 2],
  ["Mental rehearsal", "The performance run before it happens", 4, 5.4, 3],
  ["Risk calibration", "Confidence tuned to actual odds", 4, 4.6, 4],
  ["Metacognition", "Thinking watched while it happens", 4, 5.2, 3],
  ["Cognitive reframing", "The story retold until it loosens", 4, 5.8, 3],
  ["Systems thinking", "Feedback loops found in everything", 4, 5.0, 4],
  ["First-principles reasoning", "Assumptions stripped back to bedrock", 1, 4.6, 4],
  ["Bayesian updating", "Beliefs revised as evidence arrives", 4, 4.4, 4],
  ["Blindfold chess", "Whole games played from memory", 1, 3.2, 5]
]

};
