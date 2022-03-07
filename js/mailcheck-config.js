var domains = ['gmail.com', 'aol.com']
var secondLevelDomains = ['hotmail']
var topLevelDomains = ['com', 'net', 'org']
// Variables created by us:
var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector('#sugestao')

// var superStringDistance = function (string1, string2) {
//   // a string distance algorithm of your choosing
// }

campoEmail.addEventListener('blur', function () {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains, // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    // distanceFunction: superStringDistance, // optional
    suggested: function (suggestion) {
      // callback code created by us
      console.log(suggestion.full)
    }
  })
})
