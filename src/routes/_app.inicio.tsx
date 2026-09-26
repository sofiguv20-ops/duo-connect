import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useCouple } from "@/lib/couple";
import { Avatar } from "@/components/Avatar";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/_app/inicio")({
  head: () => ({ meta: [{ title: "Inicio — NISO" }, { name: "description", content: "Vuestro resumen del día." }] }),
  component: Inicio,
});

function greeting() {
  const h = new Date().getHours();
  return h < 13 ? "Buenos días" : h < 20 ? "Buenas tardes" : "Buenas noches";
}

function Inicio() {
  const { data } = useCouple();
  const me = data?.me;
  const partner = data?.partner;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[13px] tracking-wide text-muted-foreground">
          {greeting()}{me?.display_name ? `, ${me.display_name}` : ""}
        </p>
        <div className="flex -space-x-2">
          <Avatar path={me?.avatar_path} name={me?.display_name} className="size-9 ring-2 ring-background" />
          {partner && <Avatar path={partner.avatar_path} name={partner.display_name} className="size-9 bg-sage-soft ring-2 ring-background" />}
        </div>
      </div>
      <PageHeader title={<>Juntos, <span className="italic text-primary">a nuestro paso</span></>} />

      {partner ? (
        <div className="card-soft fade-up mt-6 p-5">
          <div className="flex items-center gap-3">
            <Avatar path={partner.avatar_path} name={partner.display_name} className="size-12 rounded-[14px] bg-sage-soft" />
            <div className="flex-1">
              <p className="text-[15px] font-medium">{partner.display_name}</p>
              <p className="text-[12px] text-muted-foreground">Tu pareja en NISO</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-sage-soft px-3 py-1 text-[11px] font-medium text-sage">
              <span className="size-1.5 rounded-full bg-sage" /> Vinculados
            </span>
          </div>
        </div>
      ) : (
        <Link to="/pareja" className="press fade-up mt-6 block overflow-hidden rounded-[1.75rem] bg-blush-soft p-5">
          <p className="eyebrow text-accent-foreground">Vuestro espacio</p>
          <p className="mt-2 font-display text-[24px] leading-tight">Conecta con tu pareja</p>
          <p className="mt-1 text-[13px] text-muted-foreground">Crea un código o introduce el suyo.</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Empezar <ChevronRight className="size-4" />
          </span>
        </Link>
      )}

      <p className="eyebrow mt-8 mb-3">Próximamente aquí</p>
      <div className="space-y-3">
        {[
          ["Próximos planes juntos", "Vuestro calendario compartido", "bg-blush-soft"],
          ["Tu ciclo", "Solo lo que decidas compartir", "bg-sand"],
          ["Momentos", "Notas y detalles para los dos", "bg-sage-soft"],
        ].map(([t, s, bg]) => (
          <div key={t} className="card-soft flex items-center gap-4 p-4">
            <div className={`size-11 rounded-2xl ${bg}`} />
            <div>
              <p className="text-[15px] font-medium">{t}</p>
              <p className="text-[12px] text-muted-foreground">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
