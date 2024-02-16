
import { render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it('counter displays correct initial count', () => {
        const { getByTestId } = render(<Counter initialCount={0} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const countValue = Number(getByTestId('count').textContent);
        expect(countValue).toEqual(0)
    })
})