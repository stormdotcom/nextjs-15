// app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route'; // Adjust path

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Access Denied. Please log in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.email}!</h1>
      <p>This is a protected dashboard.</p>
    </div>
  );
}
