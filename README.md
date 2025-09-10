# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot](./images/Screenshot%202025-09-09%20at%205.53.09 PM.png)

### Links

- Solution URL: [GitHub](https://github.com/ajkendal/frontend-mentor-advice-generator-app)
- Live Site URL: [Live Site](https://ajkendal.github.io/frontend-mentor-advice-generator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- GitHub Pages

### What I learned

For this project, I spent time setting up a stronger foundation for the styling in CSS, making sure the layout and overall look felt clean and consistent from the start. I also chose to rely heavily on plain JavaScript to handle the functionality, which gave me a good chance to practice writing everything from scratch without depending on frameworks. This approach helped me strengthen my understanding of core web development concepts while keeping the project lightweight and straightforward.

```css
:root {
  --clr-white: 0 100% 100%;
  --clr-black: 0 0% 0%;
  --clr-blue-950: 218, 23%, 16%;
  --clr-blue-900: 217, 19%, 24%;
  --clr-blue-600: 217, 19%, 38%;
  --clr-blue-200: 193, 38%, 86%;
  --clr-green: 150, 100%, 66%;

  --ff-sans: 'Manrope', sans-serif;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: hsl(var(--clr-blue-950));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Author

- Website - [Amanda J Kendal-Brown](https://ajkendal.github.io/)
- LinkedIn - [@akendalb](https://www.linkedin.com/in/akendalb)
- GitHub - [@ajkendal](https://github.com/ajkendal/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ajkendal)
