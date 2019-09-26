import Person, { coso }  from './componente.mjs';

const javi = new Person('Javi', 'Her');
console.log(javi.sayHello());
console.log(coso);

// async function test() {
// 	let response = await fetch('https://api.chucknorris.io/jokes/random');
// 	let responseJson = await response.json();
// 	let fromServer = responseJson;
// 	return fromServer;
// }

// console.log(test());



// class Student extends Person {
// 	constructor (name, lastName, age) {
// 		super(name, lastName);
// 		this.age = age;
// 	}
// 	setCourse(course) {
// 		if (course.length < 3) return;
// 		this.course = course;
// 	}
	
// 	getCourse() {
// 		return this.course ? this.course : 'No course assigned';
// 	}
// }

// const pepe = new Student('Pepe', 'Cotillon', 32);
// pepe.setCourse('FS Node');
// console.log(pepe instanceof Person);
// console.log(pepe.sayHello());
// console.log(pepe.getCourse());
// console.log(Person.imAHumanBeen());
// console.log(pepe);

// async function() {
// 	let fromServer = await fetch('https://api.chucknorris.io/jokes/random')
// 		.then(response => response.json())
// 		.then(responseJson => responseJson.myString)
// 		return fromServer;
// }

class Bondi {
	constructor (linea) {
		this.linea = linea;
	}
	static getPrecio () {
		this.precio = 20.15;
		return this.precio;
	}
}

console.log(Bondi.getPrecio());
