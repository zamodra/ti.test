## 📡 Live Site
Welcome to the **HiTopia Test** project! This is a Next.js-based application.  

🔗 **Live Site:** [zmdr-ti.netlify.app](https://zmdr-ti.netlify.app)


## 🚀 Prerequisites

Ensure you have the following installed before setting up the project:

- **Node.js**: (RECOMMENDED) Version **22.3.0** or higher.
- **npm**: Comes bundled with Node.js.

---

## 🚀 Additional Tech Stack

Ensure you have the following installed before setting up the project:

- **NextJs APP ROUTE**: Using NextJs App Route without src folder.
- **Next Auth**: For Auth Purpose.
- **@mui/material**: For Slider Component.
- **@heroicons/react**: For Icons Component.
- **@headlessui/react**: For Tailwind React Component.
- **lodash.debounce**: For Optimization.

---

## 🔧 Initial Setup

1. **Clone the repository**  
   Replace `<repository-url>` with your actual repository link:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**  
   Run the following command to install required packages:

   ```bash
   npm install
   ```
   or
    ```bash
   npm install --force
   ```

---

## 🛠 Environment Variables

Before running the application, create a `.env` file in the root directory and add the following environment variables:

```env
NEXTAUTH_SECRET="UUE4xdjGxG/898RCqnr9XX8SQh/h6S5XpaP1xCA54jI=" (No need to worry about this, because this is locally generated)
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="https://testcandidate.linkedinindonesia.com/api"
```

Replace the placeholder values with your actual configuration.

---

## ▶ Running Locally

Start the development server with:

```bash
npm run dev
```

By default, the application will be available at:  
🔗 [http://localhost:3000](http://localhost:3000)

If you need to run it on a different port, modify the script in `package.json` accordingly.

---

## 📦 Production Build

To build and start the production version of the application:

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Start the application**:

   ```bash
   npm run start
   ```

By default, it will run on [http://localhost:3000](http://localhost:3000), but you can specify a different port by modifying the start command in `package.json`.

---

## 📡 Deployment

The project is deployed on **Netlify** and can be accessed at:  
🔗 **Live Site:** [zmdr-ti.netlify.app](https://zmdr-ti.netlify.app)

For redeployment, push changes to the main branch (or trigger a manual deploy in Netlify).

---
