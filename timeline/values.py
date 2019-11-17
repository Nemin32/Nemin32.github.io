def dateToNumber(year, month, day):
    return year*365 + month*30 + day

def getPercent(val, minimum, maximum):
    return round( (val - minimum) / (maximum - minimum) * 1000 )

class Event:
    def __init__(self, year, month, day, event_type, name):
        self.year = year
        self.month = month
        self.day = day
        self.name = name
        self.event_type = event_type

    def dateValue(this):
        return dateToNumber(this.year, this.month, this.day)

    def date(this):
        if this.day > 0:
            return f"{this.day}. / {this.month}. / 20{this.year}."
        else:
            return f"{this.month}. / {this.year}."

events = [
        Event(16,  3, 14, "soulstorm", "Soulstorm is announced at GDC"),
        Event(17,  9, 22, "soulstorm", "Lorne Lanning appears at GDX"),
        Event(17,  9, 25, "soulstorm", "\"Projekt: Soulstorm\" trailer video is shown"),
        Event(18,  1, 12, "soulstorm", "First in-game screenshot is released"),
        Event(18,  6, 19, "soulstorm", "Lorne Lanning appears at Unite Berlin"),
        Event(19,  5, 13, "soulstorm", "First gameplay teaser is shown"),
        Event(19,  6, 13, "soulstorm", "Soulstorm shown at E3"),
        Event(19,  8, 19, "soulstorm", "OWI announces Epic partnership"),

        Event(19,  2, 16, "discord",   "Lorne Lanning hosts a one hour  Q&A on Discord"),
        Event(19,  4, 24, "discord",   "Hackattack joins the Discord"),
        Event(19,  5, 13, "discord",   "OWI_Lewis joins the Discord"),
        Event(17,  5,  2, "discord",   "Discord server launches"),

        Event(19,  9, 19, "project",   "Abe's Oddysee's 22nd anniversary"),

        Event(19,  4, 17, "project",   "Newsletter #1"),
        Event(19,  5, 30, "project",   "Newsletter #2"),
        Event(19,  6,  5, "project",   "Newsletter #3"),

        Event(19,  4, 29, "project",   "The Oddwall launches"),
        Event(19,  6,  1, "project",   "The Oddwall gets shelved"),

        Event(18,  8,  7, "project",   "The idea of an official Wiki surfaces"),
        Event(18,  7,  9, "project",   "The Queens page launches"),
        Event(18,  3, 20, "project",   "Abe's Origin launches"),

        Event(19,  7,  17, "project",   "The #oddcast channel disappears"),
        Event(18,  4,  0, "project",   "The first Oddcast airs"),

        Event(19,  4,  0, "project",   "Lost Archives ends"),
        Event(17, 12,  4, "project",   "Lost Archives launches"),
        Event(17, 12,  4, "project",   "Oddysee's source is found"),

        Event(16,  3, 16, "arg",       "ARG launches (First phase)"),
        Event(16,  4,  4, "arg",       "Second phase of the ARG starts"),
        Event(16,  5, 29, "arg",       "Third phase of the ARG starts"),
        Event(17,  1, 19, "arg",       "The first transmission airs"),
        Event(17,  2,  2, "arg",       "The second transmission airs"),
        Event(17,  2, 23, "arg",       "The third transmission airs"),
        Event(17,  4, 19, "arg",       "The fourth transmission airs"),
        Event(17,  8,  7, "arg",       "MagogCartel.com is revealed"),
        Event(18,  9, 30, "arg",       "Crashpunk receives a canister"),
        Event(19,  7, 31, "arg",       "OddworldNetwork.com is revealed")
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

for year in range(16, 20):
    for month in range(1, 13):
        event_names = []
        for event in events:
            if event.year == year and event.month == month:
                event_names.append(event)

        if month == 1:
            print(f"<h1>20{year}</h1>")

        print(f"<div class='month'>\n<p class='date'>{months[month]}</p>")

        if len(event_names) > 0:
            event_names = sorted(event_names, key=lambda x: x.day)

            print("<div class='events'>")
            for i in range(len(event_names)):
                if event_names[i].day > 0:
                    print(f'<div class="inner_event"><p class="day event-{event_names[i].event_type}">{event_names[i].day}.</p><p class="event event-{event_names[i].event_type}" title="{event_names[i].date()}">{event_names[i].name}</p></div>')
                else:
                    print(f'<div class="inner_event"><p class="day event-{event_names[i].event_type}"></p><p class="event event-{event_names[i].event_type}" title="{event_names[i].date()}">{event_names[i].name}</p></div>')

            print("</div>")


        print("</div>")
