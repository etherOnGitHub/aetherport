# Aetherport

> A full-stack portfolio and project hub for **aetherwave** — showcasing projects, interactive experiences, and personal branding. Built with a modern turborepo monorepo architecture.

---

## 🛠️ Tech Stack

### Frontend (`apps/web`)
| Technology         | Purpose                                    |
| ------------------ | ------------------------------------------ |
| **Next.js 16**     | React framework with App Router, SSR & ISR |
| **React 19**       | UI library with React Compiler support     |
| **TypeScript 5**   | Type-safe development                      |
| **Tailwind CSS 4** | Utility-first styling                      |
| **ESLint**         | Linting and code quality                   |

### Backend (`apps/api/backend`)
| Technology                | Purpose                    |
| ------------------------- | -------------------------- |
| **Django 5.2**            | Python web framework       |
| **Django REST Framework** | RESTful API toolkit        |
| **Simple JWT**            | Token-based authentication |
| **PostgreSQL 15**         | Relational database        |
| **Gunicorn**              | Production WSGI server     |
| **WhiteNoise**            | Static file serving        |

### Infrastructure & Tooling
| Technology         | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| **Turborepo**      | Monorepo build orchestration                    |
| **Docker Compose** | Local containerized development                 |
| **Fly.io**         | Backend deployment platform                     |
| **Vercel**         | Frontend deployment                             |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        TURBOREPO MONOREPO                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────────┐ │
│  │      apps/web           │    │      apps/api/backend       │ │
│  │    (Next.js 16)         │    │       (Django 5.2)          │ │
│  │                         │    │                             │ │
│  │  • Server Components    │───▶│  • REST API (/api/v1/)      │ │
│  │  • Client Components    │    │  • JWT Authentication       │ │
│  │  • Server Actions       │    │  • Projects & Tags CRUD     │ │
│  │  • Tailwind CSS         │    │  • PostgreSQL Database      │ │
│  └─────────────────────────┘    └─────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                      packages/                              ││
│  │  • config/     - Shared Tailwind configuration              ││
│  │  • tsconfig/   - Shared TypeScript configuration            ││
│  │  • images/     - Shared image assets                        ││
│  │  • ui/         - Shared UI components                       ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow
1. **Next.js frontend** makes server-side requests to the Django API
2. **Server fetch** (`lib/server-api/`) fetches data with ISR caching (5s revalidation)
3. **Django REST API** serves JSON data from PostgreSQL via ViewSets
4. **JWT tokens** handle authentication for protected routes

---

## 📄 Site Components

### Pages
| Route              | Description                                  |
| ------------------ | -------------------------------------------- |
| `/`                | Home page with splash screen and bio section |
| `/projects`        | Portfolio grid displaying all projects       |
| `/projects/[slug]` | Individual project detail page               |

### UI Components
| Component       | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `Navbar`        | Responsive navigation with mobile hamburger menu |
| `Bars`          | Decorative UI element                            |
| `Splash`        | Hero/splash section on homepage                  |
| `Bio`           | About/introduction section with canvas effects   |
| `Projects`      | Grid layout for project cards                    |
| `CanvasContext` | Interactive canvas with pixel sort effects       |
| `ApiStatus`     | Real-time API health indicator                   |
| `AuthModal`     | Authentication modal dialog                      |

### API Endpoints (`/api/v1/`)
| Endpoint               | Method    | Description           |
| ---------------------- | --------- | --------------------- |
| `/projects/`           | GET       | List all projects     |
| `/projects/{slug}/`    | GET       | Get project by slug   |
| `/tags/`               | GET, POST | List/create tags      |
| `/auth/token/`         | POST      | Obtain JWT token pair |
| `/auth/token/refresh/` | POST      | Refresh access token  |

### Data Models
- **Project**: Portfolio items with title, slug, tagline, description, images, tags, links, and metadata
- **Tag**: Categorization for projects (many-to-many relationship)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose (for containerized development)
- PostgreSQL 15 (or use Docker)

### Option 1: Docker Development (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/aetherport.git
cd aetherport

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend:  http://localhost:8000/api/v1/
```

### Option 2: Local Development

#### Backend Setup
```bash
cd apps/api/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
cp .env.example .env  # Create and configure .env

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

#### Frontend Setup
```bash
# From root directory
npm install

# Start development (uses Turborepo)
npm run dev

# Or just the web app
cd apps/web
npm run dev
```

### Environment Variables

#### Frontend (`apps/web`)
```env
API_BASE_URL=http://localhost:8000/api/v1       # Server-side API URL
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1 # Client-side API URL
```

#### Backend (`apps/api/backend`)
```env
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://user:pass@localhost:5432/aetherport
DEBUG=True
```

---

## 📦 Project Structure

```
aetherport/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── src/app/            # App Router pages & components
│   │   ├── lib/                # API clients & types
│   │   └── public/             # Static assets
│   └── api/backend/            # Django backend
│       ├── aether/             # Django project settings
│       ├── projects/           # Projects app (models, views, serializers)
│       ├── accounts/           # User accounts app
│       └── core/               # Core utilities
├── packages/
│   ├── config/                 # Shared Tailwind config
│   ├── tsconfig/               # Shared TypeScript config
│   ├── images/                 # Shared image assets
│   └── ui/                     # Shared UI components
├── docker-compose.yml          # Local development containers
├── turbo.json                  # Turborepo configuration
└── package.json                # Root workspace config
```

---

## 🌐 Deployment

### Backend (Fly.io)
The backend is configured for Fly.io deployment with automatic migrations on release.

```bash
cd apps/api/backend
fly deploy
```

### Frontend (Vercel)
The frontend is configured for Vercel with preview deployments for PRs.

```bash
# Automatic via GitHub integration, or manually:
vercel --prod
```

---

## 📝 License

See [LICENSE](LICENSE) for details.

---

<p align="center">Made with 💜 by <a href="https://aetherwave.dev">etherchild</a></p>
