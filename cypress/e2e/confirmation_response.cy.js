describe('Подтверждение отклика', () => {
    it('Успешное подтверждение отклика работодателем', () => {

        cy.fixture('createNewNeeds').then(testData => {
            cy.viewport(1920, 1080);
            cy.log('Открытие главной страницы');
            cy.visit(testData.main_url);

            cy.log('Клик по кнопке "Авторизация"');
            cy.contains('button', 'Авторизация').click();
            cy.log('Заполнение формы авторизации');
            cy.get('.form-input--text').type(testData.employer_login);
            cy.get('.form-input--password').type(testData.password);
            cy.get(':nth-child(3) > .button').click();
            cy.wait(1000);

            cy.log('Переход в раздел "Отклики"');
            cy.get(':nth-child(5) > .menu-item__item-name').click();

            cy.log('Подтверждение первого отклика в списке');
            cy.get('.responses-list-item__actions > :nth-child(1)').first().click();
            cy.get('.responses-list-item__actions > :nth-child(1)').first().should('not.exist');
        });
    });
});