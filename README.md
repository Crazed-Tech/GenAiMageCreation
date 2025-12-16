# AI Image Generator

An AI-powered image generation application that allows users to create stunning images from text descriptions using the Pollinations.ai API.

## 🚀 Features

- **Text-to-Image Generation**: Transform your text descriptions into visual art
- **Real-time Image Generation**: Instant image creation with Pollinations.ai API
- **Image Download**: Save your generated images directly to your device
- **Prompt History**: Easily reuse previous prompts with one click
- **Responsive Design**: Works seamlessly on all device sizes
- **User-Friendly Interface**: Simple and intuitive design for all users

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Hooks, TanStack Query
- **API Integration**: Pollinations.ai API
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: Lucide React icons

## 📸 Screenshots

![AI Image Generator Interface](https://placehold.co/600x400/4f46e5/ffffff?text=AI+Image+Generator+Interface)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BjFella/GenAiMageCreation
cd ai-image-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:8080`

## 📖 Usage

1. Enter a detailed description of the image you want to create
2. Click "Generate Image" or press Enter
3. View the generated image
4. Download the image using the "Download Image" button
5. Reuse previous prompts from the history section

## 📁 Project Structure

```
src/
├── components/
│   ├── ImageGenerator.tsx          # Main image generation component
├── pages/
│   ├── Index.tsx                   # Home page
│   ├── ImageGeneratorPage.tsx      # Main generator page
├── App.tsx                         # Main application component
├── main.tsx                        # Entry point
└── utils/
    └── toast.ts                    # Toast notification utilities
```

## 🔧 API Integration

This application integrates with the [Pollinations.ai](https://pollinations.ai) API for image generation. The API is called with the following endpoint:

```
GET https://image.pollinations.ai/prompt/{prompt}
```

The API returns JPEG images based on the text prompt provided.

## 🎨 Design

The application features:
- Modern, clean UI with gradient backgrounds
- Responsive card-based layout
- Intuitive user interface
- Loading states and visual feedback
- Toast notifications for user actions
- Tooltip explanations for better UX

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🛡️ Security

- All API calls are made client-side
- No sensitive data is stored or transmitted
- Uses HTTPS for all API communications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Pollinations.ai](https://pollinations.ai) for the image generation API
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

For support, please open an issue in the GitHub repository.

## 🌟 Star the Repository

If you find this project useful, please consider giving it a star on GitHub!

---

*Built with React, TypeScript, and Tailwind CSS*
