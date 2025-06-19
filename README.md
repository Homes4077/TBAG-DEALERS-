# TBAG Dealers Vehicle Management Frontend

This is the frontend application for the TBAG Dealers Vehicle Management System, built with React and Tailwind CSS.

## Project Structure

- `public/`: Contains `index.html`, the main HTML file.
- `src/`: Main source code directory.
  - `components/`: Reusable React components (Navbar, VehicleCard, UploadForm, Login).
  - `pages/`: Page-specific components (Home, AdminPanel).
  - `App.jsx`: Main application component and router setup.
  - `index.js`: React entry point.
  - `index.css`: Main CSS file with Tailwind directives.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `package.json`: Project dependencies and scripts.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Homes4077/TBAG-DEALERS.git](https://github.com/Homes4077/TBAG-DEALERS.git)
    cd TBAG-DEALERS/vehicle-management-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    This will typically open the app in your browser at `http://localhost:3000`.

## Important Notes

-   **Backend API URL:** Remember to update `https://YOUR-DEPLOYED-BACKEND-URL.com/vehicles` placeholders in `src/components/UploadForm.jsx` and `src/pages/Home.jsx` with the actual URL of your deployed Spring Boot backend.
-   **Tailwind CSS JIT:** Tailwind CSS will compile the necessary utility classes based on your `content` configuration in `tailwind.config.js` during development and build.
