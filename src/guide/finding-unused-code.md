# Finding Unused Code

Finding and eliminating unused code, you can optimize your application's performance, reduce bandwidth usage.

Shipping unused code to production is a common occurrence in software development. It  adds unnecessary bulk to the application, resulting in larger file sizes and this affects download and loading time for users. It can also affect the performance of the app.

The Coverage panel in Chrome DevTools can help you find unused JavaScript and CSS code.

- Open your application in the browser
- Open DevTools and navgate to the sources tab
- Click on the `Coverage` tab within the Sources tab.
- Click the `Reload` button to reload the page with code coverage enabled.

- Chrome will re-run the page with coverage instrumentation, tracking which parts of the code are executed during page load.

- After the page loads, the Coverage panel will display a report of the coverage results. This will indicate which parts of the code were used and which were not.

- The unused code will be highlighted in red, while the used code will be highlighted in green. 

![alt text](https://res.cloudinary.com/dharme/image/upload/v1684274470/screenshot-rocks_11_yxtpiu.png)

::: tip Quick Tip
 
You can also run the command palette in the devtools and enter `show coverage` or `start instrumenting coverage and reload page`
:::

![alt text](https://res.cloudinary.com/dharme/image/upload/v1684275158/coverage_gzgakt.png)