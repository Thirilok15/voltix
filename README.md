# Voltix: Tech Gadget Store

A responsive, multi-page e-commerce front end for a fictional tech gadget store, built with HTML5, CSS3 and vanilla JavaScript. Developed for **TH Assessment 1, Front End Design and Testing (CSI3029)** at Vellore Institute of Technology, using generative AI tools (Claude) across planning, design, coding, testing and documentation.

**Live demo:** `https://<your-username>.github.io/<repo-name>/`

## Features

- Seven pages: Home, Shop, Product, Compare, Cart, About and Contact
- Live product search, category filter, price slider and sorting
- Product detail pages with specification tables and related items
- Side-by-side comparison of three products
- Shopping cart that persists using `localStorage`, with automatic totals and a free-shipping rule (free above ₹5,000, otherwise ₹199)
- Contact form and newsletter sign-up with client-side validation
- Dark and light theme that remembers the user's choice
- Fully responsive layout for mobile, tablet and desktop
- Accessibility: semantic HTML, skip link, ARIA labels, visible focus and reduced-motion support

## Tech Stack

| Area | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Logic | JavaScript (ES6), no frameworks |
| Storage | Browser `localStorage` |
| Font | Space Grotesk (Google Fonts, system fallback) |
| Testing | Playwright (Chromium), Google Lighthouse |

## Project Structure

```
voltix/
├── index.html
├── shop.html
├── product.html
├── compare.html
├── cart.html
├── about.html
├── contact.html
├── css/
│   └── style.css
└── js/
    ├── data.js     # product catalogue and SVG icons
    └── app.js      # shared layout, cart, filters, validation, theme
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Open `index.html` in any modern browser, or serve the folder locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

No build step or dependencies are required.

## Deployment (GitHub Pages)

1. Push the code to the `main` branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Testing Summary

| Test | Result |
|---|---|
| Functional tests (9 cases: cart, filters, search, forms, theme, compare) | All passed |
| Responsive check at 1366×768, 768×1024 and 390×844 on all 7 pages | No horizontal overflow |
| Lighthouse (mobile emulation), Home | Performance 98, Accessibility 94, Best Practices 96, SEO 100 |
| Lighthouse, Shop | Performance 75, Accessibility 94, Best Practices 96, SEO 100 |
| Lighthouse, Contact | Performance 98, Accessibility 93, Best Practices 96, SEO 100 |

## Screenshots

Add screenshots to a `screenshots/` folder and reference them here:

```markdown
![Home](screenshots/home.png)
![Shop](screenshots/shop.png)
![Mobile view](screenshots/mobile.png)
```

## Future Improvements

- Back-end and database for real product data and user accounts
- Payment gateway integration
- Product reviews, wishlist and order tracking
- Real optimised images with lazy loading
- Pagination or pre-rendering to improve Shop page performance

## Disclaimer

Voltix is a demonstration project. All brands, products, prices, reviews and contact details are fictional, and the checkout does not process real orders.

## Author

**Name:** Thirilok K
**Register No.:** 24MIC0100 
**Course:** Front End Design and Testing (CSI3029), VIT  
**Faculty:** Dr.V.Arulkumar (18875)
