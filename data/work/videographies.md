---
name: Videographies
description: Videographies is a visual art project that takes two different approaches to video.
cover: /assets/work/videographies/cover.jpg
date: 2023-10-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - react
  - vite
  - express
  - python
  - opencv
  - docker
status: completed
type: art
links:
  website: https://marcialcoba.carbonmade.com/projects/7247457
---

**DISCLAIMER: I do not claim ownership of this project. The artistic work behind this project is all credited
to [Andrés Marcial](https://marcialcoba.carbonmade.com).**

After I graduated from college I received a message from one of my teachers that taught me a course named
_Physical Interface Design_ or in Spanish _Diseño de Interfaces Físicas_. This course was an introduction
to Arduino and interface design. This class had a very artistic component since it was taught mainly to
students of design careers, but engineers sometimes take that class too as part of a minor requirement.

This teacher had told me that a friend of mine was working with him and that they needed an extra hand with
an art project that had a technological aspect that needed an engineer to implement. I accepted and began
working alongside them on [Continuum](../continuum).

Working in that project I met [Andrés Marcial](https://marcialcoba.carbonmade.com) who's one of the artists
that take part in that collective. He approached me asking for help fixing a project of his that had some
software issues. I agreed to help him, and he gave me some equipment which included a Raspberry Pi computer
and some old phones. That same night, I broke the SD card inside the computer and lost the software I was
supposed to fix in the first place. 🤦‍♂️

Luckily he had shown me the program before going home, so I had a _vague_ idea of what it did and how it did
it, so rebuilding it myself wouldn't be too complicated.

### The Idea

The project is a web application that plays a video in loop in-sync with the rest of clients that are watching
it. The video has no audio but the page does play back different types of tracks that can be independently selected
by the devices. The tracks and the video are all the same length, and they need to be played in-sync with
the rest of the devices.

Additionally, some devices will act as motion detectors, so the media can be paused when nobody is in the room
or resumed as soon as somebody enters.

## The Implementation

The idea was fairly simple. A simple React single page application, a websocket for the sync logic, a webserver
for both the frontend and the media, an Internet camera app on certain phones and Python with OpenCV to read the
video feeds in parallel and some [image diffing](https://stackoverflow.com/questions/27035672/cv-extract-differences-between-two-images)
techniques to detect simple movement.

## The Result

The development of the project was relatively straight forward, until it wasn't.

You see, I had to work with ancient devices, some of them running Android 3, an iPhone 4S, the latest one
was running Android 8 and had a whopping 1GB of RAM. Mind you this happened at the end of 2023, so you can
already imagine the age of these devices.

Why? Well,

1. The high number of devices (about 16-20).
2. The lower cost of the devices (some of them were even free).
3. They're exposed to the public (less of a risk of having something stolen when it's worthless).
4. It's part of the artistic expression. (Gives new life to what was once obsolete).

I hadn't counted with how old the devices were, and I ran into certain issues with compatibility.

Personally, I have never run into issues with website compatibility. I typically check [caniuse](https://caniuse.com/)
to see if what I want to do can be supported by the different browsers and devices. Only this time I hadn't
done that, because I ran with a problem with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/flex),
more specifically with the `flex: 1` directive which I've used plenty of times before.

It seems that `flex: 1` was actually not well-supported back in the early 2010's because half the devices looked
terrible. This is the first time I had to ever check for polyfill for CSS. I finally got it working fine
in all the devices at the end.

## Conclusion

Finally, working on this project was particular. It was my first time delving into artistic projects,
and while I am not too creative myself, I found it entertaining and fulfilling to build systems this
_different_.

This exposition was publicly available at the [Contemporary Art Center of Quito](https://fundacionmuseosquito.gob.ec/cac/)
for the [BUAM](https://buamusfq.org/) from 2023 Q3 to 2024 Q1.

![Videographies exposition.](https://carbon-media.accelerator.net/0000000cJiG/eLoRSlXCoRGer7Pz5g72Tz;539x960.png?auto=webp)

If you're interested in what the exposition looks like, check out [Videographies 2022](https://marcialcoba.carbonmade.com/projects/7247457).
Make sure to check the rest of [Andrés Marcial](https://marcialcoba.carbonmade.com/)'s work.
