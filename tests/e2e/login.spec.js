const { test,expect } = require('@playwright/test');
const {LoginPage} =require('../pages/loginPage')
const {Toast} =require('../pages/components')

let loginPage
let toast
test.beforeEach(async({page})=>{
loginPage = new LoginPage(page)
toast = new Toast(page)
})

test('Deve logar como administrador',async ({page})=> {
 await loginPage.visit()
 await loginPage.submit('admin@zombieplus.com','pwd123')
 await loginPage.isLoggerIn()
})

test('Não deve logar como senha incorreta',async ({page})=> {
    await loginPage.visit()
    await loginPage.submit('admin@zombieplus.com','abc123')

  const message = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
  await toast.haveText(message)
   })