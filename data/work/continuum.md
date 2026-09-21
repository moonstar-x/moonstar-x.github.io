---
name: Continuum
description: Continuum is an artistic project that presents a video art exhibition platform as a work of art in itself.
cover: /assets/work/continuum/cover.jpg
date: 2023-09-15T12:00:00+0000
technologies:
  - nodejs
  - javascript
  - typescript
  - react
  - vite
  - express
  - mariadb
  - python
  - opencv
  - docker
  - dart
  - flutter
status: completed
type: art
links:
  website: https://collectivo-continuum.github.io
  appstore: https://apps.apple.com/ec/app/collectivo-continuum/id6473882988
  playstore: https://play.google.com/store/apps/details?id=com.collcontinuum.continuum
---

After I graduated from college I received a message from one of my teachers that taught me a course named
_Physical Interface Design_ or in Spanish _Diseño de Interfaces Físicas_. This course was an introduction
to Arduino and interface design. This class had a very artistic component since it was taught mainly to
students of design careers, but engineers sometimes take that class too as part of a minor requirement.

This teacher had told me that a friend of mine was working with him and that they needed an extra hand with
an art project that had a technological aspect that needed an engineer to implement. I accepted and began
working alongside them on this project.

Continuum is the effort of a collective of multiple artists that have worked on building a multidisciplinary
artistic exposition with the support of two platforms.

## Mobile App

One of the main points of this project is a mobile application that can play videos in-sync with the rest
of users depending on the physical position inside the museum through the use of BLE beacons.

This part of the application was mostly built by my friend [Diego Veintimilla](https://diegoveintimilla.com),
my input in his part of the work was mainly to help with publishing the application on the
[Play Store](https://play.google.com/store/apps/details?id=com.collcontinuum.continuum&pli=1) and on
the [App Store](https://apps.apple.com/ec/app/collectivo-continuum/id6473882988).

## Automated Video Service

The part I was assigned in the whole project was actually a service that would be used in a small booth in
the museum that would detect human movement, take a 30 seconds video of the person in front, apply some
transformations (removing the background, producing a long-exposure effect, reduce the framerate), and then
project it into the screen on the booth onto an acrylic prism, producing the illusion of a hologram.

Initially I thought it would be simple, but it turned out to be much more complicated. This part of the project
actually involved multiple smaller bits, since we're talking about:

1. The service that uses the webcam feed to detect human movement, take a video, transform it, and store it.
2. A web server to serve the available videos taken.
3. A frontend to display the video recorded once the video is done.

### Implementation

Implementing this idea was a bit long to do, but I managed to do it right on time. The hardest part was
leveraging OpenCV to do the required transformations since it involved some creative work to remove the background
through multiple methods and a way to generate a long exposure effect. At the end, the videos produced look
colorful blurry silhouettes on a black space.

https://moonstar-x.dev/assets/work/continuum/hologram-preview.mp4

If you're curious about what other videos have been taken, check out the official
[video archive](https://collcontinuum.com/archivos-de-videoarte/).

Next, in order to display these videos on the screen, I opted for a web application that would refresh
the page once new videos had been taken and display them fullscreen.

### Some Issues

During development, everything was working flawlessly, until we finally deployed the service on the Orange Pi
computer on the museum. We ran into particular issues that were very frustrating.

1. Our service required Internet because we needed to upload the videos to a storage unit since we needed a way
to recover them without having to physically go to the museum each time, this meant we needed to use the
museum's Wi-Fi connection.
2. The museum's Internet connection was particularly slow.
3. The museum's network had a pretty aggressive firewall that basically allowed only HTTP(s) requests.
4. The museum's network administrators were apparently very active when checking out what we were doing.

Don't get me wrong, I'm actually very happy to see that the museum's IT department was very wary of what happened
in their networks, but it doesn't take away the fact that the problems we ran into were frustrating.

#### Clock Syncing

The network had blocked off NTP requests, which are the ones used to sync the clocks in our devices. Now, this
wouldn't be problematic if the device used had an RTC module, but apparently the Orange Pi doesn't. Meaning
I was stuck with a device that wouldn't have an accurate clock. This is very problematic because without an
accurate clock on your device, the SSL certificates [cannot be verified](https://security.stackexchange.com/questions/72866/what-role-does-clock-synchronization-play-in-ssl-communcation).

In retrospect, I could have written a simple script to sync the clock on system startup with an HTTP request
to any time API and use that to set it up, but since I had to physically go to the museum, I decided not to do it.

#### VPN Blocking

I thought I was going to outsmart the IT department by installing a VPN to bypass the limitations and
be able to remotely connect to the device from my home. My attempt was frustrated by the fact that
the firewall had blocked off [ZeroTier](https://www.zerotier.com/).

#### DNS Blacklisting

You know how I said that the service needed Internet to upload the videos to a remote storage service?

Well, it got blocked by DNS. Out of nowhere the computer could no longer resolve the API's domain name,
which happened with the rest of devices in the network too. It seems IT noticed new and strange traffic
to the service, and removed it from their DNS name resolution tables.

I also tried manually changing the DNS addresses on the computer, but the most commonly used like
`8.8.8.8`, `8.8.4.4`, and `1.1.1.1` were all blocked too, forcing me to use the one that the router assigned.

---

At the end we opted to use the Wi-Fi network of the museum's restaurant (with their consent obviously) that
was a bit more open with the points above at the expense of having an even slower Internet connection.

## Conclusion

Finally, this project taught me some valuable lessons when it came to deploy physical devices and gave me a
reality check when it came to taking things for granted, such as a good reliable Internet connection and
be able to use any type of service without of thinking about the security risk it imposes.

Yes, I got frustrated at the development of this project because of the network's configuration, but I'm
glad that the museum had a great notion of cyber-security.

This exposition will be publicly available from 2024 Q1, currently the opening date was postponed due
to the poor socio-political conditions in my country which forced the museum to close to the public
until the situation improves due to security concerns.

In any case, make sure to check the project's [official site](https://collcontinuum.com/) to check
what it's all about and see the work of the talented artists that make part of the collective.
