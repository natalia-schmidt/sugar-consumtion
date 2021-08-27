# Sugar consumption

I made this project to practice:

* Arrow functions
* Anonimous functions
* If clause
* How to create and use DOM content with JS

This project was created to learn how to retale data with variables and methods.

For the data, I created an array that had the year's months. The value of each month corresponds to the linear increment in consumption of sugar that's been had throughout these months.

To get te user to interact with the program, I creates a form where he can determine the month, and I incorporate it to the JS using the method document.getelementByID (line 11).

I also had to create an if clause that determinates wether the information that the user provided is valid or not (line 12). This filters the information by the method isNaN(), that rejects values that are not a number, and by a range of valid numbers, because there are only 12 months in a year.

So that the number given by the user can represent the indicated month, I created the variable getNameMonth that subtracts 1 because the arrays start at 0. 

The amount of sugar consumed throughout the year was determinated in 15g and I created the variable sugar that multiplies getMonth*15 (line 20).

Finally, I created the function putMessage (line 1) so that I could comunicate with the user via the DOM. This function can be use in 2 different ways. On one hand, in the if clause it's used to inform the user that the input is not valid. On the other hand, in line 22 it is used to give the result of the grams of sugar. With this function I learned how to create text in the DOM.

This program can be use with others cases in which the value of the data that has an array increases or decreases linearly.
