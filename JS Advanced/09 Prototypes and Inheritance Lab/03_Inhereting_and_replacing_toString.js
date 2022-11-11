function toStringExtension() {
    class Person{
        constructor(name, email){
            this.name = name
            this.email = email
        }

        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject, props) {
            super(name, email, props);
            this.subject = subject
        }

        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
        
    }

    class Student extends Person{
        constructor(name, email, course, props) {
            super(name, email, props)
            this.course = course
        }

        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
