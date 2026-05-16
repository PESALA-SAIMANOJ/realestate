# DID Premium Real Estate - Vanilla HTML/CSS/JavaScript Version

A standalone, responsive real estate website built with vanilla HTML, CSS, and JavaScript. This is a reimplementation of the React-based [Sam-uri/did-realestate](https://github.com/Sam-uri/did-realestate) project.

## Features

✨ **Responsive Design** - Mobile-first approach, works on all devices

✨ **Modern UI** - Clean and professional interface with smooth animations

✨ **Property Showcase** - Display featured properties with details

✨ **Search Functionality** - Filter properties by title, location, or price

✨ **Contact Form** - Get in touch with the real estate team

✨ **Statistics Section** - Display key metrics and achievements

✨ **Smooth Navigation** - Easy navigation between sections

✨ **No Dependencies** - Pure vanilla JavaScript, no frameworks needed

## Project Structure

```
realestate/
├── index.html          # Main HTML file
├── styles.css         # Styling and responsive design
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - Optional

### Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone https://github.com/PESALA-SAIMANOJ/realestate.git
   cd realestate
   ```

2. **Or download the files** directly from the repository

### Running the Project

#### Option 1: Direct File Opening
1. Navigate to the project directory
2. Double-click `index.html` to open in your default browser
3. The site will load and be fully functional

#### Option 2: Using a Local Server (Recommended)

**Using Python 3:**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

**Using Node.js (http-server):**
```bash
npx http-server
```
Then open the provided localhost URL in your browser

**Using PHP:**
```bash
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser

**Using Live Server (VS Code Extension):**
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Features Overview

### 1. **Navigation Bar**
   - Sticky navigation with smooth scrolling
   - Responsive hamburger menu for mobile devices
   - Quick links to all sections

### 2. **Hero Section**
   - Eye-catching banner with call-to-action button
   - Animated background pattern
   - Direct link to properties section

### 3. **Search Section**
   - Real-time property search
   - Filter by property name, location, or price
   - Instant results display

### 4. **Properties Display**
   - Grid layout showcasing featured properties
   - Property cards with:
     - Images/Icons
     - Title and location
     - Beds, baths, and square footage
     - Price display
     - "View Details" button

### 5. **Statistics Section**
   - Animated counters for:
     - Properties Listed (500+)
     - Happy Clients (1000+)
     - Expert Agents (50+)
     - Total Value Transacted ($10B+)

### 6. **About Section**
   - Company information
   - List of key features and services
   - Professional layout

### 7. **Contact Section**
   - Contact form for inquiries
   - Business contact information
   - Map location and phone details

### 8. **Footer**
   - Copyright information
   - Social media links

## Customization

### Adding More Properties
Edit `script.js` and add more objects to the `properties` array:

```javascript
{
    id: 7,
    title: "Your Property Title",
    location: "Location",
    price: "$Price",
    beds: 3,
    baths: 2,
    sqft: "2,000 sq ft",
    icon: "🏠"
}
```

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;        /* Main color */
    --secondary-color: #e74c3c;      /* Accent color */
    --accent-color: #3498db;         /* Highlight color */
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
    --bg-light: #ecf0f1;
    --white: #ffffff;
}
```

### Updating Contact Information
Edit the contact section in `index.html` with your actual details:
- Address
- Phone number
- Email
- Social media links

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Fast Loading**: No external dependencies (except Font Awesome icons)
- **Optimized**: Minimal CSS and JavaScript
- **Responsive**: Works seamlessly on all screen sizes
- **Accessible**: Semantic HTML and proper ARIA labels

## Keyboard Navigation

- `Tab` - Navigate between interactive elements
- `Enter` - Activate buttons and links
- `Esc` - Close mobile menu

## Mobile Responsiveness

The site is fully responsive with breakpoints at:
- **768px** - Tablet and mobile devices
- **1024px** - Large tablets
- **1200px** - Desktop screens

## Animations

Smooth animations include:
- Fade-in effects on page load
- Hover effects on cards and buttons
- Scroll-triggered counter animations
- Menu transitions
- Button state changes

## Future Enhancements

- [ ] Add property filter by type, price range, and location
- [ ] Implement property image gallery
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Integrate backend API
- [ ] Add property comparison feature
- [ ] Implement favorites/wishlist
- [ ] Add virtual tours
- [ ] Email notification system

## Troubleshooting

### Page not loading?
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check console for errors (F12 -> Console tab)

### Styles not applying?
- Ensure all files are in the same directory
- Check that file names match exactly (case-sensitive on Linux/Mac)
- Hard refresh the page (Ctrl+F5)

### Search not working?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify property data in script.js

## License

This project is open source and available for personal and commercial use.

## Support

For issues, questions, or suggestions, please create an issue in the repository.

## References

- **Original React Project**: [Sam-uri/did-realestate](https://github.com/Sam-uri/did-realestate)
- **This Project**: [PESALA-SAIMANOJ/realestate](https://github.com/PESALA-SAIMANOJ/realestate)

## Author

Created as a vanilla HTML/CSS/JS implementation of the DID Real Estate project.

---

**Enjoy exploring properties with DID Realty! 🏠**