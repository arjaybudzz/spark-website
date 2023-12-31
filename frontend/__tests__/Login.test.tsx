import { render, screen } from "@testing-library/react"
import Login from "@/app/login/page"


describe("Login", () => {
    it("should show a Sign in to spark header", () => {
        render(<Login />);
        const screenText = screen.getByText("Hello");
        expect(screenText).toBeInTheDocument();
    })
})