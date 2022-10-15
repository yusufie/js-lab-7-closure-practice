# JS Closure Practice

## Instructions

1. Create a closure that when called and passed a number sums the number with an inner variable and returns the sum. It should always remember the summation.
When called without an argument, it should return the last sum.
2. Create an object that holds a name, id, and a method called `toString` that returns a stringified version of the object.
3. Create an object that holds a name, password and a method called `validate` that takes a password and validates it with the users password

## Test Cases

Task 1

<code>
console.log(aggr(12)); // => 12
console.log(aggr(10)); // => 22
console.log(aggr()); // => 22
</code>

<br>Task 2

<code>
console.log(obj.toString()); // => {"name":"Ali","id":1}
</code>


<br>Task 3

<code>
  // Note: user's password is "23hj23"
console.log(obj2.validate("23hj23")); // ==> true
console.log(obj2.validate("3kml23")); // ==> false
</code>