import React from 'react'
import axios from 'axios'


import SuperheroRandom from './SuperheroRandom'

function SuperheroLogic() {


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
  //if (playerChoice === compChoice) return 'Draw'
  //const randomPlayerSuper = superheroes[Math.floor(Math.random() * superheroes.length)]
  // const randomComputerPlayer = superheroes[Math.floor(Math.random() * superheroes.length)]

  const [playerChoice, setPlayerChoice] = React.useState('')
  const [compChoice, setCompChoice] = React.useState('')
  const [result, setResult] = React.useState('')
  
  //if (playerChoice === compChoice) return 'Draw'
  
  const intelligence = SuperheroLogic.powerstats.intelligence
  const strength = SuperheroLogic.powerstats.strength
  const speed = SuperheroLogic.powerstats.speed
  const durability = SuperheroLogic.powerstats.durability
  const power = SuperheroLogic.powerstats.power
  const combat = SuperheroLogic.powerstats.combat
  
  const getResult = () => {
    if (
      (playerChoice === intelligence > compChoice === intelligence) || 
      (playerChoice === strength > compChoice === strength) ||
      (playerChoice === speed > compChoice === speed) || 
      (playerChoice === durability > compChoice === durability) ||
      (playerChoice === power > compChoice === power) ||
      (playerChoice === combat > compChoice === combat)){ 
      return 'Player win'
    }
    if (
      ((playerChoice === intelligence) === (compChoice === intelligence)) || 
      ((playerChoice === strength) === (compChoice === strength)) ||
      ((playerChoice === speed) === (compChoice === speed)) || 
      ((playerChoice === durability) === (compChoice === durability)) ||
      ((playerChoice === power) === (compChoice === power)) ||
      ((playerChoice === combat) === (compChoice === combat))){
      return 'Draw'
    }
    return 'Computer win'
  }
  
  // const retryGame = () => {
  //   //clear score history, restart random superhero selection
  // }
  
  const playGame = e => {
    const playerChoice = e.target.value
    const computerChoice = randomComputerPlayer
    const result = getResult(playerChoice, compChoice)
    setPlayerChoice(playerChoice)
    setCompChoice(computerChoice)
    setResult(result)
  }


  // const playGame = e => {
  //   const playerChoice = e.target.value
  //   const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  //   const result = getResult(playerChoice, computerChoice)
  //   setPlayerChoice(playerChoice)
  //   setComputerChoice(computerChoice)
  //   setResult(result)
  // }
  
  const nextGame = () => {
    // refresh random game characters
  }
  
  console.log(playerChoice, compChoice)
  return (
    
    //Will need function play game
    <div>
      <SuperheroRandom />
      <button onClick={playGame} value="intelligence">Intelligence</button>
      <button onClick={playGame} value="strength">Strength</button>
      <button onClick={playGame} value="speed">Speed</button>
      <button onClick={playGame} value="durability">Durability</button>
      <button onClick={playGame} value="power">Power</button>
      <button onClick={playGame} value="combat">Combat</button>
      <button onClick={nextGame} value="next">Next</button>
      <p>Result: {result}</p>
    </div>
  )
    
}



export default SuperheroLogic


// import React from 'react'
// import axios from 'axios'
// // import { useParams } from 'react-router-dom'
// // import { getRandomSuper } from '../lib/api'

// function SuperheroRandom() {
  
//   const [superheroes, setSuperheroes] = React.useState('')

//   console.log(superheroes)
//   const randomPlayerSuper = superheroes[Math.floor(Math.random() * superheroes.length)]
//   console.log(randomPlayerSuper)

//   const randomComputerPlayer = superheroes[Math.floor(Math.random() * superheroes.length)]
//   console.log(randomComputerPlayer)

//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
//         setSuperheroes(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getData()
//   }, [])


//   return (
//     <section className="superhero-v-superhero">
//       <div className="section">
//         <div className="container">
//           <div className="player-superhero">
//             <h2>{ randomPlayerSuper.name }</h2>
//             <img src={randomPlayerSuper.images.sm} alt={randomPlayerSuper.name} />
//             <button>Itelligence: { randomPlayerSuper.powerstats.intelligence}</button>
//             <button>Strength: { randomPlayerSuper.powerstats.strength}</button>
//             <button>Speed: { randomPlayerSuper.powerstats.speed}</button>
//             <button>Durability: { randomPlayerSuper.powerstats.durability}</button>
//             <button>Power: { randomPlayerSuper.powerstats.power}</button>
//             <button>Combat: { randomPlayerSuper.powerstats.combat}</button>
//           </div>
//           <div className="computer-superhero">
//             <h2>{ randomComputerPlayer.name }</h2>
//             <img src={randomComputerPlayer.images.sm} alt={randomComputerPlayer.name} />
//             <button>Itelligence: { randomComputerPlayer.powerstats.intelligence}</button>
//             <button>Strength: { randomComputerPlayer.powerstats.strength}</button>
//             <button>Speed: { randomComputerPlayer.powerstats.speed}</button>
//             <button>Durability: { randomComputerPlayer.powerstats.durability}</button>
//             <button>Power: { randomComputerPlayer.powerstats.power}</button>
//             <button>Combat: { randomComputerPlayer.powerstats.combat}</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SuperheroRandom