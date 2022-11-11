function personAndTeacher() {
    class Person{
        constructor(name, email){
            this.name = name
            this.email = email
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject, props) {
            super(name, email, props);
            this.subject = subject
        }
        
    }

    return {
        Person,
        Teacher
    }
}
