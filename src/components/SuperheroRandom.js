/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'

function SuperheroRandom() {
  
  const [superheroes, setSuperheroes] = React.useState('')

  const [choice, setChoice] = React.useState('')

  const [score, setScore] = React.useState(0)
  const [compScore, setCompScore] = React.useState(0)
  
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

  const reloadPage = () => {
    window.location.reload()
  }

  const playGame = e => {
    const playerScore =  randomPlayerSuper.powerstats[e.target.value]
    const computerScore = randomComputerPlayer.powerstats[e.target.value]
    const playerHasWon = playerScore > computerScore 
    if (playerHasWon) {
      setScore(score + 1)
    } else {
      setCompScore(compScore + 1)
    } 
    setChoice(e.target.value)
  }

  const playerWinningScore = score > 4
  const computerWinningScore = compScore > 4


  return (

    <section className="superhero-v-superhero">
      <div className="section">
        <div>
          {(!randomPlayerSuper) ?
            <div className="start-features">
              <h1>Superhero Showdown</h1>
              <h4 className="instructions">Superhero Showdown is a race to 5 points. 
                <br/>
                <br/>
                Each round you will be given a random superhero and you must click on the attribute you believe will have a higher score than the equivalent attribute of the computer&apos;s superhero. 
                <br/>
                Each correct answer will score you 1 point. 
                <br/>
                Why be a hero when you can be a superhero?</h4>
              <button className="start-game" onClick={pickSupers}>Start Game</button>
            </div>
            :
            <section className="game-area">
              <h1>Superhero Showdown</h1>
              <div className="scores">
                <h3>Player Score: {score}</h3>
                {playerWinningScore && <h2>🦸‍♂️ You win! You won in the arena now go and prove your powers 🦸‍♀️</h2>}
                {computerWinningScore && <h2>🦹‍♀️ You lost! Time to hang up your cape... 🦹‍♂️</h2> }
                <h3>Computer Score: {compScore}</h3>
              </div>
              <div className="container">
                <div className="player-superhero">
                  <h2>{ randomPlayerSuper.name }</h2>
                  <img src={randomPlayerSuper.images.sm} alt={randomPlayerSuper.name} />
                  <button onClick={playGame} value='intelligence' disabled={choice}>Intelligence: { randomPlayerSuper.powerstats.intelligence}</button>
                  <button onClick={playGame} value='strength' disabled={choice}>Strength: { randomPlayerSuper.powerstats.strength}</button>
                  <button onClick={playGame} value='speed' disabled={choice}>Speed: { randomPlayerSuper.powerstats.speed}</button>
                  <button onClick={playGame} value='durability' disabled={choice}>Durability: { randomPlayerSuper.powerstats.durability}</button>
                  <button onClick={playGame} value='power' disabled={choice}>Power: { randomPlayerSuper.powerstats.power}</button>
                  <button onClick={playGame} value='combat' disabled={choice}>Combat: { randomPlayerSuper.powerstats.combat}</button>
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
              </div>
              <button onClick={pickSupers} disabled={!choice || playerWinningScore || computerWinningScore} className="next-button">Next Round</button>
              <button onClick={reloadPage} className="restart-button">Restart Game</button>
            </section>
          }
        </div>
      </div>
    </section>
  )
}

export default SuperheroRandom