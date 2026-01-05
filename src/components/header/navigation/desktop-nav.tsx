import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { NavLinks } from "./nav-links";

export function DesktopNav() {
    return (
        <div className="hidden sm:flex items-center gap-6">
            <NavLinks />
            <Button size="sm">
                <Phone className="w-4 h-4" />
                (800) 729-8149
            </Button>
        </div>
    );
}
