
# Natiq App

Natiq is a React-based application designed to convert Arabic text into spoken words, with the unique functionality of echoing the last word three times. 
The application utilizes the **RDI Natiq API** for generating audio.

---

## Features
- **Text-to-Speech**: Converts Arabic text into audio.
- **Echo Effect**: Repeats the last word three times in the audio.
- **User-Friendly Interface**: Easy-to-navigate pages (Home, About, and Natiq).
- **Responsive Design**: Works seamlessly across devices.
- **Dockerized**: Easily deploy the app using Docker.

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmoudhamed95/natiq.git
   cd natiq-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Available Scripts

In the project directory, you can run the following scripts:

#### `npm start`
- Starts the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The app reloads automatically when changes are made.

#### `npm test`
- Launches the test runner.
- Use this to run unit and integration tests for the application.

#### `npm run build`
- Builds the app for production.
- The optimized build is output to the `build` folder, ready for deployment.

#### `npm run eject`
- This command exposes configuration files for advanced customization. Use with caution as it is irreversible.

---

### Running the App with Docker

1. Build the Docker image:
   ```bash
   docker build -t natiq-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 natiq-app
   ```

3. Open [http://localhost:3000](http://localhost:3000) to access the app.

---

### Project Structure

```
src/
├── components/
│   ├── Navbar.js      // Navigation bar
├── views/
│   ├── Home.js        // Home page
│   ├── About.js       // About page
│   └── Natiq.js       // Core functionality
├── App.js             // Main app entry
├── App.css            // Global styles
├── index.js           // React entry point
```

---

### Testing

The app includes unit and integration tests to ensure functionality.

1. Run tests:
   ```bash
   npm test
   ```

2. Example tests:
   - Ensure components render correctly.
   - Validate API requests and responses.

---

### Deployment

You can deploy the production build of the app to any static hosting service, such as:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS S3](https://aws.amazon.com/s3/)

To build the app for deployment:
```bash
npm run build
```
Deploy the contents of the `build` folder to your preferred hosting service.

---

### API Integration

The app uses the **RDI Natiq API** to convert text to audio. Below is a summary of the API:

- **Endpoint**: `https://echo-6sdzv54itq-uc.a.run.app/natiq`
- **Request Format**: JSON
  ```json
  {
    "text": "Your Arabic text here"
  }
  ```
- **Response**:
  - `wave`: A base64-encoded audio string.
  - The app processes this response to generate and play audio.

---

## Contributions

We welcome contributions to improve the Natiq App! Feel free to open issues or submit pull requests on [GitHub](https://github.com/mahmoudhamed95/natiq).

---

## License

This project is licensed under the [MIT License](LICENSE).
