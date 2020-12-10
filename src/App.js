import React from 'react'
import axios from 'axios'

function App() {

  const [superheroes, setSuperheroes] = React.useState(null)

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
    <section className="superheroes-list">
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {!superheroes ?
              <p>loading...</p>
              :
              superheroes.map(superhero => (
                <ul key={superhero.id}>
                  <h3>{superhero.name}</h3>
                  <img src={superhero.images.sm} alt={superhero.name} />
                  <p>Intelligence: {superhero.powerstats.intelligence}</p>
                  <p>Strength: {superhero.powerstats.strength}</p>
                  <p>Speed: {superhero.powerstats.speed}</p>
                  <p>Durability: {superhero.powerstats.durability}</p>
                  <p>Power: {superhero.powerstats.power}</p>
                  <p>Combat: {superhero.powerstats.combat}</p>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default App

