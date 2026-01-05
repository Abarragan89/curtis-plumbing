import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { NavLinks } from "./nav-links";
import { useState } from "react";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                        <SheetTitle>Curtis Plumbing</SheetTitle>
                        <SheetDescription>
                            Professional plumbing since 1939
                        </SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                        <NavLinks
                            onLinkClick={() => setOpen(false)}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        />
                        <div className="pt-4 border-t border-border">
                            <Button className="w-full" size="lg">
                                <Phone className="w-4 h-4" />
                                (800) 729-8149
                            </Button>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
