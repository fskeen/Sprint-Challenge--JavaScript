// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// cubOID class

class CuboidMaker2 {
    constructor(props) {
    this.width = props.width;
    this.length = props.length;
    this.height = props.height;
    }

    volume() {
        return this.width * this.length * this.height;
    }

    surfaceArea() {
        return 2 *((this.width * this.length) + (this.width * this.height) + (this.length * this.height));
    }
}

// cube child class


class CubeMaker extends CuboidMaker2 {
    constructor(cubeprops) {
        super(cubeprops);
    }

    cubeSurfaceArea() {
        return (this.width * this.length) * 6;
    }
}

// Cuboid and cube objects to test

const cuboid1 = new CuboidMaker2({
    width: 5,
    length: 4,
    height: 5
});

const cube1 = new CubeMaker({
    width: 2,
    length: 2,
    height: 2
});
  
console.log(`

---- CLASSES TESTS ----
`) 

// Cuboid tests

console.log("Cuboid volume: ", cuboid1.volume()); // 100
console.log("Cuboid surface area: ", cuboid1.surfaceArea()); // 130

// Cube tests

console.log("Cube volume: ",cube1.volume()); // 8
console.log("Cube surface area: ", cube1.cubeSurfaceArea()); // 24
  
  