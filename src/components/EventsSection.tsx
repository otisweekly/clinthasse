"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const upcomingEvents = [
  {
    id: 1,
    type: "Art Show",
    title: "Exhibition Title",
    date: "Coming Soon",
    location: "Gallery Name, City",
    description: "Details about the upcoming art exhibition.",
  },
  {
    id: 2,
    type: "Live Music",
    title: "Performance Title",
    date: "Coming Soon",
    location: "Venue, City",
    description: "Live performance and listening experience.",
  },
];

const books = [
  {
    id: 1,
    title: "Book Title",
    year: "2024",
    description: "A collection of photography and writing exploring themes of...",
    available: true,
  },
  {
    id: 2,
    title: "Book Title",
    year: "2023",
    description: "Visual narratives documenting...",
    available: true,
  },
];

export default function EventsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-20%" });

  return (
    <section id="events" className="py-24 md:py-32 lg:py-40 bg-surface relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[3px] bg-editorial-red" />
            <span className="caption">News & Events</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display-large">
                Upcoming<br />
                <span className="italic text-accent">& Available</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-end">
              <p className="body-large">
                Live performances, art exhibitions, and published works.
                Stay connected for upcoming events and new releases.
              </p>
            </div>
          </div>

          <div className="mt-12 h-px bg-border" />
        </motion.header>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Events column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="caption text-editorial-red">Upcoming Events</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 lg:p-8 border border-border hover:border-accent/50 hover:bg-surface-elevated/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="caption text-accent">{event.type}</span>
                    <span className="caption">{event.date}</span>
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl font-light mb-2 group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {event.title}
                  </h3>

                  <p className="caption text-muted mb-4">{event.location}</p>

                  <p className="body-large text-muted-foreground">{event.description}</p>

                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-3">
                    <span className="caption group-hover:text-accent transition-colors">More Info</span>
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Newsletter signup */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 lg:p-8 bg-surface-elevated border border-border-subtle"
            >
              <p className="caption text-editorial-red mb-3">Stay Updated</p>
              <p className="body-large mb-6">Get notified about upcoming shows and new releases.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted focus:border-accent outline-none transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button className="px-6 py-3 bg-accent text-background caption hover:bg-accent-warm transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>

          {/* Books column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="caption text-editorial-red">Published Works</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-8">
              {books.map((book, index) => (
                <motion.article
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="grid grid-cols-12 gap-6">
                    {/* Book cover placeholder */}
                    <div className="col-span-4">
                      <div className="aspect-[3/4] bg-surface-elevated flex items-center justify-center group-hover:bg-surface transition-colors duration-500">
                        <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>

                    {/* Book info */}
                    <div className="col-span-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="caption">{book.year}</span>
                        {book.available && (
                          <span className="caption text-accent">Available</span>
                        )}
                      </div>

                      <h3
                        className="text-xl lg:text-2xl font-light mb-3 group-hover:text-accent transition-colors duration-300"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {book.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {book.description}
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 caption group-hover:text-accent transition-colors"
                      >
                        <span>View Details</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 h-px bg-border" />
                </motion.article>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 pull-quote"
            >
              &ldquo;Every photograph tells a story that words alone cannot capture.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
