# Editing and Saving Files in Workspaces.

Workspaces is a feature that allows you to link local project files with a live website and make and save changes to the source code directly from the devtools. 

Usually when you're debugging or testing in devtools, the changes you make disappears as soon as you refresh the browser, but workspaces saves this changes directly to the source code.This saves time and also enables a faster and more efficient workflow in development and debugging.

When debugging or testing in DevTools, changes made usually disappear as soon as the browser is refreshed. However, Workspaces directly saves these changes to the source code, saving time and enabling a faster and more efficient workflow in development and debugging

To access workspaces in the devtools, you can use either of the two options below:

## Using Filesystem

- Run your project on the local server.
- Open **devtools** > **`sources tab`** > **`filesystem`**.
  ![screenshot of the sources tab in devtools](https://res.cloudinary.com/dharme/image/upload/v1681394754/screenshot-rocks_3_qghu7k.png)

- Click on **`Add folder to workspace `**,this opens a modal of your file system and you can select the file that you're currently running on the server.
 ![screenshot of the sources tab in devtools](https://res.cloudinary.com/dharme/image/upload/v1681394756/screenshot-rocks_2_msl6bg.png)
- Next, the browser displays a prompt that that asks for permission to access that file. Click on **`Allow`** and this will open the file in the workspace.
  ![screenshot of the sources tab in devtools](https://res.cloudinary.com/dharme/image/upload/v1681394756/screenshot-rocks_2_msl6bg.png)
  ![screenshot of the files opened in chrome devtools workspaces](https://res.cloudinary.com/dharme/image/upload/v1681394371/screenshot-rocks_ahfemp.png)

Now that you've set up workspaces in your browser, you can make changes to your files and it will be updated in realtime. Please note that you have to save the file uisng `CMD` + `S` in MacOS or `CTRL` + `S` before the file will be updated.


## Using DevTools Settings.

- Run your project on the local server.
- Open devtools and click on the `settings icon` ⚙️.
- You'll be redirected to the full settings page.
- Navigate to the `Workspaces tab` and click on `add folder`. 
- Next, the browser displays a prompt that that asks for permission to access that file. Click on **`Allow`** and this will open the file in the workspace.
- Finally, exit the settings page and go back to the **`sources tab`**, you'll find your files in the workspaces.
