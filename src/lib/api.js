import axios from 'axios'
import SuperheroesAll from '../components/SuperheroesAll'

// const baseUrl = 'https://akabab.github.io/superhero-api/api/all.json'


const singleSuperUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'
// * /1.json

// * Random selection of 2 superheroes

const randomID = Math.floor(Math.random() * Superheroes.length)

export function getRandomSuper(id) {
  return axios.get(`${singleSuperUrl}/${id}.json`)
}
console.log(getRandomSuper)