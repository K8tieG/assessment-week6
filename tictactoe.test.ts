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
    
});

// My Tests 
// Check that clicking the upper right square adds an X to the square.

test ('Check clicking the upper right square adds an X to the square', async function(){
 // let placePiece = await driver.findElement(By.id('cell-2')).click()
    // placePiece.sendKeys('X\n')
    // await placePiece.click()
    //    let placePiece = await driver.findElement(By.xpath("//table[@id= 'game-board']//td[2]"))
    // let placePiece1 = await driver.findElement(By.id('#cell-2'))
    // let placePiece1 = await driver.findElement(By.xpath("//table/td[2]"))
    let placePiece1 = await driver.findElement(By.id('cell-2'))
    placePiece1.click();
    // await placePiece1.sendKeys('X\n')---not necessary because you it's just a click event

    await driver.sleep(5000)
    expect(await placePiece1.getText()).toEqual('X')//how to get text from an element 

})


test ('Check that clicking the upper left square adds an X to the square.', async function(){
    let placePiece2 = await driver.findElement(By.id('cell-0'));
    placePiece2.click();
    // await placePiece2.sendKeys('X\n')

    expect(await placePiece2.getText()).toEqual('X');

})

test ('Check that clicking the lower right square adds an X to the square.', async function(){
    let placePiece3 = await driver.findElement(By.id('cell-7'));
    placePiece3.click();

    expect(await placePiece3.getText()).toEqual('X');

})

//Erics's Tests
test ('computer moves, adds an uppercase O to a square after user1 clicks', async function(){
    //restart game
    driver.navigate().refresh();
    await driver.sleep(2000);

    //click start game 
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    //grab refs to squares we will click
    const upperLeftSquare = await driver.findElement(By.id('cell-0'));
    const upperRightSquare = await driver.findElement(By.id('cell-2'));
    const middleCenterSquare = await driver.findElement(By.id('cell-4'));

    //play turns by clicking
    await upperLeftSquare.click();
    await driver.sleep(2000)

    await upperLeftSquare.click();
    await driver.sleep(2000)

    await upperLeftSquare.click();
    await driver.sleep(2000)

    // determine the amount of Xs and Os
    const xMoves = await driver.findElements(By.xpath('//td[text()="X"]'))
    const oMoves = await driver.findElements(By.xpath('//td[text()="O"]'))

    //compare amount of both players move
    expect(xMoves.length === oMoves.length).toBeTruthy();

})


   



    

    
   

