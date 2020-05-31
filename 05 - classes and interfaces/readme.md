# Classes and Interfaces



## Classes 
```
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Value invalid!');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('id4', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting department ID..: ', this.id);
    }
    //overwriting addEmployee method
    addEmployee(name) {
        console.log('AccountingDepartment->addEmployee()');
        if (name === 'mauricio') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
```



## Interfaces
```
interface Named {
  readonly name: string
}

interface Greetable  extends Named {
  greet(text: string) : void;
}


class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(text: string) {
    console.log(text + ' ' + this.name);
  }

}
```