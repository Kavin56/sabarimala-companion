import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Route as RouteIcon,
  Flame,
  Plane,
  Landmark,
  MapPin,
  Utensils,
  BedDouble,
  Video,
  Users,
  Bell,
  CloudSun,
  LifeBuoy,
  Settings,
  Mic,
  PanelLeftClose,
  PanelLeftOpen,
  MoreHorizontal,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useAppState } from "@/lib/app-state";
import { VoiceAssistant } from "./VoiceAssistant";
import { mockUser, mockWeather } from "@/lib/mock-data";

export const navItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/my-journey", label: "My Journey", icon: RouteIcon },
  { to: "/vratham", label: "Vratham", icon: Flame },
  { to: "/travel", label: "Travel Planner", icon: Plane },
  { to: "/journey-plan", label: "Journey Plan", icon: RouteIcon },
  { to: "/route", label: "Route to Sannidhanam", icon: MapPin },
  { to: "/temples", label: "Temples", icon: Landmark },
  { to: "/nearby-temples", label: "Nearby Temples", icon: MapPin },
  { to: "/food", label: "Food Guide", icon: Utensils },
  { to: "/accommodation", label: "Accommodation", icon: BedDouble },
  { to: "/videos", label: "Video Hub", icon: Video },
  { to: "/community", label: "Community", icon: Users },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/weather", label: "Weather", icon: CloudSun },
  { to: "/emergency", label: "Emergency", icon: LifeBuoy },
];

const bottomNav = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/my-journey", label: "Journey", icon: RouteIcon },
  { to: "/vratham", label: "Vratham", icon: Flame },
  { to: "/travel", label: "Travel", icon: Plane },
];

