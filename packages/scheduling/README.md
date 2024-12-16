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

### Example Availability Data Object to pass into Availability Component

```tsx
const schedules = {
  status: "success",
  data: {
    id: 254,
    ownerId: 478,
    name: "Urgent Care Hours",
    timeZone: "America/Los_Angeles",
    availability: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "08:00",
        endTime: "20:00"
      },
      {
        days: ["Saturday", "Sunday"],
        startTime: "08:00",
        endTime: "18:00"
      }
    ]
  }
}
```