# QuickStay — Hotel Booking Platform

**QuickStay** is a modern hotel booking web application built with **React + Vite**, featuring multilingual support (English, Russian, Spanish) and a fully responsive design. The platform is designed for users who want to search and book hotel rooms, as well as for hotel owners who want to manage their properties.

## Key Features

- **Home Page**
  - Hero section with search for city, check-in/check-out dates, and number of guests
  - **Featured Destinations** section showcasing selected hotels
  - **Exclusive Offers** section with limited-time promotions
  - Customer testimonials with ratings
  - Newsletter subscription

- **Search & Filters**
  - Search hotels by city
  - Filters by room type, price, and popular amenities
  - Sorting options (price, newest listings)

- **Hotel & Room Details**
  - Image gallery
  - Room information: price, amenities, rating
  - Check availability and book now button
  - Host information and hotel details

- **Multilingual Support**
  - Fully supports English, Russian, and Spanish
  - Language switcher in the Navbar
  - Translations organized into `common`, `navbar`, and `footer` namespaces using `react-i18next`

- **User Functionality**
  - Login & registration via **Clerk**
  - View and manage bookings
  - Support for multiple payment methods (Stripe, Pay at Hotel)
  - Hotel owners can register their property and manage bookings

- **UI Components**
  - Responsive **Navbar** with mobile menu
  - **Footer** with contact info, links, and newsletter subscription
  - Hotel and offer cards
  - Star rating component, amenity icons, and action buttons

## Technologies

- **React** with functional components and hooks
- **Vite** — fast build tool and dev server
- **Tailwind CSS** — modern, responsive styling
- **react-i18next** — multilingual support
- **react-router-dom** — routing
- **Clerk** — user authentication
- **Dummy Data** for hotels, rooms, and bookings (can be replaced with real backend)

## Demo

You can view a live demo of the project: https://hotel-booking-green-eight.vercel.app/