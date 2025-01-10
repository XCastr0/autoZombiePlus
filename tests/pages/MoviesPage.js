const {expect} = require('@playwright/test')

export class MoviesPage{
    constructor(page){
        this.page=page
    }
    async isLoggerIn(){
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL(/.*admin/)
            }
}