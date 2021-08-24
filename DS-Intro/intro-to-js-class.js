// JS isn't truly Object Orientated
// how to use class syntax
// constructors are used to instantiate it's containing class.
// static keyword: static methods are called without class instantiation. often used to //  create utility functions for an application.


class Student {
	constructor(fName, lName, year){
		this.fName = fName;
		this.lName = lName;
		this.year = year;
    this.tardies = 0;
    this.scores = [];
	}
	fullname(){
		return `Your fullname is ${this.fName} ${this.lName}`;
	}
  markAsLate(){
    this.tardies ++;
    if(this.tardies >= 3) return "you're expelled";
    return `${this.fName} ${this.lName} has been late ${this.tardies} times`;
  }
  addScore(score){
   this.scores.push(score); 
   return this.scores; 
  }
  calculateAvg(){
      //arrow functions have implicit returns without the curly braces
    let sum = this.scores.reduce((a,b) => a + b);
    return sum / this.scores.length;
  }
  
  static EnrollStudents(){
    return "Enrolling Students!";
  }

}

let firstStudent = new Student ("Jeremiah", "Peoples", 2);
let secondStudent = new Student("Josiah", "Peoples", 4);

secondStudent.addScore(5)
secondStudent.addScore(4)
secondStudent.calculateAvg();
Student.EnrollStudents();



////// Static keyword example
class Point{
  constructor(x,y){
    this.x = x;
    this.y =y;
  }
  
  static distance(a,b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    
    return Math.hypot(dx,dy);
  }
}

const p1 = new Point(5,5);
const p2 = new Point(8,12);
Point.distance(p1, p2);

