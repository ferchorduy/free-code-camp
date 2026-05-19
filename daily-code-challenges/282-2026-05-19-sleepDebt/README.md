# Exercise 282 - SLEEP DEBT
### May 19, 2026

Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.

- Include tonight's hours in the total time needed to catch up.
- If you've slept enough to cover tonight's target or more, return 0.

You must input the parameters, if needed. We just provide the name of the function for you.

## Hints
- Plenty of ways to accomplish this. Try psuedocode first. How many hours have you slept thus far? How many should you have slept thus far? What about after
tonight's target hours?
- Can you figure out a solution in two lines using Math.max() or a ternary expression (condition ? expression_if_true : expression_if_false)?