export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string; 
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "June 13-17, 2025",
    time: "9:00 AM - 6:00 PM"
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event2.png",
    slug: "github-universe-2025",
    location: "San Francisco, CA",
    date: "May 20-21, 2025",
    time: "8:00 AM - 5:00 PM"
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event3.png",
    slug: "nextjs-conf-2025",
    location: "Virtual Event",
    date: "October 24, 2025",
    time: "10:00 AM - 4:00 PM PST"
  },
  {
    title: "HackMIT 2025",
    image: "/images/event4.png",
    slug: "hackmit-2025",
    location: "Cambridge, MA",
    date: "September 13-15, 2025",
    time: "12:00 PM - 12:00 PM (36 hours)"
  },
  {
    title: "Google I/O 2025",
    image: "/images/event5.png",
    slug: "google-io-2025",
    location: "Mountain View, CA",
    date: "May 14-15, 2025",
    time: "9:00 AM - 7:00 PM"
  },
  {
    title: "Local Tech Meetup",
    image: "/images/event6.png",
    slug: "local-tech-meetup",
    location: "New York, NY",
    date: "December 12, 2024",
    time: "6:30 PM - 9:00 PM"
  },
];