import {render,screen,fireEvent} from '@testing-library/react'
import {Search} from './Search'
import { BrowserRouter } from "react-router-dom"

describe('Search Component',()=>{
  beforeEach(()=>{
    render(
      <BrowserRouter>
         <Search/>
      </BrowserRouter>
    );
  })

    test('Se encuentra la imagen de Logo',()=>{
        
        const testImage = screen.getByRole("img");
        expect(testImage).toBeInTheDocument();
    })
    test('Se encuentra un alt en la imagen',()=>{
        
        const testAlt = screen.getByRole("img");
        expect(testAlt).toHaveAttribute('alt', 'MercadoLibre')
    })

    test('Se encuentra un placeholder en el input',()=>{
        
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
        expect(inputElement).toBeInTheDocument();
    })

    test('Verificar el input search',()=>{
      const input = screen.getByTestId("inputsearch");
      const btnlupa = screen.getByTestId("lupa");
    
      const inputValue="Licuadora"
      //Action
      input.value=inputValue;
      fireEvent.click(btnlupa)

      expect(input.value).toBe(inputValue)
   })


},
describe('API tests endpoint mercadolibre', () => {
    test('should return a 200 response', async () => {
      const response = await fetch('https://api.mercadolibre.com//sites/MLA/search?q=');
      expect(response.status).toBe(200);
    });
}
)
)