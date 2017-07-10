+++
date = "2016-12-13T18:22:26-08:00"
title = "A Single Singleton in Ruby"
description = "What is a singleton anyway?"
type = "post"
toc = true
tags = ["ruby"]
images = [ ] # overrides the site-wide open graph image
+++

## The singleton design pattern

I'm relatively new the the concept of the singleton, even though I've been programming for a number of years. I've run into several instances in which I new that this was exactly what I needed, but did not have a name for it. Here, I'm going to try to explain it to myself a year ago. There are a few questions I'll try to address.

- Why do I care?
- What does it do?
- How should I implement it?

## Why do I care?
A lot has been written on design patters, and by people with a lot more experience than myself. I'd recommend picking up a book on the topic and learning a bit more if it's a new concept to you. Each one of these patterns is a tool that you can use to solve problems that have been solved over and over again. They can hasten, and solidify your development, as well as give you a way to succinctly communicate big ideas.

This particular pattern generally comes into play when you need some kind of global object to not only provide a set of methods, but also manage some kind of global state.

## What does it do?

I'll give you a real world example to help make the point. In working on an application that was in charge of sifting through large piles of data, and alerting a person for errors several times a day, I needed a way to keep track of the errors in memory. It also needed to be available to many different classes in the application.

The singleton fits this almost perfectly.

I'll admit, there are many cases when it's a poor choice for the pattern to use. Any time you only need state for a little while, or if you need more than a handful of methods on an object.

In essence, the singleton is for simple objects that are action based, and that you only want one of in the instance of your application.

## How should I implement it?

There are different ways to implement the singleton pattern. Let's first go over an example of the pattern implemented by hand, so that you can see how it works, before we try to hide some of the details. We'll stick with the error logger example.

```ruby
class ErrorLogger
  # This prevents the class from being instantiated. With a sigleton, we don't
  # want more than one instance. That's pretty much the definition.
  private_class_method :new

  # This class variable will be in charge of storing the global state of our
  # singleton in memory. All of the information will end up here. We'll access
  # it through another method of our choosing.
  @@log = []

  # Everything inside of this will be declared as a class method.
  class << self
    def log_an_error(error)
      @@log << error
    end

    def print_log
      @@log.inspect
    end
  end
end

ErrorLogger.log_an_error('Server is on fire!')
ErrorLogger.print_log # => ["Server is on fire"]
```

There are other implementations of the singleton, but I prefer to simply have the class expose any methods directly on itself. Some other singletons have the class create a single instance of itself, and all methods are instance methods, and in that case you can use instance variables.

But, this can be simplified further with the help of ruby's built in [singleton module](https://ruby-doc.org/stdlib-2.3.0/libdoc/singleton/rdoc/Singleton.html). The one gotcha here, is that calling it behaves a little differently. These are now instance methods and must be called on the instance.

```ruby
require 'singleton'

class ErrorLogger
  include Singleton

  def initialize
    @log = []
  end
  def log_an_error(error)
    @log << error
  end

  def print_log
    @log.inspect
  end
end

error_logger = ErrorLogger.instance
error_logger.log_an_error('Killing me softly...')
error_logger.print_log # => ["Killing me softly..."]
```

In my opinion, it doesn't look much better than the first example. But, it does avoid the use of class variables, which is nice.

I think though, the one that I'll probably reach for next time, is using module methods on a module. I know that this overlooks a few things, like the fact that modules can be mixed into classes, and you don't really want that with a singleton. But, I'd say, in all practical terms, just don't do that.

```ruby
module ErrorLogger
  class << self
    def log
      @log ||= []
    end

    def log_an_error(error)
      log << error
    end

    def print_log
      log.inspect
    end
  end
end

ErrorLogger.log_an_error('Whoops!')
ErrorLogger.print_log # => ["Whoops!"]
```

There are other great articles that dive further into the topic. I'd really recommend [Practicing Ruby's take on the topic](http://practicingruby.com/articles/ruby-and-the-singleton-pattern-dont-get-along).
