 class Person {
    constructor(countryName, countryState, countryPopulation, likes = []) {
        this.countryName = countryName.toLowerCase().split('')
        this.countryName = countryName
        this.countryState = countryState
        this.countryPopulation = countryPopulation
     }
 
}
    class Employee extends Person {
        constructor(countryName, countryState, countryPopulation, position, likes) {
            super(countryName, countryState, countryPopulation, likes)
                this.position = position
                this.likes = likes

         }
    }
     
    //Person.prototype.getMethod = function () {
        //return '${this.countryName} is ${ this.countryState}.'

    //}
        Person.prototype.city = 'sangli'


    const name = new Employee('India', 'Maharashtra', 1111, 'Teacher', ['Teaching', 'Biking'])
        //name.getMethod = function () {
            //return 'I like u'
        //}
        console.log(name)
            
      


    const person = new Employee('Japan', 'Spane', 2233, 'Student', ['School', 'Student'])
      person.countryName = 'Austrelia'
      Person.getMethod = function () {
          return 'sanjivani herwade'
       }
       console.log(person)


