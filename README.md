# JavaScript Memory Game

For this assignment, you are going to make the classic child's game of memory or concentration. You will have a series of squares (or circles) with a front and back. The back of each is the same. The front has some image. Each image is used twice. For example, you might have 12 squares, with the following animals repeated twice: antelope, possum, cow, egret, penguin, and falcon. Shuffle these up and present them to the user face down. When the user clicks one, show it face up. When the user clicks a second, show it face-up as well. If the two match, the two squares are marked correct and are disabled from further clicks. If the two do not match, the user is shown that they are incorrect and they are turned face-down.

The game should not start until the first selection is clicked. When it starts, you should show a timer to the user. When the user has gotten all selections right, stop the timer and show the user they've won.

It is up to you how many squares to show and what they have on their fronts. There should be at least 12.

## Bonus exercises

- Let the user choose between difficulty levels, with each being a different number of squares.
- Keep track of previous speed records (you can use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) for this)
- Show not only a timer, but also the number of incorrect guesses

## How to complete this project

- First, plan out how you think it should work. What events will you need to listen for? What data will you need to start? What data will you need to store?
- Start small. Strip the problem down to the smallest version you can imagine. For example, you could make it with all squares face-up and no timer. Once you get this working, then add in the next steps until you have a completed application.

## Resources

- [Pexels - free stock photos](https://www.pexels.com/) -- maybe a good place to get images
- [How to create an accurate timer in JavaScript](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript) from Stack Overflow
