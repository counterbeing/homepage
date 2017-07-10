+++
title = "Serving Localhost to the Web with Reverse Ssh Tunnels"
description = "So, you have a webpage on your computer you want to show to a remote person?"
date = 2017-07-10T15:12:03+02:00
draft = false
categories = ["technology"]
tags = ["ssh"]
images = [ "" ] # overrides the site-wide open graph image
+++

**Note: If you don't have a server already, check my last tip.**

This topic is always a little tricky, so, here's the basic thing to know, as this is the most frequent use case.

Suppose you have a development rails server running on your local computer. You can access this server via `curl http://localhost:3000`. Which is to say, it's running on your localhost, on port 3000. You want your client to see it, to give you feedback, but they're nowhere near you, and you just want a quick way to show it to them.

Fortunately for you, you know about `ssh`. You know that it will take you just a few seconds to set up a reverse tunnel through an intermediate server. Cake! Huh?

Things you'll need, and their values in my example:

- Some kind of server on the web running sshd (yourserver.com)
- A local webserver accessible (0.0.0.0:3000)

```bash
ssh -NR 3333:localhost:3000 user@yourserver.com
```

Now that the tunnel is running, you should be able to access your web server at `http://yourserver.com:3333`. You can of course change either of the ports. There are a few caveats, but this is it in the basic form.

## Troubleshooting
If that's not working for you, chances are you need the `GatewayPorts yes` option added to the file `/etc/ssh/sshd_config` on the server. Go in there and add that line, then restart the `ssh` service. With ubuntu that's just `sudo service ssh restart`.

## Tips

- You can run this in the background if you want by adding the `-f` flag. I prefer to run it in the foreground when I'm just using it for a moment, or troubleshooting as it's easier to kill. If you run it in the background, and you just try to run it again on the same port, they will collide, and you will fail.
- Lower port numbers (lower than 1024) can't be used unless you're a super user on the system. Generally, it's just easier to use a higher port number on the remote server.
- The `-v` flag will give you the full ssh output with authentication. This is another common source of problems.
- If you have a few dollars, and not much interest in the topic, check out [ngrok](https://ngrok.com/), it's a great tool that really takes most of the trouble out of it. It also means you don't need to bring your own server! If you don't wish to run your own server, this is the way to go.
