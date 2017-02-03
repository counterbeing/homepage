---
title: Using Arel to do Things ActiveRecord Alone Cannot
date: 2016-11-10 06:20 UTC
tags: ruby rails sql
---

What's the point of using `Arel` directly you might ask? Sometimes there are things `ActiveRecord` simply can't do for you. At this point you could go to straight SQL to get the query you need. This is a perfectly workable solution in many cases, but sometimes, you want to re-use chunks of SQL, in a very programmatic way.

## Counting the occurrences of something



```
docker-compose run web rails db:create db:migrate
docker-compose run web rails g model Person name:string
docker-compose run web rails g model Vote candidate:string person_id:integer
```