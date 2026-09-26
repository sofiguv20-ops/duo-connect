import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/ciclo")({
  head: () => ({ meta: [{ title: "Mi ciclo — NISO" }, { name: "description", content: "Un seguimiento personal y privado; tú eliges qué ve tu pareja." }] }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHeader eyebrow="Mi ciclo" title="Tu ritmo" />
      <ComingSoon text="Un seguimiento personal y privado; tú eliges qué ve tu pareja." />
    </div>
  );
}
