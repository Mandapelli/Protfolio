# Mounika Mandapelli — Portfolio

A production-ready, full-stack portfolio website built with React, TypeScript, Node.js, Express, and MySQL.

## Tech Stack

### Frontend
- React 19 + TypeScript + Vite
- Tailwind CSS 4 + shadcn/ui components
- React Router DOM, Framer Motion, React Hook Form + Zod
- Lucide React icons, Sonner toasts

### Backend
- Node.js + Express.js + TypeScript
- MySQL + Prisma ORM
- Helmet, CORS, Rate Limiting, Input Sanitization

### Code Quality
- ESLint, Prettier, Husky pre-commit hooks
- TypeScript strict mode, Clean Architecture

## Project Structure

```
Protfolio/
├── client/                 # React frontend
│   └── src/
│       ├── components/     # UI & shared components
│       ├── features/       # Feature-specific components
│       ├── pages/          # Route pages
│       ├── layouts/        # Layout wrappers
│       ├── routes/         # Router configuration
│       ├── hooks/          # Custom React hooks
│       ├── services/       # API service layer
│       ├── lib/            # Utilities & validations
│       ├── constants/      # Site config & data
│       ├── types/          # TypeScript types
│       └── styles/         # Global CSS
├── server/                 # Express backend
│   └── src/
│       ├── config/         # Environment & database
│       ├── controllers/    # Route controllers
│       ├── middleware/     # Express middleware
│       ├── routes/         # API routes
│       ├── services/       # Business logic
│       ├── validations/    # Zod schemas
│       └── utils/          # Helpers
└── README.md
```

## Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

## Setup Commands

### 1. Clone and install dependencies

```bash
cd Protfolio
npm install
cd client && npm install
cd ../server && npm install
```

### 2. Configure environment variables

```bash
# Frontend
cp client/.env.example client/.env

# Backend
cp server/.env.example server/.env
```

Edit `server/.env` with your MySQL credentials:

```env
DATABASE_URL="mysql://root:yourpassword@localhost:3306/mounika_portfolio"
CORS_ORIGIN=http://localhost:5173
```

### 3. Set up the database

```bash
# Create MySQL database
mysql -u root -p -e "CREATE DATABASE mounika_portfolio;"

# Run Prisma migrations
cd server
npx prisma generate
npx prisma db push
```

### 4. Run development servers

```bash
# From root directory — runs both client and server
npm run dev

# Or run separately:
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:5000
```

## Production Build

```bash
# Build both frontend and backend
npm run build

# Preview frontend
cd client && npm run preview

# Start production server
cd server && npm start
```

## API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /api/health    | Health check         |
| POST   | /api/contact   | Submit contact form  |

### Contact API

**POST /api/contact**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Deployment

### Frontend — Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set root directory to `client`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variables from `client/.env.example`
7. Update `vercel.json` with your backend URL

### Backend — Render

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Use `render.yaml` for configuration or set manually:
   - Root directory: `server`
   - Build: `npm install && npx prisma generate && npm run build`
   - Start: `npx prisma db push && npm start`
4. Add MySQL database on Render and set `DATABASE_URL`

### Backend — AWS (EC2 + RDS)

1. Create RDS MySQL instance
2. Launch EC2 with Node.js 20
3. Clone repo and build using `server/Dockerfile`:

```bash
docker build -t portfolio-api -f server/Dockerfile .
docker run -p 5000:5000 --env-file server/.env portfolio-api
```

4. Configure security groups for ports 80/443
5. Use Nginx as reverse proxy

### Docker

```bash
docker build -t portfolio-api -f server/Dockerfile .
docker run -p 5000:5000 -e DATABASE_URL="..." -e CORS_ORIGIN="..." portfolio-api
```

## Features

- Responsive design (mobile-first)
- Dark / light theme toggle
- Animated hero with typing effect
- Project search, filtering, and pagination
- Experience timeline with skill progress bars
- Certification cards with verification links
- Contact form with validation and API integration
- SEO: meta tags, Open Graph, Twitter Cards, sitemap, structured data
- Scroll-to-top, loading skeletons, error boundary
- Toast notifications

## Lighthouse Targets

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## License

MIT © Mounika Mandapelli
