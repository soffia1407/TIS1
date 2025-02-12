describe('Просмотр страницы вакансий', () => {
    it('Успешный просмотр и фильтрация вакансий', () => {
        cy.fixture('viewNeedsPage').then(testData => {

            cy.log('Открытие главной страницы');
            cy.visit(testData.main_url);

            cy.log('Переход в раздел "Потребности"');
            cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label').click();
            cy.log('Заполнение формы фильтрации');
            cy.get('.form-input--text').type(testData.search_text);
            cy.get('input[name="salary-field-radio"]').check('Любой');
            cy.get('.form-select__selected').click();
            cy.get('.form-select__option:nth-child(1)').click();
        });
    });
});