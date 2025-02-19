{
  // Define an enum named UserRole
  enum UserRole {
    Admin,
    Manager,
    Employee,
  }

  // Define a type alias named User
  type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string]; // Tuple: [email, phone]
  };

  // Define a function named createUser
  function createUser(user: User): User {
    return user;
  }

  // Call the createUser function
  const user: User = createUser({
    id: 1,
    name: 'John Doe',
    role: UserRole.Admin,
    contact: ['john.doe@example.com', '123-456-7890'],
  });

  console.log(user);
}