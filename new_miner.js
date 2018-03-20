Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB (master)
$ git --version
git version 2.14.3.windows.1

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB (master)
$ cd Miner/

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ touch miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$  git init
Initialized empty Git repository in C:/Users/dell/Desktop/GITHUB/Miner/.git/

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git config --global user.name 'srbhptl39'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git config --global user.mail 'srbhptl39@gmail.com'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add *.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git rm --cached miner.js
rm 'miner.js'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        miner.js

nothing added to commit but untracked files present (use "git add" to track)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add *.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git commit
[master (root-commit) 2d39e38]  Initial commit
 1 file changed, 7 insertions(+)
 create mode 100644 miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
nothing to commit, working tree clean

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   miner.js

no changes added to commit (use "git add" and/or "git commit -a")

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   miner.js

no changes added to commit (use "git add" and/or "git commit -a")

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git commit -m 'Modified Miner File'
[master be0238e] Modified Miner File
 1 file changed, 3 insertions(+)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ touch log.txt

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ touch .gitignore

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .gitignore


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .gitignore

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .gitignore

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        dir1/


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   .gitignore
        new file:   dir1/app1.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git commit -m  'Changed MOre and added new files!'
[master 23693ed] Changed MOre and added new files!
 2 files changed, 2 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 dir1/app1.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git branch login

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git checkout login
Switched to branch 'login'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ touch new miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git commit -m 'changed'
[login 883de3c] changed
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ touch new_miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        renamed:    new -> new_miner.js


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git commit -m 'changed file name'
[login 9dd4160] changed file name
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename new => new_miner.js (100%)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git checkout master
Switched to branch 'master'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git merge login
Updating 23693ed..9dd4160
Fast-forward
 new_miner.js | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new_miner.js

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
nothing to commit, working tree clean

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git checkout login
Switched to branch 'login'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
nothing to commit, working tree clean

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git checkout master
Switched to branch 'master'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
nothing to commit, working tree clean

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git remote

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git remote add origin https://github.com/srbhptl39/myapp.git

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git remote
origin

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$  git push -u origin master
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Counting objects: 15, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (15/15), 1.28 KiB | 187.00 KiB/s, done.
Total 15 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/srbhptl39/myapp.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ touch README.md

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README.md

nothing added to commit but untracked files present (use "git add" to track)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   README.md


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git commit -m 'Added readme file!'
[master 406e101] Added readme file!
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git commit -m 'Added readme file!'
[master 39ac893] Added readme file!
 1 file changed, 1 insertion(+)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
9473531712Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 563 bytes | 187.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/srbhptl39/myapp.git
   9dd4160..39ac893  master -> master

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git checkout login
Switched to branch 'login'

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ touch google_speech_engine.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        google_speech_engine.py

nothing added to commit but untracked files present (use "git add" to track)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add
Nothing specified, nothing added.
Maybe you wanted to say 'git add .'?

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add
Nothing specified, nothing added.
Maybe you wanted to say 'git add .'?

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   google_speech_engine.py


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git commit -m 'Added google speech file'
[login 7352387] Added google speech file
 1 file changed, 152 insertions(+)
 create mode 100644 google_speech_engine.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: The current branch login has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin login


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push -u origin login
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.50 KiB | 767.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/srbhptl39/myapp.git
 * [new branch]      login -> login
Branch login set up to track remote branch login from origin.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git fetch origin

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git fetch origin
git merge master
Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git checkout -b login origin/login
fatal: A branch named 'login' already exists.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git merge master
Merge made by the 'recursive' strategy.
 README.md | 2 ++
 1 file changed, 2 insertions(+)
 create mode 100644 README.md

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git merge master
Already up-to-date.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Counting objects: 2, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 336 bytes | 336.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/srbhptl39/myapp.git
   7352387..1ad7e00  login -> login

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git merge master
Already up-to-date.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git merge master
Already up-to-date.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git merge login
Updating 39ac893..1ad7e00
Fast-forward
 google_speech_engine.py | 152 ++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 152 insertions(+)
 create mode 100644 google_speech_engine.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git push
fatal: unable to access 'https://github.com/srbhptl39/myapp.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Total 0 (delta 0), reused 0 (delta 0)
error: RPC failed; curl 35 OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
fatal: The remote end hung up unexpectedly
fatal: The remote end hung up unexpectedly
Everything up-to-date

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/srbhptl39/myapp.git
   39ac893..1ad7e00  master -> master

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ touch test1.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git checkout login
Switched to branch 'login'
Your branch is up-to-date with 'origin/login'.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ touch testlogin.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
Your branch is up-to-date with 'origin/login'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        test1.py
        testlogin.py

nothing added to commit but untracked files present (use "git add" to track)

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git add .

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git status
On branch login
Your branch is up-to-date with 'origin/login'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   test1.py
        new file:   testlogin.py


Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git commit -m 'testing'
[login 9e0fc9e] testing
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test1.py
 create mode 100644 testlogin.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Counting objects: 2, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 262 bytes | 262.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
fatal: The remote end hung up unexpectedly
fatal: The remote end hung up unexpectedly
Everything up-to-date

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: unable to access 'https://github.com/srbhptl39/myapp.git/': OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: unable to access 'https://github.com/srbhptl39/myapp.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: unable to access 'https://github.com/srbhptl39/myapp.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
fatal: unable to access 'https://github.com/srbhptl39/myapp.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Everything up-to-date

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git merge master
Already up-to-date.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git fetch master
fatal: 'master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git fetch master
fatal: 'master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (login)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git merge login
Updating 1ad7e00..9e0fc9e
Fast-forward
 test1.py     | 0
 testlogin.py | 0
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test1.py
 create mode 100644 testlogin.py

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$ git push
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': srbhptl39@gmail.com
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/srbhptl39/myapp.git
   1ad7e00..9e0fc9e  master -> master

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
$

Saurabh@Saurabh MINGW64 ~/Desktop/GITHUB/Miner (master)
