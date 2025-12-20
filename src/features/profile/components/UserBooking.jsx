export default function UserBookings({ bookings }) {
  return (
    <div className="card p-3 shadow-sm">
      <h5 className="mb-3">Your Bookings</h5>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b) => (
        <div key={b.id} className="border rounded p-2 mb-2">
          <strong>Course:</strong> {b.course} <br />
          <strong>Status:</strong> {b.status} <br />
          <strong>Date:</strong> {b.date} <br />
        </div>
      ))}
    </div>
  );
}
