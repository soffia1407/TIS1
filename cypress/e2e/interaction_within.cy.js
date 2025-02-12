describe('Взаимодействие в рабочем пространстве', () => {
    beforeEach(() => {
        cy.fixture('interactionInWorkspace').then(testData => { 
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
            cy.log('Переход в рабочее пространство');
            cy.get('button:contains("Рабочее пространство")').eq(2).click();
        });
    });

    it('Отправка сообщения в рабочее пространство', () => {
        cy.fixture('interactionInWorkspace').then(testData => {
            cy.log('Ввод сообщения');
            cy.get('.form-area').type(testData.message);
        });
    });

    it('Попытка отправки пустого сообщения', () => {
        cy.log('Очистка поля сообщения');
        cy.get('.form-area').clear();
        cy.get('.comment-textarea__buttons > :nth-child(2)').should('be.disabled');
    });

    afterEach(() => {
        cy.log('Отправка сообщения');
    });
});