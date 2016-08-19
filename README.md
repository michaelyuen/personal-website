# Personal Website

My personal website, porfolio, and playground.

## Versions

I've opted to keep the previous iterations of my personal website here for history. Also, it is a nice way to review my progression as a developer. They don't follow any real system, though I intend to proceed with semantic versioning moving forward.

### V1

My first attempt at building myself a site from scratch, and before I even had work to show. It was rudimentary, consisting of plain html, css, and js in the form of plugins. IIRC, it wasn't responsive either.

### V2

Built on angular, but rather minimal in that regard. The design concept was centered around fullscreen images, which inevitably can be much trickier to implement than it seems in your head.

I still think the concept has cool features, but was never officially shipped. The design itself never quite *worked*, or performed smoothly on mobile devices due to the full page transitions and large images. I think the animations could be smoothed out utilizing greensock; I've had great success with that in V3. But, there is still the question of fullscreen images, and that is something I moved away from as I desired a more minimal and performant site.

The exploration of SVG to create the desired panel hover animation was really neat. Also, this is when I began to utilize less and grunt. Two tools that really aided my efficiency.

### V3

This is the current version that can be seen live today. I've spent a considerable amount of time going through every aspect of development to really produce my best code to not only be a portfolio for my professional work but function as something worth admiring in its own right.

The core framework is angular. The only additional js is GreenSock for animations. Additional tooling is less and grunt, with the addition of bower. Also worth noting is the addition of the htaccess file to remove the hash from the url, as well as optimize things to utilize gzipped files if possible and cache effectively.

