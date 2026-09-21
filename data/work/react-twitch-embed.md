---
name: React Twitch Embeds
description: A collection of components to embed Twitch.
cover: /assets/work/react-twitch-embed/cover.jpg
date: 2020-02-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - react
  - jest
  - githubActions
status: maintained
type: hobby
links:
  github: https://github.com/moonstar-x/react-twitch-embed
  website: https://docs.moonstar-x.dev/react-twitch-embed/
  npm: https://www.npmjs.com/package/react-twitch-embed
stats:
  github: moonstar-x/react-twitch-embed
  npm: react-twitch-embed
---

At the beginning of the 2020 pandemic, I was building a gaming site for me and my friends. The site would have profiles
for each of us with a gaming theme. It would also have a nice page where you could see each of our Twitch streams
simultaneously.

To implement that I had to create a custom component to embed Twitch and I realized that it would be beneficial to
separate it and release it as a library. So I did.

Building this was an awesome learning experience as well, it was the first time I was building a React component library
and one where I had to follow the documentation line by line. Twitch's documentation, specifically for the embedding logic
is somewhat incomplete, and implementing it posed somewhat of a challenge.

Today the library has some decent usage by lots of people integrating Twitch streams into their React applications.
