/**
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

Example
is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */

Source: https://www.codewars.com/kata/5262119038c0985a5b00029f
*/
fn is_prime(num: i64) -> bool {
    println!("We are checking if {} is prime", num);
    if num < 2 {
        return false;
    } else if num <= 3 {
        return true;
    } else if num >= 10000 {
        let total = num.to_string().chars().map(|x| x.to_digit(10).unwrap()).sum::<u32>();
        println!("{}", total);
        println!("{}", total % 3 != 0);
        return !(total % 3 == 0)
    } else if num % 6== 5 || num % 6 == 1 {
        return true;
    }     
    return false;
}

#[cfg(test)]
mod tests {
  use super::*;
  #[test]
  fn is_prime_tests() {
    assert_eq!(is_prime(1), false, "1 is not prime");
    assert_eq!(is_prime(2), true, "2 is prime");
    assert_eq!(is_prime(-1), false, "-1 is not prime");
    assert_eq!(is_prime(393665281), false, "393665281 is not prime");
    assert_eq!(is_prime(1212184615), false, "1212184615 is not prime");
  }
}


