//change font to color of paragraph to blue
const p = document.querySelector("p")
p.style.color = '#0c4a7c'

//set font size of header to 48PX

const header = document.querySelector("h1");
header.style.fontSize = "48px"

//change text of paragraph
p.textContent= "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."

//change the 13th item to be half transparent
document.getElementById('item-13').style.opacity = "0.5"

//change the 13th item text
document.getElementById('item-13').textContent = "I say,'Hi!'"

//change image && size to 300px

const img = document.querySelector('img');
img.setAttribute("id", "dino")
img.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg"
// img.width = "300px"
img.style.height = "300px"
// img.setAttribute("id", "dino")

//add another picture below or to the right
document.getElementById('dino-max').style.height = "300px"

//create a new li change the class and change the text
document.getElementById('item-16').classList.add('item')

document.getElementById('item-16').innerText = "Won't get fooled again."