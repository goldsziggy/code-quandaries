/**
Going for something different with today's coding challenge.  Lets try to do the below challnege in a language you aaren't familiar/comfortable in.  Maybe add an emoji to the challenge with the language you'll attempt it in!

Two Distinct Elements
In each input list, every number repeats at least once, except for two.

Write a function that returns the two unique numbers.

Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
Notes
Keep the same ordering in the output.

Source: https://edabit.com/challenge/yL5WmWTCNwwb4GnR7
*/

package main

import (
	"fmt"
	"reflect"
	"testing"
)

func returnUnique(inputList []int) []int {
	var results []int
	frequency := make(map[int]int)

	for _, v := range inputList {
		// fmt.Printf("i=%d | v=%d\n", i, v)
		_, count := frequency[v]
		if count {
			frequency[v] += 1
		} else {
			frequency[v] = 1
		}
	}

	for val, count := range frequency {
		if count == 1 {
			results = append(results, val)
		}
	}

	// fmt.Printf("%v\n", frequency)
	return results
}

func TestReturnUnique(t *testing.T) {
	fmt.Println("=== Starting Two Distinct Elements Test ===")
	test1 := returnUnique([]int{1, 9, 8, 8, 7, 6, 1, 6})
	test2 := returnUnique([]int{5, 5, 2, 4, 4, 4, 9, 9, 9, 1})
	test3 := returnUnique([]int{9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8})

	if !reflect.DeepEqual(test1, []int{9, 7}) {
		t.Errorf("test1 failed: expected [9,7], got %v", test1)
	}
	if !reflect.DeepEqual(test2, []int{2, 1}) {
		t.Errorf("test1 failed: expected [2,1], got %v", test2)
	}
	if !reflect.DeepEqual(test3, []int{5, 6}) {
		t.Errorf("test1 failed: expected [5,6], got %v", test3)
	}
}

// func main() {
// 	fmt.Println(Hello())
// }
