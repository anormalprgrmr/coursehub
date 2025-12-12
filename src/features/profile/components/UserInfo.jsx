export default function UserInfo({ user }) {
  return (
    <div className="card p-3 shadow-sm mb-4">
      <h5 className="mb-3">User Information</h5>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
