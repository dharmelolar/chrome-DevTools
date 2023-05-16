# Debug Javascript in the Browser

Chrome DevTools allows you to inspect and analyze your JavaScript code in real-time and find and fix bugs quickly. It provides debugging strategies to debug your code more efficiently. 

## Using Console.log Method

This is thee simplest and the most common technique for debugging Javascript code. It lets you print messages or values to the console, which can help you understand the flow of your code and inspect variable values at different points.

While using Console.log is very convenient for debugging, it has some downsides to it:

- It can be intrusive and may clutter your codebase, especially if you add numerous logging statements for complex debugging scenarios.
- You have to remove every console.log in your code manually after debugging.In the event that the debugging code is not properly cleaned up, unnecessary log outputs could clutter the console and potentially affect performance.
- Logged messages are displayed by the console in the order in which they were executed. As a result, you may find it difficult to determine the execution flow of your code or resolve specific timing issues based on console logs alone if your code contains asynchronous operations or events.

To minimize these downsides, it is recommended to use a combination of debugging techniques provided by DevTools as they are more effective.


## Sources Tab
The Sources tab of the DevTools allows you to inspect and debug javascript code that is running on the browser.

The Sources tab has three parts:

- `File Navigator Pane`: This is the first section and it allows you to navigate through the different files and directories that make up your website or application. You can use this to find the specific file you want to debug or modify.

- `Code Editor Pane`: This is the second section and it displays the code of the file you are currently working on. You can use this to view and edit the code, set breakpoints, and debug your code.
  
- `The JavaScript Debugging Pane`:This is the last section that allows you to debug your javascript code. 
  
![sources tab](https://res.cloudinary.com/dharme/image/upload/v1684197203/screenshot-rocks_10_kfmqfo.png)

## Add Breakpoints

A breakpoint is a debugging tool in Chrome DevTools that allows you to pause the execution of JavaScript code at a specific point. Using a breakpoint in your code will automatically pause the JavaScript execution.

As a result, you can inspect the current state of the code and variables, which can be very useful in detecting issues, bugs and understanding how the code is working so you don't have to litter your code with `console.logs` and relaodiing pages.

- Open DevTools and go to the `Sources` tab.
- Navigate to the `file navigator` pane, select the javascript file you want to debug aand this will open up the file in the `code editor`
- In the code editor, click on the line number to add a breakpoint or you can right-click and the line number and then select `add a breakpoint`. You can add as many breakpoints as you want.

![add a breakpoint details](https://res.cloudinary.com/dharme/image/upload/v1684233801/add-breakpoint_ahipm8.png)
- Run the JavaScript code that you want to debug or trgger events by as clicking a button or submitting a form and this will pause the execution of the code at the breakpoint specified.
- You can now inspect variables, call stack, and other information to help resolve the issue.
  
![breakpoints image](https://res.cloudinary.com/dharme/image/upload/v1684233801/breakpoints_ojmgl1.png).

- When you're done debugging, click on the resume button on the page or in the javascript debugging panel to continue running the page.

![resume code image](https://res.cloudinary.com/dharme/image/upload/v1684235289/resume-code_vkkdnl.png)


## Using the Debugger Statement

The Debugger keyword is another way of debugging javascript in the DevTools. It performs the same function as the `Breakpoint` only that you have to use the `Debugger` statement instead.

- Run your applicaton in the browser and open your Devtools > `Sources tab`.
- Go back to your code edtor and add the Debugger keyword the line where you want to pause the code execution. You can have multiple Debugger statement in your code.
  
  ``` js{4}
  const populateVoices = () => {
  voices = speechSynthesis.getVoices();

  debugger; // add debugger statement

  voices.forEach((voice) => {
    const option = document.createElement("option");
    let optionText = `${voice.name} (${voice.lang})`;
    if (voice.default) {
      optionText += " [default]";
    }
    option.textContent = optionText;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  })
- Trigger the code execution by interacting with your web application 

- Chrome DevTools will pause the code execution at the debugger statement.

- You can now inspect variables, step through the code, and use other DevTools features to debug your code.
![debugger](https://res.cloudinary.com/dharme/image/upload/v1684243556/debugger_dbgddf.png)


## Blackboxing

Blackboxing is a feature in chrome DevTools that allows you to ignore some files or scripts when debugging javascript code. This can be useful when trying to debug your own code, but you don't want to be halted by errors from third-party libraries or scripts. You can blackbox these libraies or scripts in your devtools instead of commenting them in your code.

Follow these steps to blackbox a file or library in Chrome DevTools:

- Make sure your codeis running in the browser
- Open DevTools and navigate to the `Sources tab` > `Page`
- Select the file you want to blackbox, right click on it and click `Add script to ignore list`
- The debugger will now ignore the black-boxed file or library. The console or debugger will not display any errors or warnings associated with that file or library.

![Blackbox image](https://res.cloudinary.com/dharme/image/upload/v1684221772/blackbox_facffs.png)


