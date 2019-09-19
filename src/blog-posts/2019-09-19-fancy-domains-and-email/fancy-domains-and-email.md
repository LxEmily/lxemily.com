---
slug: fancy-domains-and-email
date: 2019-09-19
title: "Fancy Domains & Email"
published: false
---

Here's a short write up on how I set up my domain and email if anyone's interested. There's tons of separate tutorials out there, but I wanted to consolidate the information I needed to set it all up. 

## Domain

Got this site domain from [NameCheap](https://www.namecheap.com/). They provide [free .me domains](https://nc.me/) if you connect your [GitHub Education Pack](https://education.github.com/pack) or institution email. Or use "welcome30" for 30% off your first purchase. 

## DNS & Hosting

I host on [Netlify](https://www.netlify.com/)'s free tier. They assign free [HTTPS](https://www.netlify.com/docs/ssl/) if you use their DNS. If you're also using Netlify do look into getting domains from Netlify as it saves time configuring and propagating DNS.

## Email 

Lots of Googling later, I managed to set up sending and receiving emails at this domain through Gmail. If you send emails to this domain (example asdfghjkl at this domain dot com) it'll land in my inbox. 

There's 2 parts to this, email forwarding so you receive your emails, and email sending which lets you send emails from your specific domain.

### Email Forwarding

I use [ImprovMX](https://improvmx.com). Set up an account with them, and put in MX records at your DNS provider using their [guides](https://improvmx.com/guides/configure-your-dns/). They'll forward any emails you receive at your domain to your email provider.

### Email Sending (via Gmail)

You have 2 ways of going about this depending if you want "Sent via Gmail" to appear in your receiver's email client. 

If you don't mind, simple set up Gmail to send emails via `smtp.gmail.com`. ImprovMX has a [guide](https://improvmx.com/guides/send-emails-using-gmail/) with gifs. To summarize, set up two-factor authentication on your Google account, and create an app password specifically for email sending. Add your new address to Gmail through settings, and login using the new address and the app password. Pick `smtp.gmail.com` & the default ports. Wait for a confirmation email from Gmail and you're good to go. If they don't send the confirmation email immediately, try again in a few hours (I received mine a day later).

If you do mind, get the free tier from MailGun and put in your credit cards. Add your new address to Gmail similarly, but put in MailGun's details instead of Gmail's smtp. Do note that MailGun requires you to delete the entire account to remove the credit card. Alternatively, look into [Yandex Mail](https://mail.yandex.com/) or [Zoho Mail](https://www.zoho.com/mail) (which I've never tried). MailGun and Yandex Mail also does email forwarding.