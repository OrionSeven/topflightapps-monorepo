## Scheduling

The Scheduling package is used to manage availability for lineups and instant updates.

### Components

- Availability - The main component that displays the availability view. 
- AvailabilityList - A component that displays the availability in a list view.
- ViewSelector - A component that allows the user to switch between list and calendar views.
- TimezoneSelector - A component that allows the user to switch between timezones.
- ListView - A component that displays the availability in a list view.
- CalendarView - A component that displays the availability in a calendar view.

### Usage

To use the components, you can import them into your project and use them as needed.

```tsx
import Availability from "@topflightapps/scheduling/src/components/availability";
```

```tsx
<Availability userId={1} />
```

### Database

The database schema is defined in the `schema.ts` file. To use this package in your project you'll need to implement the schema in your database.


### Authentication & Authorization

It's assumed the same auth provider is used for the scheduling package as the rest of the app. Auth would be implemented in it's own package in the future.