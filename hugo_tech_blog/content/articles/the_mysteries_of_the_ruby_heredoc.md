+++
date = "2016-11-18T19:28:41+02:00"
publishdate = "2016-11-18T19:28:41+02:00"
draft = false
title = "The Mysteries of the Ruby Heredoc"
description = "A few tips on the ruby heredoc."
type = 'post'
toc = true

+++


As of writing this, I'm running Ruby version 2.3.0. Not all of this, particularly the stripped heredoc, is available in plain ruby before 2.3.0.

## Heredoc Basics

So, you need a string that's longer than a line, and you're sick of quotes and backslashes? And you might like to retain formatting? You want string interpolation too? Enter, heredoc.

Here's your basic, run of the mill, heredoc. You'll notice we use the `<<-` operator, and our safe-word, which we will use to end the heredoc.

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

This works, but it's clearly ugly. When you see it in a piece of code you're trying to navigate, it's more than a little disorienting. You could actually indent the text above, but, if you do that the string returned will also have leading spaces. In some cases, leading spaces can break things in unexpected ways.

## Stripped Heredocs

One thing that drives me nuts, is when I'm reading some code that contains heredocs, and suddenly you're all the way unindented. While in many cases this might be an indicator that something is wrong, there are many places I think it's acceptable, and even preferable to have an indented heredoc.

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

It's a small thing, but these little niceties really help when trying to internalize a complicated file quickly.

## The Rails Way

Long before ruby featured a stripped heredoc, Rails saw the need and implemented their own method. Here is [their implementation](https://github.com/rails/rails/blob/b422cda2ebfff4032f4c18271e96ad329c413dcc/activesupport/lib/active_support/core_ext/string/strip.rb#L22), which was added as an extension of `String`.

```ruby
class String
  def strip_heredoc
    indent = scan(/^[ \t]*(?=\S)/).min.try(:size) || 0
    gsub(/^[ \t]{#{indent}}/, '')
  end
end
```

This counts the minimum number of spaces before all lines of your heredoc, and indents accordingly. You'd use it like so.

```ruby
puts <<-MY_STRING.strip_heredoc
  here is some text
    and indented once here
MY_STRING
```

I mention this in part, because I found it useful, and you might find it useful if you're on an earlier version of ruby. If you're 2.3 or later, I would prefer the Ruby implementation.

There's another reason this is worth looking at. It demonstrates how to extend string and write your own heredoc formatter.

## My Own Bastardization

It feels like I should feel guilty whenever I even consider adding an extension to a core class. I don't though. But, I will offer a caveat. Don't go monkey patching carelessly! Be sure you're not overwriting anything important, or you'll be in a world of hurt.


![A world of hurt](images/monkeypatching-world-of-hurt.jpg)

I, for one, believe that monkey patching can be done in respectable ways.

Enough with the warnings. Here's the use case that got me thinking about it. Recently, I've been having frequent need to test the output of various CSVs. There are various ways to do this... I could have fixtures, but that's a lot of fixtures to manage. I could simply let the lines run on long, but that's very difficult to read, and even more difficult to format. It's a monkey patch for string that allows you to write in a clearer format, that allows you to respect line length limitations.

Take a CSV for example, but, also imagine it's much wider.

```csv
first_name,last_name,favorite_hobby,favorite_color,favorite_food,favorite_kind_of_motorcycle
Cory,Logan,climbing,red,pizza,drz400
Paul,Baker,reading,blue,cheese,klr650
```

So, we could just stuff it in a heredoc and call it done, but that leaves the line length too long to look at on one screen. If you're running something like rubocop, you probably have a line length limit to contend with as well.

So, here it is with a specially formatted heredoc, in which, two line breaks equal one. Allowing you to break lines, wherever, as long as you don't need two.

```ruby
csv_string = <<-CSV.csv_doc
	first_name,last_name,favorite_hobby,favorite_color,
	favorite_food,favorite_kind_of_motorcycle

	Cory,Logan,climbing,red,pizza,drz400

	Paul,Baker,reading,blue,cheese,klr650
CSV
```

This formatting is all about being able to read it in the context of code or a test. In order to achieve this formatting, this is where the monkey patch comes in.

```ruby
class String
  def csvdoc
    stripped = strip_heredoc.gsub(/\n(?!\n)/, '')
    "#{stripped}\n"
  end
end
```
This also inserts an extra empty line at the end of the string, to make it a valid CSV. This could be modified to many different cases. I've just been running into the CSV example a lot. And if you're really not into monkey patching, you might consider implementing it as a standalone method that you pass a string to.

Have fun!
