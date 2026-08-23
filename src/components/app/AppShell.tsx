import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Route as RouteIcon,
  Flame,
  Backpack,
  Bus,
  TrainFront,
  Package,
  Landmark,
  MapPinned,
  Utensils,
  BedDouble,
  Video,
  Users,
  Bell,
  CloudSun,
  LifeBuoy,
  Heart,
  DownloadCloud,
  ShieldCheck,
  UserCog,
  Search,
  Mic,
  Menu,
  X,
  Compass,
  Ticket,
  Accessibility,
  ChevronRight,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppStateProvider, useAppState } from "./state";
import { user } from "@/lib/mock";
import { VoiceAssistant } from "./VoiceAssistant";

const navGroups: { label: string; items: { label: string; to: string; icon: typeof Home }[] }[] = [
  {
    label: "Yathra",
    items: [
      { label: "Home", to: "/home", icon: Home },
      { label: "My Journey", to: "/my-journey", icon: RouteIcon },
      { label: "Vratham", to: "/vratham", icon: Flame },
      { label: "Packing", to: "/packing", icon: Backpack },
    ],
  },
  {
    label: "Travel",
    items: [
      { label: "Travel Planner", to: "/travel", icon: Compass },
      { label: "Bus", to: "/travel/bus", icon: Bus },
      { label: "Train", to: "/travel/train", icon: TrainFront },
      { label: "Pilgrimage Packages", to: "/packages", icon: Package },
      { label: "Journey Plan", to: "/journey-plan", icon: RouteIcon },
      { label: "Route Planner", to: "/route", icon: MapPinned },
      { label: "My Bookings", to: "/bookings", icon: Ticket },
    ],
  },
  {
    label: "Discover",
    items: [
      { label: "Temples", to: "/temples", icon: Landmark },
      { label: "Nearby Temples", to: "/nearby-temples", icon: MapPinned },
      { label: "Pamba", to: "/pamba", icon: Compass },
      { label: "Pilgrimage Route", to: "/pilgrimage-route", icon: RouteIcon },
      { label: "Sannidhanam", to: "/sannidhanam", icon: Landmark },
      { label: "Food Guide", to: "/food", icon: Utensils },
      { label: "Accommodation", to: "/accommodation", icon: BedDouble },
      { label: "Video Hub", to: "/videos", icon: Video },
    ],
  },
  {
    label: "Stay Connected",
    items: [
      { label: "Community", to: "/community", icon: Users },
      { label: "Notifications", to: "/notifications", icon: Bell },
      { label: "Weather", to: "/weather", icon: CloudSun },
      { label: "Emergency", to: "/emergency", icon: LifeBuoy },
    ],
  },
  {
    label: "Personal",
    items: [
      { label: "Favorites", to: "/favorites", icon: Heart },
      { label: "Offline", to: "/offline", icon: DownloadCloud },
      { label: "Family Safety", to: "/family-safety", icon: ShieldCheck },
      { label: "Live Journey", to: "/live-journey", icon: RouteIcon },
      { label: "Voice Guide", to: "/voice", icon: Mic },
      { label: "Profile & Settings", to: "/profile", icon: UserCog },
    ],
  },
];

const bottomNav = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Journey", to: "/my-journey", icon: RouteIcon },
  { label: "Vratham", to: "/vratham", icon: Flame },
  { label: "Travel", to: "/travel", icon: Compass },
];

