---
slug: on-removing-lfs
date: 2021-07-08
title: "On removing LFS"
published: false
---

## Background

My final year project was about observing how much bias can be introduced into a GRU4Rec news recommender system using a reinforcement learning framework called PoisonRec. It involved processing large datasets into pickle files readable by the recommender system.

Originally, the repository (~2.5GBs) was hosted on my school's GitLab server and I used Git Large File Storage to manage the datasets. However, as I attempted to migrate the repository to GitHub, I realized this exceeded GitHub's LFS limit of 1GB. Unwilling to buy extra storage, I turned to Google & Stack Overflow. This post serves as a record of what I did, mostly for my future reference.

<!-- In theory, the code should reproduce the pickle files used in the project. As stated by GitHub, it shouldn't be used to host large datasets anyways. Previous attempts to only push the LFS pointers failed.  -->

It would be easier to make a new repository and push all relevant files to GitHub, but I wanted to use this opportunity to figure out more aspects of Git & LFS.


## Removing LFS files

### 1. Clone the repository and head to its directory

```
git clone <repo.git>
cd <repo>/
```


### 2. Remove known files from the repo's history.

Suppose `A.pkl` and `B.pkl` have to be removed. This command removes both of them in one go:
```
git filter-branch --force --index-filter \
"git rm --cached --ignore-unmatch <A.pkl> <B.pkl>" \
--prune-empty --tag-name-filter cat -- --all
```

Should you want to remove an entire folder, add a `-r` flag to the second line. This recursively removes the folder an its contents, nested folders and all. Please double check your paths before hitting enter.

[Reference](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#using-filter-branch)

### 3. These files leave behind some large .pack files... let's clean them up.

```
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --aggressive --prune=now
```

[Reference](https://stackoverflow.com/questions/11050265/remove-large-pack-file-created-by-git)


### Finding large files throughout the repository's history

Repository is still huge? Check the repo history for the largest forgotten files via:
```
$ git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -1
> 56f11b82847fac0fd94d7dfed7980f7bb6270e70 blob   89095702 17777154 824227216
```

The first column, e.g. `56f11b82847fac0fd94d7dfed7980f7bb6270e70`, is a representation of a file. To find the file, run

```
$ git rev-list --objects --all | grep 56f11b82847fac0fd94d7dfed7980f7bb6270e70
> 56f11b82847fac0fd94d7dfed7980f7bb6270e70 very_large_dataset.pkl
```

We can see that `very_large_dataset.pkl` is another large pickle file we didn't remove. We can do that via step 2 above.

[Reference](https://www.ducea.com/2012/02/07/howto-completely-remove-a-file-from-git-history/)

## End

After you're happy with the state of the repository, push it to remote. In my case, I made a new repository on GitHub and pushed there.
```
git remote add github <repo.git>
git push -u github main
```

If pushing to an existing repository, you'll be overwriting the history via a force push.