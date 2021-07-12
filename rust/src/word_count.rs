/**
#[cfg(test)]
mod tests {
    use super::testit;
    #[test]
    fn sample_tests() {
        assert_eq!(testit("word"), 1);
        assert_eq!(testit("hello world"), 1);
        assert_eq!(testit("I love codewars."), 0);
        assert_eq!(testit("My cat waiting for a dog."), 1);
        assert_eq!(testit("We often read book, a word hidden in the book."), 2);
        assert_eq!(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2);
        assert_eq!(testit("This sentence have one word."), 1);
        assert_eq!(testit("This sentence have two word, not one word."), 2);
        assert_eq!(testit("One word + one word = three word ;-"), 3);
        assert_eq!(testit("Can you find more word for me?"), 1);
    }
}
// source: https://www.codewars.com/kata/56eff1e64794404a720002d2/train/rust
*/
use regex::Regex;

fn testit(sample_string: &str) -> i8 {
  let lower_word = sample_string.to_ascii_lowercase();
  let mut count = 0;
  for c in lower_word.chars() {
    if c == 'w' && count % 4 == 0 {
      count += 1;
    }
    if c == 'o' && count % 4 == 1 {
      count += 1;
    }
    if c == 'r' && count % 4 == 2 {
      count += 1;
    }
    if c == 'd' && count % 4 == 3 {
      count += 1;
    }
  }
  return (count / 4) as i8;
}

#[cfg(test)]
mod tests {
  use super::testit;
  #[test]
  fn word_count() {
    assert_eq!(testit("word"), 1);
    assert_eq!(testit("hello world"), 1);
    assert_eq!(testit("I love codewars."), 0);
    assert_eq!(testit("My cat waiting for a dog."), 1);
    assert_eq!(testit("We often read book, a word hidden in the book."), 2);
    assert_eq!(
      testit("When you in order to do something by a wrong way, your heart will missed somewhere."),
      2
    );
    assert_eq!(testit("This sentence have one word."), 1);
    assert_eq!(testit("This sentence have two word, not one word."), 2);
    assert_eq!(testit("One word + one word = three word ;-"), 3);
    assert_eq!(testit("Can you find more word for me?"), 1);
  }
}
