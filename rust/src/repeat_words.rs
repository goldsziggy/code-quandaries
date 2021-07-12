/**
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that *"the"* is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.

Example:

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3
*/

fn count_adjacent_pairs(search_string: &str) -> usize {
  let mut words = search_string.split_whitespace().peekable();
  let mut counter = 0;
  let mut is_matching = false;

  while let Some(word) = words.next() {
    if let Some(&next) = words.peek() {
      if word.to_lowercase() != next.to_lowercase() && is_matching {
        counter += 1;
      }
      is_matching = word.to_lowercase() == next.to_lowercase();
    } else if is_matching {
      //there is no next but we were matching.
      counter += 1;
    }
  }
  return counter;
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_basic() {
    assert_eq!(
      count_adjacent_pairs(&""),
      0,
      "An empty string should return 0"
    );
    assert_eq!(
      count_adjacent_pairs(&"orange Orange kiwi pineapple apple"),
      1,
      "Case should be ignored"
    );
    assert_eq!(
      count_adjacent_pairs(&"banana banana banana"),
      1,
      "Once a word has been paired, it is ignored. countAdjacentPairs(\"banana banana banana\")"
    );
    assert_eq!(count_adjacent_pairs(&"banana banana banana terracotta banana terracotta terracotta pie!"), 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs(\"banana banana banana terracotta banana terracotta terracotta pie!\")");
    assert_eq!(
      count_adjacent_pairs(&"pineapple apple"),
      0,
      "A pineapple is not an apple. countAdjacentPairs(\"pineapple apple\")"
    );
  }
}
