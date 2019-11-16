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
        return f"{this.month}/20{this.year}"

events = [
        Event(16,  3, 14, "soulstorm", "Soulstorm announcement"),
        Event(16,  3, 16, "arg",       "ARG launches"),
        Event(17,  5,  2, "discord",   "Discord server launch"),
        Event(17,  9, 22, "soulstorm", "GDX"),
        Event(17,  9, 25, "soulstorm", "Soulstorm trailer video"),
        Event(18,  1, 12, "soulstorm", "First screenshot is released"),
        Event(18,  3, 20, "project",   "Abe's Origin launches"),
        Event(18,  6, 19, "soulstorm", "Unite Berlin"),
        Event(19,  2, 16, "discord",   "Lorne Lanning Q&A"),
        Event(19,  4, 24, "discord",   "Hackattack joins the Discord"),
        Event(19,  5, 13, "soulstorm", "First gameplay teaser"),
        Event(19,  5, 13, "discord",   "OWI_Lewis joins the Discord"),
        Event(19,  6, 13, "soulstorm", "Soulstorm shown at E3"),
        Event(19,  8, 19, "soulstorm", "Epic partnership announcement"),
        ]


for year in range(16, 20):
    for month in range(1, 13):
        event_names = []
        for event in events:
            if event.year == year and event.month == month:
                event_names.append(event)

        if month == 1:
            print(f"<h1>20{year}</h1>")

        print(f"<div class='month'>\n<p class='date'>{month}. 20{year}.</p>")

        if len(event_names) > 0:
            print("<div class='events'>")
            for i in range(len(event_names)):
                print(f'<p class="event event-{event_names[i].event_type}">[{event_names[i].day}/{month}/20{year}] {event_names[i].name}</p>')
            print("</div>")


        print("</div>")
