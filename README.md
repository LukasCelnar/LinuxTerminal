# **LinuxTerminal**

Free to use website with Ubuntu UI where users can learn basic shell commands with working terminal and guide.

## **How can i use this ?**

There are two options:
  * You can go to this link: https://linux-terminal.netlify.app/
  * Or you can clone this repo with `git clone https://github.com/LukasCelnar/LinuxTerminal.git` and then run `npm start` in the cloned directory

When you will open the website you will see window with a guide on how to use shell commands and some other stuff.

If you will want to use the Terminal you can simple switch the window by click on the Terminal icon in left bar menu.

You can also resize and move each window.

## **How does it work ?**

Pretty much the whole app is write in React with state managment library called Redux. This app is also using redux-thunk, axios, lodash and draggable library.

Whole app has 6 components, 8 action creators and 6 reducers.

Command logic is stored in commands directory

Here are some images of the website:

![terminal](https://imgur.com/WKaqq3r.png)

![guide](https://imgur.com/1wwOklw.png)

![ubuntu](https://imgur.com/sxaYEi7.png)
