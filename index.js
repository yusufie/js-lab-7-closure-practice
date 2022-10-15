// Task 1
// Don't change the function name.
function summer(initialValue) {
    let result = initialValue;
    return function(number) {
      if (!number) {
        return result;
      }
      result += number;
      return result;
    };
  }
  
  
  // Don't change the variable name.
  const withTen = summer(10);
  console.log(withTen(10)); // 10
  console.log(withTen(12)); // 22
  console.log(withTen()); // 22
  
  console.log("With hundred")
  const withHundred = summer(100);
  console.log(withHundred(10)); // 10
  console.log(withHundred(12)); // 22
  console.log(withHundred()); // 22
  
  
  // Task 2
  // Don't change the variable name.
  let obj = {
    name: "Seda",
    id: "12",
    toString: function() {
      return JSON.stringify(this)
    }
  };
  
  console.log(obj.toString())
  
  
  // Task 3
  // Don't change the variable name.
  let obj2 = {
    name: "Seda",
    password: "Seda2022!!??",
    validate: function(matchPassword) {
      return matchPassword === this.password
    }
  };
  
  console.log(obj2.validate("123"))
  console.log(obj2.validate("Seda2022!!??"))