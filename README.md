# Squarespace Cheatsheat Flyby

We will go through some basic settings for Squarespace, which is alternative way to Wordpress and github static page.

In this fly, we will learn some quick and dirty way to set up your portfolio and ITP blog, set up analytics, embed creative coding sketches, embed PDF resume and customize your own template.


This Flyby will also cover some tools and resources to make your portfolio.

It's time to start your 100 days of internship application.


### Problems that will be solved
---
1.  How to set up a well-designed personal portfolio website without strong design and programming skills.
2.  How to find out who from where visit my blog or portfolio, track their footprint( Also, how to not be found out you checked someone's website XD)
3.  How to embed full screen creative coding sketches to my page and won't affect the design framework.
4.  How to embed my resume PDF
5.  How to make a grid page and sort your projects by category


#### Why Squarespace, and premade template recommendation
-   Why:
    -   Keep portfolio and blog seperately on one platform professionally
    -   Less junk information, good user experience, well-designed template and saving time
    -   Smooth learning curve
-   Template:
    -   Three factors to consider: Navi Bar, Index/Project function, Blog
    -   [York](https://www.squarespace.com/templates/york): perfect for grid layout
    -   [Wells](https://www.squarespace.com/templates/wells): perfect side navi bar
    -   [Forte](https://www.squarespace.com/templates/forte): one of the most popular one. Easiest way to make a full screen design
    -   [Alex](https://www.squarespace.com/templates/alex): good stack layout
-   [Student discount](https://www.squarespace.com/students/): after 50% off, it's 72$ per year for personal account, 108$ per year for business account, with a custom domain. Strongly suggest the business account, it has unlimited pages.

#### Why Google analytics, and link it to your Squarespace account.
-   keep track of your website, and get valued information   
-   [Squarespace Help](https://support.squarespace.com/hc/en-us/articles/205815608-Using-Google-Analytics-with-Squarespace)

#### Customize your template by injecting css/JavaScript code to page header.
-   inject css
```html
<style type="text/css">
   body {
     background-color: green;
   }
 </style>
```

-   inject HTML(iframe, most used)
```html
<iframe
  src="https://alpha.editor.p5js.org/embed/S1VOZL12x"
  style="position:fixed;
  display:block;
  top:0px;
  left:0px;
  bottom:0px;
  right:0px;
  width:100vw;
  height:100vh;
  border:none;
  margin:0;
  padding:0;
  overflow:hidden;">
 </iframe>
```


-   inject JavaScript: upload your script first, then use this code,
```html
  <script src="/s/your.js"></script>
```

#### Create a single-page cover page and embed your best project documentation.
1.  Go to ```PAGES/"+"/Cover Page```, and choose a layout, here I use ```cover```.
2.  Usually a cover page is the landing page, set it as a home page and add a button link the home page.
3.  To embed a P5 Sketch as the background, inject the following code
```html
<iframe src="Here put your sketch embed url" style="
position:fixed;
display:block;
top:0px; left:0px; bottom:0px; right:0px;
width:100vw;
height:100vh;
border:none;
margin:0; padding:0;
overflow:hidden"></iframe>

<style type="text/css">
div .sqs-slide {
  background-color: green;
  position:initial}
  </style>

```

#### Embed full screen P5 sketch or sketch blocks under your template by add code block.
1.  in your sketch, add css
```css
html, body {
  margin: 0;
  padding: 0;
  overflow:hidden;
}
```

```javascript
//p5
function setup(){
  createCanvas(windowWidth, windowHeight)  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```


Add a code block

Type following code into it as html code and do not check "display source"
```html
<iframe src="your sketch url"
style="position:fixed;
top:0px; left:0px; bottom:0px; right:0px;
width:100%; height:100%;
border:none;
margin:0;
padding:0;
overflow:hidden;
z-index:99;"></iframe>
```
#### Customize grid showcase page
#### sort your projects by positions/titles
#### Embed PDF resume under your template
#### documentation/case study tools and templates
#### ITP survive toolkit

### Follow
---
1.  Why squarespace?
    -   wordpress sucks, too many junk comments and chaos of template
    -   beautiful pre-made layout and easy to shift to another one without conflicts
    -   let professional designer do professional stuff if you are in the wild
    -   you have a project burst these two years, don't let commit, push or drag your src files drive you crazy
    -   it support mobile editing, doing documentation on subway is cool

2.  student discount, business account, domain and google analysis
    -   student has a first year discount
    -   purchase business account, you will need more than 20 pages
    -   link your domain to your newly build website
    -   inner built analysis system is cool, google analysis let you know if someone have checked your portfolio already(why am I care)

3.  popular landing page and how to make it in squarespace
    -   grid
    -   full bleed banner
    -   creative coding projects

4.  embed your resume pdf, lock it if you want

5.  link all your publication platforms

6.  categorize your projects
    -   index or folder
    -   archive function
    -   summary function
    -   hide your messy blog posts

7.  tools and freebies to make your lives easier
    -   text: grammerly /  1checker
    -   font: font pair
    -   GIF: GIF brewery 3
    -   Video: iMove or VUE
    -   ICON: noun
    -   [casestudy](https://www.casestudy.club/case-studies)
    -   cover letter generator
