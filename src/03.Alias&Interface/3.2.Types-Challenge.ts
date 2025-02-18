// types challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `ID: ${staff.id}, Name: ${staff.name} is a manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `ID: ${staff.id}, Name: ${staff.name}, Department: ${staff.department}`
    );
  }
}

const Alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const Steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const Bob: Manager = { id: 1, name: 'Bob', employees: [Steve, Steve] };

printStaffDetails(Alice);
printStaffDetails(Bob);
printStaffDetails(Steve);
