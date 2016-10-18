---
title: My Favorite New Features of Ruby
date: 2016-10-17 05:02 UTC
tags: ruby
---

As of writing this, I'm running Ruby version 2.3.0. Not all of these features are new in version 2.3, but they stood out to me as exceptionally useful in my daily coding practice.


## Stripped Heredocs

One thing that drives me nuts, is when I'm reading some code that contains heredocs, and suddenly you're all the way unindented. While in many cases this might be an indicator that something is wrong, there are many places I think it's acceptable, and even preferable to have an indented heredoc.

Here's your basic run of the mill heredoc. You'll notice we use the `<<-` operator, and our safeword, which we will use to end the heredoc.

```ruby
def print_a_haiku
  haiku = <<-TEXT
ruby is pretty
the formatting perfected
lovely indented
  TEXT
  puts haiku
end

print_a_haiku
```

That would simply return the text as expected:

```ruby
ruby is pretty
the formatting perfected
lovely indented
```

This works, but it's clearly ugly. When you see it in a piece of code you're trying to navigate, it's more than a little disorienting. You could actually indent the text above, but, if you do that the string returned will also have leading spaces. In some cases leading spaces can break things in unexpected ways.


As of Ruby 2.3, we have a new way to handle this. We declare the heredoc using the `<<~` operator.

```ruby
def print_a_haiku
  haiku = <<~TEXT
    ruby is pretty
    the formatting perfected
    lovely indented
  TEXT
  puts haiku
end
```

It's a small thing, but these little nicities really help when trying to internalize a complicated file quickly.

