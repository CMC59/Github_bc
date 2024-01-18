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

## How to review change
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