const moreMenu = [
  { label: "Temples", to: "/temples" },
  { label: "Nearby Temples", to: "/nearby-temples" },
  { label: "Food", to: "/food" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Videos", to: "/videos" },
  { label: "Packages", to: "/packages" },
  { label: "Bookings", to: "/bookings" },
  { label: "Community", to: "/community" },
  { label: "Notifications", to: "/notifications" },
  { label: "Weather", to: "/weather" },
  { label: "Emergency", to: "/emergency" },
  { label: "Favorites", to: "/favorites" },
  { label: "Offline", to: "/offline" },
  { label: "Family Safety", to: "/family-safety" },
  { label: "Profile" , to: "/profile" },
];

function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link to="/home" onClick={onNavigate} className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-maroon/60 text-gold">
        <Flame className="size-5" />
      </span>
      <span className="font-display text-sm leading-tight text-ivory">
        Sri Sri Shabharish Guruji
        <span className="block text-[10px] tracking-[0.26em] uppercase text-gold/90">Ayyappa Yathra</span>
      </span>
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="space-y-6 pb-10">
      {navGroups.map((g) => (
        <div key={g.label}>
          <p className="px-3 text-[10px] font-semibold tracking-[0.24em] uppercase text-gold/60">
            {g.label}
          </p>
          <ul className="mt-2 space-y-0.5">
            {g.items.map((it) => (
              <li key={it.to}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={it.to as any}
                  onClick={onNavigate}
                  activeProps={{ className: "bg-gold/15 text-gold" }}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ivory/75 transition hover:bg-ivory/10 hover:text-gold"
                >
                  <it.icon className="size-4 shrink-0" />
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function TopNavbar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const { setVoiceOpen, simpleMode, toggleSimpleMode } = useAppState();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const crumbs = path.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-ivory/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenSidebar}
          className="grid size-10 place-items-center rounded-xl border border-border text-maroon lg:hidden"
        >
          <Menu className="size-5" />
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold tracking-[0.2em] uppercase text-maroon/50">
            {crumbs.length ? crumbs.join(" / ") : "home"}
          </p>
          <p className="truncate font-display text-lg text-maroon sm:text-xl">
            Good Morning, {user.firstName} · <span className="text-saffron">Swamiye Saranam Ayyappa</span>
          </p>
        </div>

        <Link
          to="/search"
          className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground/50 transition hover:border-saffron md:flex md:w-56 xl:w-72"
        >
          <Search className="size-4" /> Search the Yathra…
        </Link>

        <Link
          to="/weather"
          className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-maroon xl:flex"
        >
          <CloudSun className="size-4 text-saffron" /> Sabarimala 24°C
        </Link>

        <button
          type="button"
          onClick={toggleSimpleMode}
          className={cn(
            "hidden items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition sm:flex",
            simpleMode ? "border-saffron bg-saffron text-white" : "border-border bg-card text-maroon",
          )}
        >
          <Accessibility className="size-4" /> Simple Mode
        </button>

        <Link
          to="/notifications"
          aria-label="Notifications"
          className="relative grid size-10 place-items-center rounded-full border border-border bg-card text-maroon"
        >
          <Bell className="size-4" />
          <span className="absolute -top-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-devotional text-[9px] font-bold text-white">
            3
          </span>
        </Link>

        <button
          type="button"
          aria-label="Voice assistant"
          onClick={() => setVoiceOpen(true)}
          className="grid size-10 place-items-center rounded-full bg-devotional text-ivory shadow-warm"
        >
          <Mic className="size-4" />
        </button>

        <Link
          to="/profile"
          aria-label="Profile"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-saffron to-maroon text-sm font-semibold text-ivory"
        >
          {user.firstName.charAt(0)}
        </Link>
      </div>
    </header>
  );
}

function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <>
      {moreOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/60"
            onClick={() => setMoreOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[75vh] overflow-y-auto rounded-t-3xl bg-ivory p-5 pb-24">
            <div className="flex items-center justify-between">
              <p className="font-display text-xl text-maroon">More</p>
              <button type="button" onClick={() => setMoreOpen(false)} aria-label="Close">
                <X className="size-5 text-maroon" />
              </button>
            </div>
            <ul className="mt-4 grid gap-2">
              {moreMenu.map((m) => (
                <li key={m.to}>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    to={m.to as any}
                    onClick={() => setMoreOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-maroon"
                  >
                    {m.label}
                    <ChevronRight className="size-4 text-saffron" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-maroon/97 backdrop-blur lg:hidden">
        <ul className="grid grid-cols-5">
          {bottomNav.map((b) => (
            <li key={b.to}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={b.to as any}
                activeProps={{ className: "text-gold" }}
                className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold tracking-wide text-ivory/70"
              >
                <b.icon className="size-5" />
                {b.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setMoreOpen(true)}
              className="flex w-full flex-col items-center gap-1 py-3 text-[10px] font-semibold tracking-wide text-ivory/70"
            >
              <Menu className="size-5" />
              More
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

function ShellInner() {
  const [open, setOpen] = useState(false);
  const { simpleMode, setVoiceOpen } = useAppState();

  return (
    <div className={cn("min-h-screen bg-ivory", simpleMode && "text-[1.08rem] contrast-more")}>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col overflow-y-auto bg-maroon px-4 py-6 lg:flex">
        <Brand />
        <div className="mt-8 flex-1">
          <SidebarNav />
        </div>
      </aside>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 bg-ink/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-maroon px-4 py-6">
            <div className="flex items-center justify-between">
              <Brand onNavigate={() => setOpen(false)} />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                <X className="size-5 text-gold" />
              </button>
            </div>
            <div className="mt-8">
              <SidebarNav onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <div className="lg:pl-72">
        <TopNavbar onOpenSidebar={() => setOpen(true)} />
        <main
          className={cn(
            "mx-auto w-full max-w-[1400px] px-4 pt-6 pb-32 sm:px-6 lg:px-8 lg:pb-16",
            simpleMode && "max-w-4xl",
          )}
        >
          <Outlet />
        </main>
      </div>

      <button
        type="button"
        onClick={() => setVoiceOpen(true)}
        aria-label="Open voice guide"
        className="fixed right-5 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-devotional text-ivory shadow-warm ring-4 ring-gold/25 transition hover:scale-105 lg:bottom-8"
      >
        <Mic className="size-6" />
      </button>

      <MobileBottomNav />
      <VoiceAssistant />
    </div>
  );
}

export function AppShell({ children }: { children?: ReactNode }) {
  return (
    <AppStateProvider>
      {children}
      <ShellInner />
    </AppStateProvider>
  );
}
