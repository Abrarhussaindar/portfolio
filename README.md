# Abrar Dar - Developer Portfolio

![http://103.180.236.46:3010/public/hero.png](<!-- Add a link to your screenshot here. E.g., https://i.imgur.com/your-screenshot.png -->)

<!--
**Pro Tip:** To get a great screenshot:
1. Open your live portfolio in a new incognito window.
2. Use a browser extension like "GoFullPage - Full Page Screen Capture" to capture the entire page.
3. Upload the image to a service like Imgur and paste the link above.
-->

### 🚀 [View Live Demo](<!-- Add your live deployment URL here -->)

---

## 👋 Introduction

Welcome to the source code of my personal developer portfolio. This project is a modern, fully responsive web application built from the ground up to showcase my skills, projects, and professional experience as a Backend Developer.

It is crafted with a focus on clean design, smooth user experience, and high performance, leveraging a cutting-edge tech stack including **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. All animations are powered by **Framer Motion** to create a dynamic and engaging interface.

## ✨ Key Features

- **Modern Tech Stack:** Built with Next.js 14 (App Router), React, and TypeScript.
- **Elegant UI/UX:** Styled with Tailwind CSS and the brilliant shadcn/ui component library for a consistent and accessible design system.
- **Stunning Animations:** Fluid and performant animations throughout the site using Framer Motion.
- **Fully Responsive:** A mobile-first design that looks great on all devices, from desktops to smartphones.
- **Dark Theme by Default:** A sleek, developer-friendly dark theme is the default experience.
- **Component-Based Architecture:** Organized into logical, reusable components for easy maintenance and scalability.
- **SEO Optimized:** Built with SEO best practices in mind, thanks to Next.js server-side rendering.
- **Interactive Sections:**
     - **Hero Section:** An engaging introduction with animated social links and a call-to-action.
     - **About Me:** A detailed summary of my background and skills.
     - **Experience:** A professional timeline of my work history.
     - **Projects:** A filterable gallery showcasing my featured work with links and details.
     - **Skills:** A visual representation of my technical competencies.
     - **Contact Form:** A functional form for visitors to get in touch (requires a backend service like Formspree or a serverless function).

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these instructions to set up a local copy of the project for development and testing.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

1. **Clone the repository:**

      ```bash
      git clone https://github.com/[Your GitHub Username]/[your-repo-name].git
      cd [your-repo-name]
      ```

2. **Install dependencies:**

      ```bash
      pnpm install
      # or
      # npm install
      # or
      # yarn install
      ```

3. **Environment Variables**
   This project does not require any environment variables to run locally. If you add a service for the contact form in the future, you should create a `.env.local` file.

      Create a `.env.local` file in the root of the project by copying the example:

      ```bash
      cp .env.example .env.local
      ```

      Your `.env.local` will look like this:

      ```env
      # Example for a contact form endpoint (e.g., Formspree, Web3Forms)
      # NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=your_endpoint_here
      ```

### Running the Development Server

To start the local development server, run:

```bash
pnpm dev
1.  **Clickable Link:** The URL `http://localhost:3000` is now a proper, clickable Markdown link.
2.  **Section Separator:** I've added a horizontal rule (`---`) to create a clear visual separation between the "Getting Started" section and the "Project Structure" section. This is crucial for readability.
3.  **Proper Heading:** `Project Structure` is now a proper level-2 heading (`## 📁 Project Structure`), making it stand out as a major section.
4.  **Code Block for Structure:** The ASCII tree diagram is now wrapped in a code block (```text ... ```). This preserves the spacing and indentation, ensuring it looks like a clean, monospaced tree structure.

.
├── public/               # Static assets (resume PDF, images, etc.)
├── src/
│   ├── app/              # Next.js App Router, pages, and layouts
│   │   ├── api/          # API routes
│   │   └── page.tsx      # Main entry page
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable React components
│   │   ├── ui/           # Unstyled components from shadcn/ui
│   │   ├── AboutSection.tsx
│   │   └── ...           # Other custom components
│   ├── data/             # Static data for the portfolio (projects, skills, etc.)
│   ├── lib/              # Utility functions (e.g., cn for classnames)
│   └── styles/
│       └── globals.css   # Global styles and Tailwind directives
├── .env.local            # Local environment variables
├── tailwind.config.ts    # Tailwind CSS configuration
└── ...
```
## 🚢 Deployment

This portfolio is deployed on **Vercel**, the platform built by the creators of Next.js.

To deploy your own version, follow these steps:

1.  **Push your code to a GitHub repository.**

2.  **Sign up for a free account on [Vercel](https://vercel.com/).**

3.  **Import your project from your Vercel dashboard:**
    -   Click on "Add New... -> Project".
    -   Select your GitHub repository.

4.  **Configure the project:**
    -   Vercel will automatically detect that you are using Next.js and configure the build settings for you.
    -   You can add your environment variables in the "Environment Variables" section if needed.

5.  **Deploy:**
    -   Click the "Deploy" button.
    -   Your portfolio will be built and deployed. Vercel will automatically redeploy the site every time you push a change to your main branch.

---

## 📬 Contact

Abrar Hussain Dar
- **Email:** [abrardar988651@gmail.com](mailto:abrardar988651@gmail.com)
- **LinkedIn:** [linkedin.com/in/abrarhussain0366](https://linkedin.com/in/abrarhussain0366)
- **Project Link:** [https://github.com/[Your GitHub Username]/[your-repo-name]](https://github.com/[Your GitHub Username]/[your-repo-name])

---

## 📄 License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for more details.