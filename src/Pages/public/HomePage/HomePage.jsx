// Componenets
import { Nav } from "@components/Nav/Nav"
import { Herobg } from "@/Pages/public/HomePage/herobg/Herobg"
import { Button } from "@/Pages/public/HomePage/Button1/Button"
import { Button2 } from "@components/Button/Button2/Button2"
import { QualityCards } from "@components/Cards/QualityCards/QualityCards"
import { Introduction } from "@/Pages/public/HomePage/introduction/Introduction";
import { Footer } from "@components/Footer/Footer"
import { Questions } from "@/Pages/public/HomePage/questions/Questions"
import { Features } from "@/Pages/public/HomePage/features/Features"
import { Purchase } from "@/Pages/public/HomePage/purchase/Purchase"


// Css Desings
import "./HomePage.css"


// Images

// Lucide Icons
import { Eye, ShoppingCart, Rss, UserRoundGroup, TriangleAlert, Clock, Boxes } from "lucide-react"


// Component Arrow Function
export const HomePage = () => {
    return (
        <>
            <main className="main container-md">
                <Herobg/>
                <Introduction/>
                <Features/>
                <Questions/>
                <Purchase/>
            </main>
        </>
    )
}