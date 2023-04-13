import {BuyEnergyPage} from "../POMs/buyEnergyPage";
import {energyData} from "../../fixtures/energyValues";
describe('Buy Energy Tests', () => {
  const buyEnergyPage = new BuyEnergyPage()
  beforeEach(()=>{
    cy.visit('/Energy/Buy')
    buyEnergyPage.clickRestButton()
  })
  it('should show correct values in the energy table', () => {
    const energyTypes = energyData.map(a => a.name)
    //Loop over all energy types in the table
    energyTypes.forEach((name)=>{
      //use that name to get the rest of the information about the energy
      const [rowData] = energyData.filter(data => data.name === name)
      //check each row for that the dataset matches the values in the
      buyEnergyPage.getCellFromRow(rowData.name,0).should('contain', rowData.name)
      buyEnergyPage.getCellFromRow(rowData.name,1).should('contain', rowData.price)
      buyEnergyPage.getCellFromRow(rowData.name,2).should('contain', rowData.amount)
    })
  })

  it('should be able to buy an amount of units', ()=>{
    const energyType = 'Oil'
    const units = 10
    buyEnergyPage.inputUnits(energyType, units)
    buyEnergyPage.clickBuyButton(energyType)
    cy.get('.well').should('contain.text', `Thank you for your purchase of ${units} units of ${energyType}`)
        .and('contain.text',`There are now 10 units of ${energyType} left in our stores.`)
  })

  it('should update Quantity column after purchase',()=>{
    const energyType = 'Electricity'
    const units = 22
    buyEnergyPage.buyUnits(energyType, units)
    cy.get('a').contains('Buy more').click()
    buyEnergyPage.getCellFromRow(energyType,2).should('contain.text','4300')
  })

  it('should hide input field for values less than 0', ()=>{
    buyEnergyPage.getCellFromRow('Nuclear',3).should('have.text','Not Available')
    buyEnergyPage.buyUnits('Oil', '20')
    buyEnergyPage.clickBuyMoreButton()
    buyEnergyPage.getCellFromRow('Oil',3).should('have.text','Not Available')
  })
})