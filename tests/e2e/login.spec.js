const { test,expect } = require('@playwright/test');
const {LoginPage} =require('../pages/loginPage')
const {Toast} =require('../pages/components')
const {MoviesPage} =require('../pages/MoviesPage')

let loginPage
let toast
let moviesPage

test.beforeEach(async({page})=>{
loginPage = new LoginPage(page)
toast = new Toast(page)
moviesPage = new MoviesPage(page)
})

test('Deve logar como administrador',async ({page})=> {
 await loginPage.visit()
 await loginPage.submit('admin@zombieplus.com','pwd123')
 await moviesPage.isLoggerIn()
})

test('Não deve logar como senha incorreta',async ({page})=> {
    await loginPage.visit()
    await loginPage.submit('admin@zombieplus.com','abc123')

  const message = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
  await toast.haveText(message)
   })
   test('Não deve logar quando email é vazio',async ({page})=> {
    await loginPage.visit()
    await loginPage.submit('','abc123')

  await loginPage.alertHaveText('Campo obrigatório')
   })

   test('Não deve logar quando senha é vazio',async ({page})=> {
    await loginPage.visit()
    await loginPage.submit('admin@zombieplus.com','')

  await loginPage.alertHaveText('Campo obrigatório')
   })
   test('Não deve logar quando nenhum campo é preenchido',async ({page})=> {
    await loginPage.visit()
    await loginPage.submit('','')

  await loginPage.alertHaveText('Campo obrigatório','Campo obrigatório')
   })