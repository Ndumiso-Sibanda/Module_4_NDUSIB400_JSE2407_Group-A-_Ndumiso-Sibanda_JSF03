
# E-Commerce Store Application

## Introduction

Hi there! Welcome to my E-Commerce Store Application. This project is a demo e-commerce platform where users can browse products, view details, and filter items by category or sort them by price. I built this to showcase how you can create a modern online shopping experience using Vue.js.

Here's a sneak peek at what the app looks like:

![App Preview](app-preview.png)

## Technologies Used

- **Vue.js**: The framework I used for building the user interface.
- **Vuex**: For state management to handle the application's data and user interactions.
- **Vue Router**: To manage navigation between different views.
- **CSS**: Custom styling to make the app look great.
- **Fake Store API**: Provides sample data to work with.

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

### Clone the Repository

First, clone the repo and navigate to the project folder:

```bash
git clone <repository-url>
cd <repository-folder>
Install Dependencies
You'll need Node.js installed. Then, install the project's dependencies:

bash
Copy code
npm install
Run the Application
Start the development server with:

bash
Copy code
npm run serve
You can then access the app at http://localhost:8080.

Usage Examples
Filtering and Sorting Products
Filter Products: Use the dropdown to filter products by category. For example, if you select "Electronics," only electronic items will be shown.
Sort Products: Choose to sort products by price. Selecting "Price: Low to High" will display products starting from the least expensive.
Viewing Product Details
Product Detail Page: Click on any product to see more details. This page shows:
Title: The product name.
Image: A picture of the product.
Description: Information about the product.
Price: How much the product costs.
Category: The product’s category.
Rating: User ratings and review count.
Here's what the product detail page looks like:


Persisting Filters and Sorting
State Persistence: The app remembers your selected filters and sorting options thanks to Vuex, so you won’t lose your preferences if you navigate around or refresh the page.
Loading Spinner
While data is loading, you'll see a loading spinner in the center of the screen: