---
title: "Find Adjascent Squares for a Coding Challeng"
date: "2019-05-20T01:11:59-04:00"
description: ""
toc: false
type: post
categories: []
tags: ["ruby"]
images: []
draft: false
---

{{< figure src="images/grid.png" caption="Random grid of numbers." >}}

I spotted a challenge that was something like this online, and I adapted it.
There was something that I wanted to understand a little bit better. The
interesting thing here is about the data structures used, to increase
efficiency.

### Find Contiguous Squares

Imagine you have a grid of `n` width and height, and it's populated with random
numbers. It could be represented something like this:

```json
[
  [1, 1, 2, 2, 1, 1, 1, 2, 1, 2],
  [1, 0, 0, 2, 1, 1, 2, 2, 0, 2],
  [0, 1, 0, 1, 2, 1, 0, 1, 2, 2],
  [2, 1, 2, 1, 0, 0, 0, 2, 1, 0],
  [0, 2, 1, 2, 1, 1, 2, 1, 2, 0],
  [1, 1, 1, 2, 1, 1, 0, 0, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 1, 2, 1],
  [2, 1, 1, 2, 2, 1, 2, 0, 1, 1],
  [0, 1, 1, 2, 2, 0, 1, 0, 2, 2],
  [2, 2, 2, 1, 0, 1, 1, 0, 2, 2]
]
```

In fact, that's the exact grid that the image is of above.

Now, you need to write a program that accepts the grid and returns the greatest number of contiguous squares that have the same value. In this case, the function should return `11`. If you look for a moment you'll find the cluster of 11 orange squares, it's pretty trivial for the human brain to do.

But, let's expand this to say, a million squares. The following program can do this on my computer in about 5 seconds.

```ruby
class GridChecker
  def initialize(grid)
    @assessed = {}
    @clusters = []
    @grid = grid
  end

  def run
    @grid.each_with_index do |row, ri|
      row.each_with_index do |_col, ni|
        coords = [ri, ni]
        next if @assessed.key?(coords)
        @assessed[coords] = nil
        @clusters.push(find_cluster(coords, true))
      end
    end
    @clusters.map(&:length).max
  end

  def find_cluster(coords, first = false)
    @in_cluster = [] if first
    @in_cluster.push(coords)
    adjascent_squares(coords).map do |adjascent_coords|
      next if @assessed.key?(adjascent_coords)
      next if @in_cluster.include?(adjascent_coords)
      @assessed[adjascent_coords] = nil
      find_cluster(adjascent_coords)
    end
    @in_cluster
  end

  def adjascent_squares(coords)
    neighbor_coords(*coords).filter do |x|
      within_grid(*x) &&
        @grid[x[0]][x[1]] == @grid[coords[0]][coords[1]]
    end
  end

  def within_grid(row, col)
    row >= 0 &&
      row < 10 &&
      col >= 0 &&
      col < 10
  end

  def neighbor_coords(row, col)
    [
      [row - 1, col],
      [row, col - 1],
      [row + 1, col],
      [row, col + 1]
    ]
  end
end

```

### The Twist

Here's the thing that surprised me a little bit, and took some learning. I've
always thought about arrays as being simpler data structures than hashes (or
objects or libraries depending on your language), and so in my mind I had just
taken for granted that using them was more efficient for many things. But this
simple task very quickly demonstrats that this is not the case.

The key here is that in the `@assessed` instance variable, I've used a hash
rather than an Array. It's easy to use either in this case. It feels weird to be
assigning arbitrary `nil` values that aren't even used for anything. But the
thing is that the look up time on this ever growing variable is so much faster
when using a hash, and it doesn't slow down the way it does with an array. Using
an array for the same thing means that you have to iterate over it repeatedly,
leading to a huge slow down as you add more data.

### Something Else to Play with

Here's a quick script to generate a grid of n dimensions to play with. It's a
quick way to get started with your own implementation, or to play with
performance.

```ruby
require 'json'

def gen_grid(n)
  n.times.map do
    n.times.map do
      rand(3)
    end
  end
end

File.write('grid.json', gen_grid(1000).to_json)
```
