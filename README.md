# 🚀 React Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills as a React developer. This project demonstrates proficiency in modern web development technologies and best practices.

![Portfolio Preview](https://via.placeholder.com/800x400/646cff/ffffff?text=Portfolio+Website)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Dark/Light Theme Support**: Automatic theme switching based on user preference
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Components**: Hover effects, animations, and dynamic content
- **Contact Form**: Functional contact form for potential clients/employers
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Accessibility**: WCAG compliant with proper semantic markup and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Modern CSS with CSS Variables for theming
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: ESLint for code quality

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the website

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The portfolio is designed to provide an optimal viewing experience across a wide range of devices:

- **Desktop**: Full-featured layout with hover effects and animations
- **Tablet**: Adapted grid layouts and touch-friendly interactions
- **Mobile**: Optimized for smaller screens with collapsible navigation

## 🎨 Customization

### Personal Information

Update the following in `src/App.jsx`:

- **Personal details** in the hero section
- **Skills array** to match your expertise
- **Projects array** with your actual projects
- **Contact information** and social links

### Styling

- **Colors**: Modify CSS variables in `src/index.css`
- **Typography**: Update font families and sizes
- **Animations**: Customize transitions and effects in `src/App.css`

### Content Sections

1. **Hero Section**: Introduction and call-to-action buttons
2. **About Section**: Personal background and what you do
3. **Skills Section**: Technical skills with icons
4. **Projects Section**: Featured projects with live demos and source code
5. **Contact Section**: Contact form and social links

## 🌟 Key Highlights for Recruiters

### Code Quality
- **Clean Architecture**: Well-organized component structure
- **Modern JavaScript**: ES6+ features and React hooks
- **Best Practices**: Proper state management and lifecycle methods
- **Performance**: Optimized rendering and lazy loading

### Professional Skills Demonstrated
- **React Development**: Functional components, hooks, and state management
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **User Experience**: Intuitive navigation and smooth interactions
- **Code Organization**: Modular structure and maintainable codebase

### Development Workflow
- **Version Control**: Git with meaningful commit messages
- **Code Linting**: ESLint configuration for code quality
- **Modern Tooling**: Vite for fast development and building
- **Documentation**: Comprehensive README and code comments

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── assets/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and theme
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### GitHub Pages

1. Install the GitHub Pages deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "homepage": "https://yourusername.github.io/react-portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📈 Performance Optimizations

- **Vite Build Tool**: Fast development and optimized production builds
- **CSS Variables**: Efficient theming without JavaScript overhead
- **Semantic HTML**: Proper document structure for better SEO
- **Lazy Loading**: Images and components loaded on demand
- **Minification**: Compressed CSS and JavaScript for faster loading

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact

Feel free to reach out if you have any questions or would like to discuss opportunities:

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if you found it helpful!**

This portfolio demonstrates my passion for creating modern, accessible, and performant web applications. I'm always looking for new opportunities to contribute to exciting projects and teams.

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ by [Your Name] using React & Vite
