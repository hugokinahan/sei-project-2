import React from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { getRandomSuper } from '../lib/api'

function SuperheroRandom() {
  
  const [superheroes, setSuperheroes] = React.useState('')

  // console.log(superheroes)
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


  return (
    <section className="superhero-v-superhero">
      <div className="section">
        <div className="container">
          <div className="player-superhero">
            <p>{ randomPlayerSuper.name }</p>
            <img src={randomPlayerSuper.images.sm} alt={randomPlayerSuper.name} />
            <p>Itelligence: { randomPlayerSuper.powerstats.intelligence}</p>
            <p>Strength: { randomPlayerSuper.powerstats.strength}</p>
            <p>Speed: { randomPlayerSuper.powerstats.speed}</p>
            <p>Durability: { randomPlayerSuper.powerstats.durability}</p>
            <p>Power: { randomPlayerSuper.powerstats.power}</p>
            <p>Combat: { randomPlayerSuper.powerstats.combat}</p>
          </div>
          <div className="computer-superhero">
            <p>{ randomComputerPlayer.name }</p>
            <img src={randomComputerPlayer.images.sm} alt={randomComputerPlayer.name} />
            <p>Itelligence: { randomComputerPlayer.powerstats.intelligence}</p>
            <p>Strength: { randomComputerPlayer.powerstats.strength}</p>
            <p>Speed: { randomComputerPlayer.powerstats.speed}</p>
            <p>Durability: { randomComputerPlayer.powerstats.durability}</p>
            <p>Power: { randomComputerPlayer.powerstats.power}</p>
            <p>Combat: { randomComputerPlayer.powerstats.combat}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuperheroRandom