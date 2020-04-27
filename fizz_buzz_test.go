/*
FizzBuzz Interview Question
Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
The output should always be a string even if it is not a multiple of 3 or 5
Examples
fizz_buzz(3) ➞ "Fizz"

fizz_buzz(5) ➞ "Buzz"

fizz_buzz(15) ➞ "FizzBuzz"

fizz_buzz(4) ➞ "4"

Source: https://edabit.com/challenge/WXqH9qvvGkmx4dMvp
*/
package main

import (
	"fmt"
	"reflect"
	"strconv"
	"testing"
)

func fizzBuzz(number int) string {
	var result string
	if number%3 == 0 {
		result += "Fizz"
	}
	if number%5 == 0 {
		result += "Buzz"
	}
	if len(result) == 0 {
		result = strconv.Itoa(number)
	}

	return result
}

func TestFizzBuzz(t *testing.T) {
	fmt.Println("=== FizzBuzz Test ===")
	test1 := fizzBuzz(3)
	test2 := fizzBuzz(5)
	test3 := fizzBuzz(15)
	test4 := fizzBuzz(4)

	if !reflect.DeepEqual(test1, "Fizz") {
		t.Errorf("test1 failed: expected 'Fizz', got %v", test1)
	}
	if !reflect.DeepEqual(test2, "Buzz") {
		t.Errorf("test2 failed: expected 'Buzz', got %v", test2)
	}
	if !reflect.DeepEqual(test3, "FizzBuzz") {
		t.Errorf("test3 failed: expected 'FizzBuzz', got %v", test3)
	}
	if !reflect.DeepEqual(test4, "4") {
		t.Errorf("test4 failed: expected '4', got %v", test4)
	}
}

// func main() {
// 	fmt.Println(Hello())
// }
