# adapt-backgroundVideo  

**BackgroundVideo** is an *extension* to add videos to the JSON block theme.  

## Settings Overview

### Attributes

#### *blocks.json*  
The following attributes, set within *blocks.json*, configure the defaults for **BackgroundVideo**.  

**_theme** (object): The _theme object that contains values for **_backgroundVideo**.

>**_backgroundVideo** (object): The _backgroundVideo object that contains values for **_poster**, **_mp4**, **_webm**, and **_overlay**.

>>**_poster** (string): File name (including path) of the optional image to be shown while the video is downloading. Path should be relative to the *src* folder (e.g., *course/en/images/video-1.jpg*).

>>**_mp4** (string): File name (including path) of the video file. Path should be relative to the *src* folder (e.g., *course/en/video/video-1.mp4*).

>>**_webm** (string): File name (including path) of the video file. Path should be relative to the *src* folder (e.g., *course/en/video/video-1._webm*).

>>**_overlay** (boolean): Adding a layer on top of the video. Acceptable values are true and false.

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations
 
**adapt-backgroundVideo** only works on desktop.

----------------------------
**Version number:**  1.0.0  
**Framework versions:**  2.0     
**Author / maintainer:**  [Nacho Cinalli](https://github.com/nachocinalli/adapt-backgorundVideo)    
**Accessibility support:**    
**RTL support:**  
**Cross-platform coverage:** Chrome, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, Safari 8 
