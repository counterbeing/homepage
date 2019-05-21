---
title: "Comparing Performance of Ruby and Golang With a Benchmark"
date: "2019-05-21T16:39:32-04:00"
description: ""
toc: false
type: post
categories: []
tags:
  - ruby
  - golang
images: []
draft: false
---

I recently [solved a coding challenge](/bits/bits/find-adjascent-squares-for-a-coding-challenge) using Ruby. I've been curious for some time about coding using Golang, and so I decided to port it over, and see what the performance difference was.

I made a small adaption for a better comparison. I'm now using a grid that has 100_000_000 squares on it. This is definitely a bit of work.

## The code

```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

var grid [][]int
var gridDim [2]int
var a = make(map[[2]int]bool)

func main() {
	jsonFile, err := ioutil.ReadFile(os.Args[1])
	if err != nil {
		fmt.Println(err)
	}
	json.Unmarshal([]byte(jsonFile), &grid)
	gridDim[0] = len(grid)
	gridDim[1] = len(grid[0])

	greatest := 0
	for rowIndex, row := range grid {
		for colIndex := range row {
			currentKey := [2]int{rowIndex, colIndex}
			_, hasKey := a[currentKey]
			if hasKey {
				continue
			}
			a[currentKey] = true
			total := findCluster(currentKey, true)
			if total > greatest {
				greatest = total
			}
		}
	}
	fmt.Println(greatest)
}

func getValFromGrid(coords [2]int) int {
	return grid[coords[0]][coords[1]]
}

func findCluster(coords [2]int, first bool) int {
	currentValue := getValFromGrid(coords)
	adjascentSquares := [4][2]int{
		{coords[0] - 1, coords[1]},
		{coords[0], coords[1] - 1},
		{coords[0] + 1, coords[1]},
		{coords[0], coords[1] + 1},
	}
	total := 1
	for _, v := range adjascentSquares {
		_, hasKey := a[v]
		if hasKey {
			continue
		}
		if withinGrid(v) && hasSameValue(currentValue, v) {
			a[v] = true
			total = total + findCluster(v, false)
		}
	}
	return total
}

func hasSameValue(val int, coords [2]int) bool {
	return getValFromGrid(coords) == val
}

func withinGrid(coords [2]int) bool {
	return coords[0] >= 0 &&
		coords[0] < gridDim[0] &&
		coords[1] >= 0 &&
		coords[1] < gridDim[1]
}
```

## The Benchamrk

{{< hackcss-alert type="success" >}}
ruby run.rb gen_grid_10000.json 933.50s user 26.53s system 95% cpu 16:45.07 total <br>
./grid gen_grid_10000.json 97.89s user 4.45s system 98% cpu 1:43.81 total
{{< /hackcss-alert >}}

As you can see from the above. Golang did the job at a remarkable 10x the rate of the Ruby implementation. The tradeoff is just that it's more annoying to write. I'll probably stick to ruby for most things, but golang is clearly worth consideration when there's a problem that requires a performance boost!
