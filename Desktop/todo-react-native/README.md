# Advanced Todo List with Theme Switcher

A feature-rich React Native todo application with real-time synchronization, theme switching, and drag-and-drop reordering.

![App Demo](https://via.placeholder.com/800x400?text=Todo+App+Demo)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete todos
- 🎨 **Theme Switcher** - Smooth transitions between light and dark themes
- 🔄 **Real-time Sync** - Powered by Convex for instant updates
- 🔍 **Search & Filter** - Find todos quickly with search and status filters
- 📱 **Drag to Reorder** - Long press and drag to reorder your todos
- 👆 **Swipe to Delete** - Swipe left on any todo to delete it
- 📅 **Due Dates** - Set and track due dates for your todos
- 💾 **Persistent Storage** - Theme preferences saved locally
- 🎯 **Empty States** - Beautiful UI for empty todo lists
- ⚡ **Optimized Performance** - Smooth animations and fast rendering

## 🏗️ Tech Stack

- **Frontend**: React Native (Expo)
- **Backend**: Convex (Real-time database)
- **State Management**: React Context API
- **UI Components**: Custom components with animations
- **Gestures**: react-native-gesture-handler
- **Storage**: AsyncStorage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Convex CLI (`npm install -g convex`)
- iOS Simulator (for Mac) or Android Emulator

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Convex Backend

```bash
# Initialize Convex in the project
npx convex dev

# This will:
# - Prompt you to log in or create a Convex account
# - Create a new Convex project
# - Generate the convex deployment URL
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

Replace `https://your-deployment.convex.cloud` with your actual Convex deployment URL from step 3.

### 5. Push Convex Schema

```bash
npx convex deploy
```

This will deploy your database schema and functions to Convex.

## 🎮 Running the App

### Development Mode

```bash
# Start the Expo development server
npm start

# Or use specific platforms
npm run ios      # Run on iOS simulator
npm run android  # Run on Android emulator
npm run web      # Run in web browser
```

### Building for Production

#### Android APK

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build APK
eas build --platform android --profile preview

# Download APK from EAS dashboard once build completes
```

#### iOS Build

```bash
# Build for iOS
eas build --platform ios --profile preview
```

## 📱 App Structure

```
todo-app/
├── app/                      # Main app screens
│   ├── _layout.tsx          # Root layout with providers
│   └── (tabs)/              # Tab navigation
│       ├── _layout.tsx      # Tab layout
│       ├── todos.tsx        # Main todos screen
│       └── settings.tsx     # Settings screen
├── components/              # Reusable components
│   ├── TodoItem.tsx         # Individual todo item
│   ├── TodoForm.tsx         # Todo creation/edit form
│   ├── SearchBar.tsx        # Search input component
│   ├── EmptyState.tsx       # Empty state display
│   ├── ThemeToggle.tsx      # Theme switcher button
│   └── LoadingSpinner.tsx   # Loading indicator
├── contexts/                # React contexts
│   └── ThemeContext.tsx     # Theme management
├── convex/                  # Convex backend
│   ├── schema.ts            # Database schema
│   └── todos.ts             # Todo CRUD functions
├── constants/               # App constants
│   └── Colors.ts            # Theme colors
├── hooks/                   # Custom hooks
│   └── useTheme.ts          # Theme hook
└── types/                   # TypeScript types
    └── todo.ts              # Todo type definitions
```

## 🎨 Features Breakdown

### CRUD Operations

- **Create**: Tap the + button to add a new todo
- **Read**: View all todos in real-time
- **Update**: Tap the edit icon on any todo
- **Delete**: Swipe left on a todo to delete

### Theme Switching

- Toggle between light and dark themes in Settings
- Theme preference is saved and persists across app restarts
- Smooth color transitions using animations

### Search & Filter

- Search todos by title or description
- Filter by status: All, Active, or Completed
- Real-time filtering as you type

### Drag & Drop

- Long press on any todo to enable dragging
- Reorder todos by dragging them up or down
- Changes are saved automatically

## 🔧 Configuration

### Convex Schema

The app uses the following Convex schema:

```typescript
{
  todos: {
    title: string,
    description?: string,
    dueDate?: string,
    completed: boolean,
    createdAt: number,
    order: number
  }
}
```

### Theme Colors

Colors are defined in `constants/Colors.ts`:

```typescript
Colors.light = {
  primary: '#007AFF',
  background: '#FFFFFF',
  // ... more colors
}

Colors.dark = {
  primary: '#0A84FF',
  background: '#000000',
  // ... more colors
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Create a new todo
- [ ] Edit an existing todo
- [ ] Delete a todo (swipe and confirm)
- [ ] Toggle todo completion status
- [ ] Search for todos
- [ ] Filter todos (All/Active/Completed)
- [ ] Drag and reorder todos
- [ ] Switch between light and dark themes
- [ ] Restart app and verify theme persists
- [ ] Test offline behavior
- [ ] Verify real-time sync with multiple devices

## 🐛 Troubleshooting

### Common Issues

**1. Convex connection error**
```
Error: Could not connect to Convex
```
Solution: Verify your `EXPO_PUBLIC_CONVEX_URL` in `.env.local` is correct.

**2. Build fails**
```
Error: Build configuration error
```
Solution: Run `eas build:configure` and follow the prompts.

**3. Theme not persisting**
```
Theme resets to light mode on restart
```
Solution: Check AsyncStorage permissions in your app.json.

**4. Gestures not working**
```
Drag or swipe gestures not responding
```
Solution: Ensure `react-native-gesture-handler` is properly installed and `GestureHandlerRootView` wraps your app.

## 📊 Performance Optimization

- **Memoization**: Uses `useMemo` for filtered todos
- **Lazy Loading**: Components load on demand
- **Optimistic Updates**: UI updates before server confirmation
- **Efficient Rendering**: FlatList virtualization for large lists

## 🔐 Security

- No sensitive data stored locally except theme preference
- Convex handles authentication (can be extended)
- Input validation on all forms
- XSS protection in text inputs

## 🌐 Deployment

### Requirements for Submission

1. **APK File**: Built using `eas build`
2. **Demo Video**: Screen recording with voiceover
3. **GitHub Repository**: Complete source code
4. **README**: This file with setup instructions

### Google Drive Submission Structure

```
Todo-App-Submission/
├── todo-app.apk
├── demo-video.mp4
└── github-link.txt (contains repository URL)
```

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| EXPO_PUBLIC_CONVEX_URL | Convex deployment URL | https://todo-react-native.convex.cloud |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Expo team for the amazing framework
- Convex team for the real-time backend
- React Native community for helpful libraries

---

## 📦 package.json

```json
{
  "name": "todo-app",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint .",
    "test": "jest"
  },
  "dependencies": {
    "expo": "~51.0.0",
    "expo-router": "~3.5.0",
    "react": "18.2.0",
    "react-native": "0.74.0",
    "convex": "^1.14.0",
    "react-native-gesture-handler": "~2.16.0",
    "react-native-reanimated": "~3.10.0",
    "@react-native-async-storage/async-storage": "1.23.0",
    "react-native-draggable-flatlist": "^4.0.1",
    "@expo/vector-icons": "^14.0.0",
    "@react-native-community/datetimepicker": "8.0.0",
    "expo-status-bar": "~1.12.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@types/react": "~18.2.79",
    "@types/react-native": "~0.73.0",
    "typescript": "~5.3.3",
    "eslint": "^8.57.0",
    "jest": "^29.7.0"
  },
  "private": true
}
```

## 🔧 app.json

```json
{
  "expo": {
    "name": "Advanced Todo List",
    "slug": "todo-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.todoapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.todoapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

---

**Note**: Replace placeholders like `yourusername`, `your.email@example.com`, and Convex URLs with your actual information before submission.