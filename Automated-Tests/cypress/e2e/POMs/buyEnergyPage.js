export class BuyEnergyPage{
    // ------- Locators ---------
    getResetButton = () => cy.get('input[name="Reset"]')
    getBuyMoreButton = () => cy.get('a').contains('Buy more')
    getTableRowFromEnergy = (energy) => cy.get('td').contains(energy).parent()

    getCellFromRow = (energy,index) => this.getTableRowFromEnergy(energy).find('td').eq(index)
    getBuyButton = (energy) => this.getTableRowFromEnergy(energy).find('input').contains('Buy')
    inputUnits = (energy, units) => this.getTableRowFromEnergy(energy).find('input[name="energyType.AmountPurchased"]').clear().type(units)


    // ----- Methods --------
    clickRestButton = () => this.getResetButton().click()
    clickBuyButton = (energy) => this.getBuyButton(energy).click()
    clickBuyMoreButton = () => this.getBuyMoreButton().click()
    buyUnits(energyType, units){
        this.inputUnits(energyType, units)
        this.clickBuyButton(energyType)
    }
}
