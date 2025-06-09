# Immortal Dictionary

A modern, feature-rich dictionary web application that provides comprehensive word definitions, pronunciations, and language learning tools. Built with React and deployed on Netlify for fast, reliable access to word meanings anytime, anywhere.

## 🌟 Features

- **Word Lookup**: Search for definitions of words with comprehensive results
- **Pronunciation Guide**: Audio pronunciation support for proper word usage
- **Multiple Definitions**: Access various meanings and contexts for each word
- **Part of Speech**: Detailed grammatical information for each word
- **Etymology**: Word origins and historical development
- **Example Sentences**: Real-world usage examples to understand context
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Search**: Instant results with optimized performance
- **Clean UI**: Intuitive and user-friendly interface

## 🔧 Technology Stack

- **Frontend**: React.js
- **Styling**: CSS3/SCSS (or styled-components)
- **API**: Dictionary API integration
- **Deployment**: Netlify
- **Build Tool**: Create React App or Vite

## 🚀 Live Demo

Visit the live application: [https://immortaldictionary.netlify.app/](https://immortaldictionary.netlify.app/)

## 📱 Usage

1. **Search for Words**: Type any word in the search bar and press Enter
2. **Browse Results**: View comprehensive definitions, pronunciations, and examples
3. **Listen to Pronunciation**: Click the audio icon to hear correct pronunciation
4. **Explore Related Words**: Discover synonyms, antonyms, and related terms
5. **Mobile Friendly**: Use seamlessly across all devices

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/immortal-dictionary.git
   cd immortal-dictionary
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🌐 Deployment

This application is deployed on Netlify with automatic deployments from the main branch.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on every push to main branch

## 📂 Project Structure

```
immortal-dictionary/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   ├── WordCard/
│   │   └── AudioPlayer/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Key Components

- **SearchBar**: Handles user input and search functionality
- **WordCard**: Displays word definitions and related information
- **AudioPlayer**: Manages pronunciation audio playback
- **API Service**: Handles dictionary API calls and data processing

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_DICTIONARY_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://api.dictionaryapi.dev/api/v2/entries/en/
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dictionary API providers for comprehensive word data
- React community for excellent documentation and tools
- Netlify for seamless deployment and hosting

## 📞 Contact

- **Website**: [https://immortaldictionary.netlify.app/](https://immortaldictionary.netlify.app/)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)
- **Email**: your.email@example.com

## 🔄 Updates & Changelog

### Version 1.0.0

- Initial release with core dictionary functionality
- Responsive design implementation
- Audio pronunciation support
- Netlify deployment setup

---

⭐ **Star this repository if you found it helpful!**

_Making vocabulary exploration immortal, one word at a time._
