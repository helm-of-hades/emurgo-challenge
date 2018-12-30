# Recursive vs Iterative Breakdown

This readme outlines the thinking behind 2 different approaches to tackling the provided problem - recursion & iteration.

Additionally, it outlines a funky moment of code-reuse I thought was cute.

## Running it
Running this should look like...

```sh
$ npm start  

> scratch@1.0.0 start /home/wiski/scratch
> flow-node index.js.flow

If this is the only output, test cases passed!
```

## Question A
```md
a) You have an array of characters (string) that may be '1', '0' o '*'. e.g. 10*00*0. The program
needs to generate an output of all the possible combinations by replacing * with an 0 and 1.
I.e. input> 10**0 output> 10000, 10010, 10100, 10110. Input > *0 output > 00, 10.

What are the limitations of your solution? If you would like to fix them what would you need
to do?

It should probably take you like 20 min.
```

My thinking around this problem sounded like:

> Generate the possible combinations of length N _recursively_ where N was the number of "*" characters in the provided input and `[1,0]` are the candidate options for each "combinatorial step".

then...

> Iterate through all combinations and interpolate their characters (`[1,0]`) ordinally - each one corresponding with a "*" character in the input string  

## Question B
```md
b) You have an array of lists e.g.; [[1,3], ['a'], [4,5]]. We would like to obtain all the
permutations between the lists. The answer for this example is: (1,a,4) (1,a,5) (3,a,4) (3,a,5).
Code a program that does this for any quantity of lists and elements on them.

It should probably take you like 20 min.
```
My thinking around this problem sounded like:

> We have a moment for code-reuse here.  Instead of having a _consistent_ set of candidate options at each combinatorial step - we can implement an interface (callback) that provides candidate options dependent upon the current depth in a recursive tree.  This is a clean-ish way of addressing the _"[...] permutations between the lists"_ requirement

## Addressing the limitations

The recursive solution can consume huge amounts of space when problem sets get big.

I chose to address this shortcoming by getting iterative!

The can toggle the solution to use the iterative implementation in the [./index.js.flow](./index.js.flow) file.
