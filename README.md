# Octenix Portfolio

Octenix is a creative digital agency. This project is the main portfolio website for the agency, built to showcase strategy, technology, and creativity through engaging 3D animations and fluid interactions.

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock), Lenis (Smooth Scrolling)
- **3D / WebGL Graphics**: OGL, vgpu (WebGPU)
- **Forms**: Web3Forms

## How to Run Locally
1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   Copy `.env.example` to `.env` and fill in your `VITE_WEB3FORMS_KEY`.
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment
This project is configured to be deployed on **Vercel** or any standard static hosting platform that supports Vite builds. To build for production, run:
```bash
npm run build
```
This will generate the production-ready assets in the `dist` folder.
