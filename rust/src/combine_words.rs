/**
Your task is to Combine two Strings. But consider the rule...
By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...
And here's the rule:
Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
I think that's all;-)...
Some easy examples:
Input: "abc" and "cde"      => Output: "abCCde"
Input: "ab" and "aba"       => Output: "aBABA"
Input: "abab" and "bababa"  => Output: "ABABbababa"
Once again for the last example - description from KenKamau, see discourse;-):
a) swap the case of characters in string b for every occurrence of that character in string a
char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"
b) then, swap the case of characters in string a for every occurrence in string b
char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".
c) merge new strings a and b
return "ABABbababa"
There are some static tests at the beginning and many random tests if you submit your solution.
Hope you have fun:-)!
Source: https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/javascript
*/
extern crate itertools;

use std::collections::HashMap;

fn group_chars(word: &str) -> HashMap<char, i16> {
  let mut bucket = HashMap::new();
  for c in word.chars() {
    let ch = bucket.entry(c).or_insert(0);
    *ch += 1;
  }
  return bucket;
}

fn get_altered_word(word: &str, mut other_chars: HashMap<char, i16>) -> String {
  let mut buf = String::with_capacity(word.len());
  for c in word.chars() {
    let count = other_chars.entry(c).or_default();
    if *count % 2 == 1 {
      buf.push(c.to_ascii_uppercase());
    } else {
      buf.push(c);
    }
  }
  return buf;
}

fn combine_words(word1: &str, word2: &str) -> String {
  let mut buf = String::with_capacity(word1.len() + word2.len());

  let chars1: HashMap<char, i16> = group_chars(word1);
  let chars2: HashMap<char, i16> = group_chars(word2);

  buf.push_str(get_altered_word(word1, chars2).as_str());
  buf.push_str(get_altered_word(word2, chars1).as_str());

  return buf;
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn combine_words_test() {
    assert_eq!(combine_words(&"abc", &"cde"), "abCCde");
    assert_eq!(combine_words(&"ab", &"aba"), "aBABA");
    assert_eq!(combine_words(&"abab", &"bababa"), "ABABbababa");
  }
}
