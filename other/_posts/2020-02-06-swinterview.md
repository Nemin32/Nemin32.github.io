---
title: Interview with David Fried
summary: David Fried worked on Stranger's Wrath as game and narrative designer. He gives his thoughts on several topics, including the game, Lorne Lanning, Soulstorm, Warcraft and others.
tags: ["spec"]
---

<style>
p {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  text-align: justify;
}

main > p:not(.intro) {
  width: 75%;
  background: #cacaca;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  border-left: 3px solid black;
}

blockquote {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

# Interview with David Fried
{:.no_toc}

{% include caption.html url="/imgs/thumbs/swinterview.jpg" description="Promotional image from Stranger's Wrath" %}

<br>
{:.intro}

[David Fried](http://designerdave.world/), who goes by the nickname DesignerDave on Discord, worked on several games including Oddworld: Stranger's Wrath. He was kind enough to answer a large number of questions over two hours, which can be read below. Before we started the interview, he shared with me what he worked on during Stranger's Wrath's development, which you can see here:
{:.intro}

- The Looten Duke (the boss and all of the enemies leading up to him).
- Elboze Freely (the boss and all of the enemies leading up to him).
- Fatty McBoomboom (the boss and all of the enemies leading up to him).
- Buzzarton City (all interactions, scripts were also used in other towns).
- Forest Sniper Run at the beginning of region 3 (before town).
- In region 1, section after the town and up to the 3 cutters at a rope climb.
- In town 1, the jail cell interactions between outlaws and jailer.
- Sniper enemy gameplay behaviors and defeat script.


I tried to split the interview into sections, but because of the topics overlap I recommend reading the entire article.
{:.intro}

* TOC
{:toc}

## Background

**Nemin:**
So first things first, I'd like to ask you to introduce yourself. Who are you and what's your job?

> **David Fried:**
>I'm Dave Fried/DesignerDave. Sometimes David Kristofer Fried or David K. Fried in credits. I'm a game and narrative designer who has been working within the industry for 20 years, starting at Blizzard Entertainment in 1998 as Quality Assurance, and moving to Level Design for the Starcraft Map of the Month program and War III campaign design. After that, lots of writing, lots of game design, then contracting for such things. Most recently on Wasteland 3 for inXile.
>
>I guess it's been 22 years now.
>
>Or 21... 22 in July.

**Nemin:**
Wow you worked on War 3 and Starcraft too? That's awesome, I love those games.  
Which campaigns?

> **David Fried:**
>All of them?
>
>I had a level in each one.
>
>Most famously The Culling of Stratholme in the human campaign for ROC.
>
>Which is now the unfortunate focus of many gamers ire in War III Reforged.

**Nemin:**
You made that? Holy crap.   
I see you definitely had a strong background. I imagine this played a part in you getting a job working on Stranger's Wrath. Were you employed at OWI or JAW? Or as a third-party contractor?

> **David Fried:**
>I was employed directly by OWI, and yes, my background with Blizzard was key to them putting me on the Stranger's Wrath team.
>
>Sherry McKenna btw is something of an unsung hero in the game industry. A CEO with a heart. 

**Nemin:**
What was the "elevator pitch"? How was the game explained to you that made you want to work on it?

> **David Fried:**
>Erik Yeo gave me the pitch and it was something like... You're a bounty hunter with live ammo... literally living creatures you can use to outsmart your prey.
>
>Erik Yeo btw is another unsung hero of Stranger's Wrath. He's a really astute lead game designer and it never would have shipped without him.

**Nemin:**
You mentioned you worked both at Blizzard and OWI, what were the differences between company cultures? Were they similar or very different?

> **David Fried:**
>Oh... very different. Very very different.

**Nemin:**
Oh?

> **David Fried:**
>Well, I mean fundamentally they both were studios with game developers who loved games. So that part was the same.
>
>The biggest difference was Sherry's adherence to a holistic work environment. We were almost never allowed to crunch, she made sure we all had gym memberships and tried to keep us in good health. Bagels instead of donuts for snacks. That kind of thing. I really appreciated her contributions to the company. Particularly after some of the stuff I went through at Blizzard.

**Nemin:**
So it was almost family-like, while Blizzard was a lot more, I don't know, corporate?

> **David Fried:**
>I wouldn't say Blizzard was totally corporate... at least not yet. But it was moving in that direction. It was more that Blizzard expected and abused the system in California that allowed salaried "specialists" to be overworked (and ironically) underpaid.

**Nemin:**
So the so to speak "downfall" of the company started way back.

> **David Fried:**
>I remember one night I was working on a campaign level to the point where I ended up crashing on the sofa at the office. One we had dragged into the level design area for meetings. And I woke up the next day... A Saturday mind you... and continued working. I went home at 6p.m. to take a shower and sleep in my own bed, and I got reprimanded the next day for not staying for a playthrough.
>
>There were inklings of corporate necrosis yeah...
>
>But the real fall kind of came when Activision bought them as far as I can tell.

## OWI in the Stranger's Wrath era

**Nemin:**
Damn, that sounds terrible. I see, after things like this OWI must have been like a whole new world.  
I forgot to ask, have you had any experience with the series beforehand? Did you play Oddysee, Exoddus or Munch?

> **David Fried:**
>I had no experience at all with the series prior to Stranger's Wrath.

**Nemin:**
That's interesting, so you went in basically knowing nothing except how the game was described to you above?

> **David Fried:**
>Well they brought me into the office for an interview and to show me the work environment and the game itself. After playing a snippet of it, I saw the potential. It was definitely something I wanted to work on.
>
>Primarily I was hired to help get it done... The bones of gameplay were there, but the structure for the campaign was missing. Erik Yeo was definitive in making it all come together. I just got to work on some cool sections of it and put in a few of my own ideas.

**Nemin:**
Do you know whether the whole using a crossbow thing was given from the very beginning or it started from something different and then Lorne Lanning or someone else realized "hey this is way more unique"?

> **David Fried:**
>As far as I know that was one of the fundamentals of the game coming together. It occurred before I was there either way so I can't really say when or how it happened. It was definitely a huge emphasis when they were pitching it to me.

**Nemin:**
Did Lorne Lanning ever speak to you about which Westerns were influencing SW?

> **David Fried:**
>Nope... 

**Nemin:**
Bummer!   
Next I'd like to ask about how the whole game development went. As it's know at this time OWI was partnered with EA. Did they ever interfere or tell you "this won't fly"?

> **David Fried:**
>Oh boy...
>
>Umm... Yeah fuck EA... let's start there.

**Nemin:**
I think that goes without saying nowadays.   
What happened?

> **David Fried:**
>So EA didn't come in until almost the very very end of the project. The game was basically done at that point, and their big pitch was "yeah, we fucked you before, but this time we're totally different Charlie Brown. Come on, kick the football, we'll market the hell out of your game."
>
>'lo and behold, we ship the game with EA and they literally said: "We don't know how to market this game."
>
>They did 2 full page spreads in 2 magazines... and that was it...
>
>Then profiteered off our game.
>
>Within 2 months, OWI was going to shut down.

**Nemin:**
So they were absent from the development and came in for the cash.

> **David Fried:**
>Yep.
>
>Grab the cash promising amazing marketing...
>
>Did no marketing... took the cash and left us to die.

**Nemin:**
That sucks. This reminds me, OWI used to have a three-title publishing deal with Microsoft, with Munch being the first title. Do you know anything about why EA was the one who uiltimately released the game and not MS?

> **David Fried:**
>Lorne kept all the rights to the game though as far as I know.
>
>I have no knowledge of the Faustian bargains that took place prior to joining the studio. And I should point out that my understanding of the EA deal was from overhearing conversations, not direct knowledge.

**Nemin:**
I see, so the game was more or less entirely based on Lorne Lanning's whims. Tell me what kind of a boss was he, did he leave you wiggle room to introduce your own ideas or was he very firm on what he wanted to see?

> **David Fried:**
>We had SO much freedom. He was more a big picture guy, but he also liked to play our levels and give feedback. He gave very good feedback. There was at least one day a week that he would come around and play whatever we were working on. I remember that when he would hand back the controller it would be hot... 

**Nemin:**
Haha. So walk me through this, you were given short descriptions over what he wanted to see, you created something, he played through it and then you talked about what's good and what would be better off changed?

> **David Fried:**
>No... it was more Erik Yeo would give you a basic idea of what's happening in an area, and you were given a chunk of area to work within. Then you would create the gameplay, the boss, the fight... Only the big cinematic moments were from Lorne as far as I know.
>
>For instance, Fatty McBoomboom and Elboze Freely were characters I came up with. The artists then did a rendition based on my description. Then Lorne would provide some feedback, then I made the area and gameplay.

## His work on Stranger's Wrath

**Nemin:**
Really? I had the impression that probably you were just given orders, but this is much nicer.  
This is a nice segue to my next batch of questions about the game itself:  
Firstly I'd ask what you know about "Stranger Arena"? Did you play it?

> **David Fried:**
>I've never heard of it.

**Nemin:**
That's surprising. Long story short it was a 4 player couch multiplayer deathmatch. I was hoping you could put an end to a long debate of why it was cut.

> **David Fried:**
>The studio died. Everything was cut.

**Nemin:**
Oh it was part of the game supposedly.

> **David Fried:**
>Ooooh...
>
>Not at any point that I worked there.

**Nemin:**
We have sources that claim that Lorne Lanning wasn't happy with it, but also that it was cut because the XBOX couldn't handle it.

> **David Fried:**
>But adding networking code... I can't imagine that wouldn't have pushed development out by years.

**Nemin:**
Oh well, do you know about any plans OWI had to include multiplayer in the game or was singleplayer the focus from start to finish?

> **David Fried:**
>It was always single player from pitch to ship... At least for the year+ I was there.

**Nemin:**
I see. I was talking with some people about this interview and someone asked me to ask you whether you know where the imagery for the Sekto Springs Dam came from?

> **David Fried:**
>I do not... I definitely was not on the art side of things. More game mechanics and writing.

**Nemin:**
Oh well. Next to finally talk about the things most related to you. What did you find most fun to make? You worked on quite a lot of stuff, was there anything that was special to your heart?

> **David Fried:**
>Hmm... All of it... I mean. How often do you get to create an entire arena from scratch and have OWI artists come and make it beautiful?
>
>I couldn't fail. 
>
>I was not an art guy by any means, so working in Maya was difficult. I had to learn the tool and their add-ons from scratch. Warcraft III was entirely done with proprietary tools that we got to help design... So it was quite a different thing to use what was essentially a high end art tool to make levels for me.
>
>Oh and they had their own scripting language based on C.

**Nemin:**
[Segfaults](https://en.wikipedia.org/wiki/Segmentation_fault) all day long? 

> **David Fried:**
>When I was creating the script for Fatty McBoomboom's boss fight, the lead programmer actually had to take over at one point to fix bugs.
>
>Oh yeah, lots of issues... but... not too bad for what it was.
>
>Charles Bloom was an amazing programmer, so he actually kept most things running smoothly.

**Nemin:**
This is actually one of my questions, what was the most difficult issue you had to tackle?

> **David Fried:**
>I think it was keeping all the Clackers lines up to the minute on what task Stranger was on. Lots of nesting... And once I'd done it, everyone else got to copy paste, so I guess that's nice that my efforts were used multiple times.

**Nemin:**
Well at least that shows that you made a robust solution.  
You said above that you designed and worked on multiple outlaws. Which one did you like the most? Either from a gameplay or design standpoint.

> **David Fried:**
>Hmm...
>
>Fatty I guess. Because I wrote his dialogue as well. His big bazooka flying attack... He yells out ***VERTICAL SLLIIIIIICE!!!*** Because at the time EA was demanding one.

**Nemin:**
Haha, they do deserve a bit of trolling.

> **David Fried:**
>A lot...

**Nemin:**
That boss was a tough nut to crack! I think I died multiple times until I got the hang of it.

> **David Fried:**
>Well he literally turns invulnerable at a few points. Primarily so you can't interrupt his big moves. I don't think we did a good job expressing that.
>
>Even if it is a standard "boss fight" mechanic.

**Nemin:**
I gotta say, I didn't realize that.

> **David Fried:**
>Yeah, which is... problematic.
>
>At least from a user experience standpoint.

**Nemin:**
Well, too late for tears, so let's not linger on it.  
You wrote that you worked on the jail cell in the first city and the conversations that happen inside between the outlaws. How come none of the later cities had something like that? Time constraints?

> **David Fried:**
>I don't know honestly... Yeah I guess time constraints. I could easily have done something like that for them. A lot of those nice fine touches came from Erik Yeo though, and I think he was stressed out about getting the game done.
>
>And what I mean is, Erik would come up with the idea and assign it.
>
>The first area jail cell convos being one of them.

**Nemin:**
I really liked that part, gave the outlaws some additional character
and made the world feel more connected

>
>**David Fried:**
I agree, I enjoyed making it too.
Particularly because it's one of those niche hidden things that only "good" bounty hunters can get by taking them alive.
It's like a bonus/secret. 

**Nemin:**
Yeah, I liked the duality of being presented with the option to not kill the outlaws too. It was a pretty unique mechanic.
Was that already in when you started working on the game?

> **David Fried:**
>That was one of my favorite parts as well.
>
>Yes, that was always there. Lorne and I think Sherry have a thing about not having to murder.

**Nemin:**
I see!
You also worked on the section where you have to dodge a lot of snipers before reaching a city. They say something about activating infrared sensors, so you can't hide in bushes.  
Why did you choose to disable stealth in this section? The whole snipers can see into bushes mechanic doesn't come up before, so I imagine this sequence prompted you to introduce it.

> **David Fried:**
>Wellll...
>
>You see the "bushes" were actually special zones with triggers around them, and we wanted you to move through the Sniper area fast.
>
>As soon as you have lots of underlying brush in a lush forest... Everything looks like you can hide in it.
>
>But if you move through that section slowly, it's like... gonna be 10 minutes of nothing.

**Nemin:**
I see, so it was to keep up the pacing.

> **David Fried:**
>Yeah definitely.
>
>And in playtesting people thought they could hide...
>
>So we warn them you cannot.

**Nemin:**
Yeah that was a great idea, had they not said that, I probably would've chosen the more meticulous approach.
There is that running gag with the Looten Duke that he really doesn't want to go back to jail, because he has very bad memories about his time spent in a cell with Blisterz Booty.
While the game goes out of it's way to never answer that this experience was, do you know what it is? Or if not, what's your headcanon?

> **David Fried:**
>It's in the name.
>
>Blisterz Booty.
>
>He puts... Blisters... on your...
>
>I mean... yeah.

**Nemin:**
oh
yeah...

> **David Fried:**
>It's very juvenile... AND NOT MY JOKE!

**Nemin:**
Actually this gave an idea for a question. Who was responsible for the humor of SW?  
Next to all the "my species is going extinct and I have to get this surgery" we got "mole's ass" and such.

> **David Fried:**
>Lorne mostly... and everyone generally.
>
>All the small bits of humor are the level designers picking up things and running with it. I wrote a lot of clacker dialogue that way. And the bosses I made as well.

**Nemin:**
Nice, so it was a joint effort. Is there a joke you're particularly proud of?

> **David Fried:**
>I can't remember... anything...
>
>I wish I'd kept some of the scripts.

**Nemin:**
Well, no problem. Was there anything that you would've loved to see included but was cut for one reason or another? I remember you mentioned the Sekto fight was gutted a little.

> **David Fried:**
>Lots of things...  I actually have an old list of ideas for things I wanted to do in Stranger's Wrath. They're just bare bones ideas, not fleshed out or thought through in the slightest.

**Nemin:**
Nice, if you don't mind I'll include this in my post

> **David Fried:**
>Yeah feel free.

### The document can be read [here](/assets/etc/LevelIdeas.doc).
{:.no_toc}

**Nemin:**
Just skimmed through it, it's good stuff, too bad they weren't made.

> **David Fried:**
>No time.

**Nemin:**
Time and money are the biggest barriers, aren't they?

> **David Fried:**
>They kind of have to be... Otherwise nothing would ever ship.   
>You can always improve things another 5%...

**Nemin:**
Do you agree with the saying that "Constraints breed creativity"? 

> **David Fried:**
>Yes, definitely.
>
>There are many situations I've been in while designing games where I had no constraints... When the sky is the limit the mind wanders. But when I know there are limitations, I always come up with the best solutions I can.  
>That's why it's so important to know what you're designing for... What kind of overall game you're making, before you do anything else.

**Nemin:**
This is a touchy subject, so feel free to pass, but do you think Soulstorm could be falling into this trap?

> **David Fried:**
>Yeah... It could... This is probably a touchy subject for fans and creators alike... To be 100% honest though, Lorne Lanning needs constraints.
>
>He needs a game designer that can tell him... "No... You can't do that too... We have to ship a game." 
>
>That was Erik Yeo for Stranger's Wrath. And given they "let him go" months before they let go a lot of other people, I think it was unappreciated.

**Nemin:**
Hm, did Lorne Lanning not appreciate being told no?

> **David Fried:**
>Not at all.
>
>There are a few stories in that area, but overall it was more that Lorne is an unadulterated believer in the creative process unfettered.
>
>But if you look at the games he's put out realistically, the early ones really needed more constraints.
>
>Whereas Stranger's Wrath... at least in my opinion... is a much more consistent and consistently enjoyable experience from beginning to end.

**Nemin:**
Thanks for answering so honestly!  
In the meantime this person I mentioned above got one more question: How did the planning of locations go?
You briefly touched upon it above, if I get it correctly, you made an "empty" arena / area where the events happened and the artists later populated them with props and everything else?

> **David Fried:**
>Not quite. We would block out all the mechanics of movement/cover/etc in a barebones way. Then the artists would create the mesh/art on top of that. Then we would do a pathing pass so enemies could move around.
>
>Imagine a grid and you know there are X boss fights. Designers each get a boss fight to design and then you have to connect those areas to the main town. So someone has to block out that as well.
>
>That's because of all the asset loading and dumping we had to do to make sure things moved smoothly and fit in memory.

**Nemin:**
Ah, so you had a "top down" view of every major area?

> **David Fried:**
>Well it was in Maya, so yeah.
>
>You could see instances of other areas while working on yours. The connecting ones. That way we could align the vertices to match perfectly.

**Nemin:**
That's pretty smart.

> **David Fried:**
>God forbid you should accidentally bump your entire level mesh up or down an increment... ;p
>
>Which happened once or twice.

**Nemin:**
I imagine it would look like there is a "seam" in the ground, yeah?

> **David Fried:**
>I imagine these days you could fit all of the areas into one map without breaking a GPU.
>
>Yeah, you'd see it...

**Nemin:**
But then 15 years is a hell of a lot time for computers to evolve.

> **David Fried:**
>Indeed it is.
>
>And if they were exactly aligned but overlapping, you'd see the textures popping between each other.
>

**Nemin:**
Ah yeah, that's "z-fighting", right?
I'm very much a layman when it comes to 3D rendering, but I did look a little bit into OpenGL

> **David Fried:**
>Yes. I didn't even know that term. I just called it glitchy shit.

**Nemin:**
Haha.

> **David Fried:**
>"Hey, there's glitchy shit all over your level!"
>
>We knew... we all knew...

**Nemin:**
I can't say it's not fitting.  
Were you still at the company when the PC port happened? Someone asks how come the port took so long to be released.

> **David Fried:**
>I was "let go" while Stranger's Wrath was still in gold master.

**Nemin:**
Man that sucks! Do you know the reasons why?

> **David Fried:**
>The PC port came years later.

**Nemin:**
Yeah I told the guy this is likely what you'll say, but you know never say never.

> **David Fried:**
>I don't know for sure... but it was probably something to do with pushing back against Lorne's creative process towards the end.
> 
> They were ignoring a lot of warnings from the designers which led to some disasters towards the end of production.
> Resulting in one of the few times we had to crunch to fix things.
> Then we'd get blamed for "doing it wrong."
> It was a strange dynamic.

**Nemin:**
Oh man, I imagine this played a part in the rushed nature of the final boss fight?

> **David Fried:**
>Yes. That was all [Steve Desilets](https://www.linkedin.com/in/stevedesilets/) btw. He was a PROLIFIC designer. He cranked out a lot of stuff in very short amounts of time.  We definitely wouldn't have finished without his efforts.
>
>I believe he has his own game studio now. [Sockeye Studios](http://sockeye-studios.com/index.html)
>
>Any fans of Oddworld would be wise to check out what he's working on. Especially Stranger's Wrath fans.

## Fangus Klot and Stranger 2

**Nemin:**
I believe we're close to wrapping up. Through you were let go, have you heard anything about a possible "Stranger 2" or the fabled "Brutal Ballad of Fangus Klot"?

> **David Fried:**
>I've heard nothing... I did hear about Fangus when I was leaving. That was supposed to be the next project that everyone would work on. Had some interesting concepts in it, like battle armor that could be blown off the character.
>
>Thing is, they had already terminated the people who would be able to make that a reality (in my opinion). So it was kind of doomed from the start.

**Nemin:**
Oh this is interesting, I believe other than a few concept art pics and a very short description, the community doesn't know much at all about Fangus.  
So in a way Lorne Lanning dug his own grave? Along with of course EA majorly "helping" in that

> **David Fried:**
>Well I wasn't supposed to know anything about it as I was let go... But it's hard not to overhear conversations.

**Nemin:**
If there are any interesting rumors you'd be willing to share, I think the fans would really appreciate it

> **David Fried:**
>Yeah... EA helped a lot, but Lorne was planning all sorts of stupid stuff believing that Stranger's Wrath would sell massively.  Like moving the company to San Francisco... Can you imagine the expense???
>
>As far as Fangus, I don't... remember much.  I didn't see anything that they were doing.  And literally 1 month into pre-planning for pre-production, everyone was let go.
>
>So... I don't think there's much to see. Or know.

**Nemin:**
Well this is pretty enlightening too.

## Warcraft 3

**Nemin:**
For my final questions:
Ultimately which was more challenging to make when you don't consider the company environment, War3 and SC or SW?

> **David Fried:**
>Well I didn't work on Starcraft, just the Map of the Month programs...
>
>But in terms of challenge for me, it would be Stranger's Wrath because of having to learn an art tool, Maya, and having to learn a new scripting language.
>
>Whereas on Warcraft it was proprietary tools that were designed with end users in mind.

**Nemin:**
Ah the good old map editor, I goofed around a little with them.  
A Warcraft question from someone else: Do you consider what Arthas did at Stratholme a mistake? It is generally accepted as the moment he "fell", yet what else could've been done there.

> **David Fried:**
>Well the player can't do anything else... Cause that's the story we were telling. I guess that's kind of a byproduct of how games worked. What could Arthas have done differently though? He could have found another way... Or worked towards that.
>
> The shift to evil happens when you decide there's only one path and nothing else should be considered. You could see that as deciding to take action before it's too late... But Uther obviously would disagree that committing an evil act is a viable option at all.
>
>It's not a black or white issue... It's very shades of grey, which is why it was such a successful story point and level.

**Nemin:**
Indeed! It's probably one of the strongest parts of War3's story.

> **David Fried:**
>Absolutely, and that was why I grabbed it the moment we read the script. 

**Nemin:**
You did a great job  The entire game is fantastic... too bad it was 'reforged'.

> **David Fried:**
>Well... yeah... I don't know.
>
>The underlying game is still there mostly. I think the issue with Reforged is what was promised versus what was delivered.
>
>They should not have outsourced it the way they did.

**Nemin:**
That and the fact that you can't go back to the old version. That was absolutely salt in the wounds.

> **David Fried:**
>That was... just stupid. They didn't do that to Starcraft... so... WTF?

**Nemin:**
Exactly. It's sad that new people can't experience it the way it was intended.

> **David Fried:**
>Well the campaign they can. Via disc... or... ahem... download. 

**Nemin:**
I suppose that's the great thing about actually owning the game and not just the right to play it.

> **David Fried:**
>Well those days are coming to an end rather quickly.
>
>Only GoG is protecting the users.

**Nemin:**
GoG's a really great bunch.

> **David Fried:**
>Steam doesn't care... Activision and EA are actively fighting to destroy that.

**Nemin:**
For my final question:  
Let's say Soulstorm is a huge success and Lorne Lanning begins making Abe Game #3.  
If you were offered a job at OWI then (and let's say you're not working on something), would you take it? Or are you done with them?

> **David Fried:**
>Depends on if Sherry is CEO or not. I'll work for any company she's in charge of.

**Nemin:**
Aww.   
Well! This was an excellent two hours. I really love the insight you provided and I'm sure everyone else will too. Thank you again a lot for answering, I hope you found at least some questions interesting.

> **David Fried:**
>I found the whole interview interesting. It's fun to remember... or try to remember. 
>
>Oh, and if people are interested in what I'm up to these days... 
>
>I have my app [Geekwords](http://designerdave.world/geekwords) and [my YouTube channel](https://www.youtube.com/channel/UCzkiXoaaG_1bNVUBrESTPsw).
