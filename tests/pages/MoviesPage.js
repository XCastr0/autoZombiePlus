const {expect} = require('@playwright/test')

export class MoviesPage{
    constructor(page){
        this.page=page
    }
    async isLoggerIn(){
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL(/.*admin/)
            }
   async create(title,overview,company, release_year){
  await  this.page.locator('[href$="register"]').click()

  await  this.page.getByLabel('Titulo do filme').fill(title)
  await  this.page.getByLabel('Sinopse').fill(overview)
   }
}