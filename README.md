Squarespace Page Transitions
-----------------------------

>Easy to add fading page transitions using LESS and jQuery. Specifically targeted to work with Squarespace templates in both the Consumer and Developer Platforms.  
>v.1.0.1

# Setup

__IMPORTANT NOTE:__ It is recommended to use AJAX loading if your template has it for the best user experience. This solution is designed for templates that don't currently have AJAX Loading.

## Consumer Platform

### Add files

To get started, click the <code>+</code> icon next to any navigation heading like you would to add a new page and click the 'Link' option (_See Figure 1_). Then Click the 'Click to add URL...' and then click 'Files'. You should see what's depicted in _Figure 2_. Add the two files from the scripts folder of this repo here. Remember the URL that each file receives as we'll use this later (_See Figure 3_).  

If you don't change the filenames, the URL's should be as follows  
  * /s/jquery-3-1-1-min.js
  * /s/page-trans.js

### Add Styling

Go to the Design > Custom CSS Panel. Copy the code from styles/page-trans.less into the panel and click Save. (_See Figure 4 & 5_)  

### Code Injection

Go to Settings > Advanced > Code Injection and add the following to the Footer injection area (_See Figure 6_).\*  

<code><script src="/s/jquery-3-1-1-min.js"></script></code>  
<code><script src="/s/page-trans.js"></script></code>  

Click save and everything should be working!  

_\*If you changed the filenames for the javascript files, be sure to use those in the <code>src=""</code>_

#### Example images

| ![figure1](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure1.png "Figure 1") | ![figure2](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure2.png "Figure 2") | ![figure3](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure3.png "Figure 3") |
| ------------- | -------------------- | ---------------- |
| Figure 1 | Figure 2 | Figure 3 |  

| ![figure4](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure4.png "Figure 4") | ![figure5](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure5.png "Figure 5") | ![figure6](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure6.png "Figure 6") |
| ------------- | -------------------- | ---------------- |
| Figure 4 | Figure 5 | Figure 6 |

## Developer Platform

### Add files

To get started, turn on Developer Mode and use Git or SFTP to access your files. If you've never used Dev Mode before, I recommend going through [the Squarespace Tutorial](https://developers.squarespace.com/beginner-tutorial/).  

Once you have access to your files, copy the <code>.js</code> files from this repositories scripts folder to your templates script folder. Similarily, copy the <code>.LESS</code> file from this styles folder to your templates style folder.

### Add Styling

To add the styling to your template, open your <code>template.conf</code>. Under the array named stylesheets, add the page-trans.less file as in _Figure 7_ and save the file.

### Code Injection

To add the scripts, open the appropriate <code>.region</code> file. Some templates only have one <code>.region</code> file but others will have a separate file for the header, main content and footer sections. We'll want to add our scripts to the footer so, if you only have <code>site.region</code>, open that file. If you have multiple <code>.region</code> files, find the <code>footer.region</code> file and open that.  

Scroll until you see the <code>{squarespace-footers}</code> tag. We'll add our custom scripts after the main site scripts (_e.g._ In Bedford that looks like this: <code><squarespace:script src="site-bundle.js" combo="false" /></code>) but before the <code>{squarespace-footers}</code>. (_See Figure 8_)  

Enter the two new scripts in the following format: <code><squarespace:script src="jquery-3-1-1-min.js" combo="false" /></code> and <code><squarespace:script src="page-trans.js" combo="false" /></code>. (_See Figure 9_)

If you're using SFTP, please make sure you save after each change. If you're using Git, you can now commit the changes and push the update.

#### Example images

| ![figure7](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure7.png "Figure 7") | ![figure8](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure8.png "Figure 8") | ![figure9](https://github.com/NathanPaynter/Sqs-Page-Transition/raw/master/tutorial/img/figure9.png "Figure 9") |  
| ------------- | ------------- | ------------- |  
| Figure 7 | Figure 8 | Figure 9 |  

# Usage

If you'd like to adjust the timing of the fade, simply edit <code>@pageTransitionTime: 800ms</code> to be any millisecond (ms) or second (s) timing in the Custom CSS Panel [For Consumer Platform] or the page-trans.less file [For Developer Mode].  

You may also need to adjust the delay before the link is followed in the page-trans.js file. To do this, simply edit the number for <code>var $delayTime = 1200</code> into any millisecond value.

# Issues

If you find any issues with any template, please [create an issue](https://github.com/NathanPaynter/Sqs-Page-Transition/issues) stating whether you're using the consumer platform or developer platform. Please also include which template you're using or, if you're using a custom template, your site URL.

# Legal

This code is provided to you via the MIT License\*. You may use, replicate or distribute however you choose and I am not obligated to help with any issue, however as expressed above, I will attempt to help to the best of my ability. If you're using the Developer Platform, please be sure you read and follow the [Squarespace Developer Terms of Use](https://developers.squarespace.com/developer-terms-of-use).  

_\*Nathan Paynter reserves the right to update the license and terms without warning so please check these terms before updating or downloading. Any changes in terms will result in a version change and each version will retain its associated licensing terms._
