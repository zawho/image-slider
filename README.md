A module for implementing image sliders.

Included functions:

createSlider generates the basic HTML structure of the image slider and all of its parts. Also provides the default class names and IDs, as well as the back and forward button icons. If you use this function but want to customize other portions of the slider, be sure you use the correct class names and IDs.

addImages places the default stock images includes in the pics folder. This is also where the length of the imgArr array is generated, which is important for the navigation element.

createNav generates the nav node elements inside the nav container, based on the length of the imgArr array as determined by addImages. If you wish to use this function but write your own function to replace addImages, be sure you can place the images in an array to reference for the loop definition in this function.

setImgDisplay handles initial image and and nav displays.

addLinkEvent sets the linkNav event listener on each nav node, allowing for clicking on each node to display the corresponding image.

setBtnFuncs adds the nextSlide and prevSlide event listeners to the respective arrow buttons, which allow for switching the displayed image and highlighted nav node on clicking.

styleSlider, styleButtons, styleImgContainer, setImgResize, styleNavContainer, and styleNavNodes each provide default CSS to various parts of the slider and may be used according to preference, or altogether via the styleAll function.

In addition to setting default styles on the images, setImgResize also includes a single media query to change the slider's size below a window width of 500px.


Photo credits:

Helena Lopes: https://www.pexels.com/photo/herd-of-cattle-in-daytime-841303/

Lukáš Sitta: https://www.pexels.com/photo/scenic-view-of-lake-during-daytime-2421764/

stein egil liland: https://www.pexels.com/photo/snow-capped-mountains-under-full-moon-3510717/

Nick Kwan: https://www.pexels.com/photo/body-of-water-between-mountains-2745255/

Amirul Hafis Badrulhisham: https://www.pexels.com/photo/photo-of-waterfalls-1620372/