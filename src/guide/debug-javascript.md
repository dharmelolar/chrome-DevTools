# Debug Javascript in the Browser

Chrome DevTools allows you to inspect and analyze your JavaScript code in real-time and find and fix bugs quickly. It provides debugging strategies to debug your code more efficiently. The Sources tab of the DevTools allows you to inspect and debug javascript code that is running on the browser.

The Sources tab has three parts:

- File Navigator Pane: This is the first section and it allows you to navigate through the different files and directories that make up your website or application. You can use this to find the specific file you want to debug or modify.

- Code Editor Pane: This is the second section and it displays the code of the file you are currently working on. You can use this to view and edit the code, set breakpoints, and debug your code.
  
- The JavaScript Debugging Pane:This is the last section that allows you to debug your javascript code. 
  
![sources tab](https://res.cloudinary.com/dharme/image/upload/v1684197203/screenshot-rocks_10_kfmqfo.png)

## Add Breakpoints

A breakpoint is a debugging tool in Chrome DevTools that allows you to pause the execution of JavaScript code at a specific point. Using a breakpoint in your code will automatically pause the JavaScript execution.

As a result, you can inspect the current state of the code and variables, which can be very useful in detecting issues, bugs and understanding how the code is working so you don't have to litter your code with `console.logs` and relaodiing pages.

- Open DevTools and go to the `Sources` tab.
- Navigate to the `file navigator` pane, select the javascript file you want to debug aand this will open up the file in the `code editor`
- In the code editor, click on the line number to add a breakpoint or you can right-click and the line number and then select `add a breakpoint`. You can add as many linee breaks as you want.
- 


## Blackboxing

Blackboxing is a feature in chrome DevTools that allows you to ignore some files or scripts when debugging javascript code. This can be useful when trying to debug your own code, but you don't want to be halted by errors from third-party libraries or scripts. You can blackbox these libraies or scripts in your devtools instead of commenting them in your code.

Follow these steps to blackbox a file or library in Chrome DevTools:

- Make sure your codeis running in the browser
- Open DevTools and navigate to the `sources tab` > `Page`
- Select the file you want to blackbox, right click on it and click `Add script to ignore list`
- The debugger will now ignore the black-boxed file or library. The console or debugger will not display any errors or warnings associated with that file or library.