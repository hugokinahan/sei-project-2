/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { getRandomSuper } from '../lib/api'

import img from '/Users/hugokinahan/development/PROJECTS/project-2/src/assets/marvel_superheroes.jpg'

function SuperheroRandom() {
  
  const [superheroes, setSuperheroes] = React.useState('')

  const [choice, setChoice] = React.useState('')

  const [score, setScore] = React.useState(0)
  
  const [randomPlayerSuper, setRandomPlayerSuper] = React.useState(null)
  const [randomComputerPlayer, setRandomComputerSuper] = React.useState(null)

  const pickSupers = () => {
    setRandomPlayerSuper(superheroes[Math.floor(Math.random() * superheroes.length)])
    setRandomComputerSuper(superheroes[Math.floor(Math.random() * superheroes.length)])
    setChoice('')
  }


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


  const playGame = e => {
    const playerScore =  randomPlayerSuper.powerstats[e.target.value]
    const computerScore = randomComputerPlayer.powerstats[e.target.value]
    const playerHasWon = playerScore > computerScore 
    if (playerHasWon) {
      setScore(score + 1)
    } 
    console.log(playerHasWon)
    setChoice(e.target.value)
  }


  return (

    <section className="superhero-v-superhero">
      {/* <img src={img} alt="Superheroes Image" /> */}
      <div className="section">
        <h3>{score}</h3>
        <div>
          {(!randomPlayerSuper) ?
            <button onClick={pickSupers}>Start Game</button>
            :
            <div className="container">
              <div className="player-superhero">
                <h2>{ randomPlayerSuper.name }</h2>
                <img src={randomPlayerSuper.images.sm} alt={randomPlayerSuper.name} />
                <button onClick={playGame} value='intelligence' >Intelligence: { randomPlayerSuper.powerstats.intelligence}</button>
                <button onClick={playGame} value='strength' >Strength: { randomPlayerSuper.powerstats.strength}</button>
                <button onClick={playGame} value='speed'>Speed: { randomPlayerSuper.powerstats.speed}</button>
                <button onClick={playGame} value='durability'>Durability: { randomPlayerSuper.powerstats.durability}</button>
                <button onClick={playGame} value='power'>Power: { randomPlayerSuper.powerstats.power}</button>
                <button onClick={playGame} value='combat'>Combat: { randomPlayerSuper.powerstats.combat}</button>
              </div>
              <div className="computer-superhero">
                <h2>{ randomComputerPlayer.name }</h2>
                <img src={randomComputerPlayer.images.sm} alt={randomComputerPlayer.name} />
                <button value="intelligence">Intelligence: {choice ? `${randomComputerPlayer.powerstats.intelligence}` : '' }</button>
                <button value="strength">Strength: {choice ? `${randomComputerPlayer.powerstats.strength}` : '' }</button>
                <button value="speed">Speed: {choice ? `${randomComputerPlayer.powerstats.speed}` : '' }</button>
                <button value="durability">Durability: {choice ? `${randomComputerPlayer.powerstats.durability}` : '' }</button>
                <button value="power">Power: {choice ? `${randomComputerPlayer.powerstats.power}` : '' }</button>
                <button value="combat">Combat: {choice ? `${randomComputerPlayer.powerstats.combat}` : '' }</button>
              </div> 
              <button onClick={pickSupers} disabled={!choice}>Next Round</button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default SuperheroRandom