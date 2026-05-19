# Exercise 280 - MONGO ID DATE
### May 17, 2026

Given a MongoDB ID string, return its creation time as an ISO 8601 string.

- A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.

For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".

You must input the parameters, if needed. We just provide the name of the function for you.

## Hints
- Plenty of ways to accomplish this. Try psuedocode first. First, get the first 8 letters of the id. Then, convert this hexadecimal (base-16) id to a decimal (base-10) id and convert that number to milliseconds. Come up with the next steps.
- "Unix timestamps are in seconds. JavaScript's Date() constructor expects milliseconds. 
How do you convert between the two?"
- JavaScript has a built in object for working with dates and times.
- That date object has a method that returns a string in exactly the ISO 8601 format required.
- Can you figure out a solution with one line? Slowly analyze at your solution and try to fit assignments, methods, and arguments into one line.