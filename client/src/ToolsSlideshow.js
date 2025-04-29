const images = [client/src/Human Centered Design Image, client/src/Worthwhile Development Image //The path of images to display
                client/src/Ethics of Innovation Image, client/src/Ethics Canvas Image]; 
�PNG


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
