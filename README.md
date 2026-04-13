# Mechanica 2026 - Machina Sentience

This is the official technical festival application for the Mechanical Engineering Association at IIT Madras.

## Asset Management

All static assets (images, logos, icons) should be placed in the `public` folder at the root of the project.

- **Location:** `/public`
- **Usage:** In your React components, reference these files using an absolute path starting with a forward slash.
  - Example: To use `public/merch.jpg`, use `<Image src="/merch.jpg" ... />`.
- **Current Assets in Public:**
  - `cad.jpg`: CAD Design Competition
  - `case.jpg`: Case Study
  - `panel.jpg`: Panel Discussion
  - `paper.jpg`: Paper Presentation
  - `merch.jpg`: Official Merchandise
  - `logo.png`: MEA / Mechanica Logo

## Project Structure

- `src/app`: Contains the pages and layouts using Next.js App Router.
- `src/components`: Reusable UI components powered by ShadCN and Tailwind CSS.
- `src/ai`: Genkit flows for AI features (e.g., Personalized Itinerary).
- `src/lib/placeholder-images.json`: Centralized registry for all image references used in the app.

Engineered for Excellence.
