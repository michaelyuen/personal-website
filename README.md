# Personal Website

My personal website, porfolio, and playground.

## Versions

I've opted to keep the previous iterations of my personal website here for history. Also, it is a nice way to review my progression as a developer. They don't follow any real system, though I intend to proceed with semantic versioning moving forward.

### V1

My first attempt at building myself a site from scratch, and before I even had work to show. It was rudimentary, consisting of plain html, css, and js in the form of plugins. IIRC, it wasn't responsive either.

### V2

Built on angular, but rather minimal in that regard. The design concept was centered around fullscreen images, which inevitably can be much trickier to implement than it seems in your head.

I still think the concept has cool features, but was never officially shipped. The design itself never quite _worked_, or performed smoothly on mobile devices due to the full page transitions and large images. I think the animations could be smoothed out utilizing greensock; I've had great success with that in V3. But, there is still the question of fullscreen images, and that is something I moved away from as I desired a more minimal and performant site.

The exploration of SVG to create the desired panel hover animation was really neat. Also, this is when I began to utilize less and grunt. Two tools that really aided my efficiency.

### V3

This is the current version that can be seen live today. I've spent a considerable amount of time going through every aspect of development to really produce my best code to not only be a portfolio for my professional work but function as something worth admiring in its own right.

The core framework is angular. The only additional js is GreenSock for animations. Additional tooling is less and grunt, with the addition of bower. Also worth noting is the addition of the htaccess file to remove the hash from the url, as well as optimize things to utilize gzipped files if possible and cache effectively. While it doesn't tell the whole story, from a performance perspective I'm pleased with 97% scores from PageSpeed and YSlow, and a load time of .7s. [Reference](https://gtmetrix.com/reports/michaelclaytonyuen.com/w0xzUmHA)

In regards to design, I'm fairly pleased with my current design efforts being that I'm not a designer. I take inspiration from Google's Material Design, which is where I came to form the color palette. The typography consists of 2 fonts, generally 1 for headers and 1 for paragraphs. Otherwise, there's not a ton going on and I think that's a good thing. I've said that my ideal website is clean and delightful, and I feel that I've managed to achieve that.

Outside of core development, one of the main features is my cinemagrcontentaph avatar. My hope is that it's mostly subtle, but with just enough uniqueness to make it delightful to those who notice. It was a lot of fun to play around in Photoshop learning how to make it.

Although there are still \(and probably always will be\) things that irk me, overall I am quite proud of what I've accomplished so far...

## What's Next

* I sorely need to update some of the content in the **About** section.
* My current focus is in building out ngWordpress 1.0, but after that I plan to implement ngWordpress to make updating and creating content a breeze.

