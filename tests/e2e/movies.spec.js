const { test, expect } = require('@playwright/test');
const { faker} = require('@faker-js/faker');
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
test('Deve cadastrar com sucesso um novo filme',async ({page})=>{
    await loginPage.visit()
    await loginPage.submit('admin@zombieplus.com','pwd123')
    await moviesPage.isLoggerIn()

    await moviesPage.create('Nome do filme', 'Teste', 'Empresa', '2023')
})