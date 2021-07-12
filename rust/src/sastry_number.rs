/**
In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.
Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.
Examples
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)
isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square
isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)
Notes
A perfect square is a number with a square root equals to a whole integer.
You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.
Source: https://edabit.com/challenge/KjSae7LTFzYTC256A
*/

fn is_sastry(num: &i32) -> bool {
  let number = num.to_string() + &(num + 1).to_string();
  let f = number.parse::<f64>().unwrap();
  return f.sqrt().fract() == 0.0;
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn sastry_test() {
    assert_eq!(is_sastry(&183), true, "should be true");
    assert_eq!(is_sastry(&184), false, "should be false");
    assert_eq!(is_sastry(&106755), true, "Should be true");
  }
}
