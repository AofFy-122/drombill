# DromBillPro - Water & Electricity Billing System

DromBillPro is a comprehensive web application designed to manage water and electricity billing efficiently. It includes features for calculating utilities and a specialized reward points system for tenants.

## Overview

This project is built to streamline the billing process for property managers and landlords, providing an intuitive interface for both management and tenants. 

**Key Features:**
- **Utility Billing Management:** Efficient tracking and calculation for water and electricity bills.
- **Tenant Dashboard:** Dedicated portal for tenants to view their usage, billing history, and manage accounts.
- **Reward Points System:** Integrated points accumulation system for tenants.
- **Modern User Interface:** Responsive and user-friendly design using Tailwind CSS.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** Tailwind CSS

## Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

Ensure you have Node.js installed. You can use npm, yarn, pnpm, or bun as your package manager.

### Installation

1. Navigate to the project directory:
   ```bash
   cd drombill
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `app/`: Contains the Next.js App Router files including pages, layouts, and routing logic.
  - `(auth)/`: Authentication related pages.
  - `(menuTenant)/`: Tenant-specific dashboard and views.
- `components/`: Reusable React components.
- `public/`: Static assets such as images and icons.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to catch and fix code issues.

## License

This project is private and proprietary.
