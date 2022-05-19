# Bvicam

**Bvicam** this is a core repository for bvicam incubation cell

### Using Git

- Create a copy of repository in your system
```
git clone https://github.com/Bvicam/bvicam-core
```

- Checkout into your own new branch
```
git checkout -b <branch name>
```

- Add all files to git
```
git add .
```

- Commit your changes with message
```
git commit -m "<message>"
```

- Publish your changes on github
```
git push
```
#### Preventing Git Conflicts

- New branch should be created from master with latest pull
- Naming Convention
`
 feature/<feature name>
`
`
 fix/<fix name>
`
`
  cleanup/<cleanup name>
`
- If conflict occurs merge master into your own branch and resolve conflicts, then push the changes
To merge, go to your own branch and enter command: git merge master


#### Git Restrictions
- Never commit and push on master 
- Never merge your on Pull Request
- Never delete master

#### Useful Git Commands
`
git tag -n9
`

`
git checkout tags/<tag> -b <branch>
`


