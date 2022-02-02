const adjectives = ['exponential', 'innovative', 'multicloud', 'cloud-based', 'scalable', 'company-wide', 'automated', 'encrypted']
const adverbs = ['elegantly', 'constantly', 'intelligently', 'relentlessly', 'always', 'never', 'indubitably', 'flawlessly']
const determiners = ['many', 'few', 'countless', 'no']

const sentenceDisplayDiv = document.getElementById('sentence')
const btn = document.getElementById('generate-btn')
// const sentenceDisplayDiv = document.createElement('div')
const blockQuote = document.createElement('blockquote')

// const singPlur = () => {
//   let arr = ['sing', 'plur']
//   return (Math.floor(Math.random() * 2))
// }

const verbs = {
  past: {
    helping: ['have done', 'did', 'was', 'were', 'had', 'has'],
    reg: ['implemented', 'constructed', 'concocted', 'developed', 'strategized']
  },
  present: {
    reg: ['implement', 'construct', 'concoct', 'develop', 'strategize', 'grow', 'help', 'continue'],
    helping: ['is', 'are', 'being', 'having', 'does', 'do']
  },
  future: {
    helping: ['will be', 'will have', 'will do']
  }
}

const prepositions = ['for', 'to', 'with', 'in', 'around', 'regarding', 'alongside']

const nouns = {
  singular: ['innovation', 'technology', 'synergy', 'solution'],
  plural: ['innovations', 'technologies', 'synergies', 'solutions', 'facets', 'implementations', 'people', 'societies', 'nations', 'systems']
}

const pronouns = {
  reg: ['they', 'we'],
  possessive: ['their', 'our', 'everybody\'s']

}

const makeSentence = () => {
  let num = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const words = `${pronouns.possessive[num(pronouns.possessive)]} ${adjectives[num(adjectives)]} 
  ${nouns.plural[num(nouns.plural)]} ${verbs.present.helping[num(verbs.present.helping)]} ${adjectives[num(adjectives)]} ${nouns.plural[num(nouns.plural)]} 
  ${prepositions[num(prepositions)]} ${determiners[num(determiners)]} ${nouns.plural[num(nouns.plural)]} ${prepositions[num(prepositions)]}
  ${adjectives[num(adjectives)]}, ${adjectives[num(adjectives)]} ${nouns.plural[num(nouns.plural)]}.`

  const sentence = `${words.charAt(0).toUpperCase() + words.slice(1)}`
  blockQuote.innerHTML = sentence
  blockQuote.setAttribute('id', 'quote')
  sentenceDisplayDiv.append(blockQuote)
  // container.append(sentenceDisplayDiv)
}

btn.addEventListener('click', () => makeSentence())
