# Country and Ranking Implementation

## Overview

This document describes the implementation of country flags and player rankings in the Padel Masters application.

## Changes Made

### 1. API Updates (Backend)

- ✅ Added `Country` field (string, nullable) to `UserDto`
- ✅ Added `Ranking` field (int, nullable) to `UserDto`
- ✅ Database schema updated to include these fields

### 2. Frontend Updates

#### A. CountryFlag Component (`src/components/CountryFlag.astro`)

- ✅ **Simplified mapping**: Removed manual country code mapping
- ✅ **Direct ISO support**: Now uses ISO 3166-1 alpha-2 codes directly
- ✅ **flag-icons integration**: Uses `fi fi-{countryCode}` format

#### B. Matches Page (`src/pages/championships/[id]/[groupId]/matches/index.astro`)

- ✅ **Dynamic country flags**: Uses `player.Country` from API
- ✅ **Dynamic rankings**: Uses `player.Ranking` from API
- ✅ **Fallback values**: Shows "ES" for country and "-" for ranking if not available
- ✅ **Temporary type extension**: `ExtendedUserDto` until API types are fully updated

#### C. Type Safety

- ✅ **Direct API types**: Uses `UserDto` directly with `Country` and `Ranking` fields
- ✅ **Type safety**: Full TypeScript support for new fields
- ✅ **Fallback handling**: Graceful degradation when data is missing

## Implementation Details

### 1. Country Codes

```typescript
// Supported format: ISO 3166-1 alpha-2
const countryCode = "ES"; // Spain
const flagClass = `fi fi-${countryCode.toLowerCase()}`; // "fi fi-es"
```

### 2. Ranking Display

```astro
<span class="text-xs text-gray-500">
  ({player?.Ranking || '-'})
</span>
```

### 3. Country Flag Display

```astro
<CountryFlag
  countryCode={player?.Country || "ES"}
  class="w-4 h-3"
/>
```

## Database Schema

### Users Table

```sql
ALTER TABLE Users ADD COLUMN Country VARCHAR(2) NULL;
ALTER TABLE Users ADD COLUMN Ranking INT NULL;

-- Indexes for performance
CREATE INDEX IX_Users_Country ON Users(Country);
CREATE INDEX IX_Users_Ranking ON Users(Ranking);
```

### Supported Countries

The application supports all ISO 3166-1 alpha-2 country codes that are compatible with the `flag-icons` library.

## Migration Plan

### Phase 1: Backend (✅ Complete)

- ✅ Update database schema
- ✅ Update API DTOs
- ✅ Migrate existing data

### Phase 2: Frontend (✅ Complete)

- ✅ Update type definitions
- ✅ Implement dynamic data usage
- ✅ Add fallback handling

### Phase 3: Cleanup (✅ Complete)

- ✅ Remove temporary `ExtendedUserDto` interface
- ✅ Regenerate API types
- ✅ Remove hardcoded fallback values

## Usage Examples

### 1. Display Player with Country and Ranking

```astro
<div class="flex items-center gap-2">
  <CountryFlag countryCode={player.Country || "ES"} class="w-4 h-3" />
  <UsersLink userId={player.Id} displayName={player.DisplayName} />
  <span class="text-xs text-gray-500">({player.Ranking || '-'})</span>
</div>
```

### 2. Match Display

```astro
<!-- Team 1 -->
<div class="flex items-center gap-3">
  <div class="flex flex-col gap-1">
    <CountryFlag countryCode={team1Player1.Country || "ES"} class="w-4 h-3" />
    <CountryFlag countryCode={team1Player2.Country || "ES"} class="w-4 h-3" />
  </div>
  <div class="flex-1">
    <div class="flex items-center gap-2">
      <UsersLink userId={team1Player1.Id} displayName={team1Player1.DisplayName} />
      <span class="text-xs text-gray-500">({team1Player1.Ranking || '-'})</span>
    </div>
    <div class="flex items-center gap-2">
      <UsersLink userId={team1Player2.Id} displayName={team1Player2.DisplayName} />
      <span class="text-xs text-gray-500">({team1Player2.Ranking || '-'})</span>
    </div>
  </div>
</div>
```

## Benefits

### 1. Scalability

- ✅ **Easy country addition**: Just add to database
- ✅ **Standard codes**: Uses ISO 3166-1 alpha-2
- ✅ **No manual mapping**: Direct flag-icons integration

### 2. Maintainability

- ✅ **Centralized data**: Backend manages all country/ranking info
- ✅ **Type safety**: TypeScript ensures data consistency
- ✅ **Fallback handling**: Graceful degradation when data missing

### 3. Performance

- ✅ **CSS-based flags**: No image loading required
- ✅ **Compact codes**: Only 2 characters per country
- ✅ **Indexed queries**: Fast database lookups

## Future Enhancements

### 1. Ranking System

- 🔄 **Dynamic rankings**: Calculate based on match results
- 🔄 **Seasonal rankings**: Track performance over time
- 🔄 **Category rankings**: Different rankings for different skill levels

### 2. Country Features

- 🔄 **Country selection**: Allow users to choose their country
- 🔄 **Regional tournaments**: Filter by country/region
- 🔄 **National teams**: Support for country-based teams

### 3. UI Improvements

- 🔄 **Ranking badges**: Visual indicators for top players
- 🔄 **Country filters**: Filter matches by player countries
- 🔄 **Statistics by country**: Country-based performance stats

## Notes

- The implementation now uses the official `UserDto` interface with `Country` and `Ranking` fields
- All country codes should be in ISO 3166-1 alpha-2 format (e.g., "ES", "FR", "US")
- Rankings are displayed as numbers or "-" if not available
- The flag-icons library provides CSS-based flags for all supported countries
