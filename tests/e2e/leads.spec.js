// @ts-check
const { test, expect } = require('@playwright/test');
const { faker} = require('@faker-js/faker');
const {LandingPage} =require('../pages/landingPage')
const {Toast} =require('../pages/components')

let ladingPage
let toast
test.beforeEach(async({page})=>{
  ladingPage = new LandingPage(page)
toast = new Toast(page)
})
test('Deve cadastrar um lead na fila de espera', async ({ page }) => {
const leadName = faker.person.fullName()
const leadEmail = faker.internet.email()

  await ladingPage.visit()

  await ladingPage.openLeadModal()

  await ladingPage.submitLeadForm(leadName, leadEmail)

});


test('Não deve cadastrar com e-mail sem @', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()
  await ladingPage.submitLeadForm('Luana Beatriz', 'beaqa.com.br')

  await ladingPage.alertHaveText('Email incorreto')

});

test('Não deve cadastrar com e-mail sem domínio', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()
  await ladingPage.submitLeadForm('Luana Beatriz', 'luana@')
 await ladingPage.alertHaveText('Email incorreto')
});
test('Não deve cadastrar com e-mail sem usuário', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()
  await ladingPage.submitLeadForm('Luana Beatriz', '@dominio.com')
 await ladingPage.alertHaveText('Email incorreto')
});

test('Não deve cadastrar com caracteres especiais inválidos', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()
  await ladingPage.submitLeadForm('Luana Beatriz', 'luana@@dominio.com')
 await ladingPage.alertHaveText('Email incorreto')
});

test('Não deve cadastrar com nome vazio', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()

  // Teste com nome vazio
  await ladingPage.submitLeadForm('', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('Não deve cadastrar com nome contendo apenas espaços', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()

  // Teste com nome contendo apenas espaços
  await ladingPage.submitLeadForm('   ', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Nome obrigatório')
});

test('Não deve cadastrar com nome contendo caracteres especiais', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()

  // Teste com nome contendo caracteres especiais
  await ladingPage.submitLeadForm('Luan@ Beatriz!', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Nome inválido')
});

test('Deve cadastrar com nome válido', async ({ page }) => {


  await ladingPage.visit()

  await ladingPage.openLeadModal()

  // Teste com nome válido
  await ladingPage.submitLeadForm('Luana Beatriz', 'luana@dominio.com')
  await expect(page.locator('.alert')).not.toHaveText('Nome obrigatório')
  await expect(page.locator('.alert')).not.toHaveText('Nome inválido')
});