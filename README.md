# FireBasic

FireBasic is a simple project that demonstrates the fundamental features of Firebase, including real-time database and authentication. This project serves as a basic introduction to integrating Firebase into your web applications.

## **Features:**

- **Real-time Database**: Allows for live updates and synchronization of data across clients.
- **Authentication**: Basic user authentication using Firebase Authentication.

## **Setup:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pratyush0898/firebasic
   cd firebasic
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Firebase:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.
   - Add Firebase to your web app and copy the Firebase configuration details.
   - Update `firebaseConfig` in your project with the configuration details.

4. **Run the Project:**
   ```bash
   npm start
   ```
   Open your web browser and go to `http://localhost:3000` to see the application in action.

## **Files:**

- **firebaseConfig.js**: Contains Firebase configuration and initialization code.
- **App.js**: Main React component demonstrating Firebase features.
- **index.html**: Basic HTML file to load the React application.

## **Usage:**

- **Real-time Database**: Add and retrieve data in real-time from the Firebase Realtime Database.
- **Authentication**: Sign up and log in users using Firebase Authentication methods.

Feel free to modify and extend the project to explore more Firebase features and build more advanced applications.