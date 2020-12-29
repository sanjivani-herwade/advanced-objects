
// const product = new Object({
  // name: 'Oriflame'
// })

// someNewProperty
// Object.prototype.someNewMethod = () =>'It is a beautiful girl' 


// hasOwnProperty
// console.log(product.someNewMethod)
// console.log(product)


// Primitive value: string, number, boolean, null, undefined
//const project = ['anu', 'panu']
        //console.log(project.hasOwnproperty(member))


    //const project = new Array(['anu', 'panu'])
        //console.log(project.hasOwnproperty(member))

    //const getScore = () => 1
        //console.log(getScore)

    //const company = 'Apple'
       // console.log(company)


---------------------------------------------------------

  const puzzleEl = document.querySelector('#puzzle')
  const guessesEl = document.querySelector('#guesses')
    const letter1 = new Hangman('blue', 5)

puzzleEl.textContent = letter1.getPuzzle()
guessesEl.textContent = letter1.remainingPens()


window.addEventListener('keypress' function (e) {
const guess = String.fromCharCode(e.CharCode)
letter1.makePens(Pens)


puzzleEl.textContent = letter1.getPuzzle()
guessesEl.textContent = letter1.remainingPens
})





