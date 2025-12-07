import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  isTransparent?: boolean;
}

export function ThemeToggle({ isTransparent = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className={isTransparent ? "h-5 w-5 text-white" : "h-5 w-5 text-muted-foreground"} />
      ) : (
        <Sun className={isTransparent ? "h-5 w-5 text-white" : "h-5 w-5"} />
      )}
    </button>
  );
}
