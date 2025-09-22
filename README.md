# Sunrise Group of Industries - Corporate Website

A professional website for Sunrise Group of Industries, a minerals company that processes stones and rocks into powder products.

## Features

- **Professional Design**: Clean, corporate layout inspired by industrial leaders like BASF and Dow Chemical
- **Product Showcase**: Comprehensive display of 20+ stone/powder products with detailed processing information
- **Mobile-First Responsive**: Optimized for all devices with modern CSS Grid and Flexbox
- **Interactive Elements**: Product search, filtering, and smooth animations
- **WhatsApp Integration**: Floating WhatsApp button for instant customer communication
- **Contact System**: Professional contact forms with multiple communication channels

## Color Scheme

- **Primary Blue**: #2E5BBA
- **Secondary White**: #FFFFFF  
- **Accent Blue**: #1E3A8A
- **Text Colors**: Dynamic based on background (white text on blue, blue text on white)

## Typography

- **Headings**: Roboto (Google Fonts)
- **Body Text**: Open Sans (Google Fonts)
- **Clean, professional typography** with proper hierarchy and spacing

## Structure

```
/
├── index.html          # Homepage with company overview
├── products.html       # Product catalog with search/filter
├── about.html         # Company background and expertise
├── contact.html       # Contact form and company details
├── css/
│   └── main.css       # Complete styling system
├── js/
│   └── main.js        # Interactive functionality
└── images/            # Image assets directory
```

## Key Pages

### Homepage (index.html)
- Hero section with company introduction
- Featured products showcase
- Process overview and capabilities
- Industries served
- Call-to-action sections

### Products (products.html)
- Complete catalog of 20 stone/powder products
- Search and filter functionality
- Detailed product cards with:
  - Raw material information
  - Processing steps visualization
  - Technical specifications
  - Applications and industries
  - Direct quote buttons

### About (about.html)
- Company story and mission
- Manufacturing capabilities
- Quality standards and certifications
- Industries served
- Why choose us section

### Contact (contact.html)
- Multiple contact methods
- Comprehensive contact form
- Business information
- Service areas
- FAQ section

## Products Featured

1. Limestone Powder
2. Marble Powder
3. Dolomite Powder
4. Quartz Powder
5. Calcite Powder
6. Talc Powder
7. Feldspar Powder
8. Gypsum Powder
9. Mica Powder
10. Barite Powder
11. Bentonite Powder
12. Silica Sand Powder
13. Kaolin Powder
14. Wollastonite Powder
15. China Clay Powder
16. Magnetite Powder
17. Graphite Powder
18. Perlite Powder
19. Vermiculite Powder
20. Nepheline Syenite Powder

## Technical Features

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Mobile-first responsive design** with CSS Grid and Flexbox
- **Cross-browser compatibility** with modern CSS features
- **Semantic HTML** for better SEO and accessibility
- **Optimized performance** with minimal dependencies
- **Professional animations** and hover effects

## WhatsApp Integration

- Floating WhatsApp button in bottom-left corner
- Direct product inquiry integration
- Contact form submissions via WhatsApp
- Customizable phone number in JavaScript

## Customization

### Update Contact Information
Edit the contact details in:
- `contact.html` - Contact page information
- `js/main.js` - WhatsApp phone number (lines 288, 436, 464)
- Footer sections in all HTML files

### Add More Products
Extend the `productsData` array in `js/main.js` with additional product objects following the existing structure.

### Modify Colors
Update CSS variables in `css/main.css` under the `:root` selector to change the color scheme.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup Instructions

1. Extract all files to your web server directory
2. Update contact information and WhatsApp numbers
3. Add company logo to the images directory
4. Customize content as needed
5. Test responsive design on various devices

## Performance Notes

- Optimized CSS with minimal file size
- Efficient JavaScript with event delegation
- Mobile-first approach for faster loading
- Google Fonts loaded asynchronously
- Minimal external dependencies

---

Built with modern web standards and best practices for a professional industrial company website.