
# 🎥 DropClip

**DropClip** is a modern full-stack video platform built with Next.js 15, designed to manage, upload, and scroll video content using ImageKit integration.

## 🚀 Features

- 🔐 Secure user authentication with **NextAuth.js** and **JWT**
- 📹 Seamless video upload, storage, and delivery via **ImageKit**
- 🧩 Modular and reusable components with **React 19** and **TypeScript**
- 🎨 Beautiful, responsive UI built with **Tailwind CSS** and **DaisyUI**
- 🔒 Protected API routes and server-side validation
- 🗄️ Data persistence with **MongoDB** and **Mongoose**

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS, DaisyUI
- **Auth**: NextAuth.js with JWT sessions
- **Database**: MongoDB + Mongoose
- **Media Storage**: ImageKit
- **Forms**: React Hook Form

## ⚙️ Setup

### Prerequisites

- Node.js (LTS)
- MongoDB Atlas or local instance
- ImageKit account

### Installation

```bash
git clone https://github.com/your-username/dropclip.git
cd dropclip
npm install
```

### Environment Variables

Create a `.env` file in the root with:

```env
# MongoDB
MONGODB_URI=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

### Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Folder Structure

```
├── app/
│   ├── api/            # Route handlers (e.g., auth, upload)
│   ├── components/     # Reusable UI components
│   ├── login/          # Login page
│   ├── register/       # Register page
│   └── upload/         # Video upload UI
├── lib/                # Utilities and helpers
├── models/             # Mongoose schemas
├── public/             # Static assets
└── types.d.ts          # TypeScript types
```

## 📜 Scripts

- `npm run dev` – Start dev server
- `npm run build` – Build for production
- `npm run start` – Run in production

---

