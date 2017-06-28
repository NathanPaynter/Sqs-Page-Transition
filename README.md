Squarespace Page Transitions
-----------------------------

>Easy to add fading page transitions using LESS and jQuery. Specifically targeted to work with Squarespace templates in both the Consumer and Developer Platforms.

## Setup

### Consumer Platform

#### Add files

To get started, click the <code>+</code> icon next to any navigation heading like you would to add a new page and click the 'Link' option (_See Figure 1_). Then Click the 'Click to add URL...' and then click 'Files'. You should see what's depicted in _Figure 2_. Add the two files from the scripts folder of this repo here. Remember the URL that each file receives as we'll use this later (_See Figure 3_).  

If you don't change the filenames, the URL's should be as follows  
  * /s/jquery-3-1-1-min.js
  * /s/page-trans.js

#### Add Styling

Go to the Design > Custom CSS Panel. Copy the code from styles/page-trans.less into the panel and click Save. (_See Figure 4 & 5_)  

#### Code Injection

Go to Settings > Advanced > Code Injection and add the following to the Footer injection area (_See Figure 6_).\*  

<code><script src="/s/jquery-3-1-1-min.js"></script></code>  
<code><script src="/s/page-trans.js"></script></code>  

Click save and everything should be working!  

_\*If you changed the filenames for the javascript files, be sure to use those in the <code>src=""</code>_

##### Example images

| ![figure1](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure1.png "Figure 1") | ![figure2](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure2.png "Figure 2") | ![figure3](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure3.png "Figure 3") |
| ------------- | -------------------- | ---------------- |
| Figure 1 | Figure 2 | Figure 3 |  

| ![figure4](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure4.png "Figure 4") | ![figure5](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure5.png "Figure 5") | ![figure6](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure6.png "Figure 6") |
| ------------- | -------------------- | ---------------- |
| Figure 4 | Figure 5 | Figure 6 |

### Developer Platform

## Usage

