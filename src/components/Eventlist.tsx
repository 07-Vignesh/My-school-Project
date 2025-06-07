import prisma from "@/lib/prisma";

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  console.log("Received dateParam:", dateParam);

  const date = dateParam ? new Date(dateParam) : new Date();
  console.log("Parsed Date:", date.toISOString());

  const events = await prisma.event.findMany({
    where: {
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lte: new Date(date.setHours(23, 59, 59, 999)),
      },
    },
  });

  console.log("Fetched Events:", events);

  if (!events.length) {
    return <p className="text-gray-400">No events found.</p>; // ✅ Show message
  }

  return events.map((event) => (
    <div key={event.id} className="p-5 rounded-md border border-gray-200">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  ));
};
export default EventList