---
title: "Use Terraform to Set Up Github Pages With Route 53"
date: 2019-05-17T15:31:13-04:00
description: Terraform can quickly build the DNS records for your github pages site. It's declarative, and easy to keep up to date, and replicate.
draft: false
---

It's nice to be able to spin up everything you need for github pages all in one
go. If you're using amazon for AWS, here's a basic terraform configuration that
should do everything you want in terms of DNS.

After doing this you'll still need to specify the CNAME on your target project,
and set the name servers on the domain. This requires that you're using
terraform to manage all DNS for this domain.

```
resource "aws_route53_zone" "primary" {
  name = "example.com"
}

resource "aws_route53_record" "main" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "example.com"
  type    = "A"
  ttl     = "300"
  records = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"]
}


resource "aws_route53_record" "www" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "www.example.com"
  type    = "CNAME"
  ttl     = "300"
  records = ["yourusername.github.io"]
}

output "name_servers" {
  value = "${aws_route53_zone.primary.name_servers}"
}
```
