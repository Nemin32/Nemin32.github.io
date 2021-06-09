#include <stdio.h>
#include <time.h>
#define EVENT(_year, _month, _day, _type, _desc, _url) { .year = _year, .month = _month, .day = _day, .type = _type, .desc = _desc, .url = _url }

const char* months[] = {
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
};

const char* header =
"---\n" \
"title: \"Timeline (Updated: %s)\"\n" \
"summary: A calendar of all the events that happened since 2016.\n" \
"tags: [\"spec\"]\n" \
"---\n" \
"\n" \
"<link rel=\"stylesheet\" href=\"/css/timeline.css\">\n" \
"\n" \
"# Timeline\n" \
"\n" \
"On this page you can find most, if not all major events that happened since Soulstorm's announcement, separated into categories for easier navigation. " \
"\n" \
"<p class='centered'>This list was generated on %s and keeps track of %lu events.</p>\n" \
"\n" \
"### Color codes:\n" \
"\n" \
"<center>\n" \
"<div id=\"legend\">\n" \
"<div class=\"event event-soulstorm\"><p>Soulstorm related event</p></div>\n" \
"<div class=\"event event-discord\"><p>Discord related event</p></div>\n" \
"<div class=\"event event-marketing\"><p>Marketing/Social media related event</p></div>\n" \
"<div class=\"event event-killed\"><p>End of a marketing-related event</p></div>\n" \
"<div class=\"event event-arg\"><p>ARG related event</p></div>\n" \
"<div class=\"event event-other\"><p>Other Oddworld-related news</p></div>\n" \
"<div class=\"event event-patch\"><p>Patch news</p></div>\n" \
"<div class=\"event event-twitch\"><p>OWI Twitch stream</p></div>\n" \
"</div>\n" \
"</center>\n";


enum EVENT_TYPE {
  MARKETING = 0,
  KILLED,
  SOULSTORM,
  ARG,
  DISCORD,
  OTHER,
  PATCH,
  TWITCH,
};

const char* enum_to_str(enum EVENT_TYPE type) {
  switch (type) {
    case MARKETING:
      return "marketing";
    case KILLED:
      return "killed";
    case SOULSTORM:
      return "soulstorm";
    case ARG:
      return "arg";
    case DISCORD:
      return "discord";
    case OTHER:
      return "other";
    case PATCH:
      return "patch";
    case TWITCH:
      return "twitch";
  };
}

struct EVENT {
  int year;
  int month;
  int day;
  enum EVENT_TYPE type;
  const char* desc;
  const char* url;
};

