---
name: Garry's Mod Prop Hunt Mapvote Binding
description: A binding of a custom mapvote system for the popular game mode Prop Hunt of Garry's Mod.
cover: /assets/work/gmod-prophunt-ulx/cover.jpg
date: 2013-12-15T12:00:00+0000
technologies:
  - lua
status: deprecated
type: hobby
links:
  steam: https://steamcommunity.com/sharedfiles/filedetails/?id=207938283
---

If you ever played computer games you probably have heard about [Garry's Mod](https://store.steampowered.com/app/4000/Garrys_Mod/),
a Sandbox game based on the same engine as Half-Life 2 with support for custom game modes made by the community
and published on the [Steam Workshop](https://steamcommunity.com/app/4000/workshop/).

Back when I was 12 years old, I loved playing this game. Matter of fact, it was because of this game in particular
that I wanted to learn how to self-host services, because my very first game server I ever hosted was for this
game specifically.

One of the game modes I enjoyed playing the most was _Prop Hunt_ which is basically a hide-n-seek game where
players would take the shape of an object in the map and the hunters would have to guess which of the props
are actually players and destroy them.

The game server that I hosted myself would have this game mode 24/7. However, at the time, the game was undergoing
a migration regarding how content was served to the players. You see, something very characteristic of games
made with the Source engine is the ability of customizing the servers with third-party content that
players would download when connecting to the server automatically. Back then, this content could be served directly
by the server, which would actually be very slow since the server was already busy serving the current players
connected. Because of this, something called _FastDL_ was implemented, which allowed servers to have the option
to point users to the URL of a webserver where they could fetch the custom content from, unloading a huge
burden from the actual game server and allowing players to download content much faster.

When I hosted my Garry's Mod server, the game was undergoing a change that allowed servers to use the
Steam Workshop directly rather than FastDL for content download. This meant that the server would not
need to have manually added custom content, using what was already available at the Workshop, which would
be served directly from Steam's servers.

Now this change took some time to be effective, because it was actually not as straightforward to add
Workshop content onto the server. In any case, I went for that route and decided to implement it myself.
However, the official workshop item for the _Prop Hunt_ game mode did not work correctly when it came
to changing maps, since these were no longer `.bsp` files in the server but just workshop subscriptions.
Because of this, when a session ended, and it was time to vote for the next map to play, the process would
simply not work.

Luckily there was a map voting system made by someone else (whom I do not remember, since this happened
in 2013), which could be integrated into the game mode.

So that's what I did, I learned how to program in Lua, downloaded the original game mode code, the
map vote system and tied them together. To be honest, the process was not really any hard, but it worked,
and finally I had a _Prop Hunt_ fork that had a working (and pretty) map voting system for servers
that used Workshop content and ULX (an admin modification for the game server).

I then decided to publish this package to the Workshop, which also helped me to get a relatively
hard game achievement, [Mega Upload](https://steamcommunity.com/id/moonstar-x/stats/GarrysMod)
which required uploading Workshop content that would have more than 1000 thumbs up.

At the time of writing, this addon has:

- 96.769 unique visitors.
- 203.343 subscribers.
- 1.674 favorites.
- 8.607 reviews.

## Conclusion

Finally, building this fork was actually an interesting experience. Because of this, I had gotten deeper
into self-hosting services, and more importantly, programming.

While I don't have anything else to showcase about this project today, I still decide to include it
in this site because it meant a lot for my career decision and future.
