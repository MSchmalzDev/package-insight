import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Package } from "lucide-react";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-border px-4 py-2">
      <div className="flex items-center gap-2">
        <Package className="size-6 text-white" />
        <h1 className="text-xl font-semibold text-foreground">
          Dependency Explorer
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          render={
            <a
              href="https://github.com/MSchmalzDev/package-insight"
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          <FaGithub className="size-4" />
        </Button>
      </div>
    </header>
  );
}
