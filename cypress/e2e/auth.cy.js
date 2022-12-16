describe('Mi primer Test', () => {
    it('Lee Hola Mundo en Home /', () => {
        // 01 Setup del estado de la aplicación
        cy.visit('/')
        // 02 Ejecutar acciones
        cy.get('h1').should('have.tect', 'Home')
        // 03 Espero un resultado
    })

    it('Login funcionando como Customer', () => {
        // 01 Establecer el estado de la App
        cy.intercept('')
        cy.visit('/login')
        // 02 Realizar acciones 
        
    })

})