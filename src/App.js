import { useEffect, useState } from 'react';
import './App.css';
import GetKartu from './components/GetKartu';

const kartu = [
  {"img":"/img/clover.svg", kecocokan: false},
  {"img":"/img/diamond.svg", kecocokan: false},
  {"img":"/img/heart.svg", kecocokan: false},
  {"img":"/img/spade.svg", kecocokan: false},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurn] = useState(0)
  const [satu, setSatu] = useState(null)
  const [dua, setDua] = useState(null)

  const acak = () => {
    const acak = [...kartu, ...kartu]
    .sort(() => Math.random() - 0.5)
    .map((kartu) => ({...kartu, id:Math.random()}))

    setCards(acak)
    setTurn(0)
  }

  const handleChoice = (kartu) => {
    satu ? setDua(kartu) : setSatu(kartu)
  }

  useEffect(() => {
    if (satu && dua) {
      if (satu.img === dua.img) {
        setCards(pervTurn => {
          return pervTurn.map(kartu => {
            if (kartu.img === satu.img) {
              return {...kartu, kecocokan: true}
            }
            else {
              return kartu
            }
          })
        })
        resetTurns()
      }
      else {
        setTimeout(() => {
          resetTurns()
        }, 1000);
      }
    }
  }, [satu, dua])

  const resetTurns = () => {
    setSatu(null)
    setDua(null)
    setTurn( pervTurn => pervTurn + 1)
  }

  return (
    <div className="App">
      <button onClick={acak}>New Game</button>

      <div className="grid-kartu">
        {cards.map(kartu => (
          <GetKartu 
            key={kartu.id} 
            kartu={kartu} 
            handleChoice={handleChoice}
            flipped={kartu === satu || kartu === dua || kartu.kecocokan}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
