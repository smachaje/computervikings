/**
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Floki to tell me a story"
 *  Alexa: "Let me tell you computer bit #1. ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined;
//"amzn1.echo-sdk-ams.app.21bd6c10-71cf-4734-b97c-38abb3bef509";
//replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing space facts.
 */
var SPACE_FACTS = [
	"Harald Bluetooth, who's name is echoed by a current wireless technology, was a Viking king with terribly decayed teeth.",
	"Bluetooth technology was named by the Swedish company Ericsson in honor of a Viking king Harald Bluetooth.",
	"The icon for the Bluetooth technology is a rune sign going back to the times of the Vikings.",
	"Phablet is a device that combines the features of a smartphone with a tablet.  Just as a Viking shield, the phablet is small enough to be carried anywhere, but large enough for important tasks.",
	"The Internet and the World Wide Web are different.  The Internet is a network, the web is a system of documents.  Oceans and rivers were like the Internet for Vikings.  The ships were like the world wide web documents.",
	"Solid-state drive is a storage device, like a hard drive.  Howerver, it uses flash memory without moving parts.  Viking ships were built through clinker design to sustain physical force and shock of ocean waves like solid-state drives.",
	"Wiki is a Hawaian expression for being quick.  Wiki Wiki means very quick and in 1995 Howard Cunningham created the first Wiki Wiki Web. Viking raid attacks were Wiki Wiki to avoid confrontation with defending armies.",
	"Wiki is a collaborative website that allows users to create, modify, or delete document content via the browser.  Vikings didn't write things down.  Their slaves in Iceland started written documents called Sagas.",
	"Only about 10% of the world's currency is physical money, the rest only exists on computers. Vikings were often paid large amounts of coins to leave English shores, and even today more late Anglo-Saxon coins are found in Scandinavia than in Britain.",
	"Linux, an open source operating system, was started in Scandinavia in Helsinki by Linus Torvalds.",
  "Open source software does not always mean free or no cost software. It just means that the source code is available. Vikings didn't write things down, which made trade secrets easier to keep secured.",
	"The first electronic computer ENIAC weighed more than 27 tons and took up 1800 square feet.  The largest Viking ship found was in Roskilde, Denmark.  This cargo ship was 121 feet long, it could carry 24 tons of load, and at 3 feet of draft it had the sail measuring 2,175 squre feet. The sail was as big as ENIAC and the ship could almost sail with the computer onboard without sinking. ",
	"Around 50% of all Wikipedia vandalism is caught by a single computer program with more than 90% accuracy.  Vandals were a Germanic tribe with the name taken probably from a province in Uppland, Sweden.  They migrated from Scandinavia to an area known as Poland today before the Viking age, way back in 120 BC. Vandals successfully raided Rome in 455 CE.",
	"The password for the computer controls of nuclear tipped missiles of the U.S was 0 0 0 0 0 0 0 0, for eight years.  Passwords should have letters, numbers, and special characters of 8 positions of more.  A Viking map, called Vinland map, showing the shore of North America indicating that Vikings discovered America, included a rune writing riddle, like a password. The rune riddle increases the likelihood that the map is authentic.",
	"Three students from a school in Nevada had installed keystroke loggers on their teachers' computers to intercept the teachers' usernames and passwords, and then charged other students up to $300 to hack in and increase their grades.  If you decide to break the law or academic code, be prepared for being punished like a captured Viking.  Well, let's just say that the English were very creative.",
	"Alan Turing is the father of computer science and artificial intelligence. He helped to break German Enigma cyphers. A great leader of the Viking culture was Ragnar Lothbrook.  Alan Turing and Ragnar Lothbrook were both visionaries and at great personal risk put their talents into use.",
	"'cup tsha' is an acronym for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.  To submit a web form you may be asked to type in a word that is presented in a convoluted picture.  Odin, a main Viking god, who wondered around the Earth, was known to take on human forms like a shapeshifter.",
	"'No more woof' is a device to read a dog's mind.  It has been developed by the Nordic Society for Invention and Discovery, a small Scandinavian research lab.",
	"An eccentric inventor, Charles Babbage, designed the first computer in 1820s the Difference Engine that could achieve an 'absolute integrity of results'. Later, in 1830s, he designed a mechanical computer called the Analytical Engine. Doron Swade wrote an excellent biography of Babbage published by Viking press in 2001. ",
	"Stewardesses' is the longest word you can type with one hand on the modern computer keyboard.  Since Viking runes were carved into stone, Vikings preferred short words.  Writing that was lasting and brief, you might say laconic brevity, lapidary style, extremely compact, concise, and expressive or succinct.",
	"Author Mark Twain was one of the first people to purchase the early typewriter and is probably the first author to submit a typed manuscript to his publisher.  He was born two months prematurely and was not expected to survive.  In Viking tradition he would have been killed by his parents as a baby.",
	"Modern computer keyboard, called 'quarety' for the first 5 keys in the upper row, was patented by Latham Sholes in 1868 and designed to slow down the typist so the keys would not get stuck.",
	"A professor from Washington State University, Dr. John Dvorak, introduced a new keyboard design in the 1930s, but it was not widely accepted.  Most people preferred the more difficult and slower layout of the standard keyboard.",
	"In the face of strong opposition when proposing a change to the computer keyboard layout, Dr Dworak said: Changing the keyboard format is like proposing to reverse the Ten Commandments and the Golden Rule, discard every moral principle and ridicule motherhood.",
	"Albert Einstein said: Games are the most elevated form of investigation.",
	"Gamification is the use of game mechanics and experience design to digitally engage and motivate people to achieve their goals (Burke, 2014).",
	"Gamification is the use of game design elements in non-gamecontexts (Deterding, 2011).",
	"The Viking long boats were a game changing technology innovation in 700 CE.  They could sail on rivers and oceans, which gave the Vikings a global access to people and resources.  Rivers, seas, lakes, and oceans were a network, just like the Internet today."


];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var SpaceGeek = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
SpaceGeek.prototype = Object.create(AlexaSkill.prototype);
SpaceGeek.prototype.constructor = SpaceGeek;

SpaceGeek.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("SpaceGeek onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

SpaceGeek.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("SpaceGeek onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
SpaceGeek.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("SpaceGeek onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

SpaceGeek.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },


		"GetFullSagaIntent": function (intent, session, response) {
		handleFullSagaRequest(response);
		},


    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask: Alexa, ask Floki to tell me something, or, tell me a viking story, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "See you in Valhalla!";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "See you in Valhalla!";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * SPACE_FACTS.length);
    var fact = SPACE_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your Computer Viking bit: " + fact;

    response.tellWithCard(speechOutput, "Computer Vikings", speechOutput);
}


function handleFullSagaRequest(response) {


		var x = 0;
		var speechOutput  = "Floki's saga: ";
		for (x=0; x<SPACE_FACTS.length; x++ )
		{
    var y = SPACE_FACTS.length - x - 1;

		var fact = SPACE_FACTS[x];

    speechOutput = speechOutput + fact + "<break time=\"1s\" />" + y + " left: " + "<break time=\"1s\" />";
		//speechOutput = speechOutput + fact  + y + " left: " ;




	}

	speechOutput = "<speak>" + speechOutput + "</speak>";

	var speechOutputSSML = {
												speech: speechOutput,
												type: AlexaSkill.speechOutputType.SSML
											};

	response.tellWithCard(speechOutputSSML, "Computer Vikings", "Full saga of " + SPACE_FACTS.length + " stories.");



}



// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var spaceGeek = new SpaceGeek();
    spaceGeek.execute(event, context);
};
