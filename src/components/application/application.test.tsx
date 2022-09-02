import { render, screen } from '@testing-library/react';
import Application from "./application";

describe('Application',()=>{
    test('Renders correclt',()=>{
        render(<Application/>)
        const element=screen.getByRole('textbox')
        expect(element).toBeInTheDocument()

        const jobLocatiobnElement=screen.getByRole('combobox')
        expect(jobLocatiobnElement).toBeInTheDocument()

        const termsElement=screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement=screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})