---
title: "Digital Humanities Now (and Then)"
authors:
  - Joan Fragaszy Troyano
tags:
  - projectReports
---

Over the past four years, [*Digital Humanities Now*](http://digitalhumanitiesnow.org "Digital Humanities Now") (*DHNow*) has used a variety of approaches to aggregating, reviewing, selecting, and disseminating scholarly content from the open web. Originally populated with content from Twitter chosen by an algorithm and automatically-published on the website, since 2011 the content for *DHNow* has been selected and prepared by an in-house editorial group. In the past year, we have developed our own [PressForward plugin](https://github.com/PressForward/pressforward "The PressForward Plugin"), to facilitate the aggregation, review, and dissemination process within the WordPress dashboard. At the same time that we have significantly increased the human labor involved, we have been seeking ways to reduce the editorial burden for running such a publication.

*DHNow* is a critical case study in methods for highlighting and distributing scholarly communication on the open web for the [PressForward Project](http://pressforward.org "PressForward Project Homepage"), funded by the Sloan Foundation. By experimenting with *DHNow*, we are developing methodologies and technologies to facilitate community-sourced publications beyond digital humanities. In this post we detail some of the methods and technologies we have used along the way and our wishlist and plans for the future.

## *DHNow* 1.0: From Automated to Edited, 2009-2011

[![Digital Humanities Now 2009](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/digitalhumanitiesnow_homepage_1-1024x623-300x182.gif)](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/digitalhumanitiesnow_homepage_1-1024x623.gif)

Digital Humanities Now, 2009

*   Twitter list as source base
*   Twittertim.es identified most popular content
*   automatic publishing on *DHNow* website

The first iteration of *DHNow*, as explained by founder Dan Cohen in [November 2009](http://www.dancohen.org/2009/11/18/introducing-digital-humanities-now/ ""Introducing Digital Humanities Now" - Nov. 2009, Dan Cohen") was based on the content circulated by a collection of digital humanist on Twitter using the third-party service Twittertim.es (no longer in existence but similar to [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Tweeted Times")) to identify the most popular content discussed on the list, which was then published on the corresponding *DHNow* website.

Sensing the value of a human eye in the selection and a human touch to the presentation, after a year Dan began to select and excerpt pieces in order to improve the content on *DHNow* itself. While this effort was difficult for one person to sustain, the increased number of readers — and the growth of scholarly materials informally published on the web by the very same readers — did suggest that the digital humanities community valued the surfacing and dissemination of their work.

In 2011, *DHNow* became a critical case study in methods for highlighting and distributing scholarly communication on the open web for the [PressForward Project](http://pressforward.org "PressForward Project Homepage"), funded by the Sloan Foundation. New staff resources enabled the expansion of our source base, additions to an in-house editorial group of research faculty and graduate students, and revised presentation for [version 2.0, launched in November 2011](digital-humanities-now-2-0-bigger-and-better-with-a-new-review-process "Digital Humanities Now 2.0: Bigger and Better, with a New Review Process - November 2011").

## *DHNow* 2.0: Aggregation and Curation, 2011-2013

Since *DHNow* became a part of PressForward and a testing ground to determine the human and technical requirements for a scholarly community to surface, aggregate, identify, and disseminate communication on the open web, we have gone through two unique phases of development:

### Phase 1. July 2011-May 2012

[![DHNow Editorial Process, 2011-2012](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/2011_dhnow_editorialprocess-300x163.jpg)](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/2011_dhnow_editorialprocess.jpg)

DHNow Editorial Process, 2011-2012
\*Graphic by Jeri Wieringa\*

*   Expanding source base by intentional and focused searching
*   Offering an [opt-in to the source base](http://digitalhumanitiesnow.org/submit-your-work/ "Digital Humanities Now Submit Your Work")
*   Testing additional filtering, including [Yahoo Pipes](http://pipes.yahoo.com/pipes/ "Yahoo Pipes") and [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Digital Humanities Now Tweeted Times")
*   Review of all content by all Editors to determine scope and selection criteria
*   Aggregation via Google Reader
*   Commenting and selection using Google Reader
*   Review of all content by all Editors-in-Chief
*   Final selections made in consultation with all Editors-in-Chief
*   ~25 hours/week across 3 Editors
*   Publication 5 days/week

First the new project staff — Director Joan Fragaszy Troyano and Graduate Research Assistants Sasha Hoffman and Jeri Wieringa — began to expand the source base to include RSS feeds. We explored off-the-shelf solutions for filtering out relevant content by comparing the content identified by [Yahoo Pipes](http://pipes.yahoo.com/pipes/ "Yahoo Pipes") to that selected by the editors. [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Digital Humanities Now Tweeted Times") also filtered content shared via Twitter, which continued to be an important part of the source base aggregated and reviewed in Google Reader. At the same time that we developed editorial criteria, we also prepared publication and distribution methods for the relaunch of the website.

Once the site was relaunched in November 2011, we continued to establish editorial criteria and a sustainable workflow for a weekday publication with three staff. We enabled readers to [add themselves to the source base](http://digitalhumanitiesnow.org/submit-your-work/ "Digital Humanities Now Submit Your Work"). In addition, we began to scope out the requirements for a user-controlled technology to facilitate this aggregation process. As Google removed the ability to share and comment on RSS feeds in Google Reader in order to push Google Plus, we suspected that a user-controlled RSS aggregator within our WordPress installation soon would be critical. After testing out [Tiny Tiny RSS](http://tt-rss.org/redmine/projects/tt-rss/wiki "TinyTiny RSS") and a few other RSS aggregators, we confirmed the need to develop our own and in a relatively short timeframe. We pulled [Aram Zucker-Scharff](http://aramzuckerscharff.com/ "Aram Zucker-Scharff"), [Boone B. Gorges](http://boone.gorg.es/ "Boone Gorges"), and [Jeremy Boggs](http://clioweb.org/ "Jeremy Boggs") in for the development and design work on the [PressForward plugin](https://github.com/PressForward/pressforward "The PressForward Plugin"), drawing on their expertise in journalism practices, WordPress development, and user interfaces.

[Read our 6 month review from May 2012 here](http://pressforward.org/2012/05/six-month-review-of-digital-humanities-now/ "Six Month Review of Digital Humanities Now").

### Phase 2: June 2012-June 2013

[![DHNow Editorial Flow 2012-present](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/10/5dhnow_flow-300x193.png)](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/10/5dhnow_flow.png)

DHNow Editorial Flow 2012-present
\*Graphic by Spencer Roberts\*

*   Aggregation via Google Reader
*   Additional filtering by [Yahoo Pipes](http://pipes.yahoo.com/pipes/ "Yahoo Pipes") and [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Digital Humanities Now Tweeted Times")
*   Review of everything by volunteer [Editors-at-Large](http://digitalhumanitiesnow.org/editors-corner/ "Digital Humanities Now Volunteer")
*   Nominations via Google Reader
*   Confirmation of Editor-at-Large survey and proficiency by rotating Editor-in-Chief
*   Editorial selections and commenting by Editors on Google Plus
*   Final selection and publication by rotating Editor-in-Chief
*   ~10 hours/week for Editor-in-Chief
*   Publication 2 days/week

During this period we reduced our publication schedule from five to two times a week, partly influenced by the smaller amount of relevant content, and partly in an effort to find a sustainable workload that balanced other project requirements.

Most importantly, we added another filtering method: additional human eyes. Volunteer editors-at-large added value through the gift of their labor, as well their additional perspectives and expertise. We hacked together a system for editors-at-large to nominate items from Google Reader, and Editors-in-Chief dipped into the full stream of content as needed to confirm that volunteers were nominating the most relevant content. We continued to hold editorial discussions in a closed Google Plus circle prior to drafting new items for each post on *DHNow*.

The combination of experienced editors plus additional editors-at-large reduced internal workload from about 20 hours/week to 10 hours. Given the increased input from the community, as well as a reduction in our review time, this time managing editor-at-large signups was well-spent.

During this period also we oversaw scope and basic development of the [PressForward plugin](https://github.com/PressForward/pressforward "The PressForward Plugin") leading to the [beta release in June 2013](http://pressforward.org/2013/06/plugin-beta-now-available/ "PressForward Plugin Beta Now Available").

[Read our 16 month review from February 2013 here](http://pressforward.org/2013/02/16-month-review-of-digital-humanities-now/ "Sixteen Month Review of Digital Humanities Now").

## *DHNow* 3.0: Community-Sourcing and Filtering, 2013-present

[![Editor-at-Large Instructions](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/Screen-Shot-2013-11-12-at-10.07.12-AM-300x117.png)](http://chnmdev.gmu.edu/fellows/regan/PressFwd/wp-content/uploads/2013/11/Screen-Shot-2013-11-12-at-10.07.12-AM.png)

Editor-at-Large Instructions

*   Aggregation and nomination via [PressForward plugin](https://github.com/PressForward/pressforward "The PressForward Plugin")
*   Additional filtering by [Yahoo Pipes](http://pipes.yahoo.com/pipes/ "Yahoo Pipes") and [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Digital Humanities Now Tweeted Times")
*   Review of everything by volunteer [Editors-at-Large](http://digitalhumanitiesnow.org/editors-corner/ "Digital Humanities Now Volunteer")
*   Confirmation of Editor-at-Large survey and proficiency by [rotating Editor-in-Chief](http://digitalhumanitiesnow.org/about/#board "Digital Humanities Now Editors") as needed
*   Final selection and publication by rotating Editor-in-Chief
*   ~6 hours/week for experienced Editor-in-Chief
*   Publication 2 days/week

By June 2013, the three experienced editors-in-chief who worked independently and in regular rotation began to mentor new Editors joining the project team in August 2013 (Amanda Morton, Benjamin Schneider, Lindsey Bestebreurjte, Lisa M. Rhody, and Stephanie Westcott). Because the plugin enables the surveying, nominating, and drafting of content to occur within WordPress, the process to review, select, and publish is much easier. Recent improvements to the editor-at-large management process also help reduce the workload to 6 hours/week for experienced editors who can review and publish content more quickly. The bulk of each editor-in-chief’s time is spent reviewing and selecting items for publication, but at least 2 hours/week are required to prepare the material for distribution on the *DHNow* website. There are additional opportunities for reducing editor-in-chief workload, but they would be at the expense of consistent formatting of published materials.

## Looking Forward

As we begin our third full year of running *DHNow* as an edited publication, we have an established internal process. We are continuing to enhance the functionality of the PressForward plugin as well as develop documentation and materials for others who wish to create similar publications for their field of interest.

We have been gratified to find that even as the number of sources grew, our time required has not increased. The involvement of volunteer community has reduced internal effort substantially, as has growing familiarity with selection process. We believe that our consistent quality of selections and frequency of publication encourages volunteer participation, which in turn expands *DHNow’s* coverage of this diverse field*.*

Because *DHNow* is a critical case study for a larger [PressForward](http://pressforward.org "PressForward Project Homepage") project, it necessarily began as an in-house project. Given the amount of staff time required to select and publish content, in addition to managing community volunteers, we will continue to maintain full responsibility for editing and publishing *DHNow* for the foreseeable future.

The challenges we face likely will not surprise any of our readers:

*   staggering amounts of potential content, with very small amount relevant
*   scarcity of time and attention from knowledgeable people
*   decreasing usability of RSS feeds for individual readers and increasing capabilities of machine-enabled flows of information

At the same time, we do sense some exciting opportunities. Not surprisingly, scholarly communities continue to desire ways to filter high quality content from a river of news. We plan to turn some of our attention back to improving the automated filtering of content coming through the river of news (you can read about our first attempt [here](http://pressforward.org/2013/04/filtering-scholarly-writing-from-the-open-web-using-active-learning-svm/ "Filtering Scholarly Writing from the Open Web Using Active Learning SVM")). In addition, we will continue to develop documentation for our practices and plugin to help other communities create their own community-sourced and edited publications that highlight and disseminate work already available on the open web.

We anticipate that existing scholarly communities wanting to move beyond listserv or newsletter distribution methods will be likely adopters of this “now” publication model. In addition, emerging and topically-focused communities of interest may have the interest and commitment to beginning their own publications. If you are interested, please [fill out our form](http://pressforward.org/pressforward-potential-publication-questionnaire/ "PressForward Potential Publication Questionnaire"), drop us a line at *info at pressforward dot org*, and we will be happy to speak with you.

## *DHNow* 2011-203 Overview

### Content

*   [650 RSS feeds](https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AucqXAIBhf_idGNlZzVjSGkxQU9XNU4yb0w1clMxeXc&single=true&gid=3&output=html "Digital Humanities Now Compendium") plus [Tweeted Times](http://tweetedtimes.com/#!/dhnow "Digital Humanities Now Tweeted Times")
*   [414 Editors’ Choice Selections](http://digitalhumanitiesnow.org/category/featured/ "Digital Humanities Now Editors' Choice Selections")
*   [380 Jobs](http://digitalhumanitiesnow.org/category/news/job/ "Jobs")
*   [419 CFPs and conferences](http://digitalhumanitiesnow.org/category/news/cfp/ "Digital Humanities Now CFPs and Conferences")
*   [418 Resources](http://digitalhumanitiesnow.org/category/news/resource/ "Digital Humanities Now Resources")
*   [106 Reports](http://digitalhumanitiesnow.org/category/news/report/ "Digital Humanities Now Reports")
*   [31 Announcements](http://digitalhumanitiesnow.org/category/news/announcements/ "Digital Humanities Now Announcements")

### Editors

*   From [3 to 8 rotating Editors-in-Chief](http://digitalhumanitiesnow.org/about#board "Digital Humanities Now Editors") (3 research faculty; 5 Graduate Research Assistants)
*   Over [175 community Editors-at-Large](http://digitalhumanitiesnow.org/editors-corner/our-editors/ "Digital Humanities Now Editors"), averaging 5/week

### Reach

*   from ~2, 000 Twitter followers in Spring 2011 to more than [11,500 in October 2013](https://twitter.com/dhnow "Digital Humanities Now on Twitter")
*   from ~75,000 unique visits by 30,000 visitors in 2010 to over 340,000 visits by nearly 95,000 unique visitors so far in 2013

### Workload

*   from 15-25 hours/week total shared among 3 editors
*   to 6 hours/week by single editor

### Technology

*   from sharing and commenting via Google Reader and Google Plus
*   to [PressForward plugin](https://github.com/PressForward/pressforward "The PressForward Plugin") that enables input from volunteer Editors-at-Large

[*Crossposted on Digital Humanities Now*.](http://digitalhumanitiesnow.org/2013/11/editors-choice-digital-humanities-now-and-then/ "Digital Humanities Now (And Then)")
