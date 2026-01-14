# Divya Bihar - Project Implementation Plan

## 1. System Architecture

**High-Level Architecture (Microservices/Modular Monolith approach):**

```mermaid
graph TD
    UserClient[User Client (Web/Mobile)] --> CDN[CDN (Cloudflare/Vercel Edge)]
    CDN --> LB[Load Balancer]
    LB --> FE[Next.js Frontend (SSR/ISR)]
    
    subgraph "Backend Layer (NestJS)"
        FE --> API_GW[API Gateway / BFF]
        API_GW --> AuthSvc[Auth Service]
        API_GW --> DestSvc[Destination Service]
        API_GW --> BookSvc[Booking Service]
        API_GW --> BlogSvc[Blog/CMS Service]
    end
    
    subgraph "Data Layer"
        AuthSvc --> DB_Auth[(PostgreSQL - Users)]
        DestSvc --> DB_Dest[(PostgreSQL - Places)]
        BookSvc --> DB_Book[(PostgreSQL - Bookings)]
        BlogSvc --> DB_Blog[(PostgreSQL - Content)]
        
        DestSvc --> Redis[(Redis Cache)]
    end
    
    subgraph "External Services"
        BookSvc --> PayGate[Payment Gateway (Razorpay/Stripe)]
        DestSvc --> GMaps[Google Maps API]
        AuthSvc --> EmailSvc[Email/SMS Service]
    end
```

## 2. Database Schema (PostgreSQL)

**Core Entities:**

*   **Users**: `id, name, email, password_hash, role (ADMIN, USER, AGENT), avatar_url, created_at`
*   **Destinations**: `id, slug, name, overview, history, best_time_to_visit, coordinates (lat, long), created_at`
*   **Places** (Temples/Monasteries within Destinations): `id, destination_id, name, type (BUDDHIST, HINDU, etc.), description, images[], location`
*   **Hotels**: `id, destination_id, name, type (HOTEL, HOMESTAY), rating, amenities[], price_range, contact_info, agent_id`
*   **Bookings/Leads**: `id, user_id, service_type (HOTEL, TOUR, TAXI), status, date, details (JSON)`
*   **BlogPosts**: `id, title, slug, content, author_id, tags[], featured_image, published_at`

## 3. API Structure (RESTful best practices)

*   **Auth**:
    *   `POST /auth/register`
    *   `POST /auth/login`
    *   `POST /auth/refresh`
*   **Destinations**:
    *   `GET /destinations` (List all)
    *   `GET /destinations/:slug` (Details)
    *   `GET /destinations/:slug/places` (Sub-places)
*   **Hotels**:
    *   `GET /hotels?destination_id=...`
    *   `POST /hotels` (Agent/Admin only)
*   **Trip Planner**:
    *   `POST /trip-planner/generate` (Returns itinerary based on inputs)
*   **Blogs**:
    *   `GET /blogs`
    *   `GET /blogs/:slug`

## 4. Folder Structure

### Frontend (Next.js App Router)
```
/frontend
  /app
    /layout.tsx       # Root layout (Fonts, SEO, Navbar, Footer)
    /page.tsx         # Home Page
    /destinations
      /[slug]
        /page.tsx     # Destination Details
    /plan-trip
      /page.tsx       # Trip Planner
    /hotels
      /page.tsx       # Hotel Listing
    /blog
      /page.tsx       # Blog Index
      /[slug]
        /page.tsx     # Blog Post
  /components
    /ui               # Reusable UI (Buttons, Cards - Shadcn/Tailwind)
    /layout           # Navbar, Footer, Sidebar
    /features         # DestinationCard, TripWizard, etc.
  /lib
    /api.ts           # API Client
    /utils.ts         # Helpers
  /public             # Static Assets
```

### Backend (NestJS)
```
/backend
  /src
    /modules
      /auth           # Auth Logic
      /destinations   # Destination Logic
      /hotels         # Hotel Logic
      /bookings       # Booking Logic
    /common
      /decorators
      /guards         # RBAC Guards
      /filters
    /app.module.ts
    /main.ts
```

## 5. UI Wireframes (Conceptual)

**Home Page:**
*   **Hero**: Full-screen video/image of Bodh Gaya/Rajgir. Big "Plan Your Spiritual Journey" text. Search Bar: "Where do you want to find peace?"
*   **Destinations Grid**: Cards with high-quality images of Top 5 places. Hover effect shows distance/travel time.
*   **Trip Planner Widget**: "How many days?" [2] [3] [5+] -> "Get Itinerary".
*   **Footer**: Quick links, Newsletter, Socials.

**Destination Page (e.g., Bodh Gaya):**
*   **Header**: Parallax image of Mahabodhi Temple.
*   **Tabs**: Overview | History | Temples | Hotels | Map.
*   **Content**: Two-column layout. Left: Information. Right: "Book a Guide" / "Find Hotel" sticky widget.

## 6. Development Phases Roadmap

*   **Phase 1: Foundation (Weeks 1-2)**
    *   Setup Next.js & NestJS repos.
    *   Design System (Tailwind config, Fonts, Colors).
    *   Database Schema design & migration setup.
*   **Phase 2: Core Content (Weeks 3-4)**
    *   CRUD APIs for Destinations & Places.
    *   Frontend pages for Home & Destination Details.
    *   Static content population (Seed data).
*   **Phase 3: Interactive Features (Weeks 5-6)**
    *   Trip Planner Logic.
    *   Hotel Listing & Search.
    *   User Auth (Login/Signup).
*   **Phase 4: Business Logic (Weeks 7-8)**
    *   Booking/Lead Generation forms.
    *   Admin Dashboard implementation.
    *   Blog CMS integration.
*   **Phase 5: Polish & Launch (Week 9)**
    *   SEO Audit.
    *   Performance Tuning (Image optimization).
    *   Deployment.

## 7. Estimated Development Time
*   **Total**: ~8-10 Weeks for MVP (Minimum Viable Product).
*   **Team**: 1 Full Stack Dev (You) + 1 Designer (Me/Antigravity).

## 8. Scalability Recommendations
*   **Caching**: Heavy use of Redis for API responses (Destinations don't change often).
*   **CDN**: Serve all images/assets via connection-oriented CDN (Cloudflare).
*   **Database**: Connection pooling (PgBouncer) for Postgres.
*   **Stateless**: Keep backend stateless for easy horizontal scaling (Kubernetes/Serverless).
