/**

The Nearest Element

Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.

Examples
nearestElement(10, [1, 100, 1000]) ➞ 0
// 1 is the number nearest to 10.

nearestElement(50, [100, 49, 51]) ➞ 2
// 49 and 51 are equally distant from 50, with 51 being the greatest.

nearestElement(-20, [-50, -10, -30]) ➞ 1
// -10 and -30 are equally distant from -20, with -10 being the greatest.
Notes
N/A
Source: https://edabit.com/challenge/YE4GQfR9wRbpcPrgE


REPL: http://clojurescript.net/
 */
(defn abs [n] (max n (- n)))

(defn nearestElement [n arr]
  (def closeness [0,0])
  (doseq [[i x] (map-indexed vector arr)]
  (println i ":" x)
  (if (= i 0) (def closeness [0,x]))
  (cond 
    (> (abs (- (abs n) (abs (second closeness)))) (abs (- (abs n) (abs x)))) (def closeness [i,x])
    (and (= (abs (- (abs n) (abs (second closeness)))) (abs (- (abs n) (abs x)))) (> x (second closeness))) (def closeness [i,x])
  )
  (println closeness)
  
  (first closeness))
)

(nearestElement 50 [100, 49, 51])
