---
title: Heroku
date: '2020-04-18'
tags:
- heroku
- cli
absolute-note-number: 22
zettel: 10
---



# Heroku



## CLI Commands

```bash
// In repo, push directory "server-ws" to master rather than root
// Not sure if this even works as expected :shrug:
git subtree push --prefix server-ws heroku master
```



```bash
// List builds
heroku builds -a bubby-messaging-server

// Cancel build
heroku builds:cancel BUILD_ID -a bubby-messaging-server
```

