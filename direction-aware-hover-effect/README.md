# Direction Aware Hover Effect

###### Day 59 of 100

![Direction Aware Hover Effect](screenshot.png)

## Overview

The Direction Aware Hover Effect is a simple CSS-only project that adds a unique hover effect to elements. When you hover over an element, it moves in the direction of your cursor. This creates an engaging and interactive user experience.

## How it Works

- **HTML Structure**: The HTML structure consists of cards with four inner cards inside each of them. These inner cards represent the directions: top, right, bottom, and left.

- **CSS Magic**: The CSS code handles the hover effect. Each inner card is initially positioned off-screen in different directions using `transform`. When you hover over an element, the inner cards move back to their original position, creating the hover effect.

## Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Ashworth836/direction-aware-hover-effect.git
   ```

2. Open the `index.html` file in your web browser to see the hover effect in action.

3. Customize the effect by tweaking the CSS variables in the `main.css` file.

## Customization

You can customize this hover effect to fit your project's needs:

- **Color**: Modify the background and border colors in the `.card` class in `main.css`.

- **Size**: Adjust the dimensions of the cards by changing the `width` and `height` properties in the `.card` class.

- **Movement Distance**: Alter the distance the inner cards move by changing the `--move` and `--move-negative` CSS variables in the `:root` selector.

## Author

- [Ashworth](https://github.com/Ashworth836)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
