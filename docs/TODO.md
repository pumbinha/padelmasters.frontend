# TODO - Application Updates

This document tracks pending updates required across the Padelmasters frontend application.

## Pages Missing Glassmorphism Design

The following pages still use the traditional layout and need to be updated to use the new glassmorphism design system:

### User & Profile Pages

- **`/players/[id]`** - Player profile page (`src/pages/players/[id]/index.astro`)

  - Currently uses standard layout with `bg-[hsl(var(--page-background))]`
  - Needs glassmorphism card design for player statistics and match history
  - Should use blue gradient background (`bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900`)

- **`/profile`** - User's own profile page (`src/pages/profile/index.astro`)

  - Currently uses `useTransparentHeader` but minimal implementation
  - Needs full glassmorphism design treatment
  - Should align with other profile pages design

- **`/profile/edit`** - Profile edit page (`src/pages/profile/edit.astro`)

  - Has glassmorphism form elements but needs comprehensive design update
  - Form styling is partially implemented but could be enhanced
  - Should maintain consistency with other glassmorphism pages

- **`/players/[id]/ranking`** - Player ranking page (`src/pages/players/[id]/ranking.astro`)
  - Currently uses standard layout
  - Needs glassmorphism design for rankings display
  - Should use blue gradient background

### Additional Pages

- **`/about`** - About page (`src/pages/about.astro`)

  - Basic page with minimal content and standard layout
  - Needs glassmorphism treatment and proper content structure

- **`/teams`** - Teams listing page (`src/pages/teams/index.astro`)

  - Uses standard layout with static card components
  - Needs glassmorphism design and proper team management functionality

- **`/home/index.astro`** - Empty file (0 lines)
  - File exists but contains no content
  - Needs implementation or removal

## Pages Using Mock/Static Data Instead of API

The following pages and components contain hard-coded or mock data that should be replaced with proper API integration:

### Components with Mock Data

- **`GroupItemLink.tsx`** (`src/components/ui/GroupItemLink.tsx`)
  - Uses `generateMockData(seed)` function for deterministic mock statistics
  - Mock data includes: player count, matches played, completion percentage, and next match time
  - **Note**: This is intentional for hydration consistency - consider if API data is available

### Pages with Static/Hard-coded Data

- **`/teams`** (`src/pages/teams/index.astro`)

  - Contains hard-coded player data:
    - `Person 1` (14 points)
    - `Person 2` (12 points)
    - `Person 4` (10 points)
    - `Person AAA` (5 points)
    - `Person NO-ONE` (1 point)
  - Should integrate with proper teams/players API endpoint

- **`/about`** (`src/pages/about.astro`)
  - Contains hard-coded text mentioning "Brunswick" and "Karl Müller"
  - Should use proper content management or configurable content

## Implementation Priority

### High Priority (Core User Experience)

1. **Player Profile Pages** - Essential for user engagement

   - `/players/[id]` - Most visited page for player information
   - `/profile` - User's own profile view
   - `/players/[id]/ranking` - Important for competitive features

2. **Teams Page API Integration** - Replace static data with real team information

### Medium Priority (Enhanced UX)

3. **Profile Edit Page** - Complete glassmorphism implementation
4. **About Page** - Proper glassmorphism design and dynamic content

### Low Priority (Clean-up)

5. **Teams Page Design** - After API integration, apply glassmorphism
6. **Empty Home Page** - Determine if needed or remove
7. **Mock Data Review** - Evaluate if `GroupItemLink` mock data should be replaced

## Design System Reference

For pages requiring glassmorphism updates, follow these patterns:

### Background System

```astro
<!-- Blue gradient background (preferred for internal pages) -->
<section class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900">
```

### Card Components

```astro
<!-- Glassmorphism cards -->
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
```

### Header Requirements

- Use transparent header for glassmorphism pages (`useTransparentHeader` prop)
- Ensure proper text colors (`text-white/90`, `text-white/70`)
- Apply backdrop blur effects to navigation elements

## Notes

- **API Integration**: Before implementing glassmorphism on pages with mock data, prioritize API integration
- **Responsive Design**: All glassmorphism implementations must maintain mobile-first responsive design
- **Performance**: Use `client:idle` for React components in glassmorphism pages
- **Consistency**: Follow existing glassmorphism patterns from championship pages for consistency

---

_Last updated: 2025-08-08_
_Based on codebase analysis and CLAUDE.md specifications_
