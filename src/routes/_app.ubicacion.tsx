import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/ubicacion")({
  head: () => ({ meta: [{ title: "Ubicación — NISO" }, { name: "description", content: "Comparte tu ubicación solo cuando quieras y con quien quieras." }] }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHeader eyebrow="Ubicación" title="Cerca, siempre" />
      <ComingSoon text="Comparte tu ubicación solo cuando quieras y con quien quieras." />
    </div>
  );
}
