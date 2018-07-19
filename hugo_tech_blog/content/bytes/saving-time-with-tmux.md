+++
title = "Saving Time With Tmux"
description = "How I use tmux in my workflow to make my life better."
date = 2017-07-10T13:45:28+02:00
draft = false
type = "post"
toc = true
categories = []
tags = ["tmux", "terminal", "tools"]
images = [] # overrides the site-wide open graph image
+++

## What is a terminal multiplexer, and why do I care?

When you split up a terminal screen into sub-terminals, that's called terminal multiplexing. This is nothing new, [GNU Screen](https://en.wikipedia.org/wiki/GNU_Screen) has been around since 1987. Tmux is just screen's younger, nubile cousin. I'm about to explain how this simple technology can:

- Keep you organized.
- Lower the bar to get to work.
- Save you time.
- Enable teamwork.

Here's a quick demonstration:
<script type="text/javascript" src="https://asciinema.org/a/5k3urBv0sHluX7yUiopl0y0a3.js" id="asciicast-5k3urBv0sHluX7yUiopl0y0a3" data-size="small" data-speed="3" async></script>


## Multiple panes for multiple things

If you watch the demo above, you can see that you can make multiple panes, and multiple windows. You can organize them however you like.

The benefit of this is that you can have a server running in one pane, and an editor running on another. Or your test suite. Or whatever else you need to keep an eye on.

You might think, well, I can already do that in my terminal app. And maybe you can! But, can you do it on remote servers over ssh? And can you keep those panes running even if you quit your terminal app? Didn't think so.

## Keep your workspace tidy
What if, every time you went to start working on your app, your text editor opened, your test suite ran, git pulled the latest changes, and a development server launched? If that gets you at all excited, you should check out [tmuxinator](https://github.com/tmuxinator/tmuxinator). There are other options out there that do the same thing. But, with a simple configuration file, you can have all that and more!

## Work on remote servers
Sometimes when working on a remote server, it's useful to keep a long running task going, or at least be able to look at the same workspace you were looking at previously. By keeping your work in a tmux session, you can simply rejoin the session you were previously using. Everything is now exactly as you left it!

I realize it's not the best use, but there have been a couple of times I've used tmux to keep a long running task going in the background on a server. This way, when I close my laptop and walk away, everything keeps running. Imagine a long rake task, sure I could have put it in a background job, but it was a one off task, and writing the job would have been unnecessary work.

## Collaborate
You can have more than one person in a tmux session at once. This has to be one of the greatest things of all about tmux. It's like screen sharing, but so much faster, as it's just over an ssh session. There is nothing worse than trying to collaborate over a slow VNC screen share, it's like typing with boxing gloves. There are a few hoops to jump through, another user, ssh access, and permissions... But there's another option.

[Tmate](https://tmate.io/) is a fantastically handy little utility that does all of the hoop jumping for you. After installing `tmate`, just run it, and give your friend access by copying your secure ssh command. Even from the other side of the world, you can have lag-free collaboration!

## Next steps

Go give `tmux` a shot!

You'll need to learn some of the basic commands for getting around, and probably do a little customization. Good luck!
