/**
Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

becomes

"01234567802856734"

Another example
"the one bumble bee one bumble the bee"

becomes

"01231203"

// https://www.codewars.com/kata/59de469cfc3c492da80000c5

*/

fn get_index(arr: &Vec<&str>, word: &str) -> String {
    return arr
        .iter()
        .position(|&x| x == word)
        .unwrap()
        .to_string();
}
fn testit(sample_string: &str) -> String {
  let lower_word = sample_string.to_ascii_lowercase();
  let split = lower_word.split_whitespace();
  let mut collection = Vec::new();
  let mut compress: String = "".to_owned();
  for s in split {
    collection.push(s);
    compress.push_str(&get_index(&collection, s));
  }
  return compress
}

#[cfg(test)]
mod tests {
  use super::testit;
  #[test]
  fn compress_sentences() {
    assert_eq!(testit("Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"), "01234567802856734");
    assert_eq!(testit("the one bumble bee one bumble the bee"), "01231203");
  }
}

