import React, { Component } from 'react';
import './Help.css'

export default class Help extends Component {
    render() {
        return (
            <div className="help">
                <h3>Ubuntu Terminal Guide</h3>
                <div>
                    Hey, my name is <a href="https://github.com/LukasCelnar">Lukas Celnar</a> and today i want to teach you how to use basic and most common shell commands that you can 
                    use in your Terminal.
                    You might have noticed that this whole webpage has a UI of Ubuntu.
                    What is Ubuntu you may ask ?
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Ubuntu">Ubuntu</a></strong>: is a free operating system that uses the Linux kernel.
                    It is pronounced "oo-boon-too". It is one of the most popular Linux distributions and it is based on 
                    Debian Linux computer operating system.
                    The word "ubuntu" is an African word meaning "humanity to others".
                    Ubuntu is a popular operating system for cloud computing.
                    The goal with Ubuntu is to make it easy to use and install onto a computer. 
                    Ubuntu can be used on all types of personal computers (and even devices such as robots) including in Windows 10
                </div>
                <br />
                <div>
                    Now that we have ubuntu out of the way, i would want to teach you some words that are
                    really important in this world and that might confuse you later:
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Terminal_emulator">Terminal</a></strong>: the text interface to the shell program, can't do anything on its own apart from giving 
                    input to the shell and displaying output from shell
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Shell_(computing)">Shell</a></strong>: a program that processes commands and returns an output, for example terminal that runs a shell
                    is an interface between a user and OS to access to an operating system's services. 
                    It can be either GUI or CLI (Command Line interface)
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Bourne_shell">sh (Bourne SHell)</a></strong>: is type of shell program (or shell language).
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">bash (Bourne Again SHell)</a></strong>: is a type of shell program (or shell language). 
                    Bash and shell aren't synonymous. Bash is superset of sh.
                </div>
                <br />
                <div>
                    Bash will most likely be your default type of the shell after installing ubuntu on your machine. To be completly sure you can 
                    type: echo $SHELL which will give you full path to your default shell. And echo $0 which will give you the name of your 
                    current shell.
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Command-line_interface">Command line interface (CLI)</a></strong>: is just a style of user interface that requires users to type in commands to get the computer 
                    to do stuff as opposed to for example a GUI (Graphical user interface) where the user clicks.
                </div>
                <br />
                <div>
                    <strong><a href="https://en.wikipedia.org/wiki/Linux_console">Console</a></strong>: refers to physical device like monitor and keyboard that is running a terminal that the user types commands
                    into, but in essence it is just a terminal
                </div>
                <br />
                <div>
                    You might not see why we need to know this right now, but trust me, it will come handy in your future
                </div>
                <br />
                <div>
                    Now lets get to the fun part, now are going to learn some basic shell commands. To test these you dont have
                    to go anywhere, you dont have to install Linux. All you need to do is to click on the Terminal icon on your left
                    after that you should see a terminal that is gonna look like Terminal you will most likely see in Ubuntu.
                    Now, to be completly honest, i will mention some commands that might not work here but normaly work
                    in any Linux Terminal. But dont worry I'll warn you, also you might find some bugs because i had to write
                    every command from scratch with pure <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript (Programming Language)</a>.
                </div>
                <br />
                <div>
                    First command we are going to learn is
                </div>
                <br />
                <div>
                    <strong>mkdir</strong>: <span className='help__code'>mkdir {'<directory-name>'}</span> creates a directory (folder). To create directory
                    named "games", you can enter <span className='help__code'>mkdir games</span> and thats pretty much it. Only things you need to keep in mind
                    is that you cant create 2 directories/files with a same name that lives in this directory where we are
                    we creating our new "games" directory, you can try it but you will get error, also you cant create directory with some special characters for
                    example "/". Last thing to keep in mind is that you should always try to create directories without space, you can technicaly create
                    directory with a space in your Linux Terminal but you cant do it on this website.
                </div>
                <br />
                <div>
                    <strong>ls</strong>: now that we have created our directory we can list all the directories/files that are
                    living in a path that we are in with simple <span className='help__code'>ls</span>, now you can see all the directories with
                    our "games" directory that we created above
                </div>
                <br />
                <div>
                    <strong>pwd</strong>: to view the current path that we are in you can enter <span className='help__code'>pwd</span> and
                    you should get an output with a pressent working directory (pwd) that we are in
                </div>
                <br />
                <div>
                    <div>
                        <strong>cd</strong>: to navigate into that "games" directory that we have create you can use 
                        &nbsp;<span className='help__code'>cd {'<directory-name>'}</span> so in our situation we can use 
                        &nbsp;<span className='help__code'>cd games</span> and now to make sure we can use commands that we have learned about
                        &nbsp;<span className='help__code'>pwd</span> should output /home/name/games and <span className='help__code'>ls</span>
                        should not output anything because we have no files or directories in our games directory
                    </div>

                    <br />

                    <div>
                        Now we know how to navigate forward but the question is how can we go back ? Its pretty simple, all you need to do
                        is to enter <span className='help__code'>cd ..</span> now you can run <span className='help__code'>pwd</span> to make
                        sure everything went well
                    </div>

                    <br />

                    <div>
                        There is another option how you can navigate with cd and it is <span className='help__code'>cd {'<absolute-path>'}</span>
                        when you run <span className='help__code'>pwd</span> you get the absolute path that you are in and if you want you can
                        continue to any directory with absolute path for example you are in /home and you want to get to the /home/name/games,
                        you can use <span className='help__code'>cd name</span> and then <span className='help__code'>cd games</span>
                        or you can use <span className='help__code'>cd /home/name/games</span> which is a absolute path or you can use 
                        &nbsp;<span className='help__code'>cd name/games</span> which is like saying "go to /name directory from current path 
                        that we are in and then go to /games directory."
                        In this web Terminal you cannot use absolute paths, but it will work in your Linux Terminal
                    </div>
                </div>
                <br />
                <div>
                    <strong>touch</strong>: creates a file, with <span className='help__code'>touch {'<file-name>'}</span>. In your games
                    directory create a file named chess with <span className='help__code'>touch chess</span>, you can also create rules for
                    that game with <span className='help__code'>touch rules.txt</span>, ".txt" is a file extension, this one means text
                    and it is a normal text file. There are extensions like .py, .exe, .png, .jpg and many others, now that you have
                    created these 2 files, you can run <span className='help__code'>ls</span> to view them. Things you need to keep
                    in mind are pretty much same as with mkdir command
                </div>
                <br />
                <div>
                    clear: clears terminal. As we type commands, our terminal gets messy, to clear everything we can type
                    &nbsp;<span className='help__code'>clear</span> to clear everything, this command wont affect our current path and files
                    in any way.
                </div>
                <br />
                <div>
                    <strong>rmdir</strong>: deletes empty directory, yep thats it all you need to do to delete empty directory is to run
                    <span className='help__code'>rmdir {'<directory-name>'}</span>, if you will try to delete file or directory that is not 
                    empty you will get error. Create a file for example <span className='help__code'>mkdir DELETEME</span>
                    and then run <span className='help__code'>rmdir DELETEME</span>, then you can use <span className='help__code'>ls</span> 
                    to make sure that directory has been deleted
                </div>
                <br />
                <div>
                    <strong>unlink</strong>: deletes file. You can run <span className='help__code'>unlink {'<file-name>'}</span>. for
                    example lets create file with "touch" you can name it something like "DELETEME.txt" or whatever name you want
                    and then run <span className='help__code'>unlink DELETEME.txt</span> or whatever name you chosed.
                </div>
                <br />
                <div>
                    <div>
                        <strong>rm</strong>: deletes a file. This one can be confusing at first, basicly it works like unlink, you can delete a
                        file with one advantage and that is that you can 
                        but you dont have to delete multiple files at once <span className='help__code'>rm {'<file-name> <file-name> <file-name>'}</span>.
                        With unlink you can only delete one file. Now the interesting thing comes with 
                        &nbsp;<span className='help__code'>rm -r {'<file-name> <directory-name>'}</span>. so far we have learned commands
                        to delete file, files and empty directories but to delete directories that are not empty we need to use something like 
                        "rm -r", that "-r" stands for recursive so this means that this commands recursively deletes the directory and all 
                        the content inside. You can delete files with this and you can also delete mutliple files/non-empty/empty directories
                        in one command. 
                    </div>

                    <br />

                    <div>
                        Now the question comes, "Why do we need to use rmdir and unlink when we can just use rm -r". 
                        Answer is, mostly for security reasons, you dont want to accidently delete the directory with all the system files right ?
                        If you would do something like that with rmdir, you will see error with a message that directory is not empty. Which can
                        save you from doing a big mistake
                        So thats why you should use "rmdir" for empty directories, "unlink" for one file, "rm" for multiple files, "rm -r" for 
                        non-empty directories, but be careful with this one.
                    </div>
                </div>
                <br />
                <div>
                    <strong>mv</strong>: moves file/directory from one place to another using <span className='help__code'>mv {'<file-directory-name> <location>'}</span>
                    for example, create a directory named strategy using "mkdir" and then use <span className='help__code'>mv chess strategy</span>, this means
                    that chess file/directory is going to be moved to strategy directory, to make sure you can ls to make sure that file no longer
                    lives in that games directory and then "cd" to that strategy directory and run "ls" command to make sure that we have
                    our chess file there. There is not many limitation with this, you can basicly moves files, non-empty directories, empty directories ... pretty much all.
                    The only 2 things you should keep on mind is that you cant move file/directory to the directory wheere this file or directory already exists
                    and the fact that you can use absolute path if you want to you can move your chess file to the ... lets say "/home" but once again 
                    absolute paths wont work in this web terminal but should normaly work in your Linux Terminal
                </div>
                <br />
                <div>
                    <strong>cp</strong>: copies file with <span className='help__code'>cp {'<file-name> <location>'}</span> command. For
                    example create directory named arcade with using "mkdir" and then file named pac-man, now use <span className='help__code'>cp pac-man arcade</span>.
                    Now use "ls" to make sure that pac-man file still lives in this directory and then "cd" into that arcade directory and make sure that pac-man
                    copies successfully. Now the question is, how can we copy directories with some content in it ? And answer is similar with "rm" command. You can use 
                    &nbsp;<span className='help__code'>cp -r {'<directory-name> <location>'}</span>, "-r" stands for recursive. Once again you can use absolute paths, and
                    you are not able to copy file/directory that already exists in destination path.
                </div>
                <br />
                <div>
                    <strong>whoami</strong>: outputs the effective username of the current user when invoked. All you need to do is to type
                    &nbsp;<span className='help__code'>whoami</span> and you should see "name" as an output.
                </div>
                <br />
                <div>
                    <strong>sudo</strong>: executes a command as anonther user, called the target user which typically is root. Root is the superuser and
                    has highest access rights on the system., you can try "whoami" command with sudo like this <span className='help__code'>sudo whoami</span> 
                    and you should see an output of root. Most likely when you will run the sudo in your Linux Terminal you will be asked for a password,
                    but it depends on how your Linux is configured. Some commands in your shell might not work if you are not root.
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    };
};
