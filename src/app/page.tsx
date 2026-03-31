"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DISCORD_AVATAR_URL = "https://cdn.discordapp.com/embed/avatars/0.png";
const DECORATION_URL =
  "https://cdn.discordapp.com/avatar-decoration-presets/a_3d1e6078b2e4c8865e0ad0f429d651b1.png?size=240&passthrough=true";

const SERVERS = [
  {
    name: "nicealts",
    invite: "https://discord.gg/nicealts",
    description: "Minecraft NFAs.",
    icon: "https://cdn.discordapp.com/icons/1347699377241591850/cff5ab4062bb723d2f72b9f79efdfbdd.png?size=64",
  },
  {
    name: "aquamfa",
    invite: "https://discord.gg/aquamfa",
    description: "Minecraft MFAs.",
    icon: "https://cdn.discordapp.com/icons/1407075158455357450/c3a39b27c262ded935e9e650f2d2248f.png?size=64",
  },
];

export default function PortfolioPage() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => setHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="flex items-center justify-center bg-background px-4"
      style={{ height: height || "100svh" }}
    >
      <div className="flex w-full max-w-md flex-col gap-3">

        {/* Profile card */}
        <Card className="w-full overflow-visible">
          <CardHeader className="relative flex flex-col items-center gap-4 px-5 py-4">
            <a
              href="https://discord.com/users/1487122974376067280"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-5 top-4 z-30"
            >
              <Button variant="secondary" size="icon-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
              </Button>
            </a>

            <div className="relative h-32 w-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DISCORD_AVATAR_URL}
                alt="cheating"
                width={104}
                height={104}
                className="absolute top-1/2 left-1/2 z-10 size-26 -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DECORATION_URL}
                alt="decoration"
                width={128}
                height={128}
                className="pointer-events-none absolute top-0 left-0 z-20 h-32 w-32"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-bold tracking-[-0.10em] text-card-foreground">
                cheating
              </span>
              <span className="text-sm text-muted-foreground">building :3</span>
              <Badge variant="secondary">1487122974376067280</Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Server cards */}
        {SERVERS.map((server) => (
          <div
            key={server.name}
            className="flex items-center justify-between rounded-xl bg-card px-5 py-4 ring-1 ring-foreground/10"
          >
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={server.icon} alt={server.name} className="size-10 rounded-xl" />
              <div className="flex flex-col gap-1">
                <span className="text-[0.9rem] font-semibold tracking-[-0.04em] text-card-foreground">
                  {server.name}
                </span>
                <span className="text-[0.8rem] text-muted-foreground">
                  {server.description}
                </span>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(server.invite, "_blank", "noopener,noreferrer")}
            >
              Join
            </Button>
          </div>
        ))}

      </div>
    </div>
  );
}
