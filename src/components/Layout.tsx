import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyContactBar from './StickyContactBar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24">
        <Outlet />
      </main>
      <Footer />
      <StickyContactBar />
    </div>
  );
}
