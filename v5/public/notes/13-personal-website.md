---
title: Personal Website
Description: Tracking details about working on my personal website
date: '2020-05-09'
tags:
- dev
- nextjs
- personal
- personal-website
- styled-components
- webdev
absolute-note-number: x
zettel: 13
---

# Personal Website



- [ ] headless cms
- [ ] styling
  - [ ] Utility? (stable css)
  - [ ] (stable htm)?
- [ ] Theme





---



## Day 2 - 05/10

Using styled components.



To override styles:

```tsx
import { NavWrapper } from 'components/Nav';

const Container = styled.section`
	${NavWrapper} {
		background: purple;
	}
`;
```



In Nextjs, if you use `Link` to route internally, the default behavior is to scroll to top on each route change.

To disable this, find the `Link` you're interested in and add the prop scroll as so: `<Link scroll={false} />`.



Being able to see this update in real time because my local server is running is pretty insane!

Idea :bulb: "If you're using Typora this is how you can create a website with your notes in 3 easy steps!"



- [ ] need to parse emojis



Idea :bulb: On Notes, have a "party mode" button where the list is rendered in some cool way (to be researched).

- this can apply to other pages too obviously

- [ ] research cool way to render party mode



- [ ] font loading?



## Day 3 - 05/11

came upon this: https://lokeshdhakar.com/notes/

src here: https://github.com/lokesh/lokesh-dhakar

i like how he's using simple markdown files to create this nice interactive interface. very similar to what i'm doing. how could this be a product?



somewhat separately - a website for capturing reviews?

- https://letterboxd.com/trentwalton/
- but for more than movies?







https://www.thumbtack.com/p/website-development-prices



## 09/20

1. Set up personal website for first blog post
   - Analytics to know who sees it
   - View count on each page would be neat
2. Set up `@goomba/utils` and write blog post in tandem