const struct EVENT event_list[] = {
  /* SOULSTORM */
  EVENT(16,  3, 14, SOULSTORM, "Soulstorm is announced at GDC",                                             "https://www.wired.co.uk/article/oddworld-soulstorm-gaming-classic-returns"),
  EVENT(17,  9, 22, SOULSTORM, "Lorne Lanning presents Soulstorm at EGX 2017",                              "https://www.youtube.com/watch?v=L3zdCg4tbOc"),
  EVENT(17,  9, 25, SOULSTORM, "\"Projekt: Soulstorm\" trailer video is shown",                             "https://www.youtube.com/watch?v=1p0o2c4NGpk"),
  EVENT(18,  1, 12, SOULSTORM, "First in-game screenshot is released",                                      "https://pbs.twimg.com/profile_banners/20823262/1515636880/1500x500"),
  EVENT(18,  6, 19, SOULSTORM, "Lorne Lanning appears at Unite Berlin",                                     "https://www.youtube.com/watch?v=Kv9Zoyo8o8s"),
  EVENT(19,  3, 18, SOULSTORM, "Unity Keynote at GDC 2019",                                                 "https://www.youtube.com/watch?v=7g_IEadyiuA"),
  EVENT(19,  5, 13, SOULSTORM, "First gameplay teaser is shown",                                            "https://www.youtube.com/watch?v=6wJAdfTJZUQ"),
  EVENT(19,  6, 13, SOULSTORM, "Soulstorm shown at E3",                                                     "https://www.ign.com/videos/2019/06/12/oddworld-soulstorm-gameplay-walkthrough-ign-live-e3-2019"),
  EVENT(19,  8, 19, SOULSTORM, "OWI announces Epic partnership",                                            "https://twitter.com/OddworldInc/status/1163542883036737537"),
  EVENT(19, 12,  3, SOULSTORM, "Ars Technica releases a video about the Oddworld franchise",                "https://arstechnica.com/gaming/2019/12/video-how-oddworld-solved-its-narrative-problems-with-mind-control/"),
  EVENT(19, 12,  9, SOULSTORM, "Soulstorm takes part in the Unity Awards contest for \"Most anticipated\"", "https://twitter.com/OddworldInc/status/1204091501153640450"),
  EVENT(19, 12, 18, SOULSTORM, "\"Just a peek in the dark\" teaser is released",                            "https://www.youtube.com/watch?v=cyfkkrEpajU"),
  EVENT(19, 12, 19, SOULSTORM, "\"Come on, Abe!\" teaser is released",                                      "https://www.youtube.com/watch?v=xRSorHyUWdA"),
  EVENT(19, 12, 20, SOULSTORM, "\"Better watch out!\" teaser is released",                                  "https://www.youtube.com/watch?v=ay2ks5FO_u4"),
  EVENT(19, 12, 20, SOULSTORM, "Soulstorm doesn't win \"Most anticipated\" at Unity Awards",                "https://awards.unity.com/2019"),
  EVENT(20,  1, 14, SOULSTORM, "Soulstorm appears in 1UP Conf's Most Awaited Sequel poll and wins",         "https://twitter.com/1UPconf/status/1217015459893170177"),
  EVENT(20,  6, 11, SOULSTORM, "Soulstorm is shown at Sony's PS5 stream",                                   "https://www.youtube.com/watch?v=F9b-_jCCBhg"),
  EVENT(20,  8, 17, SOULSTORM, "Microids announces Soulstorm Physical Release",                             "https://twitter.com/Microids_off/status/1295375489402576897?s=19"),
  EVENT(20,  9, 16, SOULSTORM, "'Molluck Return' PS5 trailer",                                              "https://www.youtube.com/watch?v=8OSFEL0PNYs"),
  EVENT(20, 12,  7, SOULSTORM, "OWI promises an 'explosive week'",                                          "https://twitter.com/OddworldInc/status/1336018375798091776"),
  EVENT(20, 12,  9, SOULSTORM, "OWI promises Soulstorm news at the Game Awards",                            "https://twitter.com/OddworldInc/status/1336742617955135489"),
  EVENT(20, 12, 10, SOULSTORM, "OWI appears at the Game Awards",                                            "https://www.youtube.com/watch?v=2NCQS7hSUBE"),
  EVENT(20, 12, 15, SOULSTORM, "Soulstorm pre-orders launch on EGS",                                        "https://www.epicgames.com/store/en-US/news/oddworld-soulstorm-coming-spring-2021"),
  EVENT(21,  2, 11, SOULSTORM, "Epic Games stream features Soulstorm",                                      "https://www.youtube.com/watch?v=P-FHfUvMpwE"),
  EVENT(21,  2, 11, SOULSTORM, "Lorne Lanning promises Soulstorm's release date to drop in February",       "https://twitter.com/OddworldInc/status/1359959464359694342"),
  EVENT(21,  2, 25, SOULSTORM, "Soulstorm appears at State of Play, April 6th confirmed as release date",   "https://www.youtube.com/watch?v=23fDmggOajM"),
  EVENT(21,  3, 25, SOULSTORM, "Soulstorm appears at the GamesRadar stream",                                "https://www.youtube.com/watch?v=b3xyOjj2s-4"),
  EVENT(21,  3, 25, SOULSTORM, "Microids starts selling the phsyical edition of Soulstorm",                  "https://twitter.com/Microids_off/status/1375107844811452416"),
  EVENT(21,  3, 26, SOULSTORM, "Soulstorm gets another IGN showcase",                                       "https://www.ign.com/videos/oddworld-soulstorm-12-minute-developer-gameplay-commentary"),
  EVENT(21,  4,  5, SOULSTORM, "Soulstorm is released in AUS and NZ on the PS5",                            NULL),
  EVENT(21,  4,  6, SOULSTORM, "After exactly five years and 23 days Soulstorm is released worldwide",      NULL),

  /* ARG */
  EVENT(16,  3, 16, ARG,       "First phase of the ARG starts",                                             "http://oddworldlibrary.net/wiki/Soulstorm_ARG_Summary"),
  EVENT(16,  4,  4, ARG,       "Second phase of the ARG starts",                                            NULL),
  EVENT(16,  5, 29, ARG,       "Third phase of the ARG starts",                                             NULL),
  EVENT(16,  6, 28, ARG,       "1029.io is revealed",                                                       "https://1029.io/"),
  EVENT(17,  1, 19, ARG,       "The first ARG transmission airs",                                           NULL),
  EVENT(17,  2,  2, ARG,       "The second ARG transmission airs",                                          NULL),
  EVENT(17,  2, 23, ARG,       "The third ARG transmission airs",                                           NULL),
  EVENT(17,  4, 19, ARG,       "The fourth ARG transmission airs",                                          NULL),
  EVENT(17,  8,  7, ARG,       "MagogCartel.com is revealed",                                               "http://magogcartel.com"),
  EVENT(18,  9, 30, ARG,       "Crashpunk receives a canister",                                             "https://twitter.com/Crashpunk_Plays/status/1046446823399927815"),
  EVENT(19,  7, 31, ARG,       "OddworldNetwork.com is revealed",                                           "https://oddworldnetwork.com"),

  /* MARKETING */
  EVENT(17,  1, 17, MARKETING, "Dear Alf #77",                                                              "https://www.oddworld.com/2017/01/dear-alf-77-ed-abe-and-stranger/"),
  EVENT(17, 12,  4, MARKETING, "Lost Archives launches",                                                    "http://www.oddworld.com/2017/12/announcing-oddworld-the-lost-archives/"),
  EVENT(17, 12,  4, MARKETING, "Oddysee's source is found",                                                 "http://www.oddworld.com/2017/12/announcing-oddworld-the-lost-archives/"),
  EVENT(18,  3, 20, MARKETING, "Abe's Origin launches",                                                     "https://www.kickstarter.com/projects/1869209521/oddworld-abes-origins-book-and-game-collection"),
  EVENT(18,  7,  9, MARKETING, "The Queens page launches",                                                  "https://oddworld.com/queens"),
  EVENT(18,  8,  7, MARKETING, "The idea of an official Wiki surfaces",                                     "https://discordapp.com/channels/293291256736382976/293291256736382976/476323833545228298"),
  EVENT(19,  4, 17, MARKETING, "Newsletter #1",                                                             "https://mailchi.mp/oddworld/read-the-first-of-our-new-oddworld-community-newsletters-right-now-with-issue-1"),
  EVENT(19,  4, 29, MARKETING, "The Oddwall launches",                                                      "https://oddworld.com/oddwall"),
  EVENT(19,  5, 30, MARKETING, "Newsletter #2",                                                             "https://mailchi.mp/oddworld/the-latest-issue-of-the-oddworld-newsletter-is-here-now"),
  EVENT(19,  6,  5, MARKETING, "Newsletter #3",                                                             "https://mailchi.mp/oddworld/newsletter3"),
  EVENT(19,  9, 19, MARKETING, "AO's 22nd anniversary video #1",                                            "https://www.youtube.com/watch?v=0sfL1vqDdf4"),
  EVENT(19,  9, 20, MARKETING, "AO's 22nd anniversary video #2",                                            "https://www.youtube.com/watch?v=0DSJ1qUibXc"),
  EVENT(19,  9, 23, MARKETING, "AO's 22nd anniversary video #3",                                            "https://www.youtube.com/watch?v=2JohJi-lG80"),
  EVENT(19, 11, 18, MARKETING, "AE' 21st anniversary video #1",                                             "https://www.youtube.com/watch?v=csSCkk-xULw"),
  EVENT(19, 11, 19, MARKETING, "AE' 21st anniversary video #2",                                             "https://www.youtube.com/watch?v=6kSUOTlDRCg"),
  EVENT(19, 11, 20, MARKETING, "AE' 21st anniversary video #3",                                             "https://www.youtube.com/watch?v=XyWvUL9K_co"),
  EVENT(20,  9,  2, MARKETING, "OWI describes its philosophy",                                              "https://www.youtube.com/watch?v=PgPiY4kkfOM"),
  EVENT(20, 11, 19, MARKETING, "OWI asks for new subscribers to reveal new content",                        "https://twitter.com/OddworldInc/status/1329536557741613056"),
  EVENT(21,  1, 20, MARKETING, "Mudokons Recap video is released",                                          "https://www.instagram.com/p/CKR13wGjaVU/"),
  EVENT(21,  1, 27, MARKETING, "Sligs Recap video is released",                                             "https://www.instagram.com/p/CKj9Ir3DLbE/"),
  EVENT(21,  2,  3, MARKETING, "Glukkons Recap video is released",                                          "https://twitter.com/OddworldInc/status/1356998284750049283"),
  EVENT(21,  2, 18, MARKETING, "Greeters Recap video is released",                                          "https://twitter.com/OddworldInc/status/1362466131974496256"),

  /* ODDCASTS */
  EVENT(18,  5,  3, MARKETING, "The first Oddcast airs",                                                    "https://www.youtube.com/watch?v=AbG_Fg_gbC0"),
  EVENT(18,  6, 13, MARKETING, "The third Oddcast airs",                                                    "https://www.youtube.com/watch?v=g_5B7Tc2UoA"),
  EVENT(18,  6, 29, MARKETING, "The sixth Oddcast airs",                                                    "https://www.youtube.com/watch?v=hnQrpJpPWbE"),
  EVENT(18, 10,  7, MARKETING, "Oddcast: November Q&A",                                                     "https://www.youtube.com/watch?v=FEv1XFuuBjI"),
  EVENT(19,  7, 17, KILLED,    "The #oddcast channel disappears",                                           NULL),

  /* STRANGER */
  EVENT(18,  9, 12, OTHER,     "OWI announces Stranger's Wrath's Switch port",                              "https://twitter.com/OddworldInc/status/1039843328035102720"),
  EVENT(19,  1, 10, OTHER,     "Microids announces three title co-publishing deal on the Switch",           "https://www.microids.com/us/microids-and-oddworld-inhabitants-agree-on-a-three-title-co-publishing-deal-2/"),
  EVENT(19, 12, 10, OTHER,     "Stranger's Wrath Switch port is teased to come at January 23rd of 2020",    "https://twitter.com/OddworldInc/status/1204477347363090433"),
  EVENT(20,  1, 23, OTHER,     "Stranger's Wrath arrives to the Nintendo Switch",                           NULL),
  EVENT(20,  3, 13, OTHER,     "Microids announces limited physical release for Stranger's Wrath",          "https://www.microids.com/oddworld-strangers-wrath-hd-retail-versions-launching-in-us-and-eu/"),
  EVENT(20,  9,  3, OTHER,     "LRG/Microids announces limited Stranger's Wrath box edition",               "https://twitter.com/LimitedRunGames/status/1301581015568257026"),

  /* MUNCH */
  EVENT(20,  4, 30, OTHER,     "OWI/Microids announces Munch's Oddysee's Switch port.",                    "https://www.microids.com/us/oddworld-munchs-oddysee-coming-to-nintendo-switch-may-14th-2/"),
  EVENT(20,  5, 14, OTHER,     "Munch's Oddysee is released on the Switch",                                "https://www.instagram.com/p/CALjzGVAXxr/"),

  /* NNT */
  EVENT(20,  8, 11, OTHER,     "OWI/Microids announces NnT's Switch port.",                                 "https://twitter.com/Microids_off/status/1293125005740580864?s=20"),
  EVENT(20,  9, 29, OTHER,     "Microids announces NnT's Switch port coming 27th of October.",              "https://twitter.com/Microids_off/status/1310958095703724035"),
  EVENT(20, 10, 27, OTHER,     "Microids releases NnT on the Switch",                                       NULL),
  
  EVENT(21,  5, 22, OTHER,     "Microids releases trio pack of MO, SW and NNT",                             "https://www.youtube.com/watch?v=gN3KZ2kWIwY"),

  /* DISCORD */
  EVENT(17,  5,  2, DISCORD,   "Discord server launches",                                                   "https://discordapp.com/channels/293291256736382976/293291256736382976/308969023981486082"),
  EVENT(19,  2, 16, DISCORD,   "Lorne Lanning's one hour Discord Q&A",                                      "/lanningqna"),
  EVENT(19,  4, 24, DISCORD,   "Hackattack joins the Discord",                                              "https://discordapp.com/channels/293291256736382976/293291256736382976/570667262063935489"),
  EVENT(19,  5, 13, DISCORD,   "OWI_Lewis joins the Discord",                                               "https://discordapp.com/channels/293291256736382976/293291256736382976/577526814411325450"),
  EVENT(19, 12, 22, DISCORD,   "Sherry McKenna joins the Discord",                                          "https://discordapp.com/channels/293291256736382976/308941610132045824/658148011809046528"),

  /* KILLED */
  EVENT(19,  4, 24, KILLED,    "Lost Archives ends",                                                        "https://www.instagram.com/p/Bwpif1ElJwF/"),
  EVENT(19,  6,  1, KILLED,    "The Oddwall gets shelved",                                                  NULL),
  EVENT(19,  8, 14, KILLED,    "The ARG goes into silence.",                                                NULL),
  EVENT(19,  9, 23, KILLED,    "22nd anniversary series abruptly ends",                                     NULL),
  EVENT(19, 11, 20, KILLED,    "21st anniversary series abruptly ends",                                     NULL),
  EVENT(21,  1, 22, KILLED,    "The 250 followers social media game is delayed indefinitely.",               "https://discordapp.com/channels/293291256736382976/308941610132045824/802289904348299364"),
  
  /* PATCHES */
  EVENT(21,  4,  7, PATCH,      "Patch 1.05",                                                                         "https://www.oddworld.com/2021/04/oddworld-soulstorm-1-05-patch-now-available/"),
  EVENT(21,  4,  9, PATCH,      "Patch 1.06",                                                                         "https://www.oddworld.com/2021/04/oddworld-soulstorm-1-06-patch-available-now/"),
  EVENT(21,  4, 14, PATCH,      "Patch 1.07",                                                                         "https://www.oddworld.com/2021/04/oddworld-soulstorm-patch-1-07-now-available/"),
  EVENT(21,  4, 28, PATCH,      "Patch 1.08",                                                                         "https://www.oddworld.com/2021/04/oddworld-soulstorm-1-08-patch-now-available/"),
  EVENT(21,  5, 14, PATCH,      "Patch 1.11",                                                                         "https://www.oddworld.com/2021/05/oddworld-soulstorm-patch-1-11-now-available/"),
  EVENT(21,  6,  4, PATCH,      "Patch 1.13",                                                                         "https://www.oddworld.com/2021/06/oddworld-soulstorm-patch-1-13-now-available/"),
  
  /* TWTICH */
  EVENT(20,  5, 21, TWITCH,     "OWI streams Munch's Oddysee on Twitch", "https://www.twitch.tv/officialoddworldinc"),
  EVENT(20,  7, 16, TWITCH,     "OWI streams Munch's Oddysee on Twitch", "https://www.twitch.tv/officialoddworldinc"),
  EVENT(20, 10, 27, TWITCH,     "OWI streams New 'n' Tasty on Twitch",   "https://www.twitch.tv/officialoddworldinc"),
  EVENT(21,  3, 12, TWITCH,     "OWI streams New 'n' Tasty on Twitch",   "https://www.twitch.tv/officialoddworldinc"),
  EVENT(21,  3, 19, TWITCH,     "OWI streams New 'n' Tasty on Twitch",   "https://www.twitch.tv/officialoddworldinc"),
  EVENT(21,  3, 26, TWITCH,     "OWI streams New 'n' Tasty on Twitch",   "https://www.twitch.tv/officialoddworldinc"),
  EVENT(21,  4, 26, TWITCH,     "OWI streams Soulstorm on Twitch",       "https://www.twitch.tv/officialoddworldinc"),
};

