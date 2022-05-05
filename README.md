# adapt-backgroundVideo  

**BackgroundVideo** is an *extension* to add videos to the background of an element (menu, page, block).  

## Settings Overview

### Attributes

The following attributes, set within  *course.json*, *contentObjects.json* and *blocks.json*, configure the defaults for **Background Video**.  

>**_backgroundVideo** (object): The _backgroundVideo object that contains values for **_isEnabled**, **_mp4**, **_webm**, **_graphic**, **_selector** and  **_minHeight**.

>>**_isEnabled** (boolean): Enable or disable the _backgroundVideo

>>**_mp4** (string): File name (including path) of the video file. Path should be relative to the *src* folder (e.g., *course/en/video/video.mp4*).

>>**_webm** (string): File name (including path) of the video file. Path should be relative to the *src* folder (e.g., *course/en/video/video.webm*).

>>**_graphic** (string): File name (including path) of the optional image to be shown while the video is downloading. Path should be relative to the *src* folder (e.g., *course/en/images/video.jpg*).

>>**_selector** (string): allows to specify a selector (e.g., *.page__header*).

>>**_minHeight** (number): The minimum height of the video container

## Limitations
 
**adapt-backgroundVideo** only works on desktop.

----------------------------
**Version number:**  2.0.0  
**Framework versions:**  5.14.0+     
**Author / maintainer:**  [Nacho Cinalli](https://github.com/nachocinalli/)    
**Accessibility support:**    
**RTL support:**  
**Cross-platform coverage:** 