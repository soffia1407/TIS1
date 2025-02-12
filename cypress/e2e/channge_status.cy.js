describe('Управление статусом отклика в рабочем пространстве', () => {
    beforeEach(() => {
        cy.fixture('confirmResponse').then(testData => { 

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
            cy.contains('Рабочее пространство').first().click(); 
        });
    });

    it('Принятие кандидата на вакансию', () => { 
        cy.log('Клик по кнопке "Принять"');
        cy.get('.status-open__buttons > :nth-child(1)').click();
    });

    it('Отказ кандидату в вакансии', () => {
        cy.log('Клик по кнопке "Отказать"');
        cy.get('.status-open__buttons > :nth-child(2)').click(); 
    });
});