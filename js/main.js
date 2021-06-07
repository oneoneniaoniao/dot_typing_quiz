"use strict";
{
  const dic = [
    ["const", "let", "var"],
    ["javascript", "html", "css"],
    ["red", "green", "yellow"],
    ["python", "php", "cobol"]
  ];
  let words;
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById("target");

  function setWords(){
    words = dic[Math.floor(Math.random() * dic.length)]
  }

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  document.addEventListener("click", () => {
    if (isPlaying === true){
      return;
    }
    startTime = Date.now();
    isPlaying = true;
    setWords();
    setWord();
  });

  document.addEventListener("keydown", e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;
    target.textContent = "_".repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById("result");
        console.log(elapsedTime);
        if(elapsedTime <= 4){
          result.textContent = `Congratulations!! 
          You Finished in ${elapsedTime} seconds!`;
          const body = document.getElementsByTagName("body")[0];
          body.classList.add("good");
          return;
        }
        result.textContent = `Finished!! ${elapsedTime} seconds!`;
        return;
      }
      setWord();
    }
  });
}
