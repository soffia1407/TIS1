describe('Создание новой вакансии', () => {

    beforeEach(() => { 
        cy.fixture('createNewNeeds').then((data) => {
            cy.viewport(1920, 1080);
            cy.log('Переход на сайт');
            cy.visit(data.main_url);

            cy.log('Клик по кнопке "Авторизация"');
            cy.contains('button', 'Авторизация').click();
            cy.log('Заполнение формы авторизации');
            cy.get('.form-input--text').type(data.employer_login);
            cy.get('.form-input--password').type(data.password);
            cy.get(':nth-child(3) > .button').click();
            cy.wait(1000);

            cy.log('Переход в раздел "Потребности"');
            cy.get(':nth-child(6) > .menu-item__item-name').click();
            cy.log('Открытие формы создания потребности'); 
            cy.get('.needs-block__filters-wrapper > .button').click();
        });
    });

    it('Успешное создание вакансии', function () {
        cy.log('Заполнение формы создания вакансии корректными данными');
        cy.fixture('createNewNeeds').then((data) => { 
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type(data.title);
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .type(data.duties);
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(data.requirements);
        });
    });

    it('Создание вакансии с некорректными данными', function () {
        cy.log('Очистка полей и ввод некорректных данных');
        cy.fixture('createNewNeeds').then((data) => {
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .clear();
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .type(data.duties_negative);
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(data.requirements_negative);
        });
    });

    afterEach(() => {
        cy.log('Подтверждение создания');
        cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click();
    });
});