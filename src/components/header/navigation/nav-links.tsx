export const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
] as const;

interface NavLinksProps {
    onLinkClick?: () => void;
    className?: string;
}

export function NavLinks({ onLinkClick, className }: NavLinksProps) {
    return (
        <>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className={className || "text font-medium text-foreground hover:text-primary transition-colors"}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
}
