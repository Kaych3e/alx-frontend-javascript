interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;

// create interface Director
interface Directors extends Teacher {
  numberOfReports: number;
}

//Write function printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassinterface;
}

interface StudentClassInt {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInt {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
};

export { printTeacher, Studentclass };
