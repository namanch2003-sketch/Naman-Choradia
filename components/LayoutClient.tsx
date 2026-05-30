"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-950">
      {/* ── Fixed left sidebar ── */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Main content — offset by sidebar on lg+ ── */}
      <div className="lg:ml-72">
        <TopBar setMobileOpen={setMobileOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
}
