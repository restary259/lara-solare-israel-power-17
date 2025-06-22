
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Zap, Users, Phone, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

const navItems: NavItem[] = [
  {
    path: '/',
    label: 'בית',
    icon: Home,
    ariaLabel: 'עמוד הבית'
  },
  {
    path: '/products',
    label: 'מוצרים',
    icon: Zap,
    ariaLabel: 'מוצרי דודי שמש'
  },
  {
    path: '/partners',
    label: 'שותפים',
    icon: Users,
    ariaLabel: 'השותפים שלנו'
  },
  {
    path: '/contact',
    label: 'צור קשר',
    icon: Phone,
    ariaLabel: 'פרטי התקשרות'
  },
  {
    path: '/about',
    label: 'אודות',
    icon: Info,
    ariaLabel: 'אודות החברה'
  }
];

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 safe-area-bottom"
      role="tablist"
      aria-label="ניווט ראשי"
    >
      <div className="flex items-center justify-around px-2 py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              role="tab"
              aria-label={item.ariaLabel}
              aria-selected={isActive}
              className={cn(
                "flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-2 py-1 rounded-lg transition-all duration-200",
                "touch-target focus-ring",
                "active:scale-95 active:bg-slate-100",
                isActive 
                  ? "text-orange-600" 
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              )}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 mb-1 transition-colors",
                  isActive ? "fill-current" : ""
                )} 
              />
              <span className={cn(
                "text-xs font-medium leading-none",
                isActive ? "text-orange-600" : "text-slate-600"
              )}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
