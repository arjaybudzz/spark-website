import { render, screen } from "@testing-library/react"
import Home from "@/app/page"


describe("Home", () => {
    it("should have sign in to spark", () => {
        render(<Home />);
        const screenText = screen.getByText("Go to login");
        expect(screenText).toBeInTheDocument();
    })
})

