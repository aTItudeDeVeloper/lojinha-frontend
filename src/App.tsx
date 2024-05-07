import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsTab } from "@/components/products/tabs"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <div className="mx-3">
          <ProductsTab />
        </div>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
