import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

// Check that clicking the upper right square adds an X to the square.

    // let placePiece = await driver.findElement(By.id('cell-2')).click()
    // placePiece.sendKeys('X\n')
    // await placePiece.click()
    //    let placePiece = await driver.findElement(By.xpath("//table[@id= 'game-board']//td[2]"))
    // let placePiece1 = await driver.findElement(By.id('#cell-2'))
    // let placePiece1 = await driver.findElement(By.xpath("//table/td[2]"))
    let placePiece1 = await driver.findElement(By.id('cell-2'))
    await placePiece1.click()
    await placePiece1.sendKeys('X\n')

//form[1]

// Check that clicking the upper left square adds an X to the square.

    let placePiece2 = await driver.findElement(By.id('cell-0'))
    await placePiece2.click()
    await placePiece2.sendKeys('X\n')


    // Check that clicking the lower right square adds an X to the square.

    let placePiece3 = await driver.findElement(By.id('cell-7'))
    await placePiece3.click()
    await placePiece3.sendKeys('X\n')
    
});


