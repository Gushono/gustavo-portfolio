# Gustavo Honorato - Portfolio

A modern, interactive portfolio website showcasing my journey as a Backend Software Engineer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, responsive design, and a comprehensive showcase of my professional experience.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Interactive Code Showcase**: Live code snippets in Python, Go, and Java with IDE-like syntax highlighting
- **Dynamic Experience Section**: Company-grouped experiences with navigation between positions
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized**: Fast loading times with optimized assets
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll)
- **Package Manager**: npm/pnpm

## 📁 Project Structure

```
gustavo-portfolio/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── nginx.conf         # Nginx configuration
├── src/
│   ├── components/        # React components
│   │   ├── AboutSection.jsx
│   │   ├── CodeSnippetsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   └── Navigation.jsx
│   ├── assets/            # Images and static files
│   │   ├── *.jpeg         # Profile images
│   │   ├── *.pdf          # Resume files
│   │   └── *.txt          # Text files
│   ├── hooks/             # Custom React hooks
│   │   └── useScrollPosition.js
│   ├── lib/               # Utility functions
│   │   └── utils.js
│   ├── styles/            # CSS files
│   │   ├── index.css      # Global styles with Tailwind
│   │   └── App.css        # App-specific styles
│   ├── utils/             # Code snippets and utilities
│   │   ├── constants.js   # App constants
│   │   ├── *.go          # Go code examples
│   │   ├── *.java        # Java code examples
│   │   └── *.py          # Python code examples
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── .dockerignore          # Docker ignore file
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore file
├── docker-compose.yml     # Docker compose configuration
├── Dockerfile             # Docker configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gushono/gustavo-portfolio.git
   cd gustavo-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t gustavo-portfolio .
```

### Run Docker Container

```bash
docker run -p 3000:3000 gustavo-portfolio
```

The application will be available at `http://localhost:3000`

### Docker Compose

```bash
docker-compose up -d
```

## 📱 Sections Overview

### 🏠 Hero Section
- Personal introduction with animated typing effect
- Interactive code block with tabbed interface (Python, Go, Java)
- Social media links and contact information
- Profile picture and professional title

### 👨‍💻 About Section
- Personal story and professional philosophy
- Animated skill tags
- Location and availability information
- Years of experience counter

### 🎓 Education Section
- Academic background (FATEC, SENAI)
- Institution-specific color themes
- Timeline visualization

### 💼 Experience Section
- Company-grouped professional experiences
- Navigation between positions within the same company
- Dynamic color themes per company
- Technology badges and achievements

### 💻 Code Showcase Section
- Interactive code snippets with syntax highlighting
- Multiple programming languages (Python, Go, Java)
- IDE-like interface with copy functionality
- Algorithm explanation and complexity analysis

### 🛠️ Skills Section
- Categorized technical skills
- Animated progress bars
- Years of experience indicators
- Hover effects with detailed descriptions

### 📞 Contact Section
- Contact form with validation
- Social media links
- Professional email and location

## 🎨 Customization

### Colors and Themes

The portfolio uses a custom color scheme defined in `tailwind.config.js`. Company-specific themes are configured in each experience object:

```javascript
theme: {
  primary: '#FFE600',
  secondary: '#3483FA',
  gradient: 'bg-gradient-to-br from-yellow-400/20 to-blue-500/20',
  textPrimary: 'text-yellow-600',
  textSecondary: 'text-blue-600'
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation item to `src/utils/constants.js`
4. Update the navigation scroll detection

### Modifying Code Snippets

Edit the code snippet files in `src/utils/`:
- `two_sum.py` - Python implementation
- `two_sum.go` - Go implementation  
- `two_sum.java` - Java implementation

## 🔧 Development

### Code Style

This project uses ESLint for code linting. Run the linter:

```bash
npm run lint
```

### Project Organization

- **Components**: Reusable UI components in `src/components/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Utilities**: Helper functions in `src/lib/` and `src/utils/`
- **Styles**: CSS files in `src/styles/`
- **Assets**: Images and static files in `src/assets/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: gustavo.honorato@example.com
- **LinkedIn**: [gustavo-honorato-nic](https://linkedin.com/in/gustavo-honorato-nic)
- **GitHub**: [gushono](https://github.com/gushono)
- **Portfolio**: [Live Demo](https://gustavo-portfolio.vercel.app)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) for scroll animations

---

**Built with ❤️ by Gustavo Honorato**

