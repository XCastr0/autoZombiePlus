// @ts-check
const { test, expect } = require('@playwright/test');
const {LadinPage} =require('./pages/landingPage')


test('Deve cadastrar um lead na fila de espera', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()

  await ladinPage.submitLeadForm('Luana Beatriz', 'beaqa@gmail.com.br')

});


test('Não deve cadastrar com e-mail sem @', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()
  await ladinPage.submitLeadForm('Luana Beatriz', 'beaqa.com.br')

  await ladinPage.alertHaveText('Email incorreto')

});

test('Não deve cadastrar com e-mail sem domínio', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()
  await ladinPage.submitLeadForm('Luana Beatriz', 'luana@')
 await ladinPage.alertHaveText('Email incorreto')
});
test('Não deve cadastrar com e-mail sem usuário', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()
  await ladinPage.submitLeadForm('Luana Beatriz', '@dominio.com')
 await ladinPage.alertHaveText('Email incorreto')
});

test('Não deve cadastrar com caracteres especiais inválidos', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()
  await ladinPage.submitLeadForm('Luana Beatriz', 'luana@@dominio.com')
 await ladinPage.alertHaveText('Email incorreto')
});

test('Não deve cadastrar com nome vazio', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()

  // Teste com nome vazio
  await ladinPage.submitLeadForm('', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('Não deve cadastrar com nome contendo apenas espaços', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()

  // Teste com nome contendo apenas espaços
  await ladinPage.submitLeadForm('   ', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Nome obrigatório')
});

test('Não deve cadastrar com nome contendo caracteres especiais', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()

  // Teste com nome contendo caracteres especiais
  await ladinPage.submitLeadForm('Luan@ Beatriz!', 'luana@dominio.com')
  await expect(page.locator('.alert')).toHaveText('Nome inválido')
});

test('Deve cadastrar com nome válido', async ({ page }) => {
  const ladinPage = new LadinPage(page)

  await ladinPage.visit()

  await ladinPage.openLeadModal()

  // Teste com nome válido
  await ladinPage.submitLeadForm('Luana Beatriz', 'luana@dominio.com')
  await expect(page.locator('.alert')).not.toHaveText('Nome obrigatório')
  await expect(page.locator('.alert')).not.toHaveText('Nome inválido')
});