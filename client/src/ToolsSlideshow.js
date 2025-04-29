const images = [client/src/Human Centered Design Image, client/src/Worthwhile Development Image //The path of images to display
                client/src/Ethics of Innovation Image, client/src/Ethics Canvas Image]; 

let currentIndex = 0; //Current Index of image displayed
function slideChange(goLeft) //Function to move left or right
{
  if (goLeft == true)
  {
    currentIndex -= 1;
  }
  else
  {
    currentIndex += 1;
  }
  if (currentIndex >= images.length)
  {
    currentIndex = 0;
  }
  else if (currentIndex < 0)
  {
    currentIndex = images.length - 1;
  }
  document.getElementById().src = images[currentIndex];
}
