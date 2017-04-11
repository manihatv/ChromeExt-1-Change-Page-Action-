# ChromeExt-1-Change-Page-Action-
A simple chrome extension that is capable of changing the web page's action attribute

Content.js : The content script file reads the web page DOM and checks for the availability of the form id. Once identified, it changes the action of the page to any other desired page. This is primarily used for debuggin purpose to know whether any page is protected against such attacks. Adding on, the content script is designed in such a way as to execute only once. This is done by means of a variable 'ctr'. This will prevent the user from having any considerations about being tricked. 

Manifest.json : The file contains the basic configeration details for the chrome extension. 

Steps to integrate in the chrome extension:

1. Reach the extensions column of the Chrome. 
2. Click "Load Unpacked Extenssion".
3. Browse for the extension and upload them. 
4. The extension is ready to use. 

