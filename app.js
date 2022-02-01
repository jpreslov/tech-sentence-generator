const list = ['AWS', 'client-side', 'server-side', 'scalable', 'solution', 'solutions', 'growth', ]
const adjectives = ['exponential', 'innovative', 'multicloud', 'cloud-based']
const singularNouns = ['innovation', 'technology', 'synergy', 'solution']
const pluralNouns = ['innovations', 'technologies', 'synergies', 'solutions']
const adverbs = ['elegantly', 'constantly', 'intelligently', 'relentlessly', 'always', 'never', 'indubitably', 'flawlessly']
const pastTenseVerbs = ['implemented', 'constructed', 'concocted', 'developed', 'strategized']
// const pastTenseVerbs = ['implemented', 'constructed', 'concocted', 'developed', 'strategized']
const pronouns = ['they', 'we']
const possessivePronouns = ['their', 'our']
const helpingVerbs = ['am', 'is', 'are', 'was', 'were', 'being', 'been', 'will be', 'has', 'have', 'had', 'having', 'will have', 'does', 'do', 'did', 'will do']
const nouns = ['damage', 'harm', 'positive', 'good']
const container = document.getElementById('container')
const btn = document.getElementById('generate-btn')
const sentenceDisplayDiv = document.createElement('div')
const blockQuote = document.createElement('blockquote')

let randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const makeSentence = () => {
  const sentence = `${possessivePronouns[randomNum(possessivePronouns)]} ${adjectives[randomNum(adjectives)]} 
  ${pluralNouns[randomNum(pluralNouns)]} ${helpingVerbs[randomNum(helpingVerbs)]} ${adjectives[randomNum(adjectives)]}`
  blockQuote.innerHTML = sentence
  sentenceDisplayDiv.append(blockQuote)
  container.append(sentenceDisplayDiv)
}

btn.addEventListener('click', () => makeSentence())
