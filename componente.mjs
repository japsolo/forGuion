class Person {
	constructor (name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}

	static imAHumanBeen () {
		return `I'm a human been`;
	}

	sayHello () {
		return `Hi, I'm ${this.name} ${this.lastName}`;
	};
}

const coso = 'coso';

export default Person;
export { coso }