
# 🐶 Dogs UI — Frontend

This is a simple web application built using React to manage dog breeds.
You can view, search, add, update, and delete breeds using a clean UI instead of calling APIs manually.

---

## 🔗 Links

* **Live App**
  [https://dogs-ui-flax.vercel.app/](https://dogs-ui-flax.vercel.app/)

* **GitHub Repository**
  [https://github.com/Krishnamohanvaddi/dogs-ui](https://github.com/Krishnamohanvaddi/dogs-ui)

* **Backend API**
  [https://dogs-api-y5cx.onrender.com/api/dogs](https://dogs-api-y5cx.onrender.com/api/dogs)

---

## 📌 Overview

Dogs UI is the frontend part of the Dog Breeds project.

It connects to the backend API and lets users:

* View all breeds
* Search for a breed
* Add new breeds
* Update existing ones
* Delete breeds

Everything is done through a simple interface, so users don’t need to work with raw APIs.

---

## ⚙️ Tech Stack

* **React 18**
* **Axios (for API calls)**
* **Plain CSS (no UI libraries)**
* **Vercel (for deployment)**

---

## ✨ Features

### 🐾 All Breeds

* Shows all breeds when the page loads
* Search/filter works instantly as you type
* Edit option available directly inside each item
* Delete option with confirmation
* Total count updates automatically

---

### 🔍 Search Breed

* Search for a breed by name
* Shows full details (ID, breed name, sub-breeds)
* Option to edit or delete from the result
* Shows error message if breed is not found

---

### ➕ Add Breed

* Simple form to add a new breed
* Sub-breeds are optional
* Live preview shows how sub-breeds will look
* Handles duplicate entries with proper message

---

## 💻 Run Locally

### Requirements

* Node.js (recommended version 20)
* Backend API should be running on port `8080`

---

### Steps

1. Clone the project

```bash
git clone https://github.com/krishnamohanvaddi/dogs-ui.git
cd dogs-ui
```

---

2. Install dependencies

```bash
npm install
```

---

3. Create environment file

Create `.env.local` in the project folder:

```
REACT_APP_API_URL=http://localhost:8080/api/dogs
```

---

4. Start the app

```bash
npm start
```

---

5. Open in browser

```
http://localhost:3000
```

---

⚠️ Note:
Make sure backend is running.
If not, you will see connection errors.

---

## 🚀 Deployment (Vercel)

This project is deployed using Vercel.

### What I did:

* Pushed code to GitHub
* Connected repo to Vercel
* Vercel auto-detected React setup
* Added production API URL
* Enabled auto deployment

Now, every time I push code to `main`, it automatically deploys.

---

### Build command

```bash
npm run build
```

---

### Output folder

```
build/
```

---

## 🧠 Simple Choices I Made

* Used plain CSS instead of UI libraries → keeps app lightweight and simple
* Direct API calls using Axios → easy to manage and debug

---

## 🔮 Improvements (if extended)

If I continue working on this, I would:

* Improve UI design
* Add pagination for large lists
* Add authentication
