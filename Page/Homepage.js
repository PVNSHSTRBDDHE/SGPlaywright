const{expect}=require("@playwright/test")

class HomeLogoutpage
{

constructor (page)
{

this.page=page
this.UserInstaname="//span[text()='PVN SHSTRBDDHE😉']"
this.MoreButton="svg[aria-label='Settings']"
this.logoutbutton="//span[contains(text(),'Log out')]"
this.messagebutton="//span[contains(text(),'Messages')]"

}

//async VerifyInstaProfileName()
//{
//await expect(this.page.locator(this.UserInstaname)).toBeVisible();

//}

async LogoutFromHomepage()
{

await this.page.click(this.MoreButton)
await this.page.click(this.logoutbutton)

}

async Messagebuttonclick()
{
await this.page.click(this.messagebutton)
}



}

module.exports=HomeLogoutpage;