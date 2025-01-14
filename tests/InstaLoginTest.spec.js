const {test} =require("@playwright/test");
const instaloginPage= require("../Page/InstaLogin")
const HomeLogoutpage=require("../Page/Homepage")


test('LoginToInstagram', async({page}) =>
{
  await page.goto("https://www.instagram.com/")
  const IG =new  instaloginPage(page)
  await IG.Logintoapplication()
       
  await page.waitForTimeout(20000);

 

 const HL= new HomeLogoutpage(page)
  //await HL.VerifyInstaProfileName()
  await HL.LogoutFromHomepage()

} );














