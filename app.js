const adjectives = ['exponential', 'innovative', 'multicloud', 'cloud-based', 'scalable', 'company-wide', 'automated', 'encrypted']
const adverbs = ['elegantly', 'constantly', 'intelligently', 'relentlessly', 'always', 'never', 'indubitably', 'flawlessly']
const nouns = ['damage', 'harm', 'positive', 'good', 'evil']
const determiners = ['many', 'few', 'countless', 'no']

const container = document.getElementById('container')
const btn = document.getElementById('generate-btn')
const sentenceDisplayDiv = document.createElement('div')
const blockQuote = document.createElement('blockquote')

const singPlur = () => {
  let arr = ['sing', 'plur']
  return (Math.floor(Math.random() * 2))
}

const verbs = {
  past: {
    helping: ['have done', 'did', 'was', 'were', 'had', 'has'],
    reg: ['implemented', 'constructed', 'concocted', 'developed', 'strategized'],
},
  present: {
    reg: ['implement', 'construct', 'concoct', 'develop', 'strategize', 'grow', 'help', 'continue'],
    helping: ['is', 'are', 'being', 'having', 'does', 'do']
  },
  future: {
    helping: ['will be', 'will have', 'will do']
  },
}
const prepositions = ['for', 'to', 'with', 'in', 'around', 'regarding', 'alongside']

const nouns = {
  singularNouns: ['innovation', 'technology', 'synergy', 'solution'],
  pluralNouns: ['innovations', 'technologies', 'synergies', 'solutions', 'facets', 'implementations', 'people', 'societies', 'nations', 'systems']
}

const pronouns = {
  pronouns: ['they', 'we'],
  possessivePronouns: ['their', 'our']

}

const randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const makeSentence = () => {
  const words = `${possessivePronouns[randomNum(possessivePronouns)]} ${adjectives[randomNum(adjectives)]} 
  ${pluralNouns[randomNum(pluralNouns)]} ${verbs.helpingVerbs[randomNum(verbs.helpingVerbs)]} ${adjectives[randomNum(adjectives)]} ${nouns[randomNum(nouns)]} 
  ${verbs.linkingVerbs[randomNum(verbs.linkingVerbs)]} ${determiners[randomNum(determiners)]} ${pluralNouns[randomNum(pluralNouns)]} ${verbs.linkingVerbs[randomNum(verbs.linkingVerbs)]}
  ${adjectives[randomNum(adjectives)]}, ${adjectives[randomNum(adjectives)]} ${pluralNouns[randomNum(pluralNouns)]}.`

  const sentence = `${words.charAt(0).toUpperCase() + words.slice(1)}`
  const saveBtn = document.createElement('button')
  blockQuote.innerHTML = sentence
  blockQuote.setAttribute('id', 'quote')
  sentenceDisplayDiv.append(blockQuote)
  container.append(sentenceDisplayDiv)
}

btn.addEventListener('click', () => makeSentence())
