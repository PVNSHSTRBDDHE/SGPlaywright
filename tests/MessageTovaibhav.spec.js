const {test}=require("@playwright/test");
const instaloginPage=require("../Page/InstaLogin");
const HomeLogoutpage=require("../Page/Homepage")
const Messagepage=require("../Page/MessagePage");

test('Verifyuserisloginintheapplication',async({page})=>

{
    await page.goto("https://www.instagram.com/")
    const LG=new instaloginPage(page)
    await LG.Logintoapplication()
    await page.waitForTimeout(20000);


    const HPB=new HomeLogoutpage(page)
    await HPB.Messagebuttonclick()


    const MP= new Messagepage(page)
    await MP.MessageWritingToVaibs()
    await page.keyboard.down('Enter')
    await page.keyboard.up('Enter')
    await page.waitForTimeout(10000);
   
}
)





 
 