
//--------------------------------------------
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}
//----------------------------------------------
class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}
//-------------------------------------------
class Deposit extends Transaction {

  get value() {
    return this.amount
  }
}
//---------------------------------------------
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

//------------------------------------------
/* Class Structure Notes:
-Account is a Class that contains a constructor method :
 1.) creates a username property with a initial key value of whatever is passed as the constructor arg
 2.) creates a balance property with a initital key value of 0

-Transaction is a Super Class with two Sub Classes (Deposit and Withdrawl):
-within the Super Class is a constructor method (that is adopted by both sub classes) that:
- the constructo receives two args: 1.) an ammount  2.) an account
-the subclasses target the correct account and either deposit(add) the value of ammount or subtract (withdraw)

Driver Code Notes:
create a new Account object instance called billybob and store it in a var called myAccount
*/
//create a new account named billybob
const myAccount = new Account('billybob');

//log to the console the curent value of billybobs account
console.log('Starting Balance:', myAccount.balance);

//new object instance is created t1: deposit 120$ into billybobs account
const t1 = new Deposit(120.00, myAccount);
t1.commit();

//new object instanct is created: withdraw 50 from billybobs account
const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

// -log to the console the new value of billybobs account balance after the two obj instances above
//  modified it
console.log('Ending Balance:', myAccount.balance);
