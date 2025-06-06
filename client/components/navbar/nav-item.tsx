"use client";

import "Link";

type NavItemType = {
  label: string;
  onClick: () => void;
};

export default function NavItem({ label, onClick }: NavItemType) {
  return (
    <div
      onClick={onClick}
      className="
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      "
    >
      {label}
    </div>
  );
}
