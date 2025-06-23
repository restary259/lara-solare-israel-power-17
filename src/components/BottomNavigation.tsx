
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Zap, Users, Phone, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from './Header';

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  const navItems: NavItem[] = [
    {
      path: '/',
      label: t('home'),
      icon: Home,
      ariaLabel: language === 'he' ? 'עמוד הבית' : 'Home page'
    },
    {
      path: '/products',
      label: t('products'),
      icon: Zap,
      ariaLabel: language === 'he' ? 'מוצרי דודי שמש' : 'Solar water heater products'
    },
    {
      path: '/partners',
      label: t('partners'),
      icon: Users,
      ariaLabel: language === 'he' ? 'השותפים שלנו' : 'Our partners'
    },
    {
      path: '/contact',
      label: t('contact'),
      icon: Phone,
      ariaLabel: language === 'he' ? 'פרטי התקשרות' : 'Contact details'
    },
    {
      path: '/about',
      label: t('about'),
      icon: Info,
      ariaLabel: language === 'he' ? 'אודות החברה' : 'About the company'
    }
  ];

  return (
    <nav 
      className="bottom-nav"
      role="tablist"
      aria-label={language === 'he' ? 'ניווט ראשי' : 'Main navigation'}
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-around h-full px-2">
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
                "relative flex flex-col items-center justify-center min-w-[60px] py-3 px-2 transition-all duration-150 ease-out h-full",
                "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:rounded-lg",
                "active:scale-95 active:transition-transform active:duration-75",
                "touch-target",
                isActive 
                  ? "text-orange-500" 
                  : "text-slate-600 active:text-slate-800"
              )}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 mb-1 transition-colors duration-150",
                  isActive ? "fill-current stroke-[1.5]" : "stroke-2"
                )} 
              />
              <span className={cn(
                "text-[10px] font-medium leading-none transition-colors duration-150 text-center",
                isActive ? "text-orange-500" : "text-slate-600"
              )}>
                {item.label}
              </span>
              
              {/* Active indicator bar */}
              {isActive && (
                <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-orange-500 rounded-full" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
