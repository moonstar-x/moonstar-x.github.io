---
name: Automation Service
description: A custom automation service to handle some notifications with a Workflow based design.
cover: /assets/work/automation-service/cover.jpg
date: 2023-01-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - express
  - level
  - docker
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/moonstar-x/automation-service
stats:
  github: moonstar-x/automation-service
---

Some time ago I began using a low-code solution for automating certain tasks called [n8n](https://n8n.io).
This tool was pretty darn good. I started using it around the end of 2020, and it had lots of integrations
right out of the box that made it super easy to create automations.

My automation needs were fairly simple, although a bit niche. Most of them were notifications to Discord channels
by webhooks of certain things. Some of these notifications were weekly digests of how my GitHub repos and npm
packages were doing in terms of user engagement.

Unfortunately, most of the things I needed to integrate with were not available on n8n right off the bat,
which meant I would have to do the HTTP requests to each API manually and do some parsing and computation with
n8n's Code Block, which meant I was writing code to implement the automations anyway.

So much for low-code platform...

Then I decided to create my own solution, a workflow-based automation service that would be written in TypeScript,
would have the clients for the integrations I needed and each workflow would be defined in its own independent class
to be loaded dynamically.

For the most part it worked, I had all the clients I needed set-up, I had my workflow logic, I had some integrations
to databases and caches for any workflow that needed them, I even had some nice trigger logic that would execute my
workflows on certain events like new tweets by certain users.

Part of the reason I wanted to make my own solution was because I wanted to have an automation
that would automatically retweet the tweets from a certain account. This is not possible with n8n, as the alternative
would be to execute the task every X minutes to check for the latest tweets by the user, and even then this didn't
work that well.

Things were good until Twitter became X and with that rebranding came new policies regarding their API usage,
notably the removal of free API access. I didn't think it was worth paying that API price just to retweet another
account, so I gave up altogether.

Since the primary reason I had made my own automation service was no longer possible, I deprecated the project
and went back to n8n. During the time I was gone their team updated the platform so much I had to re-learn certain things
but the changes were mostly for the better. Now I have fairly complex automations set up that can integrate with lots of
services without having to implement the clients myself, which was one of the biggest burdens of maintaining my own service.

All in all it was a great experience having made this project, but I learned it's best to use what's available
and not reinvent the wheel.
