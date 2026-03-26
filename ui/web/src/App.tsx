import { BrowserRouter } from "react-router";
import { AppProviders } from "@/components/providers/app-providers";
import { AppRoutes } from "@/routes";

// When embedded inside ClawBoxes at /admin, use /admin as basename so all
// client-side navigation stays under /admin/* and never escapes to ClawBoxes routes.
// ClawBoxes injects <meta name="goclaw-basename" content="/admin"> into the served index.html.
// Standalone GoClaw (no meta tag) → basename defaults to "/" — no behaviour change.
function getBasename(): string {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="goclaw-basename"]');
  return meta?.content ?? "/";
}

export default function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}
