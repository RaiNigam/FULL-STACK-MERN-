class Employee{
    name;
    position;
    salary;
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }
}
const employee1=new Employee("Nigam","Manager",80000);
console.log(employee1.getSalary());