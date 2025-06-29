
import React from 'react';
import { cn } from '@/lib/utils';
import BottomNavigation from './BottomNavigation';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showBottomNav?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className,
  showBottomNav = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className={cn(
        "flex-1",
        showBottomNav && "content-with-bottom-nav", // Use the enhanced class
        className
      )}>
        {children}
      </main>
      
      {/* Show bottom nav only on mobile/tablet */}
      {showBottomNav && (
        <div className="md:hidden">
          <BottomNavigation />
        </div>
      )}
    </div>
  );
};

export default PageLayout;
