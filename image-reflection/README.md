# Image Reflection

###### Day 35 of 100

This is a simple web page that creates a visual effect of an image with a reflection. It's achieved using HTML and CSS to style the image container. No JavaScript or complex libraries are needed.

## How it Works

1. **HTML Structure**:
   - The `index.html` file provides the basic structure of the web page.
   - It includes a `div` element with the class `background-image` that serves as the container for the image.

2. **CSS Styling**:
   - The `main.css` file contains the CSS styles to create the image reflection effect.
   - The `.background-image` class is used to set the size, position, and shadow of the image container. It also sets the background image and its properties.
   - The `::after` and `::before` pseudo-elements are used to create the reflection effect. They are positioned absolutely to cover the same area as the image.
   - The `::after` pseudo-element flips and positions the image to create the reflection effect.
   - The `::before` pseudo-element creates a gradient overlay to make the reflection look more realistic.

3. **Image**:
   - The background image used in this example is fetched from Unsplash.

## Usage

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/Ashworth836/image-reflection.git
   ```

2. Open the `index.html` file in a web browser to view the image reflection effect.

That's it! You can customize the image by replacing the URL in the `background-image` property of the `.background-image` class in the CSS file.

Enjoy experimenting with this simple image reflection effect! If you have any questions or suggestions, feel free to reach out.

---

**Author:** Ashworth
**Contact:** ashworthsakara13@gmail.com
