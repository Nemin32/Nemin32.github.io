---
title: "Favorites based on the SW giveaway"
summary: "During the last giveaway OWI asked people to name their favorite game. I collected these responses."
---

# Statistics of the Stranger's Wrath Switch-giveaway

{% include caption.html url="/imgs/swswitch.webp" description="The prize of the giveaway" %}

On July 11th, 2020 OWI
[announced](https://nintendoeverything.com/giveaway-win-a-special-oddworld-strangers-wrath-switch-system-signed-by-lorne-lanning/)
the giveaway of a Stranger's Wrath-themed Switch, along with a few codes for the Switch games
provided by Nintendo Everything, the company they partnered up. To enter the raffle, one had to
enter their region (as only people from the USA are eligible to win the console), along with their
favorite game from the series. I've decided to collect these responses and try to find out which
game this sub-set of the fans liked the most.

One thing I want to make clear is that obviously going through this many comments is way too much
for something like this, so I had to cut some corners. Instead I opted to use a few [regular
expressions](https://en.wikipedia.org/wiki/Regular_expression) to do a good-enough job in a fraction
of the time.

At the creation of this page, the site had 1357 responses. My queries in total resulted in 1579
items (because some people mentioned multiple games in their response), with the following ranking:

{% include caption.html url="/imgs/swchart.webp" description="A chart showcasing the votes ordered by release date" %}

### **1. Abe's Oddysee** with **471** votes.

Amusingly the game's unorthodox spelling made it quite hard to get the real number of votes as there
were a lot of "Odyssey", "Oddyssy" and similar responses.  Ultimately I opted to combine three of
these queries into one, which gave the final number.

### **2. Stranger's Wrath** with **439** votes.

Not terribly surprising, considering this is a Stranger's Wrath giveaway, so obviously there will a
be bit of bias towards it as most voters hold the game dearly.

### **3. Abe's Exoddus** with **around 300** votes.

Counting this one wasn't easy as very tiny changes in the query gave me fairly different results.
However, after some fidgeting, 300 seemed to be fairly close to what reality is, so in this post
I'll stick with this number.

### **4. Munch's Oddysee** with **268** votes.

Apparently also known as "Munchies Oddysee," as evidenced by a surprising number of responses that
spell it this way.

### **5. New 'n' Tasty** with **134** votes.

The poor remake still doesn't find much love.

### **(6. Soulstorm** with **75** votes.)

I was hesitant on including this, because to be honest the game didn't even come out and as such
people can't even really consider it to be their favorite. But at the end of the day, it did get 75
votes, so who am I to exclude them.

## Transparency

If someone wishes to recreate my results, <a href="/assets/etc/responses.txt" download>here</a> is
the list I collected and these were the commands I used (Bash, using
[ripgrep](https://github.com/BurntSushi/ripgrep)):

~~~bash
for e in 'munch' 'stranger' 'tasty' 'ex+od+us' 'abe[^ ]* od[^ ]*ee' 'abe[^ ]* od[^ ]*sy' 'abe[^ ]* od[^ ]*sey' 'soulstorm';
do
  echo $e;
  rg -ic "$e" responses.txt;
done
~~~
