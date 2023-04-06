
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      const palpites = document.querySelector('.palpites');
      const ultimoresultado = document.querySelector('.ultimoresultado');
      const altooubaixo = document.querySelector('.altooubaixo');
      const enviar = document.querySelector('.enviar');
      const adivinhe = document.querySelector('.adivinhe');
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        const userGuess = Number(adivinhe.value);
        if (guessCount === 1) {
          palpites.textContent = 'Palpites antigos: ';
        }

        palpites.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          ultimoresultado.textContent = 'Congratulations! You got it right!';
          ultimoresultado.style.backgroundColor = 'green';
          altooubaixo.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          ultimoresultado.textContent = '!!!GAME OVER!!!';
          altooubaixo.textContent = '';
          setGameOver();
        } else {
          ultimoresultado.textContent = 'Wrong!';
          ultimoresultado.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            altooubaixo.textContent = 'Last guess was too low!' ;
          } else if(userGuess > randomNumber) {
            altooubaixo.textContent = 'Last guess was too high!';
          }
        }

        guessCount++;
        adivinhe.value = '';
        adivinhe.focus();
      }

      enviar.addEventListener('click', checkGuess);

      function setGameOver() {
        adivinhe.disabled = true;
        enviar.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultado p');
        for (const resetPara of resetParas) {
          resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        adivinhe.disabled = false;
        enviar.disabled = false;
        adivinhe.value = '';
        adivinhe.focus();
        ultimoresultado.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
