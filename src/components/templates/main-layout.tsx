import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
