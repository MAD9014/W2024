(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{347:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("PageHeader"),t._v(" "),s("h2",{attrs:{id:"async-vs-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-vs-sync"}},[t._v("#")]),t._v(" Async vs Sync")]),t._v(" "),s("p",[t._v("Almost all the code that we have written to this point has been synchronous code. That means that you write the code in the order that you expect it to run. The first line of code inside your function\nwill run and complete before the second line of code.")]),t._v(" "),s("p",[t._v("However, there is also Asynchronous code in JavaScript. "),s("code",[t._v("Promises")]),t._v(" are an example of this.")]),t._v(" "),s("p",[t._v("When you write code that will take an unknown amount of time to complete but you don't want your App to freeze and do nothing until that one task is complete, then you need to use Async tasks.")]),t._v(" "),s("p",[t._v("JavaScript has a mechanism known as the event loop. When you pass a list of commands to the event loop, it will keep running each of those commands in order until it gets to the end of your list. This\nlist is known as the main stack. JavaScript keeps trying to run commands as long as there is something on the main stack.")]),t._v(" "),s("p",[t._v("However, sometimes there is a command that would stop the event loop from getting to the next command. It gets blocked from going to the next command in the stack. These types of commands are things\nthat take a long time to complete, like talking to a database, or the file system, or a network request for a file, or a timer that needs to wait before running.")]),t._v(" "),s("p",[t._v("There are specific tasks that are going to take too long and they get put into a secondary area so they can wait for their result. These tasks are known as asynchronous.")]),t._v(" "),s("p",[t._v("If the code stays on the main stack and insists on being run before the event loop moves on to the next item then it is called synchronous.")]),t._v(" "),s("YouTube",{attrs:{title:"async vs sync",url:"https://www.youtube.com/embed/Q-Zmc0E0GYY"}}),t._v(" "),s("h2",{attrs:{id:"the-javascript-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-javascript-loop"}},[t._v("#")]),t._v(" The JavaScript Loop")]),t._v(" "),s("p",[t._v("The JavaScript engines, like Chrome's V8, use a single thread to process all your code. It builds a stack of commands to run, in the order that you have written them. As long as each command belongs\nto the CORE JavaScript then it gets added to the main run stack.")]),t._v(" "),s("p",[t._v("When something that belongs to the Web APIs is encountered it gets added to a secondary list of tasks. Each time the main stack is finished then the JavaScript engine turns it attention to the\nsecondary list of tasks and will try to run those.")]),t._v(" "),s("p",[t._v("The video below does a great job explaining all the parts of this process. It is about 25 minutes so give yourself some time to watch it.")]),t._v(" "),s("p",[t._v("You don't need this information to do any of the assignments this semester. However, it will help you to avoid errors in your code and to better understand how your code will be interpreted by the\nJavaScript engine. This will lead to you writing much better code in the long run.")]),t._v(" "),s("YouTube",{attrs:{title:"Everything you need to know about the JavaScript Loop",url:"https://www.youtube.com/embed/8aGhZQkoFbQ"}}),t._v(" "),s("p",[t._v("And more about the event loop, asynchronous features, timers, tasks, and microtasks...")]),t._v(" "),s("YouTube",{attrs:{title:"Jake Archibald: In The Loop - setTimeout, micro tasks, requestAnimationFrame, requestIdleCallback",url:"https://www.youtube.com/embed/cCOL7MC4Pl0"}}),t._v(" "),s("h2",{attrs:{id:"tasks-microtasks-ui-render-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks-microtasks-ui-render-tasks"}},[t._v("#")]),t._v(" Tasks, MicroTasks, UI Render Tasks")]),t._v(" "),s("p",[t._v("Just as was explained in the Jake Archibald video "),s("a",{attrs:{href:"https://www.youtube.com/?v=cCOL7MC4Pl0",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("In the Loop")]),s("OutboundLink")],1),t._v(", there are different types of tasks that happen at different points on the event loop.\nUnderstanding this sequence will help you to avoid and solve strange errors in your code.")]),t._v(" "),s("YouTube",{attrs:{title:"Understanding the order of tasks and microtasks",url:"https://www.youtube.com/embed/w-jULX0D5cg"}}),t._v(" "),s("p",[t._v("The main stack is all the code that runs on the event loop. JavaScript wants to run all the commands in the main execution context before it does anything with the tasks or microtasks.")]),t._v(" "),s("p",[t._v("The UI render tasks are the one exception to leaving the event loop. The browser can decide to exit the loop and run updates (calculate and paint) for the UI. UI render tasks are mainly automatic\nthings like updating the interface based on a CSS transition or animation. However, you can create code that runs during this phase with "),s("code",[t._v("requestAnimationFrame()")]),t._v(".")]),t._v(" "),s("YouTube",{attrs:{title:"request animation frame",url:"https://www.youtube.com/embed/zBRqnSiq_VM"}}),t._v(" "),s("p",[t._v("If you create a "),s("code",[t._v("task")]),t._v(" and inside that task you create another "),s("code",[t._v("task")]),t._v(", the second one will not run until the first task is completed and the event loop has looped around again.")]),t._v(" "),s("p",[t._v("If you create a "),s("code",[t._v("microtask")]),t._v(" and inside that you create another "),s("code",[t._v("microtask")]),t._v(", then the browser will also run the subsequent microtask(s) before returning to the event loop.")]),t._v(" "),s("h2",{attrs:{id:"timers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timers"}},[t._v("#")]),t._v(" Timers")]),t._v(" "),s("p",[t._v("In JavaScript we can set timers to call a function at some point in the future.")]),t._v(" "),s("p",[t._v("We use the "),s("code",[t._v("setTimeout()")]),t._v(" or "),s("code",[t._v("setInterval")]),t._v(" functions and pass them a callback function plus a minimum time delay to use (written in milliseconds). We say minimum time delay because the main stack\ncould still have code in it that is being run. The function from the timeout has to wait for that other code to finish before it can be called.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f1 is running'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(". f2 is running.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dean'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Dean gets passed to f2 as the argument")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"timeouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeouts"}},[t._v("#")]),t._v(" Timeouts")]),t._v(" "),s("p",[t._v("When you want to run a function after a specific time delay then setTimeout is the built-in function to accomplish this.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call the function myFunc after at least 3000ms")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//run the anonymous function after 2500ms")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFunc()'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call the function myFunc after 1 second")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//same as first example")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"intervals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intervals"}},[t._v("#")]),t._v(" Intervals")]),t._v(" "),s("p",[t._v("When you want to run something repeatedly after a set time, for example, once every ten seconds, then setInterval is the function to call.")]),t._v(" "),s("p",[t._v("Timers running on intervals can be stopped if you call the clearInterval( ) method. Just make sure that you keep a reference to the interval.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" intervalId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//keep calling myFunc every 3 seconds")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//use the intervalId to stop the interval calls running")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" intervalId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"recursive-timeouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recursive-timeouts"}},[t._v("#")]),t._v(" Recursive Timeouts")]),t._v(" "),s("p",[t._v("Another way to approach timed intervals is with a recursive call to the setTimeout function. Inside the function that runs following your setTimeout, you make another call to the same function. The\nprocess repeats itself.")]),t._v(" "),s("p",[t._v("The difference with the recursive calls is that it allows us to change the amount of time between the calls or stop it after any call.")]),t._v(" "),s("p",[t._v("We can use this method to create ever shorter time spans between callbacks or random times between callbacks.")]),t._v(" "),s("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/mad-d/embed/xEAwkw/?height=456&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"456",allowfullscreen:"allowfullscreen"}},[t._v("See the Pen "),s("a",{attrs:{href:"http://codepen.io/mad-d/pen/xEAwkw/"}},[t._v("JavaScript Recursive Timeouts")]),t._v(" by Mobile Application Design-Development ("),s("a",{attrs:{href:"http://codepen.io/mad-d"}},[t._v("@mad-d")]),t._v(") on "),s("a",{attrs:{href:"http://codepen.io"}},[t._v("CodePen")]),t._v(".")]),t._v(" "),s("YouTube",{attrs:{title:"setTimeout and setInterval",url:"https://www.youtube.com/embed/0VVJSvlUgtg"}}),t._v(" "),s("h2",{attrs:{id:"async-await"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" Async - Await")]),t._v(" "),s("p",[t._v("One of the features added in ES6 was "),s("code",[t._v("async")]),t._v(" and "),s("code",[t._v("await")]),t._v(". The combination of these keywords lets us use asynchronous features like "),s("code",[t._v("fetch")]),t._v(" inside a function but write the code in a synchronous style.")]),t._v(" "),s("p",[t._v("Start by making a function into an "),s("code",[t._v("async")]),t._v(" one.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//give a function the ability to pause and wait for a promise")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this function declaration can now pause and wait for a promise to complete")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this function expression can pause and wait for a promise to complete")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this arrow function can also pause and wait")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("Then you can use the "),s("code",[t._v("await")]),t._v(" keyword as many times as you want. Each one is capable of pausing the function to wait for an async result from a promise.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make a function that can be called to create a delay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call the resolve method after `len` milliseconds have passed")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//function ready to be paused")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this first call will run 1 second in the future")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isReady "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReady"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `pending Promise` at this point. Not resolved yet.")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//try again with await")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//now pause the function and wait for a result")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isReadyNow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//function actually pauses to wait for the result from delay()")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReadyNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//`true`")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//isReadyNow actually has a value this time because of await.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("p",[t._v("Starting next week, we will be making calls to remote APIs and retrieving dynamic data. At that point we can use "),s("code",[t._v("async await")]),t._v(" to pause a function and wait for the result if we want.")]),t._v(" "),s("YouTube",{attrs:{title:"Intro to async and await",url:"https://www.youtube.com/embed/BTDeq5HC5bU"}}),t._v(" "),s("YouTube",{attrs:{title:"Combining async and await with Promises",url:"https://www.youtube.com/embed/lGJbPSI-12E"}}),t._v(" "),s("YouTube",{attrs:{title:"JS interview async question",url:"https://www.youtube.com/embed/j1ykOrC2f0A"}}),t._v(" "),s("h2",{attrs:{id:"what-to-do-this-week"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-this-week"}},[t._v("#")]),t._v(" What to do this week")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("TODO Things to do before next week.")]),t._v(" "),s("ul",[s("li",[t._v("Read all the content from "),s("code",[t._v("Modules 9.1, 9.2, and 10.1")]),t._v(".")]),t._v(" "),s("li",[t._v("Continue working on the Hybrid Exercises")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);