console.log('Running App.ts');

abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;
    // console.log(`describe ${this.id}: ${this.name}`);
  

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}


class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe(){
    console.log('IT Department..: ', this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string)  {
    if(!value) {
      throw new Error('Value invalid!');
    }
    this.addReport(value);
  }
  
  private constructor(id: string, private reports: string[]) {
    super(id, 'accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('id4', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting department ID..: ', this.id)
  }

  //overwriting addEmployee method
  addEmployee(name: string) {
    console.log('AccountingDepartment->addEmployee()')
    if(name === 'mauricio') {
      return;
    }

    this.employees.push(name);
  }


  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

}

//Tests
const employee1 = Department.createEmployee('MAUZ');
console.log('STATIC..:', employee1, Department.fiscalYear);


const it = new ITDepartment('id12',['mauricio']);
it.describe();

it.addEmployee('Mauricio');
it.addEmployee('Mau');
it.addEmployee('Mass');

it.printEmployeeInformation();
console.log(it);



// const accounting = new AccountingDepartment('id13',[]);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

// accounting.addReport('Some report here...');
// accounting.addReport('Some report here2...');
// accounting.addReport('Some report here3...');
// accounting.addReport('Some report here4...');

// accounting.describe();
// console.log('lastReport..: ', accounting.mostRecentReport);

// accounting.mostRecentReport = 'some new report!';

// console.log('lastReport2..:', accounting.mostRecentReport);


// accounting.printReports();
// accounting.addEmployee('asd');
// accounting.addEmployee('mauricio');
// accounting.addEmployee('asd2');
// accounting.printEmployeeInformation();


