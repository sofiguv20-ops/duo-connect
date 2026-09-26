import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/calendario")({
  head: () => ({ meta: [{ title: "Calendario — NISO" }, { name: "description", content: "Organizad vuestros planes, citas y recordatorios en un mismo lugar." }] }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHeader eyebrow="Calendario" title="Calendario compartido" />
      <ComingSoon text="Organizad vuestros planes, citas y recordatorios en un mismo lugar." />
    </div>
  );
}
