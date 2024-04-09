class Human {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showInfo() {
        console.log(this.name + ', ' + this.age + ', ' + this.country);
    }
}

const human1 = new Human("Ilya", 21, "Belarus");
const human2 = new Human("Nastya", 17, "Belarus");

human1.showInfo();
human2.showInfo();