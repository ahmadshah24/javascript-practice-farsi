// class Rectangle{
    
//     name = ''
//     constructor(x, y)
//     {
//         this.x = x;
//         this.y = y;
//     }
//     set area(name)
//     {
//          this.name = name;
//     }
//     get area(){
//         document.write(`this area of the rectangle = ${this.x * this.y}`);
//     }
// }


// const rec1 = new Rectangle(22,33)
// rec1.name = 'shah'
// document.write(rec1.name,"<br>")
// rec1.area()


class Person{
    constructor(_name, _age, )
    {
        this.name = _name;
        this.age = _age;
    }

    eating()
    {
        document.write(`${this.name } is eating <br>`)
    }
    
    playing()
    {
        document.write(`${this.name } is playing <br>`)
    }

    add(a, b)
    {
        document.write(`${a} + ${b}  = ${a+b}`)
    }
    

}


class Student extends Person{


    constructor(_name, _age, _className)
    {
        super(_name, _age);
        this.className = _className;
    }

    studying()
    {
        document.write(`${this.name} is at class ${this.className} and he is  studying <br>`)
    }
    add(a=33, b=444, c=4444)
    {
        document.write(`${a} + ${b} + ${c}  = ${a + b + c}`)
    }
    eating()
    {
        super.eating();
        document.write(`${this.name} is not eating too much <br>`)
    }
}


const std1 = new Student('ali',33, 'nine')

std1.eating()
std1.playing()
std1.studying()
std1.add(33,44,33)
std1.add()
std1.add(b=333,a=333,c=333,)