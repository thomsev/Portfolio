import auctionalleasyImage from '../assets/auctionalleasy.jpg';
import trendymartImage from '../assets/trendymart.png';
import holidazeImage from '../assets/holidaze.jpeg';


const projects = [
    {
        id: 'Auctionalleasy',
        title: 'Auctionalleasy',
        description: `Made a simple homepage, with the ability to post listings to the listing page. Picture is supposed to be side by side with the form but as im not great with scss i couldnt manage that. Register and Loggin is working great with the API, and does its job. Listings is a little chaotic with the images posted in listings are alot if different sizes and hard to manage.`,
        features: [
          'Homepage',
          'Listings',
          'Login',
          'Error Handling',
	  'Register',       
        ],
        builtWith: [
          'Html',
          'Javascript',
          'Context API',
          'Bootstrap',
          'Sass',
          'Scss',
        ],
        gettingStarted: [
          'Clone the repo: git clone https://github.com/thomsev/Auctionalleasy.git',
          'Navigate to the project directory: cd Auctionalleasy',
          'Install dependencies: npm install',
          'Run the application: npm start',
        ],
        imageUrl: auctionalleasyImage, // Update this with the correct path or URL
        repoUrl: 'https://github.com/thomsev/SemesterCA-Auctionalleasy',
        liveUrl: 'https://github.com/thomsev/SemesterCA-Auctionalleasy', 
      },
    {
        id: 'TrendyMart',
        title: 'TrendyMart',
        description: `Welcome to TrendyMart, a cutting-edge e-commerce platform designed to offer a seamless shopping experience for users while showcasing a diverse range of products. Our user-friendly interface ensures that navigating through the platform is a breeze, allowing you to explore hot deals or jump directly to our product collection. We ensure a secure and swift checkout process, complete with payment and shipping details. Add products to your cart, view selected items, and manage quantities with ease. Our platform is also equipped with error boundary features to handle unexpected errors gracefully. Have questions? Our dedicated support team is ready to assist you.`,
        features: [
          'User-Friendly Interface',
          'Secure Checkout',
          'Cart Integration',
          'Error Handling',
          'Contact & Support',
        ],
        builtWith: [
          'React',
          'React Router',
          'Context API',
        ],
        gettingStarted: [
          'Clone the repo: git clone https://github.com/your_username/TrendyMart.git',
          'Navigate to the project directory: cd TrendyMart',
          'Install dependencies: npm install',
          'Run the application: npm start',
        ],
        imageUrl: trendymartImage, // Update this with the correct path or URL
        repoUrl: 'https://github.com/thomsev/TrendyMart',
        liveUrl: 'https://trendymart-live-url', // Update this with the live URL if available
      },
      {
        id: 'Holidaze',
        title: 'Holidaze',
        description: `Holidaze is a venue booking platform built with React and Bootstrap. It provides users with the ability to browse and book venues for their holidays and events with ease. The application features a range of components including authentication, venue listings, a booking calendar, and user dashboards..`,
        features: [
          'User-Friendly Interface',
          'Venues',
          'Booking with calandar',
          'Error Handling',
	      'Userpage manages bookings and venues made',
          'Contact & Support',
        ],
        builtWith: [
          'React',
          'React Router',
          'Context API',
          'Bootstrap',
        ],
        gettingStarted: [
          'Clone the repo: git clone https://github.com/thomsev/HolidazeCA.git',
          'Navigate to the project directory: cd HolidazeCA',
          'Install dependencies: npm install',
          'Run the application: npm start',
        ],
        imageUrl: holidazeImage, // Update this with the correct path or URL
        repoUrl: 'https://github.com/thomsev/HolidazeCA',
        liveUrl: 'https://profound-cobbler-7a920c.netlify.app/', 
      },
  ];
  
  export default projects;
  