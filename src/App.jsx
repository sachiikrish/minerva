import React from 'react';
import { Header } from './components/Header';
import { EventPage } from './pages/EventPage';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>
    <Header />
    <EventPage />
    <Footer />
    </div>
  )
}
