function Class(teacher,standard,subject,students,school,city){    /// object of projector type
    this.teacher=teacher;
    this.subject=subject;
    this.standard=standard;
    this.students=students;
    this.school=school;
    this.city=city;
}

let class1= new Class('Vijaya Lakshmi','10th','Maths',60,'Gowtham model','Rajahmundry');
console.log(class1);
let class2= new Class('Lakshmi','9th','Physics',50,'Chaitanya','Vizag');
console.log(class2);
let class3= new Class('Sunitha','10th','Biology',60,'Narayana','Guntur');
console.log(class3);
let class4= new Class('Radhika','12th','Maths',30,'Tirumala','Hyderabad');
console.log(class4);
