
import './ToolsSlideshow.css';

const images = ['../client/src/Human_Centered_Design_Image.png', '../client/src/Worthwhile_Development_Image.png', //The path of images to display
                '../client/src/Ethics_of_Innovation_Image.png', '../client/src/Ethics_Canvas_Image.png']; 

let currentIndex = 0; //Current Index of image displayed
function slideChange(goLeft) //Function to move left or right
{
  if (goLeft == true) //Go left
  {
    currentIndex -= 1;
  }
  else //Go right
  {
    currentIndex += 1;
  }
  if (currentIndex >= images.length) //Edge case. Loop around. 
  {
    currentIndex = 0;
  }
  else if (currentIndex < 0) //Edge case. Loop around
  {
    currentIndex = images.length - 1;
  }
  document.getElementById().src = images[currentIndex]; //Obtain image from images[] to display
}
