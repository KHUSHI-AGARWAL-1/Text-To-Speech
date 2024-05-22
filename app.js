let speech=new SpeechSynthesisUtterance();
speech.lang="en";

let voices=[];
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    let voiceselect=document.querySelector("#voice");
    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#vol").addEventListener("input",()=>{
    const vol=document.querySelector("#vol").value;
    speech.volume=vol;
})


document.querySelector("#rate").addEventListener("input",()=>{
    const rate=document.querySelector("#rate").value;
    speech.rate=rate;
})

document.querySelector("#voice").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voice").value];
  });

  document.querySelector("#start").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  });

  document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
  });

  document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
  });

  document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });