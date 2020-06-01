
const planetJSON = fs.readFileSync('1-json.json')
const planetBuffer = planetJSON.toString()
const planet = JSON.parse(planetBuffer)

planet.name = "Julien"
planet.age = '23'

const JSONString = JSON.stringify(planet)
fs.writeFileSync('1-json.json', JSONString)
