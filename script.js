const PossibleWheaders = ["Images/Sun.png", "Images/Rain.png"]
const TerribleWeather = "Images/Thunderstorm.png"


const Multiplier = 1680769690;
const Modulus = 2147483647;
const RandomMax = 0x7FFFFFFF;

const SeededRandom = (Seed) => (((Seed % Modulus) * Multiplier) % Modulus - 1) / RandomMax

const GetRandomInt = (Seed, Max) => Math.ceil(SeededRandom(Seed) * Max)

const Day = 24 * 60 * 60 * 1000
const CurrentTime = Date.now()
const Seed = Math.floor(CurrentTime / Day)

const CurrentWeather = GetRandomInt(Seed, PossibleWheaders.length)
const Shiny = GetRandomInt(Seed, 100) == 1


const Display = document.getElementById("CurrentDay")

Display.src =  Shiny ? TerribleWeather : PossibleWheaders[CurrentWeather - 1]