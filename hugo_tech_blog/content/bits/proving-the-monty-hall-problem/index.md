---
title: Proving the Monty Hall Problem
date: "2019-05-21T00:35:16-04:00"
description: ""
toc: false
type: post
categories: []
tags:
  - ruby
  - puzzles
images: []
draft: false
---

{{< figure src="doors.jpg" caption="Doors" >}}

When I first heard of the Monty Hall problem, I read about it in Sam Harris'
[The Moral Landscape](https://samharris.org/books/the-moral-landscape/), and it
took me a few minutes to really wrap my brain about it. Talking about it with a
few people since, I struggle to convince them that this really works this way. I
think part of it is that I still don't quite believe it. Which is why I'm going to
write a program that can run the problem over and over to show wether or not the
Monty Hall problem actually has a solution.

## The Monty Hall Problem Itself

Imagine you are a gameshow contestant standing in front of three doors. You know
that behind one door is a pile of money and the other two doors, there is
nothing. You then pick one door, let's say door A. After selecting a door, the
game show host points to one of the other two doors, door B, and tells you that
this door does not contain the prize. At this point you are offered the
opportunity to switch doors from door A to door C, or stick with your original
choice of door A.

Should you switch? What are the odds if you do or don't switch?

{{< hackcss-alert type="warning" >}}
If you keep reading you'll read the answer and the solution, if you want a
minute to think about it for yourself, pause here.
{{< /hackcss-alert >}}

To most people, it appears obvious that you have 50/50 odds in this case. But in
fact, you should always switch. If you don't switch, your odds of winning are
1/3, and if you do, your odds are 2/3.

You should always switch.

### Explanation of why this works

When you first guess at a door your odds are exactly `1/3`. So your odds of
picking wrong are `2/3`. Once one door is eliminated, it's still true that your
probably picked incorrectly, thus, you should switch doors.

### Code to Prove It

Here we run the experiment 10k times to show what the odds really are.

```ruby
def gameshow(switch)
  doors = [1, 0, 0].shuffle
  choice = rand(3)
  removed_door = [0,1,2]
    .reject { |d| d == choice }
    .filter { |d| doors[d] == 0 }
    .sample
  switched_choice = [0, 1, 2]
    .reject { |d| removed_door == d || choice == d }
    .first
  choice = switched_choice if switch
  doors[choice]
end

def run_experiment
  switch_results = 10_000.times.map do
    gameshow(true)
  end.sum / 100.0

  stay_results = 10_000.times.map do
    gameshow(false)
  end.sum / 100.0

  puts "By switching you won #{switch_results}"
  puts "By staying you won #{stay_results}"
end

run_experiment
```

This returns as anticipated:

{{< hackcss-alert type="success" >}}
By switching you won 67.89 <br>
By staying you won 34.11
{{< /hackcss-alert >}}

### A more in depth explanation

{{< youtube 4Lb-6rxZxx0 >}}
