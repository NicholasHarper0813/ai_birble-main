import { Bell, Globe, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-end mt-8 mb-6 px-20">
      <div className="flex items-center gap-3">
        <button className="p-1 rounded-lg bg-card-3">
          <Globe className="h-3 w-3" />
        </button>
        <button className="p-1 rounded-lg bg-card-3">
          <Moon className="h-3 w-3 fill-white" />
        </button>
        <button className="text-foreground-secondary">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
