1. 3; It works since var is function scoped and our iteration only gets up to 3.
2. 150; Same as before, var is function scoped and our price is calculated accordingly without any problem.
3. 150; finalPrice uses var which is function scoped and thus able to be printed within the function.
4. [ 50, 100, 150 ]; discounted takes in an array and is declared with 'var' meaning the entire function has access to it. It is able to use the value and return it when called.
5. Error because 'let' is block scoped and not accessible outside of the for loop.
6. Error because 'let' is block scoped. The variable is useable in the for loop, but cannot be used outside of it.
7. 150; finalPrice was declared inside the function, and outside the for loop with 'let' so the entire function has access to it. When called with console.log, it prints out correctly.
8. [ 50, 100, 150 ]; discounted is declared with 'let' and so the entire function has access to it. Our console call was inside the function so it has access to discounted.
9. Error, since i is declared with 'let' thus it is block scoped inside the for loop and not accessible outside of it.
10. 3; This works since 'const' is block scoped and is accessible throughout the entire function.
11. [ 50, 100, 150 ]; It returns discounted correctly because it was declared with 'const' which is block scoped and accessible throughout the entire function.


12. 
a) student.name
b) student.'Grad Year'
c) student.greeting()
d) student['Favorite Teacher'].name
e) student.courseLoad[0]

13. 
a) 32
b) 1
c) 3
d) 3null
e) 4
f) 0
g) 3undefined
h) NaN

14. 
a) true
b) false
c) true
d) false
e) false
f) true

15. '==' compares two variables but does not pay attention to type. '===' also compares two variables, but does pay attention to their types.
16. check part2-question16.js file
17. The result is [2.4,6]; First after calling modifyArray([1,2,3], doSomething), we create a new array called newArr. We go through each element of our original passed array and call doSomething(num) for each element. This function returns the element * 2. When returned, the new value is pushed into newArr, and the forloop continues, until all of array is looped. newArr is returned and it contains an array of doubled values.
18. check part2-question18.js file
19. 
1
4
3
2