const unsigned long NUM_OF_EVENTS = sizeof(event_list)/sizeof(struct EVENT);

void display_event(struct EVENT event) {
  printf("<div class='event_container'>\n");
  printf("<p class='day event-%s'>%d.</p>\n", enum_to_str(event.type), event.day);
  printf("<p>");
  if (event.url != NULL) {printf("<a href='%s'>", event.url);}
  printf("%s", event.desc);
  if (event.url != NULL) {printf("</a>");}
  printf("</p>\n");
  printf("</div>\n");
}

void get_date(char* buffer) {
  time_t timer;
  struct tm* tm_info;

  timer = time(NULL);
  tm_info = localtime(&timer);

  strftime(buffer, 26, "%Y-%m-%d", tm_info);
}

int main(void) {
  char date[26];
  get_date(date);

  printf(header, date, date, NUM_OF_EVENTS);

  //if (0)
  for (int year = 16; year <= 21; year++) {
    printf("<div class='year'>\n");
    printf("<h2>20%d</h2>\n", year);
    printf("<div>\n");
    for (int month = 1; month <= 12; month++) {
      printf("<div class='month'>\n<p class='month_name'>%s</p>\n", months[month-1]);
      printf("<div class='events'>\n");

      for (int day = 1; day <= 31; day++) {
        for (int i = 0; i < NUM_OF_EVENTS; i++) {
          if (event_list[i].year == year && event_list[i].month == month && event_list[i].day == day) {
            display_event(event_list[i]);
          }
        }
      }

      printf("</div>\n");
      printf("</div>\n");
    }
    printf("</div>\n");
    printf("</div>\n");
  }

  return 0;
}
