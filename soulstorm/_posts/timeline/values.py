from datetime import date

def dateToNumber(year, month, day):
    return year*365 + month*30 + day

def getPercent(val, minimum, maximum):
    return round( (val - minimum) / (maximum - minimum) * 1000 )

class Event:
    def __init__(self, year, month, day, event_type, name, link = None):
        self.year = year
        self.month = month
        self.day = day
        self.name = name
        self.event_type = event_type
        self.link = link

    def dateValue(this):
        return dateToNumber(this.year, this.month, this.day)

    def date(this):
        if this.day > 0:
            return f"{this.day}. / {this.month}. / 20{this.year}."
        else:
            return f"{this.month}. / {this.year}."

events = [
        Event(16,  3, 14, "soulstorm", "Soulstorm is announced at GDC",
            "https://www.wired.co.uk/article/oddworld-soulstorm-gaming-classic-returns"),
        Event(17,  9, 22, "soulstorm", "Lorne Lanning appears at GDX",
            "https://www.youtube.com/watch?v=L3zdCg4tbOc"),
        Event(17,  9, 25, "soulstorm", "\"Projekt: Soulstorm\" trailer video is shown",
            "https://www.youtube.com/watch?v=1p0o2c4NGpk&t=1s"),
        Event(18,  1, 12, "soulstorm", "First in-game screenshot is released",
            "https://pbs.twimg.com/profile_banners/20823262/1515636880/1500x500"),
        Event(18,  6, 19, "soulstorm", "Lorne Lanning appears at Unite Berlin",
            "https://www.youtube.com/watch?v=Kv9Zoyo8o8s"),
        Event(19,  5, 13, "soulstorm", "First gameplay teaser is shown",
            "https://www.youtube.com/watch?v=6wJAdfTJZUQ"),
        Event(19,  6, 13, "soulstorm", "Soulstorm shown at E3",
            "https://www.ign.com/videos/2019/06/12/oddworld-soulstorm-gameplay-walkthrough-ign-live-e3-2019"),
        Event(19,  8, 19, "soulstorm", "OWI announces Epic partnership",
            "https://twitter.com/OddworldInc/status/1163542883036737537"),
        Event(19, 12,  3, "soulstorm", "Ars Technica releases a video about the Oddworld franchise",
            "https://arstechnica.com/gaming/2019/12/video-how-oddworld-solved-its-narrative-problems-with-mind-control/?utm_brand=arstechnica&utm_source=twitter&utm_social-type=owned&utm_medium=social"),
        Event(19, 12, 10, "soulstorm", "Stranger's Wrath Switch port is teased to come in January 23rd of 2020",
            "https://twitter.com/OddworldInc/status/1204477347363090433"),
        Event(19, 12, 18, "soulstorm", "\"Just a peek in the dark\" teaser is released",
            "https://www.youtube.com/watch?v=cyfkkrEpajU"),
        Event(19, 12, 19, "soulstorm", "\"Come on, Abe!\" teaser is released",
            "https://www.youtube.com/watch?v=xRSorHyUWdA"),
        Event(19, 12, 20, "soulstorm", "\"Better watch out!\" teaser is released",
            "https://www.youtube.com/watch?v=ay2ks5FO_u4"),

        Event(19,  2, 16, "discord",   "One hour Discord Q&A",
            "/lanningqna"),
        Event(19,  4, 24, "discord",   "Hackattack joins the Discord",
            "https://discordapp.com/channels/293291256736382976/293291256736382976/570667262063935489"),
        Event(19,  5, 13, "discord",   "OWI_Lewis joins the Discord",
            "https://discordapp.com/channels/293291256736382976/293291256736382976/577526814411325450"),
        Event(17,  5,  2, "discord",   "Discord server launches",
            "https://discordapp.com/channels/293291256736382976/293291256736382976/308969023981486082"),

        Event(19,  9, 19, "project",   "AO's 22nd anniversary video #1",
            "https://www.youtube.com/watch?v=0sfL1vqDdf4"),
        Event(19,  9, 20, "project",   "AO's 22nd anniversary video #2",
            "https://www.youtube.com/watch?v=0DSJ1qUibXc"),
        Event(19,  9, 23, "project",   "AO's 22nd anniversary video #3",
            "https://www.youtube.com/watch?v=2JohJi-lG80"),

        Event(19, 11, 18, "project",   "AE' 21st anniversary video #1",
            "https://www.youtube.com/watch?v=csSCkk-xULw"),
        Event(19, 11, 19, "project",   "AE' 21st anniversary video #2",
            "https://www.youtube.com/watch?v=6kSUOTlDRCg"),
        Event(19, 11, 20, "project",   "AE' 21st anniversary video #3",
            "https://www.youtube.com/watch?v=XyWvUL9K_co"),

        Event(18,  9, 12, "project",   "OWI announces Stranger Switch port",
            "https://twitter.com/OddworldInc/status/1039843328035102720"),
        Event(20,  1, 23, "project",   "Stranger's Wrath arrives to the Nintendo Switch"),

        Event(19,  9, 23, "killed",    "22nd anniversary series abruptly ends"),
        Event(19, 11, 23, "killed",    "21st anniversary series ends"),
        Event(19,  6,  1, "killed",    "The Oddwall gets shelved"),
        Event(19,  7, 17, "killed",    "The #oddcast channel disappears"),
        Event(19,  4, 24, "killed",    "Lost Archives ends",
            "https://www.instagram.com/p/Bwpif1ElJwF/"),

        Event(19,  4, 17, "project",   "Newsletter #1",
            "https://mailchi.mp/oddworld/read-the-first-of-our-new-oddworld-community-newsletters-right-now-with-issue-1"),
        Event(19,  5, 30, "project",   "Newsletter #2",
            "https://mailchi.mp/oddworld/the-latest-issue-of-the-oddworld-newsletter-is-here-now"),
        Event(19,  6,  5, "project",   "Newsletter #3",
            "https://mailchi.mp/oddworld/newsletter3"),

        Event(17,  1, 17, "project",   "Dear Alf #77",
            "https://www.oddworld.com/2017/01/dear-alf-77-ed-abe-and-stranger/"),

        Event(19,  4, 29, "project",   "The Oddwall launches",
            "https://oddworld.com/oddwall"),
        Event(18,  8,  7, "project",   "The idea of an official Wiki surfaces",
            "https://discordapp.com/channels/293291256736382976/293291256736382976/476323833545228298"),
        Event(18,  7,  9, "project",   "The Queens page launches",
            "https://oddworld.com/queens"),
        Event(18,  5,  3, "project",   "The first Oddcast airs",
            "https://www.youtube.com/watch?v=AbG_Fg_gbC0"),
        Event(18,  3, 20, "project",   "Abe's Origin launches",
            "https://www.kickstarter.com/projects/1869209521/oddworld-abes-origins-book-and-game-collection"),
        Event(17, 12,  4, "project",   "Lost Archives launches",
            "http://www.oddworld.com/2017/12/announcing-oddworld-the-lost-archives/"),
        Event(17, 12,  4, "project",   "Oddysee's source is found",
            "http://www.oddworld.com/2017/12/announcing-oddworld-the-lost-archives/"),

        Event(16,  3, 16, "arg",       "First phase of the ARG starts",
            "http://oddworldlibrary.net/wiki/Soulstorm_ARG_Summary"),
        Event(16,  4,  4, "arg",       "Second phase of the ARG starts"),
        Event(16,  5, 29, "arg",       "Third phase of the ARG starts"),
        Event(17,  1, 19, "arg",       "The first ARG transmission airs"),
        Event(17,  2,  2, "arg",       "The second ARG transmission airs"),
        Event(17,  2, 23, "arg",       "The third ARG transmission airs"),
        Event(17,  4, 19, "arg",       "The fourth ARG transmission airs"),

        Event(16,  6, 28, "arg",       "1029.io is revealed",
            "https://1029.io/"),
        Event(17,  8,  7, "arg",       "MagogCartel.com is revealed",
            "https://magogcartel.com"),
        Event(18,  9, 30, "arg",       "Crashpunk receives a canister",
            "https://twitter.com/Crashpunk_Plays/status/1046446823399927815"),
        Event(19,  7, 31, "arg",       "OddworldNetwork.com is revealed",
            "https://oddworldnetwork.com")
        ]

