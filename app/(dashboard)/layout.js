import Sidebar from "./_components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
