# Currency Converter

###### Day 33 of 100

This is a simple web-based currency converter that allows users to convert between different currencies using real-time exchange rates. It's implemented in JavaScript and makes use of the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch exchange rate data.

## Table of Contents

- [Currency Converter](#currency-converter)
          - [Day 33 of 100](#day-33-of-100)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Getting Started](#getting-started)
  - [How it Works](#how-it-works)
  - [License](#license)

## Features

- Convert between different currencies.
- Real-time exchange rate data from ExchangeRate-API.
- Easy-to-use interface with automatic updates.

## Usage

To use this currency converter, follow these steps:

1. **Select Currencies**: Choose the source currency (from_currency) and the target currency (to_currency) from the dropdown menus.

2. **Enter Amount**: Enter the amount you want to convert in the "Amount" field (from_amount). As you type, the converted amount (to_amount) will be automatically calculated based on the current exchange rate.

3. **Swap Currencies**: If you want to swap the source and target currencies, click the "Exchange" button.

4. **Real-Time Rates**: The exchange rate is fetched from the ExchangeRate-API in real-time, ensuring accurate conversions.

## Getting Started

To run this currency converter locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

   ```shell
   git clone https://github.com/Ashworth836/currency-converter.git
   ```

2. **Open the Project**: Navigate to the project directory.

   ```shell
   cd currency-converter
   ```

3. **Run the Application**: Open the `index.html` file in your web browser or set up a local web server to serve the files. You can use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if you're using Visual Studio Code.

4. **Start Converting**: You can now use the currency converter by selecting currencies and entering amounts.

## How it Works

The currency converter is implemented in JavaScript and utilizes the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch exchange rate data. Here's how it works:

- When the page loads, the `calculate` function is called to fetch the exchange rates for the source currency (from_currency) from the API.

- The user can select different currencies and enter an amount to convert.

- The exchange rate is fetched in real-time when the source currency is changed or when an amount is entered.

- The converted amount is displayed in the "to_amount" field based on the exchange rate.

- Users can also click the "Exchange" button to swap the source and target currencies.

## License

This currency converter is available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed for your own projects.
