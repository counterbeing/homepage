+++
date = "2017-01-08T16:45:38-08:00"
title = "Exporting A Zone File From Mediatemple"
description = "How to get DNS info out of MediaTemple"
pubished = true
type = "post"
+++

I was in the process of moving my DNS from MediaTemple to Route53 and was having trouble making sure I'd moved all of the entries. I decided I'd just export a zone file to do a comparison in a text editor.

Surprise! You can't.

Instead, here's a quick bit of jQuery, which is already available in the MediaTemple control panel. Just navigate to the zone file editor, open your console, and use this:

```javascript
$.each($(".dns_record"), function(i, el) {
  name = $(el).find(".u-nowrap input").val()
  type = $(el).find("select.dropdown-select").val()
  data = $(el).find("td input.textInput--full[name^='data']").val()
  console.log(name + "  " + type + "  " + data)
})
```

From here, it's pretty easy to clean up and convert. Good luck!
