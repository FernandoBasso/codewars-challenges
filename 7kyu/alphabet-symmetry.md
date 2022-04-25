# Alphabet Symmetry



- [Alphabet Symmetry Challenge](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0)



## Intro

In both ASCII and UTF-8 encoding systems, the letter “a” in internally represented with the decimal value 97.

The English alphabet has 26 chars. From position 1 to 26, or, since we are programmers 🤣, from position 0 to 25.

| a    | b    | c    | d    | e    | f                          | g    | h    | …    |
| ---- | ---- | ---- | ---- | ---- | -------------------------- | ---- | ---- | ---- |
|      |      |      |      |      |                            |      |      |      |
| a    | b    | o    | d    | e    |                            |      |      |      |
| ✔    | ✔    | ✗    | ✔    | ✔    | 4 matches, 1 doesn’t match |      |      |      |
|      |      |      |      |      |                            |      |      |      |
| a    | b    | c    |      |      |                            |      |      |      |
| ✔    | ✔    | ✔    |      |      | all tree match             |      |      |      |
|      |      |      |      |      |                            |      |      |      |
| x    | y    | z    | d    |      |                            |      |      |      |
| ✗    | ✗    | ✗    | ✔    |      | 3 don’t match, 1 match     |      |      |      |

