class Person{

    constructor(name, age, gender, interests){
    this.name = name
    this.age = age
    this.gender = gender
    this.interests = [interests]
    

    }
    hello(){
        return('Hello, my name is '+this.name+' and I am '+this.age +' years old. I am a '+this.gender+' and I enjoy '+this.interests+'')
    }
}

    let person = new Person('Sanele',27, 'male',['playing soccer', 'watching movies','dancing'])
    let greeting = person.hello()
    console.log(greeting)
   