months = [
        "Empty",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        ]

print(f"""---
title: "Timeline (Updated: {date.today().strftime("%Y-%m-%d")})"
summary: A calendar of all the events that happened since 2016.
---

<link rel="stylesheet" href="/css/timeline.css">

# Timeline

## Every major event since Soulstorm's announcement

### Color codes:

<center>
<div style="width: 20rem" id="legend">
<div class="event event-soulstorm"><p>Soulstorm related event</p></div>
<div class="event event-discord"><p>Discord related event</p></div>
<div class="event event-project"><p>Start of a side-project</p></div>
<div class="event event-killed"><p>End of a side-project</p></div>
<div class="event event-arg"><p>ARG related event</p></div>
</div>
</center>
""")

for year in range(16, 21):
    for month in range(1, 13):
        event_names = []
        for event in events:
            if event.year == year and event.month == month:
                event_names.append(event)

        if month == 1:
            print(f"<h3>20{year}</h3>")

        print(f"<div class='month'>\n<p class='date'>{months[month]}</p>")

        print("<div class='events'>")
        if len(event_names) > 0:
            event_names = sorted(event_names, key=lambda x: x.day)

            for i in range(len(event_names)):
                day = ""
                if event_names[i].day > 0:
                    day = str(event_names[i].day) + "."
                else:
                    day = "??"

                print('<div class="inner_event">', end='')
                print(f'<p class="day event-{event_names[i].event_type}">{day}</p>', end='')
                if event_names[i].link is not None: print(f'  <a href="{event_names[i].link}">', end='')
                print(f'<p class="event event-{event_names[i].event_type}">{event_names[i].name}</p>', end='')
                if event_names[i].link is not None: print( '</a>', end ='')
                print('</div>', end ='')

        print("</div>")


        print("</div>")

print("<p class='centered'>This list was generated on", date.today().strftime("%Y-%m-%d."), "</p>")
