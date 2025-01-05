// @ts-check
const { test, expect } = require('@playwright/test');

test('Deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: 'Aperte o play... se tiver coragem' }).click()

expect(page.getByTestId('modal').getByRole('heading')).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Luana Beatriz')
  await page.getByPlaceholder('Informe seu email').fill('luanabeaqa@teste.com')

  await page.getByText('Quero entrar na fila!').click()

await expect(page.locator('.toast')).toHaveText('Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!')
  await page.waitForTimeout(10000)
});

test('Não deve cadastrar com email incorreto', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: 'Aperte o play... se tiver coragem' }).click()

expect(page.getByTestId('modal').getByRole('heading')).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Luana Beatriz')
  await page.getByPlaceholder('Informe seu email').fill('luanabeaqa.com.br')

  await page.getByText('Quero entrar na fila!').click()

await expect(page.locator('.alert')).toHaveText('Email incorreto')
  await page.waitForTimeout(10000)
});

test('Não deve cadastrar com campo nome vazio', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: 'Aperte o play... se tiver coragem' }).click()

expect(page.getByTestId('modal').getByRole('heading')).toHaveText('Fila de espera')


  await page.getByPlaceholder('Informe seu email').fill('luanabeaqa@teste.com.br')

  await page.getByText('Quero entrar na fila!').click()

await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
  await page.waitForTimeout(10000)
});

test('Não deve cadastrar com campo email vazio', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('button', { name: 'Aperte o play... se tiver coragem' }).click()

expect(page.getByTestId('modal').getByRole('heading')).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Luana Beatriz')


  await page.getByText('Quero entrar na fila!').click()


  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
  await page.waitForTimeout(10000)
});