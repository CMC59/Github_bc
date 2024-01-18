--- { "layout" : "center" }
# cd presentation_git by LE VIOC' PHILIPPE PLAIA

---

<!-- slides.md -->

# GitHub Bootcamp
```sh
git config --global user.name "Your full name"
git config --global user.email "youremail@provider.com"
git config -l
```
---

## How to initialise a new repository

```sh
git init
```

---

## How to review change:
```sh
git diff
git diff <a_specific_file_or_folder>
```
---

## How to commit changes
```sh
git commit --message "A meaningful message about this change"

```
---

## How push a repo
```sh
git remote add origin git@github.com:<username>/<project>.git
```
---

## Create a new branch
```sh
git checkout -b new-branch
```
---

## Work on a branch
```sh
git checkout new-branch
```
---

## Merge branch on main
```sh
git checkout main
git diff main..my-feature
git merge my-feature
```
---

## Delete a branch
```sh
git branch --delete my-feature
```
---

## Pushing changes to remote
```sh
git push origin --delete my-feature
```

<red> this is how we do it !</red>
<white> this is how we do it !</white>
<style>
red { color: red }
white { color: white }
</style>
---

## Pulling changes from remote
```sh
git pull origin your-branch
```
---

## Text
"Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands."
---

## Lists
- [x] Condoms
- [ ] Basic
- [ ] Simple
---

## Images
<div style="text-align:center;">
  <img src="https://i.gifer.com/origin/5d/5d0ef729d17b26f8d55b3add0455be13_w200.webp" alt="Alt Text" />
</div>

---

## Headers & Quotes

# Banana Bonanza

## Wacky Watermelon

### Chuckleicious Cherry

#### Grape Giggle

> Text that is a quote

---

## Code

Some basic Git commands are:
```
git status
git add
git commit
```

---
## EXTRAS
😧 :anguished:	😮 :open_mouth:	😬 :grimacing:
😕 :confused:	😯 :hushed:	😑 :expressionless:
😒 :unamused:	😅 :sweat_smile:	😓 :sweat:
😥 :disappointed_relieved:	😩 :weary:	😔 :pensive:
😞 :disappointed:	😖 :confounded:	😨 :fearful:
😇 :innocent:	👽 :alien:	💛 :yellow_heart:
💙 :blue_heart:	💜 :purple_heart:	❤️ :heart:

---
## How to automate issue closing