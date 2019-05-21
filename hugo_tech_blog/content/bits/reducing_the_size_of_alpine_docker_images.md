+++
date = "2016-12-26T22:38:02-08:00"
title = "Reducing The Size Of Alpine Docker Images"
description = ""
pubished = true
type = "post"
+++

## Why the heck is my alpine docker image so huge?

That's a tough question to answer, especially when you have no idea what's
taking up all of the space.

This is a dirty little one-liner that yields a sorted list of all of the
packages on your alpine image by size. It does this by

- Getting the complete list from `apk info`
- Iterating over the results to ask `apk` for its size
- Removing the blank lines
- Combining the size lines and the name lines
- Sorting by size

```shell
apk info | while read a; do apk info -s $a; done | awk NF | sed 'Ns/\n/ /' | sort -k4 -n
```

It may be ugly, but now I can make an informed decision about wether or not
there are binaries that can be axed.
