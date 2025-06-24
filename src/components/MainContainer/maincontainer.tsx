import Footer from "../Footer/footer"
import NavBar from "../NavBar/navbar"

export default function MainContainer({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}