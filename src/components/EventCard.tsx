// src/components/EventCard.tsx
import React from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl?: string;
}

type Props = { event: Event };

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/events/${event.id}`}>
      <a className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        {event.imageUrl && (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold">{event.title}</h2>
          <p className="text-sm text-gray-600">
            {event.date} — {event.location}
          </p>
        </div>
      </a>
    </Link>
  );
}
