export default async (request, context) => {
  // India time window:
  // Start: 4 September 2026, 00:00 IST
  // End:   15 September 2026, 00:00 IST
  // Therefore the Char Dham page is shown for 10 calendar days.
  const start = Date.parse("2026-09-03T18:30:00Z");
  const end = Date.parse("2026-09-14T18:30:00Z");
  const now = Date.now();

  if (now >= start && now < end) {
    return context.rewrite(
      new URL("/char-dham-yatra.html", request.url)
    );
  }

  return context.next();
};
