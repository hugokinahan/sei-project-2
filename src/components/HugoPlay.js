import React from 'react'
import axios from 'axios'


function HugoPlay() {


  const [playerChoice, setPlayerChoice] = React.useState('')
  const [computerChoice, setComputerChoice] = React.useState('')
  const [result, setResult] = React.useState('')

  const [superheroes, setSuperheroes] = React.useState('')

  console.log(superheroes)
  const randomPlayerSuper = superheroes[Math.floor(Math.random() * superheroes.length)]
  console.log(randomPlayerSuper)

  const randomComputerPlayer = superheroes[Math.floor(Math.random() * superheroes.length)]
  console.log(randomComputerPlayer)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
        setSuperheroes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const getResult = (playerChoice, computerChoice) => {
    if (
      ((playerChoice === randomPlayerSuper.powerstats.intelligence) > (computerChoice === randomComputerPlayer.powerstats.intelligence) ) || 
      ((playerChoice === randomPlayerSuper.powerstats.strength) > (computerChoice === randomComputerPlayer.powerstats.strength) ) ||
      ((playerChoice === randomPlayerSuper.powerstats.speed) > (computerChoice === randomComputerPlayer.powerstats.speed) ) ||
      ((playerChoice === randomPlayerSuper.powerstats.durability) > (computerChoice === randomComputerPlayer.powerstats.durability) ) ||
      ((playerChoice === randomPlayerSuper.powerstats.power) > (computerChoice === randomComputerPlayer.powerstats.power) ) ||
      ((playerChoice === randomPlayerSuper.powerstats.combat) > (computerChoice === randomComputerPlayer.powerstats.combat ))){ 
      return 'Player win'
    }
    if (
      ((playerChoice === randomPlayerSuper.powerstats.intelligence) === (computerChoice === randomComputerPlayer.powerstats.intelligence)) || 
      ((playerChoice === randomPlayerSuper.powerstats.strength) === (computerChoice === randomComputerPlayer.powerstats.strength)) || 
      ((playerChoice === randomPlayerSuper.powerstats.speed) === (computerChoice === randomComputerPlayer.powerstats.speed)) || 
      ((playerChoice === randomPlayerSuper.powerstats.durability) === (computerChoice === randomComputerPlayer.powerstats.durability)) || 
      ((playerChoice === randomPlayerSuper.powerstats.power) === (computerChoice === randomComputerPlayer.powerstats.power)) || 
      ((playerChoice === randomPlayerSuper.powerstats.combat) === (computerChoice === randomComputerPlayer.powerstats.combat))){
      return 'Draw'
    }
    return 'Computer win'
  }

  const playGame = e => {
    const playerChoice = e.target.value
    const computerChoice = superheroes[Math.floor(Math.random() * superheroes.length)]
    const result = getResult(playerChoice, computerChoice)
    console.log(setPlayerChoice(playerChoice))
    console.log(setComputerChoice(computerChoice))
    console.log(setResult(result))
  }
  const reset = () => {
    setPlayerChoice('')
    setComputerChoice('')
    setResult('')

    


  }
  return (
    <section>
      {!superheroes ?
        <p>loading...</p>
        :
        <div>
          <p>Player Choice: {playerChoice}</p>
          <p>Computer Choice: {computerChoice}</p>
          <p>Result: {result}</p>
          <div>
            <button onClick={playGame} value="intelligence">Intelligence</button>
            <button onClick={playGame} value="strength">Strength</button>
            <button onClick={playGame} value="speed">Speed</button>
            <button onClick={playGame} value="durability">Durability</button>
            <button onClick={playGame} value="power">Power</button>
            <button onClick={playGame} value="combat">Combat</button>
            <button onClick={reset}>Reset Game</button>
          </div>
        </div>
      }
    </section>
  )
}
export default HugoPlay