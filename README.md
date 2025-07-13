# 📝 Mael's To-Do List

A clean, modern, and responsive task management web application built with React and Vite. Keep track of your daily tasks with an intuitive interface that persists your data across browser sessions.

## ✨ Features

- **Add Tasks**: Create new tasks with a simple input field
- **Mark Complete**: Toggle tasks between complete and incomplete states
- **Delete Tasks**: Remove tasks when they're no longer needed
- **Visual Feedback**: Completed tasks are marked with a green checkmark and strikethrough text
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern design with Tailwind CSS styling

## 🚀 Live Demo

Visit the live application: [https://maelports.github.io/To-Do/](https://maelports.github.io/To-Do/)

## 🛠️ Technologies Used

- **React 18** - Component-based architecture with hooks (useState, useEffect, useRef)
- **Vite** - Fast build tool and development server with hot module replacement
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **JavaScript ES6+** - Modern JavaScript features and array methods
- **localStorage API** - Browser storage for data persistence
- **GitHub Actions** - Automated deployment to GitHub Pages

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaelPorts/To-Do.git
   cd To-Do
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Todo.jsx          # Main todo component with state management
│   └── TodoItems.jsx     # Individual todo item component
├── assets/
│   ├── todo_icon.png     # App icon
│   ├── tick.png          # Completed task icon
│   ├── not_tick.png      # Incomplete task icon
│   └── delete.png        # Delete button icon
├── App.jsx               # Root component
├── main.jsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 How to Use

1. **Adding a Task**: Type your task in the input field and click "Add +" or press Enter
2. **Completing a Task**: Click on the checkbox icon or task text to mark it as complete
3. **Deleting a Task**: Click the delete icon (trash can) to remove a task
4. **Persistence**: Your tasks are automatically saved and will be there when you return

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is triggered on every push to the `main` branch.

### Manual Deployment

1. Ensure the `base` path in `vite.config.js` matches your repository name
2. Push your changes to the `main` branch
3. GitHub Actions will automatically build and deploy your app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mael Ports**
- GitHub: [@MaelPorts](https://github.com/MaelPorts)

## 🙏 Acknowledgments

- Icons and design inspiration from modern UI patterns
- Built with Create React App and Vite for optimal development experience
- Styled with Tailwind CSS for rapid UI development
