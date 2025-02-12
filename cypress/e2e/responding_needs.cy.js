describe('Отклик на вакансию', () => {
    it('Успешный отклик студента на вакансию', () => {
  
      cy.fixture('responseNeeds').then(testData => {
  
        cy.log('Открытие главной страницы');
        cy.visit(testData.main_url);
        cy.log('Клик по кнопке "Авторизация"');
        cy.contains('button', 'Авторизация').click();

        cy.log('Заполнение формы авторизации');
        cy.get('.form-input--text')
          .type(testData.student_login);
        cy.get('.form-input--password')
          .type(testData.password);
        cy.get(':nth-child(3) > .button').click();
        cy.wait(1000);
  
        cy.log('Переход в раздел "Потребности"');
        cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label').click();
        cy.log('Переход к конкретной потребности');
        cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button').click();
  
        cy.log('Клик по кнопке "Откликнуться"');
        cy.contains('button', 'Откликнуться').click();
        cy.contains('button', 'Вы уже откликнулись').should('be.visible');
      });
    });
  });