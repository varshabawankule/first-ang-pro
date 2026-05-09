import { Ipl } from "../models/planet";

export let planets:Array<Ipl> = [
  {
    id: 1,
    planetName: 'Mercury',
    positionFromSun: 1,
    type: 'Terrestrial',
    moons: 0
  },
  {
    id: 2,
    planetName: 'Venus',
    positionFromSun: 2,
    type: 'Terrestrial',
    moons: 0
  },
  {
    id: 3,
    planetName: 'Earth',
    positionFromSun: 3,
    type: 'Terrestrial',
    moons: 1
  },
  {
    id: 4,
    planetName: 'Mars',
    positionFromSun: 4,
    type: 'Terrestrial',
    moons: 2
  },
  {
    id: 5,
    planetName: 'Jupiter',
    positionFromSun: 5,
    type: 'Gas Giant',
    moons: 95
  },
  {
    id: 6,
    planetName: 'Saturn',
    positionFromSun: 6,
    type: 'Gas Giant',
    moons: 146
  },
  {
    id: 7,
    planetName: 'Uranus',
    positionFromSun: 7,
    type: 'Ice Giant',
    moons: 27
  },
  {
    id: 8,
    planetName: 'Neptune',
    positionFromSun: 8,
    type: 'Ice Giant',
    moons: 14
  },
  {
    id: 9,
    planetName: 'Pluto',
    positionFromSun: 9,
    type: 'Dwarf Planet',
    moons: 5
  },
  {
    id: 10,
    planetName: 'Ceres',
    positionFromSun: 10,
    type: 'Dwarf Planet',
    moons: 0
  }
];