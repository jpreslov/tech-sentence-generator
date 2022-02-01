const adjectives = ['exponential', 'innovative', 'multicloud', 'cloud-based', 'scalable', 'company-wide', 'automated', 'encrypted']
const singularNouns = ['innovation', 'technology', 'synergy', 'solution', '']
const pluralNouns = ['innovations', 'technologies', 'synergies', 'solutions', 'facets', 'implementations', 'people', 'societies', 'nations', 'systems']
const adverbs = ['elegantly', 'constantly', 'intelligently', 'relentlessly', 'always', 'never', 'indubitably', 'flawlessly']
const pastVerbs = ['implemented', 'constructed', 'concocted', 'developed', 'strategized']
const presentVerbs = ['implement', 'construct', 'concoct', 'develop', 'strategize', 'grow', 'help', 'continue']
const helpingVerbs = ['am', 'is', 'are', 'was', 'were', 'being', 'been', 'will be', 'has', 'have', 'had', 'having', 'will have', 'does', 'do', 'did', 'will do']
const pronouns = ['they', 'we']
const possessivePronouns = ['their', 'our']
const nouns = ['damage', 'harm', 'positive', 'good', 'evil']
const linkingVerbs = ['for', 'to', 'with', 'in', 'around', 'regarding', 'alongside']
const determiners = ['many', 'few', 'countless', 'no']
const container = document.getElementById('container')
const btn = document.getElementById('generate-btn')
const sentenceDisplayDiv = document.createElement('div')
const blockQuote = document.createElement('blockquote')

let randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const makeSentence = () => {
  const words = `${possessivePronouns[randomNum(possessivePronouns)]} ${adjectives[randomNum(adjectives)]} 
  ${pluralNouns[randomNum(pluralNouns)]} ${helpingVerbs[randomNum(helpingVerbs)]} ${adjectives[randomNum(adjectives)]} ${nouns[randomNum(nouns)]} 
  ${linkingVerbs[randomNum(linkingVerbs)]} ${determiners[randomNum(determiners)]} ${pluralNouns[randomNum(pluralNouns)]} ${linkingVerbs[randomNum(linkingVerbs)]}
  ${adjectives[randomNum(adjectives)]}, ${adjectives[randomNum(adjectives)]} ${pluralNouns[randomNum(pluralNouns)]}.`

  const sentence = `${words.charAt(0).toUpperCase() + words.slice(1)}`
  const saveBtn = document.createElement('button')
  // saveBtn.addEventListener('click', myFunction)
  blockQuote.innerHTML = sentence
  blockQuote.setAttribute('id', 'quote')
  sentenceDisplayDiv.append(blockQuote)
  container.append(sentenceDisplayDiv)
}

btn.addEventListener('click', () => makeSentence())
