"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
    className?: string;
}

export const NavLink = ({ href, label, onClick, className }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "capitalize text-base font-medium leading-relaxed transition-colors hover:text-primary",
                isActive && "text-primary",
                className
            )}
        >
            {label}
        </Link>
    );
};
