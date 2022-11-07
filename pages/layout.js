import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
