{
  type Student = {
    name: string;
    study: () => void;
  };

  type User = {
    name: string;
    login: () => void;
  };

  type Person = Student | User;

  const randomPerson = (): Person => {
    return Math.random() > 0.5
      ? { name: 'john', study: () => console.log('Studying') }
      : { name: 'mary', login: () => console.log('Logging in') };
  };

  const person = randomPerson();

  function isStudent(person: Person): person is Student {
    // return 'study' in person;
    return (person as Student).study !== undefined;
  }

  // Usage

  if (isStudent(person)) {
    person.study(); // This is safe because TypeScript knows that 'person' is a Student.
  } else {
    person.login();
  }

}