(defn explain-anagram [s]
  (let [[l r] (-> s
                  (str/replace " " "")
                  (str/split #"\?"))
        anagram? (= (sort l) (sort r))
        maybe-not (if anagram? "" " NOT")]
    (str l " is" maybe-not " an anagram of " r)))

