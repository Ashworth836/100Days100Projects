# Donate Design

###### Day 71 of 100

## What's This?

This is a straightforward donation page, ready to support your favorite creator. Users can choose to donate via PayPal or Patreon.

## How It Looks

![Donate Design](your-image-url-here)

## Usage

1. Copy the provided HTML and CSS files.
2. Include the Font Awesome library for icons. You can use the CDN provided in the HTML (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css`).
3. Customize the links in the HTML to point to the actual donation pages of your favorite creator.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="container">
        <h2>Donate</h2>
        <p>
            Support Your Favorite Creator
            <br> Donate Below.
        </p>
        <a href="your-paypal-donation-link" target="_blank" class="btn paypal">
            <i class="fab fa-paypal"></i> Paypal
        </a>
        <a href="your-patreon-donation-link" target="_blank" class="btn patreon">
            <i class="fab fa-patreon"></i> Patreon
        </a>
    </div>
</body>
</html>
```

## Customization

- Change the background color of the page by modifying the `background-color` property in the `.container` class in the `main.css` file.
- Customize the donation links by changing the `href` attributes in the HTML.

## How It Works

This page provides a visually appealing and user-friendly way for supporters to contribute to their favorite creator through PayPal or Patreon.

## License

This donation design is provided under the [MIT License](License). Feel free to use and modify it according to your needs.

Happy supporting! 😊
