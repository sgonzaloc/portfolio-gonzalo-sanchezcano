import FluidBackground from "./FluidBackground";
import AvatarHeader from "./AvatarHeader";
import SidebarNavigation from "./SidebarNavigation";
import Footer from "./Footer";

function PageLayout({
  children,
  header = true,
  sidebar = true,
}: {
  children: React.ReactNode;
  header?: boolean;
  sidebar?: boolean;
}) {
  return (
    <>
      <div className="relative min-h-screen bg-transparent">
        {/* Contenedor principal */}
        <div className="flex">
          {sidebar && <SidebarNavigation />}{" "}
          {/* Sidebar fijo ya implementado */}
          <main
            className={`flex-1 bg-transparent pb-16 ${header ? "pt-16" : ""} ${
              sidebar ? "xl:ml-32" : ""
            }`}
          >
            {header && <AvatarHeader />}
            {children}
          </main>
        </div>
      </div>

      <Footer />
      <FluidBackground />
    </>
  );
}

export default PageLayout;
