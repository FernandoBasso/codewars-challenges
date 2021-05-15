# Which are in?

- [Which are in](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript) challenge on Codewars.

The names `a1` and `a2` in this exercise are ill-chosen. It would be better to name them like “haystack” (the list of strings to search in) and `substrs` (the list of substrings to be searched into each string in the haystack). My  solution uses these names.

Also, the the parameters should have their order swapped. If we wanted to curry this thing, it would be more idiomatic and useful to have the haystack as the first parameter. I did not do it because then it wouldn't pass the Codewars unit tests.

