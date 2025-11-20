import Breadcrumbs from "@/Components/Product/BreadCrumb";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="py-3">{children}</section>;
}
