+++
description = ""
date = "2016-12-15T19:51:29Z"
title = "What Process Is Hogging My Port On Mac Os"
type = "post"
draft = false
categories = ["technology"]
tags = ["terminal", "network"]
images = [ "" ] # overrides the site-wide open graph image
+++

## Address already in use

Damn. Did I leave a server running somewhere? Sometimes you're not sure where you left a server running, or where something is running you never knew about. I'm finally writing this down, as I always have to look it up. I found this solution in [a StackOverflow post](http://stackoverflow.com/a/30029855/250934).

Here's how to get all of the processes by what port they're using.

```bash
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

## As A Shell Function
Looking at it, I realized I would never remember it, given how infrequently I need it. So, I wrote a function. You should be able to pop this into your `.bashrc` or `.zshrc`, or whatever you're using.


```bash
function whats_using {
  if [ -z $1 ]; then
    sudo lsof -iTCP -sTCP:LISTEN -n -P
  else
    sudo lsof -iTCP -sTCP:LISTEN -n -P | grep $1
  fi
}
```


Now you can search for what's using a port like so, or don't specify a port number to return all results.

```bash
➜  whats_using 8181
com.docke  4082 cory   20u  IPv4 0xa05b24c922aef1a1      0t0  TCP *:8181 (LISTEN)
com.docke  4082 cory   21u  IPv6 0xa05b24c91a710329      0t0  TCP [::1]:8181 (LISTEN)
```
