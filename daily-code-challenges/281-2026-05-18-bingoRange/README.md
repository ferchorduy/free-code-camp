# Exercise 281 - BINGO RANGE
### May 18, 2026

Given a bingo letter, return the number range associated with that letter.

| Letter | Number Range |
|--------|--------------|
|   "B"	 |     1-15     |
|   "I"	 |     16-30    |
|   "N"	 |     31-45    |
|   "G"	 |     46-60    |
|   "O"	 |     61-75    |

Return an array with all numbers in the range from smallest to largest.

You must input the parameters, if needed. We just provide the name of the function for you.

## Hints
- Plenty of ways to accomplish this. Try psuedocode first. Take in a letter. If the letter is x, return an array
with a range from a through b. Make a "case" for each possible input.
- What method appends an element to the end of an array?
- Can you figure out a solution with the use of the .push() method?
- Can you figure out a solution with use of an object?
- Can you figure out a solution with use of Array.from()?