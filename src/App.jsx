import React, { useState } from 'react';
import styles from './App.module.scss';

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(3);  
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePassword = () => {
    const numChars = '1234567890';
    const symChars = '!@#$%^&*()_+{}[]|:;<>,.?/~';
    const lowChars = 'abcdefghijklmnopqrstuvwxyz';
    const upChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let generatedPassword = '';
    let characters = '';

    if (uppercase) {
      characters += upChars;
    }
    if (lowercase) {
      characters += lowChars;
    }
    if (symbols) {
      characters += symChars;
    }
    if (numbers) {
      characters += numChars;
    }

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Input}>
          <input type="text" value={password} readOnly />
          <img src="src/assets/copy-solid.svg" alt="copy" />
        </div>
        <div className={styles.Length}>
          <p>Password Length</p>
          <input
            type="range"
            min={5}
            max={20}
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </div>
        <div className={styles.uppercase}>
          <p>Include uppercase</p>
          <input
            type="checkbox"
            onChange={() => setUppercase(!uppercase)}
            checked={uppercase}
          />
        </div>
        <div className={styles.lowercase}>
          <p>Include lowercase</p>
          <input
            type="checkbox"
            onChange={() => setLowercase(!lowercase)}
            checked={lowercase}
          />
        </div>
        <div className={styles.numbers}>
          <p>Include Numbers</p>
          <input
            type="checkbox"
            onChange={() => setNumbers(!numbers)}
            checked={numbers}
          />
        </div>
        <div className={styles.symbols}>
          <p>Include Symbols</p>
          <input
            type="checkbox"
            onChange={() => setSymbols(!symbols)}
            checked={symbols}
          />
        </div>
        <button className={styles.generateBtn} onClick={generatePassword}>
          GENERATE
        </button>
      </div>
    </>
  );
};

export default App;
