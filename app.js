const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//
const greeetings = [
  "I am good you little piece of shit",
  "Shut up mate",
  "You better work and not waste time",
  "Eww go away"
];
const weather = [
  "Why dont you ask google",
  "ask alexa! oh wait you cant afford Alexa",
  "shitty",
  "like the weather will improve your condition"
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("Start!");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I dont know what you said! Try again";

  if (
    message.includes(
      "how are you" || "Whats up" || "How you doing?" || "how are you doing"
    )
  ) {
    const finalText = greeetings[Math.floor(Math.random() * greeetings.length)];
    speech.text = finalText;
  } else if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * greeetings.length)];
    speech.text = finalText;
  } else if (message.includes("built" || "made")) {
    const finalText = "Why do you care?";
    speech.text = finalText;
  } else if (message.includes("appreciate me")) {
    const finalText = "Awww I love you; NOT!";
    speech.text = finalText;
  } else if (message.includes("life")) {
    const finalText = "only if life was that easy! Go work!";
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