const moreMenu = [
  { to: "/temples", label: "Temples", icon: Landmark },
  { to: "/nearby-temples", label: "Nearby Temples", icon: MapPin },
  { to: "/route", label: "Route", icon: MapPin },
  { to: "/journey-plan", label: "Journey Plan", icon: RouteIcon },
  { to: "/food", label: "Food", icon: Utensils },
  { to: "/accommodation", label: "Accommodation", icon: BedDouble },
  { to: "/videos", label: "Videos", icon: Video },
  { to: "/community", label: "Community", icon: Users },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/weather", label: "Weather", icon: CloudSun },
  { to: "/emergency", label: "Emergency", icon: LifeBuoy },
  { to: "/profile", label: "Profile", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { simpleMode, setVoiceOpen } = useAppState();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current =
    [...navItems, { to: "/profile", label: "Profile & Settings", icon: Settings }].find(
      (n) => n.to === pathname,
    )?.label ?? "Home";
  const items = simpleMode ? navItems.slice(0, 8) : navItems;

  return (
    <div className={cn("min-h-screen bg-ivory", simpleMode && "text-[1.12rem]")}>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden flex-col border-r border-border bg-maroon text-ivory transition-all lg:flex",
          collapsed ? "w-20" : "w-72",
        )}
      >
        <div className="flex items-center gap-3 px-4 py-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-ivory/10 text-gold">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          {!collapsed && (
            <span className="font-display text-base leading-tight">
              Sri Sri Shabharish Guruji
              <span className="block text-[10px] tracking-[0.24em] uppercase text-gold">
                Ayyappa Yathra
              </span>
            </span>
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
          {items.map((n) => (
            <SideLink key={n.to} item={n} collapsed={collapsed} active={pathname === n.to} />
          ))}
        </nav>

        <div className="space-y-1 border-t border-ivory/15 px-3 py-4">
          <SideLink
            item={{ to: "/profile", label: "Profile & Settings", icon: Settings }}
            collapsed={collapsed}
            active={pathname === "/profile"}
          />
          <button
            type="button"
            onClick={() => setVoiceOpen(true)}
            className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-ivory/85 hover:bg-ivory/10"
          >
            <Mic className="size-5 shrink-0 text-gold" aria-hidden="true" />
            {!collapsed && "Voice Guide"}
          </button>
          <button
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((c) => !c)}
            className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-ivory/70 hover:bg-ivory/10"
          >
            {collapsed ? (
              <PanelLeftOpen className="size-5" aria-hidden="true" />
            ) : (
              <PanelLeftClose className="size-5" aria-hidden="true" />
            )}
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>

      <div className={cn("transition-all", collapsed ? "lg:pl-20" : "lg:pl-72")}>
        <header className="sticky top-0 z-20 border-b border-border bg-ivory/95 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Yathra / {current}</p>
              <p className="truncate font-display text-xl text-maroon">{current}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/weather"
                className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-maroon hover:bg-cream sm:inline-flex"
              >
                <CloudSun className="size-4 text-saffron" aria-hidden="true" />
                {mockWeather[2].temp}°C
              </Link>
              <Link
                to="/notifications"
                aria-label="Notifications"
                className="relative grid size-11 place-items-center rounded-full border border-border text-maroon hover:bg-cream"
              >
                <Bell className="size-5" aria-hidden="true" />
                <span className="absolute top-1.5 right-2 size-2 rounded-full bg-devotional" />
              </Link>
              <button
                type="button"
                aria-label="Voice assistant"
                onClick={() => setVoiceOpen(true)}
                className="grid size-11 place-items-center rounded-full bg-saffron text-ivory hover:bg-devotional"
              >
                <Mic className="size-5" aria-hidden="true" />
              </button>
              <Link to="/profile" className="flex items-center gap-3 rounded-full pl-1 hover:bg-cream/60">
                <span className="grid size-11 place-items-center rounded-full bg-devotional font-semibold text-ivory">
                  R
                </span>
                <span className="hidden text-left leading-tight sm:block">
                  <span className="block text-sm font-semibold text-maroon">
                    Good Morning, {mockUser.name}
                  </span>
                  <span className="block text-xs text-saffron">Swamiye Saranam Ayyappa</span>
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main className="px-4 pt-6 pb-28 sm:px-6 lg:pb-12">{children}</main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-ivory/98 backdrop-blur lg:hidden">
        {bottomNav.map((n) => (
          <Link
            key={n.to}
            to={n.to as never}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-3 text-[11px] font-medium",
              pathname === n.to ? "text-saffron" : "text-maroon/70",
            )}
          >
            <n.icon className="size-5" aria-hidden="true" />
            {n.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          className="flex flex-1 flex-col items-center gap-1 py-3 text-[11px] font-medium text-maroon/70"
        >
          <MoreHorizontal className="size-5" aria-hidden="true" />
          More
        </button>
      </nav>

      {moreOpen && (
        <div className="fixed inset-0 z-40 flex items-end bg-ink/60 lg:hidden">
          <div className="max-h-[75vh] w-full overflow-y-auto rounded-t-3xl bg-ivory p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-xl text-maroon">More</p>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMoreOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-border text-maroon"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {moreMenu.map((m) => (
                <Link
                  key={m.to}
                  to={m.to as never}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-sm font-medium text-maroon"
                >
                  <m.icon className="size-5 text-saffron" aria-hidden="true" />
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open voice guide"
        onClick={() => setVoiceOpen(true)}
        className={cn(
          "fixed right-5 bottom-24 z-40 grid place-items-center rounded-full bg-devotional text-ivory shadow-warm hover:bg-maroon lg:bottom-8",
          simpleMode ? "size-20" : "size-16",
        )}
      >
        <Mic className={simpleMode ? "size-9" : "size-7"} aria-hidden="true" />
      </button>

      <VoiceAssistant />
    </div>
  );
}

function SideLink({
  item,
  collapsed,
  active,
}: {
  item: { to: string; label: string; icon: React.ElementType };
  collapsed: boolean;
  active: boolean;
}) {
  return (
    <Link
      to={item.to as never}
      title={item.label}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors",
        active ? "bg-ivory text-maroon" : "text-ivory/85 hover:bg-ivory/10",
      )}
    >
      <item.icon className={cn("size-5 shrink-0", active ? "text-saffron" : "text-gold")} aria-hidden="true" />
      {!collapsed && <span className="truncate">{item.label}</span>}
    </Link>
  );
}
