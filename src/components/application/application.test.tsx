import { render, screen } from '@testing-library/react';
import Application from "./application";

describe('Application',()=>{
    test('Renders correclty',()=>{
        render(<Application/>)

        const pageHeading=screen.getByRole('heading',{
            level:1
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading=screen.getByRole('heading',{
            level:2
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElement=screen.getByRole('textbox', {
            name:'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2=screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()

        const bioElement= screen.getByRole('textbox',{
            name:'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocatiobnElement=screen.getByRole('combobox')
        expect(jobLocatiobnElement).toBeInTheDocument()

        const termsElement=screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2=screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const submitButtonElement=screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})