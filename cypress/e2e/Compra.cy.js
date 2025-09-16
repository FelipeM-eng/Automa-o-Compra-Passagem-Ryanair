describe('Compra de passagem', () => {

  beforeEach(() => {
    //Dado que o usuário acesse o site da Ryanair
    cy.visit('https://www.ryanair.com/pt/pt');

    //E feche o pop-up de cookies
    cy.get('[data-ref="cookie.accept-all"]').click();

    //E feche o pop-up de inscrição na newsletter
    cy.get('.subscriber-widget__mail-wrapper').eq(0).click();

    cy.wait(3000);

    //e clique em iniciar sessão
    cy.xpath("//p[@class='login-tooltip__desc b2']").click();

    //e feche o pop-up de login
    cy.xpath("//*[name()='path' and contains(@d,'m10.545 9.')]").click();

  })

  it('compra com sucesso', () => {
    //Quando o usuario clica na seleção de passagem ida
    cy.get('#input-button__destination').click();

    //E seleciona a passagem de ida para Luxemburgo
    cy.get('#input-button__destination').type('Luxemburgo{enter}');

    cy.wait(2000);

    //E seleciona a data de ida (17/09/2025)
    cy.contains('.calendar-body__cell', '17').click();

    //E seleciona a passagem de volta (19/09/2025)
    cy.contains('.calendar-body__cell', '19').click();

    //E clica em passageiros
    cy.xpath("//div[@class='input-button__input input-button__display-value--truncate-text ng-star-inserted']").click();

    //E seleciona feito
    cy.xpath("//button[@aria-label='Feito']").click();

    //e clicar em pesquisar
    cy.get('.flight-search-widget__start-search-cta').scrollIntoView().click();

    //Então o sistema exibe as opções de voo
    cy.url().should('include', 'trip/flights/select');

    //E verifica se o destino é Luxemburgo
    cy.contains(/luxemburgo/i);

    //E selecionar o voo de ida
    cy.xpath('//*[@data-ref="regular-price-select"]').eq(0).click();

    cy.wait(2000);

    //E selecionar o voo de volta
    cy.xpath("/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-summary-container/flights-summary/div/div[2]/journey-container/journey/flight-list/ry-spinner/div/flight-card-new/div/div/div[4]/flight-card-summary/div/div[2]/button").click();

    cy.wait(2000);
    
    //E escolhe a tua tarifa
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-new-layout-container/fare-table-new-layout/table/thead/tr[2]/th[3]/div').should('be.visible').click();

    cy.wait(3000);

    //e clica em iniciar sessão mais tarde
    cy.get('.login-touchpoint__login-later.title-m-lg.title-m-sm').click();

    //E clica na caixa de titulo do passageiro
    cy.xpath('//*[@type="button"]').click();

    //E clica no titulo Sr
    cy.get('.dropdown-item__label.body-l-lg.body-l-sm').eq(0).click();

    //E digita o nome do passageiro
    cy.get('input[id="form.passengers.ADT-0.name"]').type('felipe');

    //E digita o sobrenome do passageiro
    cy.get("input[id='form.passengers.ADT-0.surname']").type('silva');

    //E clica em continuar
    cy.contains('button', 'Continuar').click();

    cy.wait(4000);

    //E escolhe o assento
    cy.get("#seat-01C").click();

    //E clica em Voo seguinte
    cy.contains('button', 'Voo seguinte').click();

    //E fecha a janela de escolha de assento
    cy.xpath("//*[name()='path' and contains(@d,'m-327.4 30')]").click();

    //E escolhe o assento
    cy.get("#seat-05A").click();

    //E clica em continuar
    cy.contains('button', 'Continuar').click();

    //E clica em adicionar fasta track
    cy.xpath("//button[@class='enhanced-takeover-beta__product-confirm-cta ry-button--gradient-yellow']").click();

    cy.wait(4000);

    //E verifica se está na página de bagagens
    cy.url().should('include', 'bags');

    //E clica em continuar
    cy.contains('button', 'Continuar').click();

    //E verifica se está na página de extras
    cy.url().should('include', 'extras');

    //E clica em continuar sem extras
    cy.contains('button', 'Continuar').click();

    //E verifica se está na página de transporte
    cy.url().should('eq', 'https://www.ryanair.com/pt/pt/trip/flights/extras/transport?tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2025-09-17&tpEndDate=2025-09-19&tpDiscount=0&tpPromoCode=&tpOriginIata=OPO&tpDestinationIata=LUX');

    //E clica em continuar sem transporte
    cy.contains('button', 'Continuar').click();

    //Então o sistema exibe a página de pagamento









    


  })
})