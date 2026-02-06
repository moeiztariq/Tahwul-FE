# Tahwul - Digital Transformation Platform

A production-ready React application for tracking digital transformation and compliance initiatives using the Balanced Scorecard framework.

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Running

```bash
# Clone and install
git clone [YOUR_REPO_URL]
cd Tahwul-FE
npm install

# Start development server
npm run dev
# → Open http://localhost:5173

# View Storybook component library
npm run storybook
# → Open http://localhost:6006
```

### Other Commands

```bash
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run linter
```

---

## 🏗️ How This Was Built

### Architecture Strategy
Built with **feature-based (domain-driven) architecture** for scalability. Each feature (dashboard, strategic-planning, tracking) is self-contained with its own components, hooks, services, and types—avoiding the monolithic folder-by-type pattern.

### Tech Stack
- **React 18 + TypeScript** - Type-safe component architecture
- **Vite** - Lightning-fast dev server and build tool
- **SCSS Modules** - Scoped, maintainable styling
- **Radix UI** - Unstyled, accessible primitives (WAI-ARIA compliant)
- **Recharts** - Data visualization
- **React Router** - Client-side routing
- **Storybook** - Component development environment

### Development Process

1. **Design System Foundation**
   - Created comprehensive design token system (`styles/tokens.scss`)
   - Defined colors, spacing scale, typography, shadows, transitions
   - Zero hardcoded values—everything references tokens

2. **Component-Driven Development with Storybook**
   - **Built all UI components in Storybook first** before integrating into the app
   - Developed in isolation with multiple variants and states
   - Interactive documentation shows all component props, states, and use cases
   - Components include: Card, Badge, Progress, Tabs, Dialog, Dropdown, EmptyState
   - Each component has comprehensive stories demonstrating:
     - Visual variants
     - Interactive states
     - Accessibility features
     - Responsive behavior

3. **Type-Safe Data Flow**
   ```
   Mock API → Service → Mapper (DTO→ViewModel) → Hook → Component
   ```
   - Strict TypeScript throughout, separating DTOs from ViewModels
   - Mock services easily swappable with real API endpoints

4. **Accessibility-First**
   - Built on Radix UI primitives (keyboard navigation, focus management, ARIA)
   - WCAG color contrast compliance
   - Full keyboard accessibility

---

## 📚 Storybook Component Library

**Why Storybook is central to this project:**

- **Interactive Documentation**: Every component is documented with live, editable examples
- **Isolated Development**: Build and test components independently from the application
- **Visual Testing**: See all component variants and states in one place
- **Design System Source of Truth**: Storybook serves as the living design system documentation
- **Faster Development**: Design and iterate on components without running the full app
- **Quality Assurance**: Ensures components work in all states before integration

### View the Component Library

```bash
npm run storybook
```

Navigate to `http://localhost:6006` to explore:
- All UI components with interactive controls
- Visual variants (sizes, colors, states)
- Accessibility features demonstration
- Code examples for each component
- Design token usage

**Component Coverage:**
- Layout: Card, AppLayout, Sidebar, Header
- UI Primitives: Badge, Button, Progress, Tabs, Dialog, Dropdown
- Data Display: EmptyState, Skeleton, Stats Cards
- Interactive: Form controls, Tooltips

---

## 📋 Assumptions Made

1. **Backend/API**: No real API available—built comprehensive mock services that can be replaced with real endpoints
2. **Design System**: Created professional enterprise design based on common dashboard patterns
3. **Authentication**: Assumed to be added later; all features currently accessible
4. **Real-time Updates**: Not required initially; architecture supports WebSocket/polling when needed
5. **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge); no IE11
6. **Deployment**: Cloud platform (Vercel/Netlify) with static hosting
7. **Business Logic**: Compliance scoring via percentage completion; Balanced Scorecard framework for progress tracking

---

## 🎯 What I Would Improve With More Time

### High Priority
1. **Testing** - Unit tests (Vitest), component tests (React Testing Library), E2E tests (Playwright)
2. **Real API Integration** - Replace mocks with actual endpoints, add React Query for caching
3. **Forms** - React Hook Form + Zod for creating/editing initiatives
4. **Authentication** - Login, role-based access control, protected routes
5. **Complete Modules** - Strategic Planning and Progress Tracking features

### Medium Priority
6. **Performance** - Code splitting, lazy loading, bundle optimization (~256KB → <150KB)
7. **Enhanced UX** - Dark mode, keyboard shortcuts, improved mobile navigation
8. **Advanced Charts** - Interactive drill-downs, export as PNG/PDF, comparison views
9. **Visual Testing** - Integrate Chromatic for visual regression testing of Storybook components

### Nice to Have
10. **Collaboration** - Real-time updates (WebSocket), comments, notifications
11. **i18n** - Multi-language support with RTL
12. **Advanced Features** - AI insights, custom widgets, data import/export
13. **Monitoring** - Error tracking (Sentry), performance monitoring, analytics

---

**Technologies:**
- React 18 + TypeScript
- Vite (build tool)
- React Router (routing)
- SCSS Modules (styling)
- Radix UI (accessible primitives)
- Recharts (data visualization)
- Storybook (component development)

**Folder Structure:**
```
src/
├── features/          # Domain modules (dashboard, planning, tracking)
│   └── [feature]/
│       ├── components/   # Feature UI
│       ├── hooks/        # Data fetching
│       ├── services/     # API layer
│       ├── mappers/      # DTO → ViewModel
│       └── types.ts      # Feature types
├── components/        # Shared UI (developed in Storybook)
│   ├── ui/           # Primitives (Card, Badge, etc.)
│   └── layout/       # Layout components
├── styles/           # Design tokens & mixins
├── mocks/            # Mock API data
└── utils/            # Shared utilities
```

**Key Principles:**
- **Separation of Concerns**: Pages compose components, logic lives in hooks, data in services
- **Design Tokens**: All styling from `styles/tokens.scss` (no hardcoded values)
- **Type Safety**: Full TypeScript, separate DTOs and ViewModels
- **Accessibility**: Radix UI + WCAG compliance
- **Storybook-First**: Components built in isolation with comprehensive stories

---

## 📦 Project Status

**Completed:**
✅ Design system (tokens, mixins)  
✅ UI component library (7+ components in Storybook)  
✅ Dashboard feature (summary, charts, timeline, activities)  
✅ Routing & navigation  
✅ Mock API layer  
✅ TypeScript types throughout  

**Pending:**
🔄 Strategic Planning module  
🔄 Progress Tracking module  

---

## 📄 License

Private - All rights reserved
