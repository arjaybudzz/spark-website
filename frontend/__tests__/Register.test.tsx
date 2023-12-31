import Register from "@/app/register/page";
import { render, screen } from "@testing-library/react"


describe("Register", () => {
    it("should show a 'Register to spark' header", () => {
        render(<Register />);
        const registerHeader = screen.getByText("Register to spark");
        expect(registerHeader).toBeInTheDocument();
    })
})