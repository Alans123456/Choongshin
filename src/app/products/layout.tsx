import Breadcrumbs from "@/Components/Product/BreadCrumb";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <Breadcrumbs
        items={[
          { label: "Handicrafts", href: "/handicrafts" },
          { label: "Ceramics", href: "/handicrafts/ceramics" },
          { label: "Handcrafted Ceramic Vase" },
        ]}
      />
      {children}
    </section>
  );
}